"use client";

import { useState, useRef } from "react";
import { Upload, Loader2, Copy, Download, FileAudio, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const languages = [
  "Auto-detect",
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Chinese",
  "Arabic",
  "Portuguese",
  "Hindi",
  "Korean",
];

const DEMO_TRANSCRIPT = `This is a demo transcription. When connected to our AI backend, your actual audio will be transcribed here with timestamps and speaker detection. The transcription supports 50+ languages with 99% accuracy.`;

export default function Transcriber() {
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState(languages[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedTypes =
    ".mp3,.wav,.m4a,.ogg,.webm,.mp4,.mov";

  const handleFile = (f: File) => {
    if (f.size > 25 * 1024 * 1024) {
      alert("File must be under 25MB");
      return;
    }
    setFile(f);
    setResult("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const handleTranscribe = () => {
    if (!file) return;
    setLoading(true);
    setResult("");
    setTimeout(() => {
      setLoading(false);
      setResult(DEMO_TRANSCRIPT);
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcription.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative">
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-sm px-4 py-3 rounded-lg shadow-lg animate-pulse">
          Demo mode — transcription will be connected soon.
        </div>
      )}

      <Card className="p-6">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Upload Audio or Video
            </label>
            <div
              className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {file ? (
                <div className="flex items-center justify-center gap-3">
                  <FileAudio className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-700 font-medium">
                    {file.name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      setResult("");
                    }}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">
                    Drag and drop or click to browse
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    MP3, WAV, M4A, OGG, WebM, MP4, MOV &bull; Max 25MB
                  </p>
                </>
              )}
            </div>
            <input
              ref={inputRef}
              type="file"
              accept={acceptedTypes}
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Language
            </label>
            <select
              className="w-full border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              500 tokens per transcription
            </span>
            <Button onClick={handleTranscribe} disabled={!file || loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Transcribing...
                </>
              ) : (
                "Transcribe"
              )}
            </Button>
          </div>

          {result && (
            <div className="space-y-3">
              <textarea
                readOnly
                className="w-full border border-slate-200 rounded-lg p-3 text-sm text-slate-700 bg-slate-50 resize-none"
                rows={6}
                value={result}
              />
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-1" />
                  {copied ? "Copied!" : "Copy Text"}
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-1" />
                  Download .txt
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
