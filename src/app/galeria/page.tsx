'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Kategorie zdjęć
const categories = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'elewacja', name: 'Elewacje' },
  { id: 'lazienka', name: 'Łazienki' },
  { id: 'plytki', name: 'Płytki' },
  { id: 'inne', name: 'Inne realizacje' }
];

// Funkcja do generowania ścieżek do zdjęć
const generateImagePaths = () => {
  const images = [];
  
  // Zdjęcia z głównego folderu
  for (let i = 1; i <= 16; i++) {
    images.push({
      id: `image${i}`,
      path: `/artbud/image${i}.jpg`,
      category: 'inne',
      title: `Realizacja ${i}`
    });
  }
  
  // Zdjęcia elewacji
  for (let i = 1; i <= 9; i++) {
    images.push({
      id: `elewacja${i}`,
      path: `/artbud/elewacja/elewacja${i}.jpg`,
      category: 'elewacja',
      title: `Elewacja ${i}`
    });
  }
  
  // Zdjęcia łazienek
  for (let i = 1; i <= 14; i++) {
    images.push({
      id: `lazienka${i}`,
      path: `/artbud/lazienka/lazienka${i}.jpg`,
      category: 'lazienka',
      title: `Łazienka ${i}`
    });
  }
  
  // Zdjęcia płytek
  for (let i = 1; i <= 3; i++) {
    images.push({
      id: `plytki${i}`,
      path: `/artbud/plytki/plytki${i}.jpg`,
      category: 'plytki',
      title: `Płytki ${i}`
    });
  }
  
  return images;
};

const galleryImages = generateImagePaths();

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 bg-gray-light/30 min-h-screen">
          <div className="container-custom pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="heading-lg mb-4">Galeria <span className="text-primary">Realizacji</span></h1>
              <p className="text-gray-dark max-w-3xl mx-auto">
                Przeglądaj nasze realizacje i zainspiruj się. Każde zdjęcie to historia zadowolonego klienta i przykład naszego profesjonalizmu.
              </p>
              <div className="mt-4">
                <Link href="/#portfolio" className="text-primary hover:underline inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Powrót do strony głównej
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-dark hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(image.path)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.path}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-dark">Brak zdjęć w wybranej kategorii.</p>
              </motion.div>
            )}

            {/* Image Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={selectedImage}
                        alt="Powiększone zdjęcie"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <button
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                      onClick={() => setSelectedImage(null)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
