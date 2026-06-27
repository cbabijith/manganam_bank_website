"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bankfront-1.jpg"
          alt="Manganam Service Co-operative Bank"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary-dark/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-dark/80 via-transparent to-primary/40" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gold/5 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in-down">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gold">
              {language === "ml" ? "1920 മുതൽ വിശ്വസ്തതയുടെ പങ്കാളി" : "Trusted Partner Since 1920"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up animate-delay-100 leading-tight drop-shadow-lg">
            {language === "ml"
              ? "മംഗലം സർവീസ് കോ-ഓപ്പറേറ്റീവ് ബാങ്ക് ലിമിറ്റഡിലേക്ക് സ്വാഗതം"
              : "Welcome to Manganam Service Co-operative Bank Ltd."}
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95 animate-fade-in-up animate-delay-200 leading-relaxed drop-shadow-md">
            {language === "ml"
              ? "സുരക്ഷിതമായ ബാങ്കിംഗ്, വായ്പകൾ, ഡിജിറ്റൽ സേവനങ്ങൾ എന്നിവയ്ക്കായി നിങ്ങളുടെ വിശ്വസ്ത സാമ്പത്തിക പങ്കാളി."
              : "Your trusted financial partner for secure banking, loans, and digital services."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
            <a href="tel:04812570424" className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2">
              <span>📞</span>
              {language === "ml" ? "അക്കൗണ്ട് തുറക്കുക" : "Open Account"}
            </a>
            <a href="tel:04812570424" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
              <span>📞</span>
              {language === "ml" ? "കൂടുതൽ അറിയുക" : "Learn More"}
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-14 pt-8 border-t border-white/10 animate-fade-in-up animate-delay-500">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold drop-shadow-md">15+</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">
                {language === "ml" ? "വർഷങ്ങൾ" : "Years"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold drop-shadow-md">10K+</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">
                {language === "ml" ? "ഉപഭോക്താക്കൾ" : "Customers"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold drop-shadow-md">₹50Cr+</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">
                {language === "ml" ? "ആസ്തികൾ" : "Assets"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-12 sm:h-16 bg-background [clip-path:ellipse(55%_100%_at_50%_100%)]" />
    </section>
  );
}
