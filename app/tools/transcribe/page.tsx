import type { Metadata } from "next";
import Transcriber from "@/components/tools/Transcriber";
import RelatedTools from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Free AI Audio Transcription Online",
  description:
    "Transcribe audio and video files to text with 99% accuracy. Supports 50+ languages with speaker detection. No signup required.",
  openGraph: {
    title: "Free AI Audio Transcription Online — FreeVoice.ai",
    description:
      "Transcribe audio and video files to text with 99% accuracy. Supports 50+ languages.",
    url: "https://freevoice.ai/tools/transcribe",
  },
  alternates: { canonical: "https://freevoice.ai/tools/transcribe" },
};

export default function TranscribePage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Free AI Audio Transcription
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Transcribe audio and video files to text with 99% accuracy. Supports
            50+ languages with speaker detection. No signup required.
          </p>
        </div>

        <Transcriber />

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              How AI Transcription Works
            </h2>
            <p className="text-slate-600 mb-3">
              Our AI transcription engine uses state-of-the-art speech
              recognition models to convert audio into text. The system processes
              audio in real-time, identifying individual words, speaker changes,
              and even background context.
            </p>
            <p className="text-slate-600">
              The AI is trained on diverse audio sources — from crisp podcast
              recordings to noisy phone calls — ensuring accurate results
              regardless of audio quality. It handles accents, technical jargon,
              and multiple speakers with ease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                99% accuracy across 50+ languages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Speaker detection and labeling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Supports MP3, WAV, M4A, MP4, MOV, and more
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Copy to clipboard or download as .txt
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Files up to 25MB processed in seconds
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Meeting Notes",
                  desc: "Record your meetings and get instant transcripts with speaker labels and key points.",
                },
                {
                  title: "Podcast Production",
                  desc: "Generate transcripts for show notes, blog posts, and accessibility compliance.",
                },
                {
                  title: "Lecture Notes",
                  desc: "Never miss a detail — transcribe lectures and review them at your own pace.",
                },
                {
                  title: "Interview Processing",
                  desc: "Transcribe interviews for journalism, research, or hiring documentation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-slate-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <RelatedTools currentSlug="transcribe" />
        </div>
      </div>
    </div>
  );
}
