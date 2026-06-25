import { Metadata } from "next";
import { DownloadsContent } from "./DownloadsContent";

export const metadata: Metadata = {
  title: "Downloads | Manganam Service Co-operative Bank Ltd.",
  description: "Download forms and documents from Manganam Service Co-operative Bank Ltd. including membership forms, loan applications, and more.",
  keywords: ["downloads", "forms", "documents", "membership", "loan application", "Manganam Bank"],
  alternates: {
    canonical: "/downloads",
  },
};

export default function DownloadsPage() {
  return <DownloadsContent />;
}
