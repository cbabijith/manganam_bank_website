"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/loans", label: "Loans" },
    { href: "/deposits", label: "Deposits" },
    { href: "/contact", label: "Contact" },
  ];

  const otherLinks = [
    { href: "/board", label: "Board" },
    { href: "/gallery", label: "Gallery" },
    { href: "/downloads", label: "Downloads" },
    { href: "/faq", label: "FAQ" },
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
                <div className="font-bold text-sm leading-tight">Manganam Service</div>
                <div className="text-gold text-xs leading-tight">Co-operative Bank Ltd.</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Building trust and securing futures since 1920. Your trusted financial partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4 text-sm sm:text-base">
              Quick Links
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
              Other Links
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
              Contact Us
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
            © {new Date().getFullYear()} Manganam Service Co-operative Bank Ltd. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-white/60 mt-2">
            Made by{" "}
            <a
              href="https://abijithcb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold"
            >
              abijithcb.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
