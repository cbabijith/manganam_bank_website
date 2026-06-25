"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { ServiceRepository } from "@/layers/data/repositories/ServiceRepository";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesContent() {
  const { language } = useLanguage();
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const repository = ServiceRepository.getInstance();
    repository.findAll().then(setServices);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-primary">
              {language === "ml" ? "ഞങ്ങളുടെ സേവനങ്ങൾ" : "Our Services"}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "നിങ്ങളുടെ സാമ്പത്തിക ആവശ്യങ്ങൾ നിറവേറ്റാൻ സമഗ്രമായ ബാങ്കിംഗ് പരിഹാരങ്ങൾ"
                : "Comprehensive banking solutions tailored to meet your financial needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service: any) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-3 text-primary">
                  {service.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-primary-light bg-opacity-20 text-primary text-sm px-3 py-1 rounded-full">
                    {service.category.replace(/_/g, " ")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-primary-light bg-opacity-10 p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                {language === "ml" ? "തുടങ്ങാൻ തയ്യാരമാണോ?" : "Ready to Get Started?"}
              </h2>
              <p className="text-gray-700 mb-8">
                {language === "ml"
                  ? "ഞങ്ങളുടെ സേവനങ്ങളെക്കുറിച്ചും നിങ്ങളുടെ സാമ്പത്തിക ലക്ഷ്യങ്ങൾ നേടാൻ ഇന്നേ ഞങ്ങളെ ബന്ധപ്പെടുക."
                  : "Contact us today to learn more about our services and how we can help you achieve your financial goals."}
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                {language === "ml" ? "ഞങ്ങളെ ബന്ധപ്പെടുക" : "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
