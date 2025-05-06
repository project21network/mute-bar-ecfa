import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Polityka Prywatności - Bogusław Król Art Bud',
  description: 'Polityka prywatności firmy Bogusław Król Art Bud - informacje o przetwarzaniu danych osobowych.',
};

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-8 text-center">Polityka Prywatności</h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">1. Informacje ogólne</h2>
              <p className="text-gray-dark mb-4">
                1.1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług oferowanych przez firmę Bogusław Król Art Bud.
              </p>
              <p className="text-gray-dark mb-4">
                1.2. Administratorem danych osobowych jest Bogusław Król prowadzący działalność gospodarczą pod nazwą Bogusław Król Art Bud z siedzibą w Sosnowcu, zwany dalej &quot;Administratorem&quot;.
              </p>
              <p className="text-gray-dark">
                1.3. Administrator dba o bezpieczeństwo danych osobowych udostępnionych przez Użytkowników. Dane te są szczególnie chronione i zabezpieczone przed dostępem osób nieupoważnionych.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">2. Rodzaje zbieranych danych</h2>
              <p className="text-gray-dark mb-4">
                2.1. Administrator może zbierać następujące dane osobowe:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-dark">
                <li className="mb-2">Imię i nazwisko</li>
                <li className="mb-2">Adres e-mail</li>
                <li className="mb-2">Numer telefonu</li>
                <li className="mb-2">Adres zamieszkania lub adres wykonania usługi</li>
                <li>Inne dane niezbędne do realizacji usługi</li>
              </ul>
              <p className="text-gray-dark">
                2.2. Dodatkowo, podczas korzystania ze strony internetowej, automatycznie zbierane mogą być dane dotyczące wizyty, np. adres IP, rodzaj przeglądarki, rodzaj systemu operacyjnego, czas spędzony na stronie.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">3. Cel zbierania danych</h2>
              <p className="text-gray-dark mb-4">
                3.1. Dane osobowe Użytkowników są zbierane w następujących celach:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-dark">
                <li className="mb-2">Realizacja usług remontowo-budowlanych</li>
                <li className="mb-2">Przygotowanie wyceny i oferty</li>
                <li className="mb-2">Kontakt z Użytkownikiem</li>
                <li className="mb-2">Realizacja obowiązków prawnych ciążących na Administratorze</li>
                <li className="mb-2">Marketing usług własnych</li>
                <li>Analiza i poprawa jakości świadczonych usług</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">4. Podstawa prawna przetwarzania danych</h2>
              <p className="text-gray-dark mb-4">
                4.1. Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz innymi aktualnie obowiązującymi przepisami prawa o ochronie danych osobowych.
              </p>
              <p className="text-gray-dark mb-4">
                4.2. Podstawą prawną przetwarzania danych osobowych jest:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-dark">
                <li className="mb-2">Zgoda Użytkownika (art. 6 ust. 1 lit. a RODO)</li>
                <li className="mb-2">Niezbędność do wykonania umowy lub podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. b RODO)</li>
                <li className="mb-2">Wypełnienie obowiązku prawnego ciążącego na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
                <li>Prawnie uzasadniony interes realizowany przez Administratora (art. 6 ust. 1 lit. f RODO)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">5. Okres przechowywania danych</h2>
              <p className="text-gray-dark mb-4">
                5.1. Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, w których dane są przetwarzane, lub do czasu wycofania zgody (jeśli podstawą przetwarzania jest zgoda).
              </p>
              <p className="text-gray-dark mb-4">
                5.2. W przypadku danych przetwarzanych w związku z realizacją umowy, dane będą przechowywane przez okres trwania umowy oraz po jej zakończeniu przez okres wymagany przepisami prawa (np. przepisy podatkowe) lub do czasu przedawnienia roszczeń.
              </p>
              <p className="text-gray-dark">
                5.3. W przypadku danych przetwarzanych na podstawie prawnie uzasadnionego interesu Administratora, dane będą przechowywane do czasu wniesienia sprzeciwu wobec takiego przetwarzania.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">6. Prawa Użytkowników</h2>
              <p className="text-gray-dark mb-4">
                6.1. Użytkownikom przysługują następujące prawa związane z przetwarzaniem danych osobowych:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-dark">
                <li className="mb-2">Prawo dostępu do swoich danych</li>
                <li className="mb-2">Prawo do sprostowania (poprawiania) swoich danych</li>
                <li className="mb-2">Prawo do usunięcia danych</li>
                <li className="mb-2">Prawo do ograniczenia przetwarzania danych</li>
                <li className="mb-2">Prawo do przenoszenia danych</li>
                <li className="mb-2">Prawo do wniesienia sprzeciwu wobec przetwarzania danych</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
              </ul>
              <p className="text-gray-dark">
                6.2. W celu realizacji powyższych praw należy skontaktować się z Administratorem za pośrednictwem adresu e-mail: bkartbudbiuro@gmail.com lub telefonicznie: 518 521 880.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="heading-md mb-4">7. Udostępnianie danych</h2>
              <p className="text-gray-dark mb-4">
                7.1. Administrator może udostępniać dane osobowe Użytkowników następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-dark">
                <li className="mb-2">Podwykonawcom - w zakresie niezbędnym do realizacji usługi</li>
                <li className="mb-2">Dostawcom usług IT i hostingowych</li>
                <li className="mb-2">Podmiotom świadczącym usługi księgowe i prawne</li>
                <li>Organom państwowym - w przypadkach przewidzianych przez przepisy prawa</li>
              </ul>
              <p className="text-gray-dark">
                7.2. Administrator nie przekazuje danych osobowych do państw trzecich (poza Europejski Obszar Gospodarczy) ani organizacji międzynarodowych.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="heading-md mb-4">8. Postanowienia końcowe</h2>
              <p className="text-gray-dark mb-4">
                8.1. Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.
              </p>
              <p className="text-gray-dark mb-4">
                8.2. Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności. Zmiany będą publikowane na stronie internetowej.
              </p>
              <p className="text-gray-dark">
                8.3. Niniejsza Polityka Prywatności obowiązuje od dnia 01.05.2023 r.
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
