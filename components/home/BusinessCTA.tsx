import Button from "@/components/ui/Button";

export default function BusinessCTA() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          AI Voice Agent for Real Estate.
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Never lose a lead to voicemail again. Our AI voice agent answers calls
          24/7, qualifies buyers and sellers, and books showings — so you close
          more deals.
        </p>
        <div className="mt-8">
          <Button href="/for-businesses" size="lg">
            Learn More &rarr;
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          $250 Setup &bull; $450/mo &bull; No contracts &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
}
