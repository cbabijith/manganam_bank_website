"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function InterestRates() {
  const { language } = useLanguage();

  const rates = [
    { scheme: "Savings Account", rate: "3.5% - 4%", schemeML: "സേവിംഗ്സ് അക്കൗണ്ട്" },
    { scheme: "Fixed Deposit", rate: "6.5% - 7.5%", schemeML: "ഫിക്സഡ് ഡിപ്പോസിറ്റ്" },
    { scheme: "Recurring Deposit", rate: "6% - 7%", schemeML: "റിക്കറിംഗ് ഡിപ്പോസിറ്റ്" },
    { scheme: "Gold Loan", rate: "9.5% - 12%", schemeML: "സ്വർണ്ണ വായ്പ" },
    { scheme: "Personal Loan", rate: "12% - 14%", schemeML: "വ്യക്തിഗത വായ്പ" },
    { scheme: "Housing Loan", rate: "8.5% - 10.5%", schemeML: "ഭവന വായ്പ" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            {language === "ml" ? "പലിശ നിരക്കുകൾ" : "Interest Rates"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {language === "ml"
              ? "ഞങ്ങളുടെ മത്സരാധിഷ്ഠിത നിരക്കുകൾ"
              : "Our competitive interest rates"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {rates.map((item, index) => (
                <div
                  key={index}
                  className={`group p-4 sm:p-6 flex justify-between items-center transition-all duration-300 hover:bg-primary/5 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <span className="font-semibold text-gray-700 text-sm sm:text-base">
                    {language === "ml" ? item.schemeML : item.scheme}
                  </span>
                  <span className="text-gold font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            {language === "ml"
              ? "* നിരക്കുകൾ മാറ്റാവുന്നതാണ്. ഏറ്റവും പുതിയ നിരക്കുകൾക്ക് ബാങ്കുമായി ബന്ധപ്പെടുക."
              : "* Rates are subject to change. Contact the bank for latest rates."}
          </p>
        </div>
      </div>
    </section>
  );
}
