"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export function GalleryContent() {
  const { language } = useLanguage();

  const galleryImages = [
    { id: 1, category: "Bank Building", description: "Main branch building" },
    { id: 2, category: "Staff", description: "Bank staff members" },
    { id: 3, category: "Events", description: "Bank events and ceremonies" },
    { id: 4, category: "Welfare Programs", description: "Community welfare programs" },
    { id: 5, category: "Meetings", description: "Board meetings" },
    { id: 6, category: "Bank Building", description: "Branch interior" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {language === "ml" ? "ഗാലറി" : "Gallery"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ml"
                ? "ഞങ്ങളുടെ ബാങ്കിന്റെ ചിത്രങ്ങൾ"
                : "Images of our bank and events"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-6xl">
                  📷
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-1">{image.category}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
