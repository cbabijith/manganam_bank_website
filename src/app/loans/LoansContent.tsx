"use client";

import { Navbar } from "@/components/Navbar";
import { loanSchemes } from "@/data/loans";
import { useLanguage } from "@/contexts/LanguageContext";

function LoanCard({ loan, language }: { loan: any; language: string }) {
  const name = language === "ml" ? loan.nameML : loan.name;
  const eligibility = language === "ml" ? loan.eligibilityML : loan.eligibility;
  const documents = language === "ml" ? loan.documentsML : loan.documents;
  const benefits = language === "ml" ? loan.benefitsML : loan.benefits;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="bg-primary p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-gold font-semibold">{loan.interestRate}</p>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-primary mb-2">
            {language === "ml" ? "യോഗ്യത:" : "Eligibility:"}
          </h4>
          <p className="text-sm text-gray-600">{eligibility}</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">
            {language === "ml" ? "രേഖകൾ:" : "Documents:"}
          </h4>
          <p className="text-sm text-gray-600">{documents}</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">
            {language === "ml" ? "പ്രയോജനങ്ങൾ:" : "Benefits:"}
          </h4>
          <p className="text-sm text-gray-600">{benefits}</p>
        </div>
        <div className="pt-4 border-t">
          <p className="text-sm font-semibold text-gold">
            {language === "ml" ? "പരമാവധി:" : "Max Amount:"} {loan.maxAmount}
          </p>
          <p className="text-sm font-semibold text-gold">
            {language === "ml" ? "കാലാവധി:" : "Tenure:"} {loan.tenure}
          </p>
        </div>
      </div>
    </div>
  );
}

export function LoansContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === "ml" ? "വായ്പകൾ" : "Loan Schemes"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ വായ്പ പദ്ധതികൾ"
                : "Loan schemes tailored to meet your financial needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loanSchemes.map((loan) => (
              <LoanCard key={loan.id} loan={loan} language={language} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
