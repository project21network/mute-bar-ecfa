'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 1,
    name: 'Remont podstawowy',
    description: 'Idealne rozwiązanie dla odświeżenia mieszkania',
    price: 'od 400 zł',
    features: [
      'Malowanie ścian i sufitów',
      'Wymiana podłóg',
      'Drobne naprawy',
      'Montaż oświetlenia',
      'Sprzątanie po remoncie'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Remont kompleksowy',
    description: 'Pełna metamorfoza Twojego mieszkania',
    price: 'od 1000 zł',
    features: [
      'Wszystko z pakietu podstawowego',
      'Wymiana instalacji elektrycznej',
      'Wymiana instalacji hydraulicznej',
      'Prace wyburzeniowe',
      'Zabudowy gipsowo-kartonowe',
      'Układanie płytek',
      'Montaż armatury łazienkowej'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Wykończenie pod klucz',
    description: 'Kompleksowe wykończenie nowego mieszkania',
    price: 'od 800 zł',
    features: [
      'Wszystko z pakietu kompleksowego',
      'Projekt aranżacji wnętrz',
      'Zakup i dostawa materiałów',
      'Montaż mebli',
      'Wyposażenie kuchni i łazienki',
      'Dekoracje i dodatki',
      'Gwarancja 36 miesięcy'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Nasz <span className="text-primary">Cennik</span></h2>
          <p className="text-gray-dark max-w-3xl mx-auto">
            Oferujemy konkurencyjne ceny przy zachowaniu najwyższej jakości usług. Poniżej przedstawiamy orientacyjne ceny naszych usług.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                    Najpopularniejszy
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-dark mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary-light'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Zapytaj o wycenę
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gray-light/50 p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Indywidualna wycena</h3>
          <p className="text-gray-dark mb-6 text-center">
            Każdy remont jest inny, dlatego oferujemy również indywidualne wyceny dostosowane do Twoich potrzeb.
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę Twojego projektu.
          </p>
          <div className="flex justify-center">
            <Link href="#contact" className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Darmowa wycena
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
