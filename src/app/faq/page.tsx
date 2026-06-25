"use client";

import { Navbar } from "@/components/Navbar";
import { faqs } from "@/data/faq";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

function FAQItem({ faq, language, isOpen, onToggle }: any) {
  const question = language === "ml" ? faq.questionML : faq.question;
  const answer = language === "ml" ? faq.answerML : faq.answer;

  return (
    <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-primary">{question}</span>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === "ml" ? "ചോദ്യങ്ങൾ" : "Frequently Asked Questions"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "സാധാരണയായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ"
                : "Find answers to commonly asked questions"}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                language={language}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
