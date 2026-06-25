"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/loans", label: t("nav.loans") },
    { href: "/deposits", label: t("nav.deposits") },
    { href: "/board", label: t("nav.board") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/downloads", label: t("nav.downloads") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark shadow-xl py-0"
          : "bg-primary shadow-lg py-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white p-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Image
                src="/manganam.svg"
                alt="Manganam Bank Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-xs sm:text-sm leading-tight">
                {language === "ml" ? "മംഗലം സർവീസ്" : "Manganam Service"}
              </div>
              <div className="text-gold text-[10px] sm:text-xs leading-tight">
                {language === "ml" ? "കോ-ഓപ്പറേറ്റീവ് ബാങ്ക്" : "Co-operative Bank Ltd."}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ml" : "en")}
              className="ml-4 bg-gold text-primary px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-gold-light hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {language === "en" ? "മലയാളം" : "English"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === "en" ? "ml" : "en")}
              className="bg-gold text-primary px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
            >
              {language === "en" ? "മല" : "Eng"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold p-2 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gold hover:bg-primary-dark/50 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: isOpen
                    ? `fadeInUp 0.3s ease-out ${index * 50}ms forwards`
                    : "none",
                  opacity: isOpen ? 0 : 1,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
