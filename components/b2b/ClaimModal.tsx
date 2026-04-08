"use client";

import { useState } from "react";

interface ClaimModalProps {
  children: React.ReactNode;
  className?: string;
}

export default function ClaimModal({ children, className = "" }: ClaimModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "462c9f53-3c77-4871-9cbc-bf728f4e4005",
          name,
          email,
          subject: "Claim First Month Free — Auto Insurance AI Voice Agent",
          from_name: "FreeVoice.ai",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl leading-none"
            >
              &times;
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <p className="text-2xl font-bold text-slate-900 mb-2">
                  You&apos;re in!
                </p>
                <p className="text-slate-500">
                  We&apos;ll reach out within 24 hours to get your AI agent set up.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 text-center mb-1">
                  Claim Your Free Month
                </h3>
                <p className="text-sm text-slate-500 text-center mb-6">
                  Drop your info and we&apos;ll get you started within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 rounded-lg bg-orange-600 text-white font-medium text-sm hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Claim Free Month \u2192"}
                  </button>
                </form>
                <p className="text-xs text-slate-400 text-center mt-4">
                  First month $0. Then $475/mo. Cancel anytime.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
