# Event Ticketing MVP — Preview

A static preview of an event ticketing MVP, built on Next.js. The homepage still leads with **Hello World** (per the original brief) and adds a polished preview of what the full product will look like: search, event cards, seat selection, checkout, an admin dashboard, and the target architecture.

- Live: <https://nextjs-ticketing-mvp-test.vercel.app>
- Source: <https://github.com/mykhail-druz/nextjs-ticketing-mvp-test>

## Sections

1. **Hero** — Hello World + project framing.
2. **Discover** — search bar, filters, category chips.
3. **Events** — three sample event cards (concert / sports / theatre).
4. **Seats** — interactive-looking seat map with order summary.
5. **Checkout** — 3-step indicator, mock payment form, order totals.
6. **Admin** — dashboard preview with stats and recent orders.
7. **Architecture** — Frontend → API Routes → Supplier · Payments · Admin.

All sections are static / visual — no business logic, no third-party API calls, no payments.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- [lucide-react](https://lucide.dev/) icons
- Geist & Geist Mono via `next/font/google`

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build & lint

```bash
npm run build
npm run start
npm run lint
```

## Deploy

Deploys automatically to [Vercel](https://vercel.com/) on push to `main` — no configuration required.

## Project layout

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, viewport
│   ├── page.tsx          # composes the section components
│   ├── globals.css       # Tailwind v4 @theme tokens (light + dark)
│   ├── icon.tsx          # favicon
│   └── opengraph-image.tsx
└── components/
    ├── icons/GithubMark.tsx
    └── sections/
        ├── Header.tsx
        ├── Hero.tsx
        ├── EventSearch.tsx
        ├── EventList.tsx
        ├── SeatSelection.tsx
        ├── CheckoutFlow.tsx
        ├── AdminPreview.tsx
        ├── Architecture.tsx
        └── Footer.tsx
```
