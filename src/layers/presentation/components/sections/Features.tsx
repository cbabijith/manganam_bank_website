"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Features() {
  const { language } = useLanguage();

  const features = language === "ml"
    ? [
        { title: "സുരക്ഷിത ബാങ്കിംഗ്", description: "നിങ്ങളുടെ സാമ്പത്തിക വിവരങ്ങളും ഇടപാടുകളും സംരക്ഷിക്കാൻ ആധുനിക സുരക്ഷാ നടപടികൾ.", icon: "🔒", color: "from-blue-500 to-blue-600" },
        { title: "ഡിജിറ്റൽ സേവനങ്ങൾ", description: "ഞങ്ങളുടെ മൊബൈൽ ബാങ്കിംഗ് പ്ലാറ്റ്‌ഫോമുകളിലൂടെ എവിടെ നിന്നും എപ്പോഴും നിങ്ങളുടെ അക്കൗണ്ടുകൾ ആക്സസ്സ് ചെയ്യുക.", icon: "📱", color: "from-purple-500 to-purple-600" },
        { title: "മത്സരാധിഷ്ഠിത നിരക്കുകൾ", description: "സേവിംഗ്സ് അക്കൗണ്ടുകളിൽ മത്സരാധിഷ്ഠിത പലിശ നിരക്കുകളും വായ്പകളിൽ കുറഞ്ഞ നിരക്കുകളും ആസ്വദിക്കുക.", icon: "📈", color: "from-green-500 to-green-600" },
        { title: "24/7 പിന്തുണ", description: "നിങ്ങളെ സഹായിക്കാൻ ഞങ്ങളുടെ കസ്റ്റമർ സപ്പോർട്ട് ടീം എപ്പോഴും ലഭ്യമാണ്.", icon: "💬", color: "from-gold to-gold-dark" },
      ]
    : [
        { title: "Secure Banking", description: "State-of-the-art security measures to protect your financial information and transactions.", icon: "🔒", color: "from-blue-500 to-blue-600" },
        { title: "Digital Services", description: "Access your accounts anytime, anywhere with our mobile and online banking platforms.", icon: "📱", color: "from-purple-500 to-purple-600" },
        { title: "Competitive Rates", description: "Enjoy competitive interest rates on savings accounts and low rates on loans.", icon: "📈", color: "from-green-500 to-green-600" },
        { title: "24/7 Support", description: "Our customer support team is available round the clock to assist you.", icon: "💬", color: "from-gold to-gold-dark" },
      ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">
            {language === "ml" ? "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം?" : "Why Choose Us?"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {language === "ml"
              ? "നിങ്ങളുടെ സാമ്പത്തിക ആവശ്യങ്ങൾ നിറവേറ്റാൻ ഞങ്ങൾ സമഗ്രമായ ബാങ്കിംഗ് പരിഹാരങ്ങൾ നൽകുന്നു"
              : "We provide comprehensive banking solutions designed to meet your financial needs"}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background p-4 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12`}>{feature.icon}</div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
