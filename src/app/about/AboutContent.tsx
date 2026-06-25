"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4 text-primary">
                {language === "ml"
                  ? "ഞങ്ങളെക്കുറിച്ച്"
                  : "About Manganam Service Co-operative Bank Ltd."}
              </h1>
              <p className="text-xl text-gray-600">
                {language === "ml"
                  ? "2009 മുതൽ വിശ്വസ്തതയും സുരക്ഷയും സ്ഥാപിക്കുന്നു"
                  : "Building trust and securing futures since 2009"}
              </p>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {language === "ml" ? "ഞങ്ങളുടെ ചരിത്രം" : "Our Story"}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {language === "ml"
                  ? "ബാങ്കിംഗിനെ വിപ്ലവാസം വരുത്തുക എന്ന ദർശനത്തോടെ സ്ഥാപിച്ച മംഗലം സർവീസ് കോ-ഓപ്പറേറ്റീവ് ബാങ്ക് ലിമിറ്റഡ് ഉത്കൃഷ്ടതയോടെയും അച്ചടക്കത്തോടെയും ഉപഭോക്താക്കൾക്ക് സേവനം നൽകുന്നു."
                  : "Manganam Service Co-operative Bank Ltd. was founded with a vision to revolutionize banking. We have grown from a small local bank to a trusted financial institution serving thousands of customers."}
              </p>
            </section>

            <section className="bg-primary-light bg-opacity-10 p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                {language === "ml" ? "ഞങ്ങളുടെ നേട്ടങ്ങൾ" : "Our Achievements"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">
                    {language === "ml" ? "വർഷങ്ങൾ" : "Years of Service"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-gray-600">
                    {language === "ml" ? "ഉപഭോക്താക്കൾ" : "Happy Customers"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
                  <div className="text-gray-600">
                    {language === "ml" ? "ആസ്തികൾ" : "Assets Managed"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">
                    {language === "ml" ? "ശാഖകൾ" : "Bank Locations"}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
