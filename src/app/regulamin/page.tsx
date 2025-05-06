import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Regulamin - Bogusław Król Art Bud',
  description: 'Regulamin świadczenia usług remontowych przez firmę Bogusław Król Art Bud.',
};

export default function Regulamin() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-8 text-center">Regulamin</h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">§1. Postanowienia ogólne</h2>
              <p className="text-gray-dark mb-4">
                1.1. Niniejszy regulamin określa zasady świadczenia usług remontowo-budowlanych przez firmę Bogusław Król Art Bud z siedzibą w Sosnowcu, zwaną dalej &quot;Wykonawcą&quot;.
              </p>
              <p className="text-gray-dark mb-4">
                1.2. Zleceniodawcą jest osoba fizyczna lub prawna, która zleca Wykonawcy realizację usług remontowo-budowlanych.
              </p>
              <p className="text-gray-dark">
                1.3. Złożenie zamówienia jest równoznaczne z akceptacją niniejszego regulaminu.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">§2. Zakres usług</h2>
              <p className="text-gray-dark mb-4">
                2.1. Wykonawca świadczy usługi remontowo-budowlane, w szczególności:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-dark">
                <li className="mb-2">Kompleksowe remonty mieszkań i domów</li>
                <li className="mb-2">Wykończenia wnętrz</li>
                <li className="mb-2">Prace elewacyjne</li>
                <li className="mb-2">Prace instalacyjne (elektryczne, hydrauliczne)</li>
                <li className="mb-2">Adaptacje poddaszy</li>
                <li>Inne prace remontowo-budowlane</li>
              </ul>
              <p className="text-gray-dark">
                2.2. Szczegółowy zakres prac jest każdorazowo ustalany indywidualnie i określany w umowie zawieranej między Wykonawcą a Zleceniodawcą.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">§3. Wycena i płatności</h2>
              <p className="text-gray-dark mb-4">
                3.1. Wycena usług jest dokonywana indywidualnie na podstawie zakresu prac i jest bezpłatna.
              </p>
              <p className="text-gray-dark mb-4">
                3.2. Ostateczna cena usługi jest określana w umowie zawieranej między Wykonawcą a Zleceniodawcą.
              </p>
              <p className="text-gray-dark mb-4">
                3.3. Płatności dokonywane są zgodnie z harmonogramem określonym w umowie, zazwyczaj w formie zaliczki oraz płatności końcowej po zakończeniu prac.
              </p>
              <p className="text-gray-dark">
                3.4. W przypadku dodatkowych prac, nieprzewidzianych w pierwotnej wycenie, Wykonawca przedstawi Zleceniodawcy dodatkową wycenę do akceptacji.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">§4. Realizacja usług</h2>
              <p className="text-gray-dark mb-4">
                4.1. Termin rozpoczęcia i zakończenia prac jest określany w umowie.
              </p>
              <p className="text-gray-dark mb-4">
                4.2. Wykonawca zobowiązuje się do realizacji usług z należytą starannością, zgodnie z obowiązującymi przepisami i normami.
              </p>
              <p className="text-gray-dark mb-4">
                4.3. Zleceniodawca zobowiązany jest do udostępnienia miejsca wykonywania prac w uzgodnionych terminach.
              </p>
              <p className="text-gray-dark">
                4.4. Po zakończeniu prac Wykonawca dokona sprzątania miejsca wykonywania usług.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">§5. Gwarancja</h2>
              <p className="text-gray-dark mb-4">
                5.1. Wykonawca udziela gwarancji na wykonane prace na okres 24 miesięcy od daty zakończenia prac, potwierdzonej protokołem odbioru.
              </p>
              <p className="text-gray-dark mb-4">
                5.2. Gwarancja nie obejmuje uszkodzeń powstałych w wyniku niewłaściwego użytkowania, działania siły wyższej lub normalnego zużycia.
              </p>
              <p className="text-gray-dark">
                5.3. Wszelkie wady objęte gwarancją będą usuwane przez Wykonawcę nieodpłatnie w terminie uzgodnionym z Zleceniodawcą.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="heading-md mb-4">§6. Postanowienia końcowe</h2>
              <p className="text-gray-dark mb-4">
                6.1. W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy Kodeksu Cywilnego.
              </p>
              <p className="text-gray-dark mb-4">
                6.2. Wszelkie spory wynikające z realizacji usług będą rozstrzygane polubownie, a w przypadku braku porozumienia przez sąd właściwy dla siedziby Wykonawcy.
              </p>
              <p className="text-gray-dark">
                6.3. Regulamin wchodzi w życie z dniem 01.05.2023 r.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link href="/" className="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Wróć do strony głównej
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
