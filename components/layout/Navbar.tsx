"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, AudioWaveform } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Tools", href: "/tools" },
  { label: "B2B", href: "/for-businesses" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <AudioWaveform className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg text-slate-900">
              FreeVoice.ai
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/tools" size="sm">
              Get Started Free
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-600 hover:text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/tools" size="sm" className="w-full">
              Get Started Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
