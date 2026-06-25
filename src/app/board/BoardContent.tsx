"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { boardMembers } from "@/data/board";
import { useLanguage } from "@/contexts/LanguageContext";

export function BoardContent() {
  const { language } = useLanguage();

  const president = boardMembers.find((m) => m.designation === "President");
  const vicePresident = boardMembers.find((m) => m.designation === "Vice President");
  const secretary = boardMembers.find((m) => m.designation === "Secretary");
  const directors = boardMembers.filter((m) => m.designation === "Director");

  const getBadgeColor = (designation: string) => {
    if (designation === "President") return "bg-gold text-primary";
    if (designation === "Vice President") return "bg-primary text-white";
    if (designation === "Secretary") return "bg-primary text-white";
    return "bg-gray-100 text-primary";
  };

  const MemberCard = ({ member, featured }: { member: typeof boardMembers[0]; featured?: boolean }) => (
    <div
      className={`group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 ${featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
    >
      <div className="bg-gradient-to-br from-primary to-primary-dark p-4 sm:p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110">
            👤
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
            {language === "ml" ? member.nameML : member.name}
          </h3>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getBadgeColor(member.designation)}`}>
            {language === "ml" ? member.designationML : member.designation}
          </span>
        </div>
      </div>
      {member.phone && (
        <div className="p-3 sm:p-4 flex items-center justify-center">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-300"
          >
            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">📞</span>
            <span className="font-medium">{member.phone}</span>
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14 sm:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              {language === "ml" ? "ഡയറക്ടർ ബോർഡ്" : "Board of Directors"}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "ഞങ്ങളുടെ നേതൃത്വ സംഘം പരിചിതപ്പെടുക — വിശ്വസ്തതയും സേവനവും ലക്ഷ്യമാക്കി"
                : "Meet our leadership team — committed to trust, service, and excellence"}
            </p>
          </div>

          {/* Leadership Section */}
          <div className="max-w-6xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 text-center">
              {language === "ml" ? "നേതൃത്വം" : "Leadership"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {president && <MemberCard member={president} featured />}
              {vicePresident && <MemberCard member={vicePresident} featured />}
              {secretary && <MemberCard member={secretary} featured />}
            </div>
          </div>

          {/* Directors Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 text-center">
              {language === "ml" ? "ഡയറക്ടർമാർ" : "Directors"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {directors.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 text-center">
              {language === "ml" ? "ചുമതലകൾ" : "Roles & Responsibilities"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">
                  {language === "ml" ? "പ്രസിഡന്റ്" : "President"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ml"
                    ? "ബോർഡ് മീറ്റിംഗുകൾ നയിക്കുക, തന്ത്രപരമായ തീരുമാനങ്ങൾ മേൽനോട്ടം വഹിക്കുക, ഔദ്യോഗിക കാര്യങ്ങളിൽ ബാങ്കിനെ പ്രതിനിധീകരിക്കുക."
                    : "Leads the Board, presides over meetings, oversees strategic decisions, and represents the bank in official matters."}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">
                  {language === "ml" ? "വൈസ് പ്രസിഡന്റ്" : "Vice President"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ml"
                    ? "പ്രസിഡന്റിനെ സഹായിക്കുക, പ്രസിഡന്റ് സാന്നിധ്യമില്ലാത്തപ്പോൾ മീറ്റിംഗുകൾ നയിക്കുക."
                    : "Supports the President, chairs meetings when President is absent, assists in policy implementation."}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">
                  {language === "ml" ? "ഡയറക്ടർമാർ" : "Directors"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ml"
                    ? "വായ്പകൾ അംഗീകരിക്കുക, നയങ്ങൾ രൂപ്പെടുത്തുക, സാമ്പത്തിക പ്രകടനം നിരീക്ഷിക്കുക, ബഡ്ജറ്റുകൾ അംഗീകരിക്കുക."
                    : "Approve loans, frame policies, monitor financial performance, approve budgets, ensure regulatory compliance."}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">
                  {language === "ml" ? "സെക്രട്ടറി" : "Secretary"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ml"
                    ? "ദൈനംദിന ഭരണം കൈകാര്യം ചെയ്യുക, രേഖകൾ സൂക്ഷിക്കുക, ബോർഡ് തീരുമാനങ്ങൾ നടപ്പിലാക്കുക."
                    : "Manages day-to-day administration, maintains records, implements board decisions, ensures regulatory compliance."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
