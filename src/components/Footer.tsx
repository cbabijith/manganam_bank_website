"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  const quickLinks = [
    { href: "/about", label: language === "ml" ? "ഞങ്ങളെക്കുറിച്ച്" : "About Us" },
    { href: "/services", label: language === "ml" ? "സേവനങ്ങൾ" : "Services" },
    { href: "/loans", label: language === "ml" ? "വായ്പകൾ" : "Loans" },
    { href: "/deposits", label: language === "ml" ? "നിക്ഷേപങ്ങൾ" : "Deposits" },
    { href: "/contact", label: language === "ml" ? "ബന്ധപ്പെടുക" : "Contact" },
  ];

  const otherLinks = [
    { href: "/board", label: language === "ml" ? "ഡയറക്ടർ ബോർഡ്" : "Board" },
    { href: "/gallery", label: language === "ml" ? "ഗാലറി" : "Gallery" },
    { href: "/downloads", label: language === "ml" ? "ഡൗൺലോഡുകൾ" : "Downloads" },
    { href: "/faq", label: language === "ml" ? "ചോദ്യങ്ങൾ" : "FAQ" },
    { href: "/calculators/emi", label: "EMI Calculator" },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5">
                <Image
                  src="/manganam.svg"
                  alt="Manganam Bank Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">{language === "ml" ? "മംഗലം സർവീസ്" : "Manganam Service"}</div>
                <div className="text-gold text-xs leading-tight">{language === "ml" ? "കോ-ഓപ്പറേറ്റീവ് ബാങ്ക് ലിമിറ്റഡ്" : "Co-operative Bank Ltd."}</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {language === "ml"
                ? "2009 മുതൽ വിശ്വസ്തതയും സുരക്ഷയും സ്ഥാപിക്കുന്നു. നിങ്ങളുടെ സാമ്പത്തിക പങ്കാളി."
                : "Building trust and securing futures since 2009. Your trusted financial partner."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4 text-sm sm:text-base">
              {language === "ml" ? "ദ്രുത ലിങ്കുകൾ" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4 text-sm sm:text-base">
              {language === "ml" ? "മറ്റ് ലിങ്കുകൾ" : "Other Links"}
            </h3>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gold mb-4 text-sm sm:text-base">
              {language === "ml" ? "ബന്ധപ്പെടുക" : "Contact Us"}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📍</span>
                <span>Manganam, Kottayam, Kerala 686018</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">📞</span>
                <span>+91 481 257 0424</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✉️</span>
                <span>info@manganambank.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-6 text-center">
          <p className="text-xs sm:text-sm text-white/60">
            © {new Date().getFullYear()} Manganam Service Co-operative Bank Ltd. {language === "ml" ? "എല്ലാ അവകാശങ്ങളും സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
