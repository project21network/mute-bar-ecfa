'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'apartments', name: 'Mieszkania' },
  { id: 'houses', name: 'Domy' },
  { id: 'bathrooms', name: 'Łazienki' },
  { id: 'kitchens', name: 'Kuchnie' },
  { id: 'exteriors', name: 'Elewacje' }
];

const projects = [
  {
    id: 1,
    title: 'Remont mieszkania 60m²',
    category: 'apartments',
    description: 'Kompleksowy remont mieszkania w bloku, obejmujący wymianę instalacji, podłóg, malowanie oraz montaż nowej kuchni i łazienki.',
    image: '/images/mieszkanie.jpg'
  },
  {
    id: 2,
    title: 'Nowoczesna łazienka',
    category: 'bathrooms',
    description: 'Remont łazienki w stylu nowoczesnym z wykorzystaniem płytek wielkoformatowych, podwieszanych elementów i oświetlenia LED.',
    image: '/images/lazienka.jpg'
  },
  {
    id: 3,
    title: 'Kuchnia',
    category: 'kitchens',
    description: 'Projekt i wykonanie kuchni w stylu skandynawskim z białymi frontami, drewnianym blatem i nowoczesnymi sprzętami AGD.',
    image: '/images/kuchnia2.jpg'
  },
  {
    id: 4,
    title: 'Remont domu jednorodzinnego',
    category: 'houses',
    description: 'Kompleksowy remont domu jednorodzinnego o powierzchni 120m², obejmujący prace wewnętrzne i zewnętrzne.',
    image: '/images/dom.jpg'
  },
  {
    id: 5,
    title: 'Elewacja z ociepleniem',
    category: 'exteriors',
    description: 'Wykonanie elewacji z ociepleniem styropianem, tynkiem silikonowym i elementami dekoracyjnymi.',
    image: '/images/elewacja.jpg'
  },
  {
    id: 6,
    title: 'Łazienka w stylu industrialnym',
    category: 'bathrooms',
    description: 'Remont łazienki w stylu industrialnym z wykorzystaniem betonu architektonicznego, czarnych elementów i surowych materiałów.',
    image: '/images/lazienka2.jpg'
  },
  {
    id: 7,
    title: 'Kuchnia otwarta na salon',
    category: 'kitchens',
    description: 'Projekt i wykonanie kuchni otwartej na salon, z wyspą kuchenną i zintegrowanymi sprzętami AGD.',
    image: '/images/kuchnia.jpg'
  },
  {
    id: 8,
    title: 'Mieszkanie w kamienicy',
    category: 'apartments',
    description: 'Remont mieszkania w zabytkowej kamienicy z zachowaniem oryginalnych elementów architektonicznych.',
    image: '/images/mieszkanie2.jpg'
  },
  {
    id: 9,
    title: 'Elewacja z klinkieru',
    category: 'exteriors',
    description: 'Wykonanie elewacji z płytek klinkierowych z elementami drewnianymi.',
    image: '/images/elewacja2.jpg'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Nasze <span className="text-primary">Realizacje</span></h2>
          <p className="text-gray-dark max-w-3xl mx-auto">
            Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów. Każda realizacja to dowód naszego profesjonalizmu i dbałości o detale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{categories.find(c => c.id === project.category)?.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-dark">Brak projektów w wybranej kategorii.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/galeria"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light transition-colors duration-300 flex items-center shadow-md"
          >
            <span>Zobacz więcej realizacji</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find(p => p.id === selectedProject) && (
                  <>
                    <div className="relative h-64 md:h-auto md:w-1/2">
                      <Image
                        src={projects.find(p => p.id === selectedProject)!.image}
                        alt={projects.find(p => p.id === selectedProject)!.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-1/2 overflow-y-auto">
                      <h3 className="text-2xl font-bold mb-2">{projects.find(p => p.id === selectedProject)!.title}</h3>
                      <p className="text-primary font-medium mb-4">
                        {categories.find(c => c.id === projects.find(p => p.id === selectedProject)!.category)?.name}
                      </p>
                      <p className="text-gray-dark mb-6">{projects.find(p => p.id === selectedProject)!.description}</p>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-light transition-colors duration-300"
                      >
                        Zamknij
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
