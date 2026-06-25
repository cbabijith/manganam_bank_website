import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

export class SEOHelper {
  static generateMetadata(config: SEOConfig): Metadata {
    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      openGraph: {
        title: config.title,
        description: config.description,
        images: config.ogImage ? [{ url: config.ogImage, width: 1200, height: 630 }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: config.title,
        description: config.description,
        images: config.ogImage ? [config.ogImage] : undefined,
      },
      alternates: {
        canonical: config.canonical,
      },
      robots: {
        index: !config.noIndex,
        follow: !config.noIndex,
      },
    };
  }

  static generateJsonLd(type: string, data: Record<string, any>) {
    return {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };
  }
}
