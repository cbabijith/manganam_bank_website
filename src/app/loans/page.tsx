import { Metadata } from "next";
import { LoansContent } from "./LoansContent";

export const metadata: Metadata = {
  title: "Loans | Manganam Service Co-operative Bank Ltd.",
  description: "Explore our loan schemes including personal loans, gold loans, housing loans, and more at Manganam Service Co-operative Bank Ltd.",
  keywords: ["loans", "personal loans", "gold loans", "housing loans", "business loans", "Manganam Bank"],
  alternates: {
    canonical: "/loans",
  },
};

export default function LoansPage() {
  return <LoansContent />;
}
