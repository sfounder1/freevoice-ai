import {
  Mic,
  FileAudio,
  Wand2,
  Copy,
  AudioLines,
  StickyNote,
  Podcast,
  PenLine,
  Languages,
  Users,
  Video,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type ToolStatus = "active" | "coming-soon";

export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  tokenCost: number;
  status: ToolStatus;
}

export const tools: Tool[] = [
  {
    name: "Text-to-Speech",
    slug: "text-to-speech",
    description: "Convert text to natural-sounding speech with 50+ AI voices",
    icon: Mic,
    tokenCost: 100,
    status: "active",
  },
  {
    name: "Speech-to-Text",
    slug: "transcribe",
    description: "Transcribe audio and video files to text with 99% accuracy",
    icon: FileAudio,
    tokenCost: 500,
    status: "active",
  },
  {
    name: "Voice Changer",
    slug: "voice-changer",
    description: "Transform your voice with pitch, speed, and tone controls",
    icon: Wand2,
    tokenCost: 200,
    status: "active",
  },
  {
    name: "Voice Cloning",
    slug: "voice-cloning",
    description: "Clone any voice from a 10-second audio sample",
    icon: Copy,
    tokenCost: 1000,
    status: "coming-soon",
  },
  {
    name: "Noise Removal",
    slug: "noise-removal",
    description: "Remove background noise from any audio recording",
    icon: AudioLines,
    tokenCost: 200,
    status: "coming-soon",
  },
  {
    name: "Voice Notes",
    slug: "voice-notes",
    description: "Speak your thoughts, get an organized summary",
    icon: StickyNote,
    tokenCost: 300,
    status: "coming-soon",
  },
  {
    name: "Podcast Enhancer",
    slug: "podcast-enhancer",
    description: "Studio-quality audio from any podcast recording",
    icon: Podcast,
    tokenCost: 500,
    status: "coming-soon",
  },
  {
    name: "Voice-to-Blog",
    slug: "voice-to-blog",
    description: "Turn voice recordings into polished blog posts",
    icon: PenLine,
    tokenCost: 400,
    status: "coming-soon",
  },
  {
    name: "Audio Translator",
    slug: "audio-translator",
    description: "Translate audio between 50+ languages",
    icon: Languages,
    tokenCost: 600,
    status: "coming-soon",
  },
  {
    name: "Meeting Transcriber",
    slug: "meeting-transcriber",
    description: "Transcribe and summarize meetings automatically",
    icon: Users,
    tokenCost: 500,
    status: "coming-soon",
  },
  {
    name: "AI Voiceover",
    slug: "ai-voiceover",
    description: "Professional voiceovers for videos and presentations",
    icon: Video,
    tokenCost: 300,
    status: "coming-soon",
  },
  {
    name: "Accent Converter",
    slug: "accent-converter",
    description: "Convert speech between accents naturally",
    icon: Globe,
    tokenCost: 400,
    status: "coming-soon",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getActiveTools(): Tool[] {
  return tools.filter((t) => t.status === "active");
}

export function getComingSoonTools(): Tool[] {
  return tools.filter((t) => t.status === "coming-soon");
}
