import type { Metadata } from "next";
import {
  Phone,
  CalendarCheck,
  MessageCircleQuestion,
  UserCheck,
  MessageSquare,
  FileText,
  Home,
  Building2,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  PhoneIncoming,
  MapPin,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Voice Agent for Real Estate Agents & Brokers | Never Lose a Lead Again",
  description:
    "24/7 AI voice agent built for real estate professionals. Captures every lead, qualifies buyers and sellers, books showings, and follows up — so you never miss a deal. $250 setup + $450/mo.",
  keywords: [
    "AI voice agent real estate",
    "real estate AI answering service",
    "AI receptionist for realtors",
    "real estate lead capture AI",
    "24/7 real estate phone answering",
    "AI for real estate brokers",
    "real estate virtual receptionist",
    "never miss a real estate lead",
    "AI call handling real estate",
    "real estate AI assistant",
  ],
  openGraph: {
    title: "AI Voice Agent for Real Estate Agents & Brokers — FreeVoice.ai",
    description:
      "Stop losing leads to voicemail. Our AI voice agent answers every call 24/7, qualifies prospects, and books showings — built specifically for real estate. $250 setup + $450/mo.",
    url: "https://freevoice.ai/for-businesses",
  },
  alternates: { canonical: "https://freevoice.ai/for-businesses" },
};

const capabilities = [
  {
    icon: PhoneIncoming,
    title: "Answers Every Call 24/7",
    desc: "Nights, weekends, holidays — your AI agent picks up instantly so no lead goes to voicemail.",
  },
  {
    icon: UserCheck,
    title: "Qualifies Leads",
    desc: "Asks the right questions — budget, timeline, pre-approval status, buying or selling — and tags each lead.",
  },
  {
    icon: CalendarCheck,
    title: "Books Showings & Appointments",
    desc: "Checks your availability and schedules property showings or listing appointments directly into your calendar.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answers Property Questions",
    desc: "Handles common inquiries about listings, price, square footage, open house times, and neighborhood details.",
  },
  {
    icon: MessageSquare,
    title: "Sends SMS Follow-Ups",
    desc: "Texts callers with property links, your contact info, and showing confirmations after every call.",
  },
  {
    icon: FileText,
    title: "Full Call Transcripts & Logs",
    desc: "Every conversation recorded and transcribed. Review lead details, call summaries, and follow-up notes anytime.",
  },
];

const painPoints = [
  {
    icon: Home,
    title: "Solo Agents",
    desc: "You're showing a home at 2 PM when a hot lead calls. Without an AI agent, that buyer calls the next agent on Zillow.",
  },
  {
    icon: Building2,
    title: "Brokerage Firms",
    desc: "Your agents are in the field all day. Leads from your website, signs, and ads go unanswered — costing your firm thousands monthly.",
  },
  {
    icon: Users,
    title: "Real Estate Teams",
    desc: "Coordinating who answers what call is a mess. Your AI agent handles intake for the whole team and routes leads to the right person.",
  },
  {
    icon: MapPin,
    title: "Property Managers",
    desc: "Tenant calls, maintenance requests, and showing inquiries pile up. Your AI agent handles the volume so your team stays focused.",
  },
];

const included = [
  "Custom AI agent trained on your listings and services",
  "Dedicated local or toll-free phone number",
  "24/7 call handling — nights, weekends, holidays",
  "Lead qualification (budget, timeline, pre-approval)",
  "Automated SMS follow-ups to callers",
  "Call logs, transcripts, and lead dashboard",
  "Calendar integration for booking showings",
  "Weekly performance and lead reports",
];

export default function ForBusinessesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-orange-500 mb-4 tracking-wide uppercase">
            Built for Real Estate Professionals
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Stop Losing Leads
            <br />
            to Voicemail.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Your AI voice agent answers every call 24/7 — qualifying buyers and
            sellers, booking showings, and capturing lead details — so you close
            more deals while you&apos;re out in the field.
          </p>
          <div className="mt-8">
            <Button
              href="mailto:shehryar@freevoice.ai?subject=Free Demo Request — Real Estate"
              size="lg"
            >
              Get a Free Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            $250 Setup Fee &bull; $450/mo &bull; No contracts &bull; Cancel anytime
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Every Missed Call Is a Lost Deal
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            In real estate, speed wins. The agent who answers first gets the client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                stat: "78%",
                desc: "of buyers and sellers go with the first agent who responds",
              },
              {
                stat: "48%",
                desc: "of real estate leads never get a callback",
              },
              {
                stat: "$15K+",
                desc: "average commission lost per missed lead that goes to a competitor",
              },
            ].map((item) => (
              <Card key={item.stat} className="p-6 text-center">
                <p className="text-3xl font-bold text-orange-600">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            You&apos;re at a showing, driving to a listing, or meeting a client.
            Your phone rings — and goes to voicemail. That lead just called the
            next agent. Our AI voice agent makes sure that never happens.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Built for Every Type of Real Estate Professional
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            Whether you&apos;re a solo agent or run a 50-person brokerage, our AI
            agent scales with you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {painPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title} className="p-6">
                  <Icon className="h-6 w-6 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-500">{point.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Live in 48 Hours. Not 48 Days.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Business Details",
                desc: "Tell us about your listings, services, target areas, FAQs, and how you want leads qualified.",
              },
              {
                step: "2",
                title: "We Build Your AI Agent",
                desc: "We train a custom voice agent that knows your market, speaks naturally, and follows your exact scripts.",
              },
              {
                step: "3",
                title: "Every Call Gets Answered",
                desc: "Forward your business line or get a new number. Every lead captured, every showing booked — 24/7.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-lg mb-4">
                  {item.step}
                </span>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            What Your AI Agent Does
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            Think of it as a top-performing ISA that never takes a day off.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card key={cap.title} className="p-6">
                  <Icon className="h-6 w-6 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-500">{cap.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-10 w-10 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            The Math Is Simple
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            If your AI agent captures just one extra lead per month that turns
            into a closed deal, it pays for itself 10x&ndash;30x over. The
            average U.S. real estate commission is $8,000&ndash;$15,000 per
            transaction. Your AI agent costs $450/mo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-500">Calls answered</p>
            </Card>
            <Card className="p-6 text-center">
              <PhoneIncoming className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">0</p>
              <p className="text-sm text-slate-500">Missed leads</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">10&ndash;30x</p>
              <p className="text-sm text-slate-500">ROI per closed deal</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-sm font-medium text-orange-600 mb-2">
              Simple Pricing. No Surprises.
            </p>
            <p className="text-4xl font-bold text-slate-900">
              $450<span className="text-lg font-normal text-slate-500">/mo</span>
            </p>
            <p className="text-slate-500 mt-1">+ $250 one-time setup fee</p>
            <ul className="mt-6 space-y-3 text-left max-w-sm mx-auto">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href="mailto:shehryar@freevoice.ai?subject=Free Demo Request — Real Estate"
                size="lg"
              >
                Get a Free Demo &rarr;
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              No long-term contracts. Cancel anytime.
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Capture Every Lead?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            While you&apos;re closing deals, your AI agent is answering the next
            one. Get set up in 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="mailto:shehryar@freevoice.ai?subject=Free Demo Request — Real Estate"
              size="lg"
            >
              Get a Free Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Or email us:{" "}
            <a
              href="mailto:hello@freevoice.ai"
              className="text-slate-300 hover:text-white"
            >
              hello@freevoice.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
