This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, set up the environment variables:

1. Create a `.env.local` file in the root directory
2. Add your Resend API key (get one from [resend.com](https://resend.com)):
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

Ten projekt używa adaptera `@cloudflare/next-on-pages` do wdrażania na Cloudflare Pages.

### Opcja 1: Wdrażanie przez GitHub

1. Wypchnij kod do repozytorium GitHub
2. Zaloguj się do panelu Cloudflare
3. Przejdź do sekcji "Pages" i utwórz nowy projekt
4. Połącz swoje repozytorium GitHub
5. Skonfiguruj ustawienia budowania:
   - Build command: `npm run pages:build`
   - Build output directory: `.vercel/output/static`
   - Build system version: `2`
   - Root directory: `/` (zostaw domyślną wartość)
6. Dodaj następujące zmienne środowiskowe:
   - `RESEND_API_KEY` - Twój klucz API z Resend
   - `NODE_VERSION` - Ustaw na `18` lub wyższą

### Opcja 2: Wdrażanie lokalne

Możesz również wdrożyć stronę lokalnie za pomocą następujących komend:

```bash
# Zainstaluj Wrangler CLI (jeśli jeszcze nie masz)
npm install -g wrangler

# Zaloguj się do Cloudflare
npx wrangler login

# Zbuduj projekt dla Cloudflare Pages
npm run pages:build

# Wdróż projekt
npx wrangler pages deploy .vercel/output/static
```

### Komendy dla Cloudflare Pages

- `npm run pages:build` - Buduje projekt dla Cloudflare Pages
- `npm run pages:deploy` - Buduje i wdraża projekt
- `npm run pages:watch` - Buduje projekt w trybie watch
- `npm run pages:dev` - Uruchamia lokalny serwer deweloperski

### Ważne informacje

- Projekt używa adaptera `@cloudflare/next-on-pages` do obsługi funkcji Next.js na Cloudflare
- Formularz kontaktowy wysyła e-maile za pomocą usługi Resend
- Upewnij się, że funkcje Cloudflare Pages są włączone dla Twojego projektu

Więcej informacji znajdziesz w [dokumentacji Cloudflare Pages](https://developers.cloudflare.com/pages/) oraz [dokumentacji adaptera next-on-pages](https://github.com/cloudflare/next-on-pages).
