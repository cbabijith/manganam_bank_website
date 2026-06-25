"use client";

import { Navbar } from "@/components/Navbar";
import { depositSchemes } from "@/data/deposits";
import { useLanguage } from "@/contexts/LanguageContext";

function DepositCard({ deposit, language }: { deposit: any; language: string }) {
  const name = language === "ml" ? deposit.nameML : deposit.name;
  const features = language === "ml" ? deposit.featuresML : deposit.features;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="bg-primary p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-gold font-semibold">{deposit.interestRate}</p>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-primary mb-2">
            {language === "ml" ? "സവിശേഷതകൾ:" : "Features:"}
          </h4>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            {features.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t">
          <p className="text-sm font-semibold text-gold">
            {language === "ml" ? "കുറഞ്ഞ തുക:" : "Min Amount:"} {deposit.minAmount}
          </p>
          <p className="text-sm font-semibold text-gold">
            {language === "ml" ? "കാലാവധി:" : "Tenure:"} {deposit.tenure}
          </p>
        </div>
      </div>
    </div>
  );
}

export function DepositsContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === "ml" ? "ഡിപ്പോസിറ്റുകൾ" : "Deposit Schemes"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "നിങ്ങളുടെ സമ്പാദ്യം വളർത്താൻ മികച്ച ഡിപ്പോസിറ്റ് പദ്ധതികൾ"
                : "Grow your savings with our attractive deposit schemes"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {depositSchemes.map((deposit) => (
              <DepositCard key={deposit.id} deposit={deposit} language={language} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
