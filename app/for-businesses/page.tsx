import type { Metadata } from "next";
import {
  Phone,
  CalendarCheck,
  MessageCircleQuestion,
  UserCheck,
  MessageSquare,
  FileText,
  Shield,
  Building2,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  PhoneIncoming,
  Car,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import WaitlistForm from "@/components/b2b/WaitlistForm";
import ClaimModal from "@/components/b2b/ClaimModal";

export const metadata: Metadata = {
  title: "AI Voice Agent for Auto Insurance Agents | Never Lose a Lead Again",
  description:
    "24/7 AI voice agent built for auto insurance agents. Captures every lead, qualifies drivers, books quote appointments, and follows up — so you sell more car insurance. $250 setup + $500/mo.",
  keywords: [
    "AI voice agent auto insurance",
    "car insurance AI answering service",
    "AI receptionist for insurance agents",
    "auto insurance lead capture AI",
    "24/7 car insurance phone answering",
    "AI for car insurance agencies",
    "vehicle insurance virtual receptionist",
    "never miss a car insurance lead",
    "AI call handling car insurance",
    "auto insurance sales AI assistant",
  ],
  openGraph: {
    title: "AI Voice Agent for Auto Insurance Agents — FreeVoice.ai",
    description:
      "Stop losing leads to voicemail. Our AI voice agent answers every call 24/7, qualifies drivers, and books quote appointments — built specifically for agents who sell car insurance. $250 setup + $500/mo.",
    url: "https://freevoice.ai/for-businesses",
  },
  alternates: { canonical: "https://freevoice.ai/for-businesses" },
};

const capabilities = [
  {
    icon: PhoneIncoming,
    title: "Answers Every Call 24/7",
    desc: "Nights, weekends, holidays — your AI agent picks up instantly so no driver looking for coverage goes to voicemail.",
  },
  {
    icon: UserCheck,
    title: "Qualifies Every Caller",
    desc: "Asks the right questions — vehicle type, driving record, current coverage, and what protection they need — and tags each lead for you.",
  },
  {
    icon: CalendarCheck,
    title: "Books Quote Appointments",
    desc: "Checks your availability and schedules quote consultations directly into your calendar so you can close the sale.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answers Coverage Questions",
    desc: "Handles common inquiries about collision, comprehensive, liability, uninsured motorist, deductibles, and bundling discounts.",
  },
  {
    icon: MessageSquare,
    title: "Sends SMS Follow-Ups",
    desc: "Texts callers with quote confirmations, your contact info, and appointment reminders after every call.",
  },
  {
    icon: FileText,
    title: "Full Call Transcripts & Logs",
    desc: "Every conversation recorded and transcribed. Review lead details, vehicle info, call summaries, and follow-up notes anytime.",
  },
];

const painPoints = [
  {
    icon: Shield,
    title: "Independent Agents",
    desc: "You're quoting a client at 2 PM when a driver who just bought a new car calls for coverage. Without an AI agent, that prospect calls the next agency on Google.",
  },
  {
    icon: Building2,
    title: "Insurance Agencies",
    desc: "Your team is on calls all day. Drivers shopping for car insurance from your website, ads, and referrals go unanswered — costing your agency thousands monthly.",
  },
  {
    icon: Users,
    title: "Multi-Agent Offices",
    desc: "Coordinating who answers what call is a mess. Your AI agent handles intake for the whole team and routes drivers to the right agent.",
  },
  {
    icon: Car,
    title: "High-Volume Auto Agencies",
    desc: "Quote requests from new drivers, renewal inquiries, and coverage questions pile up. Your AI agent handles the volume so your team stays focused on selling.",
  },
];

const included = [
  "Custom AI agent trained on your coverage options and carrier products",
  "Dedicated local or toll-free phone number",
  "24/7 call handling — nights, weekends, holidays",
  "Lead qualification (vehicle type, driving record, coverage needs)",
  "Automated SMS follow-ups to every caller",
  "Call logs, transcripts, and lead dashboard",
  "Calendar integration for booking quote appointments",
  "Weekly performance and lead reports",
];

export default function ForBusinessesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-orange-500 mb-4 tracking-wide uppercase">
            Built for Auto Insurance Agents
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Stop Losing Leads
            <br />
            to Voicemail.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Your AI voice agent answers every call 24/7 — qualifying drivers,
            booking quote appointments, and capturing lead details — so you
            sell more car insurance while you&apos;re focused on your clients.
          </p>
          <div className="mt-8">
            <Button
              href="mailto:shehryar@freevoice.ai?subject=Free Demo Request — Auto Insurance"
              size="lg"
            >
              Get a Free Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            $250 Setup Fee &bull; $500/mo &bull; No contracts &bull; Cancel anytime
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Every Missed Call Is a Lost Customer
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            Drivers shop fast. The agent who answers first gets the sale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                stat: "88%",
                desc: "of drivers request quotes from multiple agents — the fastest response wins the sale",
              },
              {
                stat: "62%",
                desc: "of calls to insurance agencies go unanswered after business hours when drivers are free to shop",
              },
              {
                stat: "$2,500+",
                desc: "average annual car insurance premium in the U.S. — every missed call is real revenue lost",
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
            You&apos;re in a meeting, quoting another driver, or off for the day.
            Your phone rings — and goes to voicemail. That driver just called the
            next agency. Our AI voice agent makes sure that never happens.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Built for Every Type of Auto Insurance Professional
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            Whether you&apos;re an independent agent or run a 20-person agency
            selling car insurance, our AI agent scales with you.
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
                title: "Share Your Agency Details",
                desc: "Tell us about your coverage options (liability, collision, comprehensive, theft), carriers, service areas, and how you want leads qualified.",
              },
              {
                step: "2",
                title: "We Build Your AI Agent",
                desc: "We train a custom voice agent that knows your products, explains coverage to drivers naturally, and follows your exact process.",
              },
              {
                step: "3",
                title: "Every Call Gets Answered",
                desc: "Forward your agency line or get a new number. Every driver captured, every quote appointment booked — 24/7.",
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
            Think of it as a top-performing receptionist that never takes a day off.
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
            The average U.S. car insurance premium now exceeds $2,500/year. With a
            10&ndash;15% commission, every new driver you insure earns you
            $250&ndash;$375 annually — and they renew year after year. If your AI
            agent captures just 2&ndash;3 extra drivers per month, it more than
            pays for itself. Your AI agent costs $500/mo.
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
              <p className="text-2xl font-bold text-slate-900">3&ndash;5x</p>
              <p className="text-sm text-slate-500">ROI within 6 months</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Simple Pricing. No Surprises.
          </h2>
          <p className="text-center text-slate-500 max-w-xl mx-auto mb-12">
            Try it risk-free — your first month is on us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Launch Offer */}
            <Card className="p-8 text-center ring-2 ring-orange-600 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                Limited Time Offer
              </span>
              <p className="text-sm font-medium text-orange-600 mb-1">
                First Month
              </p>
              <p className="text-5xl font-bold text-slate-900">
                $0<span className="text-lg font-normal text-slate-500">/mo</span>
              </p>
              <p className="text-slate-500 mt-1 text-sm">+ $250 one-time setup fee</p>
              <p className="mt-3 text-xs text-slate-400">
                Then $500/mo &bull; Cancel anytime
              </p>
              <ul className="mt-6 space-y-3 text-left">
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
                <ClaimModal className="w-full px-6 py-3 text-base inline-flex items-center justify-center font-medium rounded-lg transition-colors bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Claim Free Month &rarr;
                </ClaimModal>
              </div>
            </Card>

            {/* Regular */}
            <Card className="p-8 text-center">
              <p className="text-sm font-medium text-slate-400 mb-1">
                Regular Price
              </p>
              <p className="text-5xl font-bold text-slate-900">
                $500<span className="text-lg font-normal text-slate-500">/mo</span>
              </p>
              <p className="text-slate-500 mt-1 text-sm">+ $250 one-time setup fee</p>
              <p className="mt-3 text-xs text-slate-400">
                No contracts &bull; Cancel anytime
              </p>
              <ul className="mt-6 space-y-3 text-left">
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
                  href="mailto:shehryar@freevoice.ai?subject=Free Demo Request — Auto Insurance"
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  Get a Free Demo &rarr;
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Join the Waitlist
          </h2>
          <p className="text-slate-500 mb-8">
            Spots are limited. Drop your info and we&apos;ll reach out within 24
            hours to get your AI agent set up.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Capture Every Driver?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            While you&apos;re closing sales, your AI agent is answering the next
            driver looking for car insurance. First month free — get set up in 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ClaimModal className="px-6 py-3 text-base inline-flex items-center justify-center font-medium rounded-lg transition-colors bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Claim Your Free Month
            </ClaimModal>
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
