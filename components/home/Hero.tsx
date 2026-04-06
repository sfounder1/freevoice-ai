import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Every AI Voice Tool.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Completely Free.
          </span>
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
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            AI Voice Agents for Business
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          &#10022; No signup required &nbsp;&bull;&nbsp; 5,000 free tokens daily
          &nbsp;&bull;&nbsp; 10+ voice tools
        </p>
      </div>
    </section>
  );
}
