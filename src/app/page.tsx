import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/layers/presentation/components/sections/Hero";
import { Features } from "@/layers/presentation/components/sections/Features";
import { About } from "@/layers/presentation/components/sections/About";
import { WelfareSchemes } from "@/components/WelfareSchemes";
import { MedicalStoreOffer } from "@/components/MedicalStoreOffer";
import { InterestRates } from "@/components/InterestRates";

export const metadata: Metadata = {
  title: "Home | Manganam Service Co-operative Bank Ltd.",
  description: "Welcome to Manganam Service Co-operative Bank Ltd. Your trusted partner for secure banking, loans, and financial services.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <InterestRates />
        <WelfareSchemes />
        <MedicalStoreOffer />
        <About />
      </main>
      <Footer />
    </div>
  );
}
