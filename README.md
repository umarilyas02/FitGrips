<div align="center">

# 🏋️ FitGrips

**A Next.js storefront for premium powerlifting gear — wrist wraps, lifting straps, knee wraps, and belts.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-cart_state-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

[fitgrips.com](https://fitgrips.com)

</div>

---

## Features

- 🏠 **Category-driven homepage** — hero banner, curated product rails (Wrist Wraps, Lifting Straps, Knee Straps), a trending section, an "Explore" showcase, an order-process walkthrough, a blog teaser section, and an FAQ accordion
- 🛍️ **Dynamic product pages** (`/[slug]`) — swipeable/touch-enabled image carousel, star ratings, strike-through pricing with sale-price savings badge, and rich HTML product descriptions
- 🛒 **Persistent shopping cart** — powered by Redux Toolkit, with per-item quantity controls, live totals, and state that survives page reloads via `redux-persist`
- ➕ **Add-to-cart with quantity stepper** — instant toast confirmations via `react-hot-toast`, merges duplicate items and recalculates totals automatically
- 🔥 **Live product data** — products, categories, and blog content are fetched at runtime from an external product API (no data is hardcoded in the repo)
- 🎁 **"Refer & Earn" promo banner** baked into the navbar, plus a dedicated referral page
- 📱 **Responsive layout** — mobile-first navbar with slide-in menu, sticky search, and cart badge showing live item count
- ⚡ **Performance-minded** — React Compiler enabled, optimized `next/image` usage with a remote image allowlist, and Vercel Speed Insights wired in

> Shop, cart, and product-detail flows are fully built out; a few surrounding pages (auth, blogs, about, contact, refer) are currently scaffolded and under active development.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, React Compiler) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/) + [redux-persist](https://github.com/rt2zz/redux-persist) |
| Data Fetching | [Axios](https://axios-http.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Notifications | [react-hot-toast](https://react-hot-toast.com/) |
| Analytics | [@vercel/speed-insights](https://vercel.com/docs/speed-insights) |
| Linting | ESLint (`eslint-config-next`) |

## Getting Started

### Prerequisites
- Node.js 18.18+ and npm

### Environment variables

The storefront reads its product/blog data from an external API. Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_PRODUCTS_API=       # endpoint returning the full product catalog
NEXT_PUBLIC_PRODUCTS_API_SLUG=  # base URL that a product slug is appended to for single-product lookups
NEXT_PUBLIC_BLOG_API=           # endpoint returning blog posts
```

### Installation

```bash
git clone https://github.com/umarilyas02/FitGrips.git
cd FitGrips
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
FitGrips/
├── app/                        # Next.js App Router pages
│   ├── page.js                 # Home page
│   ├── [slug]/                 # Dynamic product detail page
│   ├── shop/                   # Product listing page
│   ├── cart/                   # Shopping cart page
│   ├── auth/                   # Sign in / sign up
│   ├── blogs/                  # Blog listing
│   ├── refer/                  # Refer & Earn program
│   ├── about-us/ & contact-us/ # Static info pages
│   └── layout.js               # Root layout (fonts, navbar, footer, toaster)
├── components/
│   ├── Home/                   # Hero, Products, Trending, Explore, OrderProcess, Blogs, FAQs
│   ├── Products/               # Product-page building blocks (AddToCartButton, etc.)
│   ├── Layouts/Home/           # Navbar and Footer
│   ├── Redux/                  # Store, ReduxProvider, and the cart slice
│   └── hooks/                  # Data-fetching hooks (useProducts, useSingleProduct)
└── public/                     # Logo, fonts, badges, static assets
```

---

<div align="center">

Made by [Umar Ilyas](https://umarilyas.dev)

</div>
