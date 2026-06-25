import { Metadata } from "next";
import { BoardContent } from "./BoardContent";

export const metadata: Metadata = {
  title: "Board of Directors | Manganam Service Co-operative Bank Ltd.",
  description: "Meet the board of directors of Manganam Service Co-operative Bank Ltd. Our leadership team is committed to serving the community.",
  keywords: ["board of directors", "leadership", "bank management", "Manganam Bank"],
  alternates: {
    canonical: "/board",
  },
};

export default function BoardPage() {
  return <BoardContent />;
}
