# FreeVoice.ai

## What This Is
A freemium AI voice tools platform. Every AI voice tool, completely free. Users get daily free tokens; paid plans unlock more usage. We also offer B2B AI voice agents for small businesses.

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
- Primary color: Blue-600 (#2563EB)
- Dark background sections: Slate-900/950
- Cards: White with subtle border, rounded-xl, shadow-sm
- Keep it clean and modern. No gradients. No glassmorphism. No over-design.

## Key Patterns
- Every tool page lives at /tools/[slug]
- Use server components by default, client components only for interactivity
- Tool components that handle user input are client components ("use client")
- All tool metadata lives in lib/tools-data.ts
