"use client";

import { useState } from "react";
import { Play, Download, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const voices = [
  "Aria - Female, US English",
  "Marcus - Male, US English",
  "Sofia - Female, Spanish",
  "Liam - Male, British English",
  "Yuki - Female, Japanese",
  "Omar - Male, Arabic",
  "Emma - Female, Australian English",
  "James - Male, US English",
];

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(voices[0]);
  const [speed, setSpeed] = useState(1.0);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [toast, setToast] = useState(false);

  const handleGenerate = () => {
    if (!text.trim()) return;
    setLoading(true);
    setGenerated(false);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    }, 2000);
  };

  return (
    <div className="relative">
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-sm px-4 py-3 rounded-lg shadow-lg animate-pulse">
          Demo mode — audio generation will be connected soon.
        </div>
      )}

      <Card className="p-6">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Text
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              rows={5}
              placeholder="Type or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={5000}
            />
            <p className="mt-1 text-xs text-slate-400 text-right">
              {text.length}/5,000 characters
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Voice
              </label>
              <select
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
              >
                {voices.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
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
                className="w-full mt-2 accent-orange-600"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>0.5x</span>
                <span>2.0x</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              This tool costs 100 tokens per generation
            </span>
            <Button onClick={handleGenerate} disabled={!text.trim() || loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Generate Speech
                </>
              )}
            </Button>
          </div>

          {generated && (
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <div className="flex items-center justify-between">
                <audio controls className="w-full max-w-md">
                  <source src="" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <Button variant="outline" size="sm" className="ml-4 shrink-0">
                  <Download className="h-4 w-4 mr-1" />
                  Download MP3
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
