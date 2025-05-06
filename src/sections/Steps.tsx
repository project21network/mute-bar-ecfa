'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Kontakt i konsultacja',
    description: 'Skontaktuj się z nami telefonicznie, mailowo lub przez formularz kontaktowy. Omówimy Twoje potrzeby i ustalimy termin bezpłatnej konsultacji.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Oględziny i wycena',
    description: 'Przyjedziemy na miejsce, aby dokładnie ocenić zakres prac. Na podstawie oględzin przygotujemy szczegółową i bezpłatną wycenę.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Podpisanie umowy',
    description: 'Po akceptacji wyceny podpisujemy umowę, która szczegółowo określa zakres prac, terminy realizacji, koszty oraz warunki gwarancji.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Realizacja prac',
    description: 'Przystępujemy do realizacji prac zgodnie z ustalonym harmonogramem. Na bieżąco informujemy o postępach i konsultujemy ewentualne zmiany.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Kontrola jakości',
    description: 'Po zakończeniu prac przeprowadzamy dokładną kontrolę jakości, aby upewnić się, że wszystko zostało wykonane zgodnie z najwyższymi standardami.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Odbiór i gwarancja',
    description: 'Przekazujemy Ci gotowy projekt do odbioru. Na wszystkie wykonane prace udzielamy gwarancji, zapewniając Ci spokój i bezpieczeństwo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function Steps() {
  return (
    <section id="steps" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Jak <span className="text-primary">pracujemy</span></h2>
          <p className="text-gray-dark max-w-3xl mx-auto">
            Poznaj nasz sprawdzony proces realizacji projektów remontowych, który gwarantuje najwyższą jakość i zadowolenie klientów.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {step.id}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-dark">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                    {step.icon}
                  </div>
                  {/* Horizontal line for mobile */}
                  <div className="lg:hidden absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2 -z-10"></div>
                </div>

                <div className="w-full lg:w-1/2 lg:hidden">
                  {/* Empty div for layout on mobile */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-dark mb-6">
            Gotowy, aby rozpocząć swój projekt remontowy? Skontaktuj się z nami już dziś!
          </p>
          <Link href="#contact" className="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Rozpocznij współpracę
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
