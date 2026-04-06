import type { Metadata } from "next";
import VoiceChanger from "@/components/tools/VoiceChanger";
import RelatedTools from "@/components/tools/RelatedTools";

export const metadata: Metadata = {
  title: "Free AI Voice Changer Online",
  description:
    "Transform your voice with pitch, speed, reverb, and echo controls. Upload audio or record directly. No signup required.",
  openGraph: {
    title: "Free AI Voice Changer Online — FreeVoice.ai",
    description:
      "Transform your voice with pitch, speed, reverb, and echo controls. Upload or record directly.",
    url: "https://freevoice.ai/tools/voice-changer",
  },
  alternates: { canonical: "https://freevoice.ai/tools/voice-changer" },
};

export default function VoiceChangerPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Free AI Voice Changer
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Transform your voice with pitch, speed, reverb, and echo controls.
            Upload audio or record directly from your browser. No signup
            required.
          </p>
        </div>

        <VoiceChanger />

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              How AI Voice Changing Works
            </h2>
            <p className="text-slate-600 mb-3">
              AI voice changing technology modifies the acoustic properties of
              recorded speech in real-time. By adjusting parameters like pitch,
              formant frequencies, and temporal characteristics, the AI can
              transform your voice while maintaining natural-sounding speech.
            </p>
            <p className="text-slate-600">
              Unlike simple pitch shifting, modern AI voice changers preserve
              speech clarity and intelligibility. The algorithms understand the
              structure of human speech and apply transformations that sound
              natural rather than robotic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">&#10003;</span>
                Pitch control from -12 to +12 semitones
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">&#10003;</span>
                Speed adjustment from 0.5x to 2.0x
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">&#10003;</span>
                Reverb and echo effects
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">&#10003;</span>
                Record directly from your browser
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">&#10003;</span>
                Upload MP3, WAV, or M4A files
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
                  desc: "Add unique character voices to your videos, podcasts, and streams.",
                },
                {
                  title: "Gaming",
                  desc: "Transform your voice for in-game communication and streaming entertainment.",
                },
                {
                  title: "Privacy",
                  desc: "Disguise your voice for anonymous recordings, voicemails, or online interactions.",
                },
                {
                  title: "Fun",
                  desc: "Create hilarious voice effects for pranks, social media, and messaging.",
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

          <RelatedTools currentSlug="voice-changer" />
        </div>
      </div>
    </div>
  );
}
