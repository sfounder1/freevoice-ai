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

export default function VoiceChanger() {
  const [file, setFile] = useState<File | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [pitch, setPitch] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [reverb, setReverb] = useState(false);
  const [echo, setEcho] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [toast, setToast] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleFile = (f: File) => {
    setFile(f);
    setRecordedUrl(null);
    setProcessed(false);
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
      setProcessed(false);
    } catch {
      alert("Microphone access denied. Please allow microphone access to record.");
    }
  }, []);

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleApply = () => {
    setLoading(true);
    setProcessed(false);
    setTimeout(() => {
      setLoading(false);
      setProcessed(true);
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    }, 2000);
  };

  const hasInput = file || recordedUrl;

  return (
    <div className="relative">
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-sm px-4 py-3 rounded-lg shadow-lg animate-pulse">
          Demo mode — voice processing will be connected soon.
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
                  className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"
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
                  <FileAudio className="h-5 w-5 text-blue-600" />
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
                      setProcessed(false);
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
                className="w-full accent-blue-600"
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
                className="w-full accent-blue-600"
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
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Reverb</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={echo}
                onChange={(e) => setEcho(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
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

          {processed && (
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <div className="flex items-center justify-between">
                <audio controls className="w-full max-w-md">
                  <source src="" type="audio/mpeg" />
                </audio>
                <Button variant="outline" size="sm" className="ml-4 shrink-0">
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
