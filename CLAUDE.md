# FreeVoice.ai

## What This Is
A freemium AI voice tools platform. Every AI voice tool, completely free. Users get daily free tokens; paid plans unlock more usage with roll-over credits. We also offer B2B AI voice agents for small businesses.

## Tech Stack
Next.js 14 (App Router), TypeScript, Tailwind CSS, deployed on Netlify.

## Current Phase
Phase 0 — static website with demo tool UIs. No auth, no database, no payments yet. Tools have full UI but mock/client-side functionality only.

## Future Stack (not built yet)
Supabase (DB + Auth), Stripe (payments), Kokoro TTS API, OpenAI Whisper API, FFmpeg for audio processing.

## URL Structure
- / — Landing page
- /tools — Tool discovery grid
- /tools/[slug] — Individual tool pages
- /for-businesses — B2B voice agent sales page
- /pricing — Pricing tiers (display only)

## Design System
- Font: Inter (via next/font/google)
- Primary color: Orange-600 (#EA580C), gradient from #F97316 to #EA580C
- Secondary color: White
- Dark background sections: Slate-900/950
- Cards: White with subtle border, rounded-xl, shadow-sm
- Keep it clean and modern. No glassmorphism. No over-design.

## Key Differentiators
- Roll-over credits (unused credits carry forward)
- Quality Guarantee / Refund on bad generation
- Draft Mode (preview at zero cost before full export)
- In-line editing (re-generate just one word, not the whole paragraph)
- Emotion Tags ([whisper], [angry], [sarcastic]) for expressive speech
- Noise-resilient voice cloning with Auto-Cleanup
- 100% transparent about data processing and privacy

## Key Patterns
- Every tool page lives at /tools/[slug]
- Use server components by default, client components only for interactivity
- Tool components that handle user input are client components ("use client")
- All tool metadata lives in lib/tools-data.ts

## Brand Assets
- Logo (icon): /public/logo.svg (512x512, orange gradient with white waveform bars)
- Logo (full with text): /public/logo-full.svg (800x200, icon + "FreeVoice.ai" text)
- Favicon: /app/icon.svg (32x32, orange gradient)
- Apple icon: /app/apple-icon.svg (180x180, orange gradient)
