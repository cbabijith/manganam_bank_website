import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Manganam Service Co-operative Bank Ltd.",
  description: "Explore our comprehensive banking services including personal banking, business solutions, loans, and digital banking services.",
  keywords: ["banking services", "personal banking", "business banking", "loans", "digital banking"],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
