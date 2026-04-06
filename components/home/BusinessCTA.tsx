import Button from "@/components/ui/Button";

export default function BusinessCTA() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Never Miss Another Customer Call.
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Our AI voice agents answer your business phone 24/7 — booking
          appointments, answering questions, and taking orders while you focus on
          what matters.
        </p>
        <div className="mt-8">
          <Button href="/for-businesses" size="lg">
            Learn More &rarr;
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Starting at $199/mo &bull; Setup in 24 hours &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
}
