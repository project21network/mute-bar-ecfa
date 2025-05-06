'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Dane opinii klientów
const testimonials = [
  {
    id: 1,
    name: 'Anna Kowalska',
    role: 'Właścicielka mieszkania',
    image: 'https://placehold.co/100x100/0099e5/FFFFFF?text=AK',
    content: 'Jestem bardzo zadowolona z usług firmy Art Bud. Remont mojego mieszkania został wykonany profesjonalnie i terminowo. Szczególnie doceniam dbałość o detale i czystość pozostawioną po zakończeniu prac.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Piotr Nowak',
    role: 'Właściciel domu',
    image: 'https://placehold.co/100x100/0099e5/FFFFFF?text=PN',
    content: 'Współpraca z firmą Pana Bogusława to czysta przyjemność. Ekipa remontowa była punktualna, pracowita i bardzo dokładna. Efekt końcowy przeszedł moje najśmielsze oczekiwania. Polecam z czystym sumieniem!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Magdalena Wiśniewska',
    role: 'Inwestor',
    image: 'https://placehold.co/100x100/0099e5/FFFFFF?text=MW',
    content: 'Zleciłam firmie Art Bud kompleksowy remont mieszkania pod wynajem. Wszystko zostało wykonane zgodnie z projektem, w ustalonym terminie i budżecie. Najemcy są zachwyceni wykończeniem. Z pewnością będę korzystać z ich usług przy kolejnych inwestycjach.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Tomasz Kowalczyk',
    role: 'Właściciel apartamentu',
    image: 'https://placehold.co/100x100/0099e5/FFFFFF?text=TK',
    content: 'Profesjonalizm na najwyższym poziomie. Pan Bogusław i jego ekipa wykonali kapitalny remont mojego apartamentu. Świetna komunikacja, terminowość i jakość wykonania. Gorąco polecam!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Co mówią nasi <span className="text-primary">klienci</span></h2>
          <p className="text-gray-dark max-w-2xl mx-auto">
            Zadowolenie naszych klientów jest dla nas najważniejsze. Poznaj opinie osób, które zaufały naszej firmie i skorzystały z naszych usług remontowych.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Karuzela opinii */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex mb-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl italic text-gray-dark mb-4">
                    &quot;{testimonials[activeIndex].content}&quot;
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Przyciski nawigacji */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-primary hover:text-white text-primary p-3 rounded-full shadow-md transition-all duration-300"
              aria-label="Poprzednia opinia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-primary hover:text-white text-primary p-3 rounded-full shadow-md transition-all duration-300"
              aria-label="Następna opinia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Wskaźniki */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary scale-125' : 'bg-gray'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dodatkowe informacje */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h3 className="heading-sm mb-4">Dołącz do grona zadowolonych klientów</h3>
          <p className="text-gray-dark mb-6">
            Skontaktuj się z nami już dziś i przekonaj się, dlaczego tak wielu klientów poleca nasze usługi.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
