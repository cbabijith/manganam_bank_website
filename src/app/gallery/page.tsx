import { Metadata } from "next";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Manganam Service Co-operative Bank Ltd.",
  description: "View images of Manganam Service Co-operative Bank Ltd. including bank building, staff, events, and community programs.",
  keywords: ["gallery", "photos", "images", "bank building", "events", "Manganam Bank"],
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
