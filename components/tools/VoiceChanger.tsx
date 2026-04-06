"use client";

import { useState, useRef, useCallback } from "react";
import {
  Upload,
  Mic,
  Square,
  Play,
  Loader2,
  Download,
  FileAudio,
  X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

function createImpulseResponse(
  ctx: OfflineAudioContext,
  duration: number,
  decay: number
): AudioBuffer {
  const length = ctx.sampleRate * duration;
  const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

function encodeWav(buffer: AudioBuffer): Blob {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const length = buffer.length * numChannels * 2 + 44;
  const out = new ArrayBuffer(length);
  const view = new DataView(out);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++)
      view.setUint8(offset + i, str.charCodeAt(i));
  };

  writeString(0, "RIFF");
  view.setUint32(4, length - 8, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, buffer.length * numChannels * 2, true);

  let offset = 44;
  for (let i = 0; i < buffer.length; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, buffer.getChannelData(ch)[i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([out], { type: "audio/wav" });
}

async function getAudioBuffer(
  source: File | string
): Promise<AudioBuffer> {
  const audioCtx = new AudioContext();
  let arrayBuffer: ArrayBuffer;

  if (source instanceof File) {
    arrayBuffer = await source.arrayBuffer();
  } else {
    const res = await fetch(source);
    arrayBuffer = await res.arrayBuffer();
  }

  const decoded = await audioCtx.decodeAudioData(arrayBuffer);
  audioCtx.close();
  return decoded;
}

export default function VoiceChanger() {
  const [file, setFile] = useState<File | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [pitch, setPitch] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [reverb, setReverb] = useState(false);
  const [echo, setEcho] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const processedBlobRef = useRef<Blob | null>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setRecordedUrl(null);
    setProcessedUrl(null);
    setError(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setRecordedUrl(URL.createObjectURL(blob));
        setFile(null);
        stream.getTracks().forEach((t) => t.stop());
      };
      recorder.start();
      mediaRecorderRef.current = recorder;
      setRecording(true);
      setProcessedUrl(null);
      setError(null);
    } catch {
      alert("Microphone access denied. Please allow microphone access to record.");
    }
  }, []);

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleApply = async () => {
    setLoading(true);
    setProcessedUrl(null);
    setError(null);

    try {
      const source = file || recordedUrl;
      if (!source) return;

      const inputBuffer = await getAudioBuffer(source);

      // Calculate output duration based on speed/pitch
      // playbackRate combines speed and pitch: speed * 2^(pitch/12)
      const pitchRate = Math.pow(2, pitch / 12);
      const combinedRate = speed * pitchRate;
      const outputDuration = inputBuffer.duration / combinedRate;

      // Add extra time for reverb/echo tails
      const tailTime = reverb ? 2.5 : echo ? 1.0 : 0;
      const totalDuration = outputDuration + tailTime;

      const offlineCtx = new OfflineAudioContext(
        inputBuffer.numberOfChannels,
        Math.ceil(totalDuration * inputBuffer.sampleRate),
        inputBuffer.sampleRate
      );

      const sourceNode = offlineCtx.createBufferSource();
      sourceNode.buffer = inputBuffer;
      sourceNode.playbackRate.value = combinedRate;

      let lastNode: AudioNode = sourceNode;

      // Reverb
      if (reverb) {
        const convolver = offlineCtx.createConvolver();
        convolver.buffer = createImpulseResponse(offlineCtx, 2.5, 2.0);
        const dry = offlineCtx.createGain();
        dry.gain.value = 0.7;
        const wet = offlineCtx.createGain();
        wet.gain.value = 0.3;
        const merger = offlineCtx.createGain();

        lastNode.connect(dry);
        lastNode.connect(convolver);
        convolver.connect(wet);
        dry.connect(merger);
        wet.connect(merger);
        lastNode = merger;
      }

      // Echo
      if (echo) {
        const delay = offlineCtx.createDelay(1.0);
        delay.delayTime.value = 0.3;
        const feedback = offlineCtx.createGain();
        feedback.gain.value = 0.4;
        const dry = offlineCtx.createGain();
        dry.gain.value = 1.0;
        const merger = offlineCtx.createGain();

        lastNode.connect(dry);
        lastNode.connect(delay);
        delay.connect(feedback);
        feedback.connect(delay);
        delay.connect(merger);
        dry.connect(merger);
        lastNode = merger;
      }

      lastNode.connect(offlineCtx.destination);
      sourceNode.start(0);

      const renderedBuffer = await offlineCtx.startRendering();
      const wavBlob = encodeWav(renderedBuffer);

      processedBlobRef.current = wavBlob;
      setProcessedUrl(URL.createObjectURL(wavBlob));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to process audio");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!processedBlobRef.current) return;
    const url = URL.createObjectURL(processedBlobRef.current);
    const a = document.createElement("a");
    a.href = url;
    a.download = "voice-changed.wav";
    a.click();
    URL.revokeObjectURL(url);
  };

  const hasInput = file || recordedUrl;

  return (
    <div className="relative">
      {error && (
        <div className="fixed top-20 right-4 z-50 bg-red-600 text-white text-sm px-4 py-3 rounded-lg shadow-lg">
          {error}
        </div>
      )}

      <Card className="p-6">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Upload Audio or Record
            </label>

            {!recording && !recordedUrl && !file && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-orange-400 transition-colors"
                  onClick={() => inputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Upload file</p>
                  <p className="text-xs text-slate-400 mt-1">MP3, WAV, M4A</p>
                </div>
                <button
                  className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-400 transition-colors"
                  onClick={startRecording}
                >
                  <Mic className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Record audio</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Uses your microphone
                  </p>
                </button>
              </div>
            )}

            {recording && (
              <div className="border border-red-200 bg-red-50 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-red-700">
                    Recording...
                  </span>
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 bg-red-400 rounded-full animate-pulse"
                      style={{
                        height: `${12 + Math.random() * 24}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={stopRecording}
                >
                  <Square className="h-4 w-4 mr-1" />
                  Stop Recording
                </Button>
              </div>
            )}

            {(file || recordedUrl) && !recording && (
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <FileAudio className="h-5 w-5 text-orange-600" />
                  <span className="text-sm text-slate-700 font-medium flex-1">
                    {file ? file.name : "Recorded audio"}
                  </span>
                  {recordedUrl && (
                    <audio controls src={recordedUrl} className="max-w-xs" />
                  )}
                  <button
                    onClick={() => {
                      setFile(null);
                      setRecordedUrl(null);
                      setProcessedUrl(null);
                    }}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            <input
              ref={inputRef}
              type="file"
              accept=".mp3,.wav,.m4a"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Pitch: {pitch > 0 ? "+" : ""}
                {pitch} semitones
              </label>
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                value={pitch}
                onChange={(e) => setPitch(parseInt(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>-12</span>
                <span>0</span>
                <span>+12</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Speed: {speed.toFixed(1)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>0.5x</span>
                <span>2.0x</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reverb}
                onChange={(e) => setReverb(e.target.checked)}
                className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm text-slate-700">Reverb</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={echo}
                onChange={(e) => setEcho(e.target.checked)}
                className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm text-slate-700">Echo</span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              200 tokens per transformation
            </span>
            <Button onClick={handleApply} disabled={!hasInput || loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Apply Effects
                </>
              )}
            </Button>
          </div>

          {processedUrl && (
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <div className="flex items-center justify-between">
                <audio controls className="w-full max-w-md" src={processedUrl} />
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-4 shrink-0"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
