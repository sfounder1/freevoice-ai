import type { Metadata } from "next";
import { tools } from "@/lib/tools-data";
import ToolCard from "@/components/tools/ToolCard";

export const metadata: Metadata = {
  title: "All Voice Tools",
  description:
    "Browse all AI voice tools — text-to-speech, transcription, voice changer, and more. No signup required.",
  openGraph: {
    title: "All Voice Tools — FreeVoice.ai",
    description:
      "Browse all AI voice tools — text-to-speech, transcription, voice changer, and more.",
    url: "https://freevoice.ai/tools",
  },
  alternates: { canonical: "https://freevoice.ai/tools" },
};

export default function ToolsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900">All Voice Tools</h1>
          <p className="mt-3 text-lg text-slate-500">
            Pick a tool and start using it. No signup required.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
