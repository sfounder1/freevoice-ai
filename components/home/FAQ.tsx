"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is FreeVoice.ai really free?",
    answer:
      "Yes, you get 5,000 tokens daily. No signup required. Paid plans are available for heavy users who need more capacity.",
  },
  {
    question: "What are tokens?",
    answer:
      "Tokens are our universal credit system. Each tool costs a small number of tokens per use. Free users get 5,000 tokens refreshed daily.",
  },
  {
    question: "What voice AI tools do you offer?",
    answer:
      "Text-to-speech with 50+ voices, audio transcription, voice changer, and more tools launching regularly.",
  },
  {
    question: "Do you offer AI voice agents for businesses?",
    answer:
      "Yes. Our AI receptionist answers calls 24/7, books appointments, and handles FAQs for your business. Starting at $199/mo.",
  },
  {
    question: "Do I need to sign up?",
    answer:
      "No. You can use tools immediately. Signing up unlocks higher daily token limits and usage history.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
