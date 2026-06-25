"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function About() {
  const { language } = useLanguage();

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Parallax background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bankfront-2.png"
          alt="Manganam Service Co-operative Bank building"
          fill
          sizes="100vw"
          className="object-cover object-center fixed top-0"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 z-10 bg-primary/5" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary">
            {language === "ml"
              ? "മംഗലം സർവീസ് കോ-ഓപ്പറേറ്റീവ് ബാങ്ക് ലിമിറ്റഡിനെക്കുറിച്ച്"
              : "About Manganam Service Co-operative Bank Ltd."}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed">
            {language === "ml"
              ? "ബാങ്കിംഗിനെ വിപ്ലവാസം വരുത്തുക എന്ന ദർശനത്തോടെ സ്ഥാപിച്ച മംഗലം സർവീസ് കോ-ഓപ്പറേറ്റീവ് ബാങ്ക് ലിമിറ്റഡ് ഉത്കൃഷ്ടതയോടെയും അച്ചടക്കത്തോടെയും ഉപഭോക്താക്കൾക്ക് സേവനം നൽകുന്നു. നിങ്ങൾക്ക് മികച്ച സാമ്പത്തിക അനുഭവം നൽകാൻ ഞങ്ങൾ പരമ്പരാഗത ബാങ്കിംഗ് മൂല്യങ്ങളും ആധുനിക സാങ്കേതികവിദ്യയും സംയോജിപ്പിക്കുന്നു."
              : "Founded with a vision to revolutionize banking, Manganam Service Co-operative Bank Ltd. has been serving customers with excellence and integrity. We combine traditional banking values with modern technology to provide you with the best financial experience."}
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {language === "ml" ? "സന്തുഷ്ടരായ ഉപഭോക്താക്കൾ" : "Happy Customers"}
              </div>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                ₹<AnimatedCounter end={50} suffix="Cr+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {language === "ml" ? "ആസ്തികൾ" : "Assets Managed"}
              </div>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {language === "ml" ? "വർഷങ്ങളുടെ അനുഭവം" : "Years of Experience"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
