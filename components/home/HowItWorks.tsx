import { MousePointerClick, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "1. Pick a Tool",
    description: "Browse our collection of AI voice tools and choose the one you need.",
  },
  {
    icon: Sparkles,
    title: "2. Use It Free",
    description: "No signup required. Just paste your text, upload audio, or hit record.",
  },
  {
    icon: Download,
    title: "3. Get Results Instantly",
    description: "Download your audio, transcript, or processed file in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-orange-50 rounded-xl mb-4">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
