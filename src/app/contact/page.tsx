import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Manganam Service Co-operative Bank Ltd.",
  description: "Get in touch with Manganam Service Co-operative Bank Ltd. Find our contact information, branch locations, and reach out for support.",
  keywords: ["contact bank", "bank support", "bank locations", "customer service"],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
