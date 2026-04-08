import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free AI voice tools with 5,000 daily tokens. Upgrade for more capacity, roll-over credits, draft mode, and API access. Plans start at $9/mo.",
  openGraph: {
    title: "Pricing — FreeVoice.ai",
    description:
      "Free AI voice tools with 5,000 daily tokens. Unused credits roll over. Quality guaranteed.",
    url: "https://freevoice.ai/pricing",
  },
  alternates: { canonical: "https://freevoice.ai/pricing" },
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For trying things out",
    features: [
      "5,000 tokens daily",
      "All tools available",
      "Draft mode previews",
      "Standard processing",
    ],
    cta: "Start Free",
    ctaHref: "/tools",
    ctaDisabled: false,
    highlighted: false,
  },
  {
    name: "Creator",
    price: "$9",
    period: "/mo",
    description: "For content creators",
    features: [
      "500,000 tokens monthly",
      "Unused credits roll over",
      "No watermarks",
      "In-line editing & Emotion Tags",
      "Quality Guarantee",
      "Priority processing",
    ],
    cta: "Coming Soon",
    ctaHref: "#",
    ctaDisabled: true,
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For professionals and teams",
    features: [
      "2,000,000 tokens monthly",
      "Unused credits roll over",
      "API access",
      "Commercial license",
      "Noise-resilient voice cloning",
      "No daily limits",
    ],
    cta: "Coming Soon",
    ctaHref: "#",
    ctaDisabled: true,
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Start free. Upgrade when you need more. Unused credits always roll over.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-8 flex flex-col ${
                tier.highlighted
                  ? "ring-2 ring-orange-600 relative"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <h3 className="font-semibold text-slate-900 text-lg">
                {tier.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{tier.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-slate-900">
                  {tier.price}
                </span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={tier.ctaHref}
                  disabled={tier.ctaDisabled}
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Guarantee */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Quality Guarantee
          </h2>
          <p className="text-slate-500">
            Bad generation? We refund your credits automatically. Use Draft Mode
            to preview timing and tone at zero cost before committing to a
            high-fidelity export.
          </p>
        </div>

        {/* Token Packs */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Need more? Token Packs
          </h2>
          <p className="text-slate-500">
            Buy tokens without a subscription. $5 for 200K tokens, $15 for 1M
            tokens, $40 for 5M tokens. Never expire. Coming soon.
          </p>
        </div>

        {/* Business CTA */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              AI Voice Agent for Auto Insurance Agents
            </h2>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              $475<span className="text-base font-normal text-slate-500">/mo</span>
            </p>
            <p className="text-sm text-slate-500">+ $250 one-time setup</p>
            <p className="mt-3 text-sm text-slate-500">
              AI voice agent that answers calls 24/7, qualifies drivers shopping
              for car insurance, and books quote appointments — built for auto
              insurance agents and agencies.
            </p>
            <div className="mt-6">
              <Button href="/for-businesses">Learn More &rarr;</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
