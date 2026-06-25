"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export function DownloadsContent() {
  const { language } = useLanguage();

  const downloads = [
    { id: 1, name: "Membership Form", nameML: "അംഗത്വ ഫോം", size: "250 KB" },
    { id: 2, name: "Loan Application", nameML: "വായ്പ അപേക്ഷ", size: "300 KB" },
    { id: 3, name: "Deposit Form", nameML: "നിക്ഷേപ ഫോം", size: "200 KB" },
    { id: 4, name: "KYC Form", nameML: "KYC ഫോം", size: "180 KB" },
    { id: 5, name: "Nomination Form", nameML: "നോമിനേഷൻ ഫോം", size: "150 KB" },
    { id: 6, name: "Complaint Form", nameML: "പരാതി ഫോം", size: "170 KB" },
    { id: 7, name: "Annual Report", nameML: "വാർഷിക റിപ്പോർട്ട്", size: "2.5 MB" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === "ml" ? "ഡൗൺലോഡുകൾ" : "Downloads"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "ഫോമുകളും രേഖകളും ഡൗൺലോഡ് ചെയ്യുക"
                : "Download forms and documents"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      {language === "ml" ? "പേര്" : "Name"}
                    </th>
                    <th className="px-6 py-4 text-left">
                      {language === "ml" ? "വലുപ്പ" : "Size"}
                    </th>
                    <th className="px-6 py-4 text-left">
                      {language === "ml" ? "ഡൗൺലോഡ്" : "Download"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {downloads.map((download) => (
                    <tr key={download.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {language === "ml" ? download.nameML : download.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{download.size}</td>
                      <td className="px-6 py-4">
                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
                          {language === "ml" ? "ഡൗൺലോഡ്" : "Download"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
