"use client";

import { Navbar } from "@/components/Navbar";
import { bankInfo } from "@/data/bankInfo";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4 text-primary">
                {language === "ml" ? "ഞങ്ങളെ ബന്ധപ്പെടുക" : "Contact Us"}
              </h1>
              <p className="text-xl text-gray-600">
                {language === "ml"
                  ? "സഹായത്തിനായി ഞങ്ങൾ ഇവിടെയുണ്ട്"
                  : "We're here to help. Reach out to us for any questions or support."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {language === "ml" ? "ബന്ധപ്പെടുക" : "Get in Touch"}
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "ml" ? "പൂർണ്ണ പേര്" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={language === "ml" ? "പേര്" : "John Doe"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "ml" ? "ഇമെയിൽ വിലാസം" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={language === "ml" ? "ഇമെയിൽ" : "john@example.com"}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "ml" ? "വിഷയം" : "Subject"}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={language === "ml" ? "എങ്ങനെ സഹായിക്കാം?" : "How can we help?"}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "ml" ? "സന്ദേശം" : "Message"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={language === "ml" ? "നിങ്ങളുടെ സന്ദേശം..." : "Your message..."}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                  >
                    {language === "ml" ? "സന്ദേശം അയയ്ക്കുക" : "Send Message"}
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {language === "ml" ? "വിവരങ്ങൾ" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light bg-opacity-20 rounded-lg flex items-center justify-center text-primary text-xl">
                      📍
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-primary">
                        {language === "ml" ? "വിലാസം" : "Address"}
                      </h3>
                      <p className="text-gray-600">{bankInfo.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light bg-opacity-20 rounded-lg flex items-center justify-center text-primary text-xl">
                      📞
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-primary">
                        {language === "ml" ? "ഫോൺ" : "Phone"}
                      </h3>
                      <p className="text-gray-600">{bankInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light bg-opacity-20 rounded-lg flex items-center justify-center text-primary text-xl">
                      ✉️
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-primary">
                        {language === "ml" ? "ഇമെയിൽ" : "Email"}
                      </h3>
                      <p className="text-gray-600">{bankInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light bg-opacity-20 rounded-lg flex items-center justify-center text-primary text-xl">
                      🕐
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-primary">
                        {language === "ml" ? "പ്രവർത്തന സമയം" : "Working Hours"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {bankInfo.workingHours.weekdays}
                        <br />
                        {bankInfo.workingHours.saturday}
                        <br />
                        {bankInfo.workingHours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {language === "ml" ? "ലൊക്കേഷൻ" : "Location"}
              </h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <a
                  href={bankInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold transition-colors"
                >
                  {language === "ml"
                    ? "ഗൂഗിൾ മാപ്സിൽ കാണുക"
                    : "View on Google Maps"}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${bankInfo.phone}`}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2"
              >
                <span>📞</span>
                {language === "ml" ? "ഇപ്പോൾ വിളിക്കുക" : "Call Now"}
              </a>
              <a
                href={`https://wa.me/914812570424`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <span>💬</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
