"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function MedicalStoreOffer() {
  const { language } = useLanguage();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gold via-gold to-gold-light overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 animate-bounce-slow">💊</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            {language === "ml" ? "മെഡിക്കൽ സ്റ്റോർ ഓഫർ" : "Medical Store Offer"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6">
            {language === "ml" ? "പ്രത്യേക അംഗ ഡിസ്കൗണ്ടുകൾ" : "Exclusive Member Discounts"}
          </p>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
              15% - 50% OFF
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
              {language === "ml"
                ? "പങ്കാളി മെഡിക്കൽ സ്റ്റോറുകളിൽ ബാങ്ക് അംഗങ്ങൾക്ക് പ്രത്യേക ഡിസ്കൗണ്ടുകൾ"
                : "Special discounts for bank members at partner medical stores"}
            </p>
            <button className="btn-primary w-full sm:w-auto">
              {language === "ml" ? "കൂടുതൽ അറിയുക" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
