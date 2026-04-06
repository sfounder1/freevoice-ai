"use client";

import Link from "next/link";
import { useState } from "react";
import { AudioWaveform, X } from "lucide-react";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white">
              <AudioWaveform className="h-5 w-5 text-blue-500" />
              <span className="font-bold">FreeVoice.ai</span>
            </Link>
            <p className="mt-2 text-sm max-w-xs">
              Every AI voice tool, completely free. No signup required.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tools" className="hover:text-white transition-colors">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Business</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/for-businesses"
                    className="hover:text-white transition-colors"
                  >
                    AI Voice Agents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setShowContact(true)}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} FreeVoice.ai. All rights reserved.
        </div>
      </div>

      {/* Contact Popup */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowContact(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-8 max-w-sm mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              For Business Inquiries
            </h3>
            <a
              href="mailto:hello@freevoice.ai"
              className="text-blue-600 hover:underline text-lg"
            >
              hello@freevoice.ai
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}
