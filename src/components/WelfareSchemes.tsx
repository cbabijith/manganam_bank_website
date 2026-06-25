"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function WelfareSchemes() {
  const { language } = useLanguage();

  const schemes = [
    {
      icon: "🎓",
      name: language === "ml" ? "വിദ്യാഭ്യാസ സഹായം" : "Educational Assistance",
      description: language === "ml"
        ? "വിദ്യാർത്ഥികൾക്ക് സാമ്പത്തിക സഹായം"
        : "Financial assistance for students",
    },
    {
      icon: "🏥",
      name: language === "ml" ? "മെഡിക്കൽ സഹായം" : "Medical Assistance",
      description: language === "ml"
        ? "ആരോഗ്യ സംബന്ധമായ സഹായം"
        : "Health-related financial support",
    },
    {
      icon: "💒",
      name: language === "ml" ? "വിവാഹ സഹായം" : "Marriage Assistance",
      description: language === "ml"
        ? "വിവാഹത്തിനുള്ള സഹായം"
        : "Financial support for marriages",
    },
    {
      icon: "🕊️",
      name: language === "ml" ? "മരണ സഹായം" : "Death Assistance",
      description: language === "ml"
        ? "മരണ സംബന്ധമായ സഹായം"
        : "Support during difficult times",
    },
    {
      icon: "🚨",
      name: language === "ml" ? "അടിയന്തര സഹായം" : "Emergency Assistance",
      description: language === "ml"
        ? "അടിയന്തര സാഹചര്യങ്ങൾക്ക് സഹായം"
        : "Quick help in emergencies",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            {language === "ml" ? "ക്ഷേമകരമായ പദ്ധതികൾ" : "Welfare Schemes"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {language === "ml"
              ? "ഞങ്ങളുടെ അംഗങ്ങൾക്ക് വിവിധ ക്ഷേമകരമായ പദ്ധതികൾ"
              : "Various welfare schemes for our members"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary to-primary-dark p-4 sm:p-6 rounded-xl text-center text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">{scheme.icon}</div>
                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2">{scheme.name}</h3>
                <p className="text-xs sm:text-sm opacity-90">{scheme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
