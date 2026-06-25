import { Metadata } from "next";
import { DepositsContent } from "./DepositsContent";

export const metadata: Metadata = {
  title: "Deposits | Manganam Service Co-operative Bank Ltd.",
  description: "Explore our deposit schemes including savings accounts, fixed deposits, recurring deposits, and more at Manganam Service Co-operative Bank Ltd.",
  keywords: ["deposits", "savings accounts", "fixed deposits", "recurring deposits", "Manganam Bank"],
  alternates: {
    canonical: "/deposits",
  },
};

export default function DepositsPage() {
  return <DepositsContent />;
}
