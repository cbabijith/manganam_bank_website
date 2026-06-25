"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

function EMICalculatorContent() {
  const { language } = useLanguage();
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [emi, setEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emiValue =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    
    const totalPaymentValue = emiValue * tenure;
    const totalInterestValue = totalPaymentValue - loanAmount;

    setEMI(Math.round(emiValue));
    setTotalPayment(Math.round(totalPaymentValue));
    setTotalInterest(Math.round(totalInterestValue));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === "ml" ? "EMI കാൽക്കുലേറ്റർ" : "EMI Calculator"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "നിങ്ങളുടെ വായ്പയുടെ EMI കണക്കാക്കുക"
                : "Calculate your loan EMI easily"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "ml" ? "വായ്പ തുക (₹)" : "Loan Amount (₹)"}
                    </label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      min="1000"
                      step="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "ml" ? "പലിശ നിരക്ക് (% വാർഷിക)" : "Interest Rate (% per annum)"}
                    </label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      min="1"
                      max="30"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "ml" ? "വായ്പ കാലയളവ് (മാസങ്ങൾ)" : "Loan Tenure (Months)"}
                    </label>
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      min="1"
                      max="360"
                    />
                  </div>
                  <button
                    onClick={calculateEMI}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    {language === "ml" ? "EMI കണക്കാക്കുക" : "Calculate EMI"}
                  </button>
                </div>

                <div className="bg-primary-light bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    {language === "ml" ? "ഫലങ്ങൾ" : "Results"}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">
                        {language === "ml" ? "മാസിക EMI" : "Monthly EMI"}
                      </div>
                      <div className="text-2xl font-bold text-primary">₹{emi.toLocaleString()}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">
                        {language === "ml" ? "മൊത്തം പലിശ" : "Total Interest"}
                      </div>
                      <div className="text-2xl font-bold text-primary">₹{totalInterest.toLocaleString()}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">
                        {language === "ml" ? "മൊത്തം തിരിച്ചടവ്" : "Total Repayment"}
                      </div>
                      <div className="text-2xl font-bold text-primary">₹{totalPayment.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function EMICalculatorPage() {
  return <EMICalculatorContent />;
}
