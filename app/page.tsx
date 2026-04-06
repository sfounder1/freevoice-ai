import Hero from "@/components/home/Hero";
import ToolGrid from "@/components/home/ToolGrid";
import HowItWorks from "@/components/home/HowItWorks";
import BusinessCTA from "@/components/home/BusinessCTA";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolGrid />
      <HowItWorks />
      <BusinessCTA />
      <FAQ />
    </>
  );
}
