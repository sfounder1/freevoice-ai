import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Every AI Voice Tool.
          <br />
          Completely Free.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Text-to-speech, transcription, voice cloning, and more — all in one
          place. No credit card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/tools" size="lg">
            Start Using Tools &rarr;
          </Button>
          <Button
            href="/for-businesses"
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            AI Voice Agents for Business
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          &#10022; No signup required &nbsp;&bull;&nbsp; 5,000 free tokens daily
          &nbsp;&bull;&nbsp; 15+ voice tools
        </p>
      </div>
    </section>
  );
}
