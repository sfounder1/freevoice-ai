import type { Metadata } from "next";
import {
  Phone,
  CalendarCheck,
  MessageCircleQuestion,
  ShoppingCart,
  MessageSquare,
  FileText,
  UtensilsCrossed,
  Scissors,
  Stethoscope,
  Car,
  Home,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Voice Agents for Small Business",
  description:
    "Never miss another customer call. Our AI voice agent answers your phone 24/7 — booking appointments, answering questions, and taking orders.",
  openGraph: {
    title: "AI Voice Agents for Small Business — FreeVoice.ai",
    description:
      "AI receptionist that answers calls 24/7, books appointments, and handles FAQs. Starting at $199/mo.",
    url: "https://freevoice.ai/for-businesses",
  },
  alternates: { canonical: "https://freevoice.ai/for-businesses" },
};

const capabilities = [
  { icon: Phone, title: "Answers Calls 24/7", desc: "Never miss a call, even after hours or on holidays." },
  { icon: CalendarCheck, title: "Books Appointments", desc: "Checks availability and schedules directly into your calendar." },
  { icon: MessageCircleQuestion, title: "Answers FAQs", desc: "Handles common questions about hours, services, and pricing." },
  { icon: ShoppingCart, title: "Takes Orders", desc: "Processes phone orders and relays them to your team." },
  { icon: MessageSquare, title: "Sends SMS Confirmations", desc: "Texts customers with appointment details and confirmations." },
  { icon: FileText, title: "Provides Call Transcripts", desc: "Full transcripts of every call for your records." },
];

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Take reservations and orders while your staff focuses on service." },
  { icon: Scissors, title: "Med Spas & Salons", desc: "Book appointments and answer service questions around the clock." },
  { icon: Stethoscope, title: "Dental Offices", desc: "Schedule patients and handle insurance questions without hold times." },
  { icon: Car, title: "Auto Repair Shops", desc: "Book service appointments and provide repair status updates." },
  { icon: Home, title: "Real Estate Agents", desc: "Capture leads and schedule showings when you're out in the field." },
];

const included = [
  "Custom AI agent trained on your business",
  "Dedicated phone number",
  "24/7 call handling",
  "Weekly performance reports",
  "SMS confirmations to customers",
  "Call logs and transcripts dashboard",
];

export default function ForBusinessesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Your AI Receptionist.
            <br />
            Available 24/7.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Never miss another customer call. Our AI voice agent answers your
            phone, books appointments, answers questions, and takes orders —
            while you focus on running your business.
          </p>
          <div className="mt-8">
            <Button
              href="mailto:shehryar@freevoice.ai?subject=Free Demo Request"
              size="lg"
            >
              Get a Free Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Starting at $199/mo &bull; Setup in 24 hours &bull; No contracts
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Every Missed Call Is a Lost Customer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { stat: "62%", desc: "of calls to small businesses go unanswered" },
              { stat: "85%", desc: "of callers won't call back" },
              { stat: "$1,200", desc: "average revenue lost per missed call monthly" },
            ].map((item) => (
              <Card key={item.stat} className="p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">{item.stat}</p>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            You&apos;re busy serving customers. Your phone is ringing. You
            can&apos;t do both. That&apos;s where we come in.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Setup Takes 24 Hours. Not 24 Days.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us About Your Business",
                desc: "You share your FAQs, services, hours, and booking rules.",
              },
              {
                step: "2",
                title: "We Build Your AI Agent",
                desc: "We train a custom AI voice agent that sounds natural and knows your business.",
              },
              {
                step: "3",
                title: "Calls Get Answered",
                desc: "Forward your business line to your AI number. Every call answered, every appointment booked.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Your AI Receptionist Does
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card key={cap.title} className="p-6">
                  <Icon className="h-6 w-6 text-blue-600 mb-3" />
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

      {/* Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Built for Service Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Card key={ind.title} className="p-6">
                  <Icon className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-slate-500">{ind.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-sm font-medium text-blue-600 mb-2">
              Simple Pricing
            </p>
            <p className="text-4xl font-bold text-slate-900">
              $199<span className="text-lg font-normal text-slate-500">/mo</span>
            </p>
            <p className="text-slate-500 mt-1">+ $499 one-time setup</p>
            <ul className="mt-6 space-y-3 text-left max-w-sm mx-auto">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href="mailto:shehryar@freevoice.ai?subject=Free Demo Request"
                size="lg"
              >
                Get a Free Demo &rarr;
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to stop missing calls?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="mailto:shehryar@freevoice.ai?subject=Free Demo Request"
              size="lg"
            >
              Get a Free Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Or email us:{" "}
            <a href="mailto:hello@freevoice.ai" className="text-slate-300 hover:text-white">
              hello@freevoice.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
