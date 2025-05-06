'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: 'Jak długo trwa standardowy remont mieszkania?',
    answer: 'Czas trwania remontu mieszkania zależy od jego zakresu i wielkości lokalu. Standardowy remont mieszkania o powierzchni 50-70m² trwa zazwyczaj od 4 do 8 tygodni. Dokładny harmonogram ustalamy indywidualnie po zapoznaniu się z zakresem prac.'
  },
  {
    id: 2,
    question: 'Czy zapewniacie materiały budowlane?',
    answer: 'Tak, możemy zapewnić wszystkie niezbędne materiały budowlane i wykończeniowe. Współpracujemy z zaufanymi dostawcami, dzięki czemu możemy zaoferować materiały wysokiej jakości w konkurencyjnych cenach. Możliwa jest również realizacja zlecenia z materiałów dostarczonych przez klienta.'
  },
  {
    id: 3,
    question: 'Czy udzielacie gwarancji na wykonane prace?',
    answer: 'Tak, na wszystkie wykonane przez nas prace udzielamy gwarancji. Standardowy okres gwarancji wynosi 24 miesiące, ale w zależności od rodzaju prac może być dłuższy. Szczegółowe warunki gwarancji określamy w umowie.'
  },
  {
    id: 4,
    question: 'Jak wygląda proces wyceny remontu?',
    answer: 'Proces wyceny rozpoczyna się od bezpłatnej konsultacji i oględzin miejsca remontu. Na podstawie zakresu prac i Państwa oczekiwań przygotowujemy szczegółową wycenę, która zawiera koszt robocizny oraz materiałów. Wycena jest bezpłatna i niezobowiązująca.'
  },
  {
    id: 5,
    question: 'Czy sprzątacie po zakończeniu prac?',
    answer: 'Tak, po zakończeniu wszystkich prac remontowych wykonujemy dokładne sprzątanie. Usuwamy wszystkie pozostałości po remoncie, aby oddać Państwu mieszkanie lub dom gotowy do użytkowania. Sprzątanie po remoncie jest zawsze wliczone w cenę usługi.'
  },
  {
    id: 6,
    question: 'Czy pomagacie w uzyskaniu niezbędnych pozwoleń?',
    answer: 'Tak, pomagamy w uzyskaniu wszelkich niezbędnych pozwoleń i dokumentów wymaganych do przeprowadzenia remontu. Mamy doświadczenie w kontaktach z administracją budynków i urzędami, co znacznie ułatwia i przyspiesza proces formalny.'
  },
  {
    id: 7,
    question: 'Czy wykonujecie prace poza Sosnowcem?',
    answer: 'Tak, realizujemy zlecenia nie tylko w Sosnowcu, ale również w okolicznych miejscowościach. Obszar naszego działania obejmuje całą aglomerację śląską. W przypadku większych zleceń możemy podjąć się prac również w bardziej odległych lokalizacjach.'
  },
  {
    id: 8,
    question: 'Jak mogę się z Wami skontaktować w sprawie wyceny?',
    answer: 'Można się z nami skontaktować telefonicznie pod numerem 518 521 880, mailowo na adres bkartbudbiuro@gmail.com lub poprzez formularz kontaktowy na naszej stronie. Odpowiadamy na wszystkie zapytania najszybciej jak to możliwe, zazwyczaj w ciągu 24 godzin.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Często zadawane <span className="text-primary">pytania</span></h2>
          <p className="text-gray-dark max-w-3xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług remontowych.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 rounded-xl flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white hover:bg-primary/5'
                }`}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white border border-gray-100 rounded-b-xl shadow-sm">
                      <p className="text-gray-dark">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
