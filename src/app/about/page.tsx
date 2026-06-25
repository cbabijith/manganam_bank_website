import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Manganam Service Co-operative Bank Ltd.",
  description: "Learn about Manganam Service Co-operative Bank Ltd.'s history, mission, values, and commitment to providing exceptional banking services.",
  keywords: ["about bank", "bank history", "bank mission", "bank values", "Manganam Service Co-operative Bank"],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
