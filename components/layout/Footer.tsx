import Link from "next/link";
import { AudioWaveform } from "lucide-react";

export default function Footer() {
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} FreeVoice.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
