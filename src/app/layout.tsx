import type { Metadata } from "next";
import { Inter, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const malayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  variable: "--font-malayalam",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manganam Service Co-operative Bank Ltd. - Your Trusted Financial Partner",
  description: "Welcome to Manganam Service Co-operative Bank Ltd. Secure banking solutions, loans, savings accounts, and community service for all your financial needs.",
  keywords: ["bank", "banking", "finance", "loans", "savings", "cooperative bank", "Manganam Service Co-operative Bank"],
  authors: [{ name: "Manganam Service Co-operative Bank Ltd." }],
  creator: "Manganam Service Co-operative Bank Ltd.",
  publisher: "Manganam Service Co-operative Bank Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://manganambank.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manganambank.com",
    title: "Manganam Service Co-operative Bank Ltd. - Your Trusted Financial Partner",
    description: "Welcome to Manganam Service Co-operative Bank Ltd. Secure banking solutions, loans, savings accounts, and community service for all your financial needs.",
    siteName: "Manganam Service Co-operative Bank Ltd.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manganam Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manganam Service Co-operative Bank Ltd. - Your Trusted Financial Partner",
    description: "Welcome to Manganam Service Co-operative Bank Ltd. Secure banking solutions, loans, savings accounts, and community service for all your financial needs.",
    images: ["/og-image.jpg"],
    creator: "@manganambank",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/manganam.svg" />
        <link rel="apple-touch-icon" href="/manganam.svg" />
        <meta name="theme-color" content="#006838" />
      </head>
      <body className={`${inter.variable} ${malayalam.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
