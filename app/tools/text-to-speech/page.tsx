import type { Metadata } from "next";
import TextToSpeech from "@/components/tools/TextToSpeech";
import RelatedTools from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Free AI Text-to-Speech Online",
  description:
    "Convert any text to natural-sounding speech using AI. 50+ voices, multiple languages. No signup required.",
  openGraph: {
    title: "Free AI Text-to-Speech Online — FreeVoice.ai",
    description:
      "Convert any text to natural-sounding speech using AI. 50+ voices, multiple languages.",
    url: "https://freevoice.ai/tools/text-to-speech",
  },
  alternates: { canonical: "https://freevoice.ai/tools/text-to-speech" },
};

export default function TextToSpeechPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Free AI Text-to-Speech
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Convert any text to natural-sounding speech using AI. 50+ voices,
            multiple languages. No signup required.
          </p>
        </div>

        <TextToSpeech />

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              How AI Text-to-Speech Works
            </h2>
            <p className="text-slate-600 mb-3">
              AI text-to-speech technology converts written text into
              natural-sounding audio using deep learning models. These models are
              trained on thousands of hours of human speech to reproduce natural
              intonation, rhythm, and emotion.
            </p>
            <p className="text-slate-600">
              Modern TTS systems go beyond simple word-by-word synthesis. They
              understand context, sentence structure, and even punctuation to
              produce audio that sounds remarkably human. The result is speech
              that&apos;s nearly indistinguishable from a real person.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                50+ AI voices across multiple languages and accents
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Multiple languages including English, Spanish, Japanese, and more
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Adjustable speech speed from 0.5x to 2.0x
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                Download as MP3 for use anywhere
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">&#10003;</span>
                No watermark on paid plans
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
                  title: "Content Creation",
                  desc: "Create voiceovers for YouTube videos, TikToks, and podcasts without hiring voice talent.",
                },
                {
                  title: "Accessibility",
                  desc: "Make written content accessible to visually impaired users or anyone who prefers audio.",
                },
                {
                  title: "Language Learning",
                  desc: "Hear proper pronunciation in multiple languages to improve your speaking skills.",
                },
                {
                  title: "Voiceovers",
                  desc: "Generate professional-sounding voiceovers for presentations, ads, and training materials.",
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

          <RelatedTools currentSlug="text-to-speech" />
        </div>
      </div>
    </div>
  );
}
