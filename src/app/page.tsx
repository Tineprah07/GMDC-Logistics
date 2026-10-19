import { CtaBanner } from "@/components/sections/CtaBanner";
import { FactsBand } from "@/components/sections/home/FactsBand";
import { Hero } from "@/components/sections/home/Hero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";

// Remaining home sections (who we work with, areas, FAQ) come next.
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FactsBand />
      <HowItWorks />
      <CtaBanner />
    </>
  );
}
