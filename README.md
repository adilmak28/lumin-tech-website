# LUMIN-TECH — Top Lights (Islamabad)

Marketing website for **LUMIN-TECH / TOP LIGHTS**, an Islamabad lighting & electrical
business that imports LED/SMD lights directly from China and sells and installs
chandeliers, street pole lights, garden/outdoor lights, neon & decorative LEDs and
electrical products across Pakistan.

It's a single scrolling landing page. Its main job is to get visitors to start a
**WhatsApp chat** (wa.me/923215007702) with a pre-filled message that matches what
they were looking at.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react

---

## Run it locally

Requires Node.js 20+.

```bash
npm install && npm run dev
```

Then open the URL printed in the terminal (usually <http://localhost:5173>).

| Command                | What it does                                       |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload               |
| `npm run build`        | Type-check and build the production site → `dist/` |
| `npm run preview`      | Serve the built `dist/` folder locally             |
| `npm run lint`         | Lint `src/` (oxlint — the Vite template default)   |
| `npm run format`       | Format all files with Prettier                     |
| `npm run format:check` | Check formatting without changing files            |

**Deploying:** run `npm run build` and upload the `dist/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, cPanel `public_html`, …).

---

## Page sections

1. **Header**: sticky, logo, anchor nav, WhatsApp button, mobile hamburger menu
2. **Hero** (`#home`): headline, two CTAs, dark chandelier background
3. **Product categories** (`#products`): 5 cards, each with "View Products" (filters the featured grid) and "Inquire on WhatsApp"
4. **Why LUMIN-TECH**: trust band with 4 points
5. **Services** (`#services`): 6 services and a contract/street-lighting quote banner
6. **Featured products** (`#featured`): filterable product grid, no public prices, WhatsApp inquiry per product
7. **Gallery** (`#gallery`): photo grid with a lightbox
8. **Testimonials**: placeholder reviews and client names (clearly labelled)
9. **Location** (`#location`) and **Contact** (`#contact`): address, Google Map, phone, and an inquiry form (UI only, with a "Send via WhatsApp" option)
10. **Footer**: logo, links, social placeholders, WhatsApp number, copyright
11. **Floating WhatsApp button**: on every screen

---

## Folder structure

```
├── index.html                  ← <title>, meta description, keywords, Open Graph tags
├── public/
│   ├── favicon.svg             ← LT bulb icon
│   └── images/                 ← put REAL photos here (see images/README.md)
└── src/
    ├── App.tsx                 ← page layout: the order of sections
    ├── index.css               ← Tailwind setup, brand colours, shared utility classes
    ├── data/                   ← ✏️ ALL EDITABLE CONTENT LIVES HERE
    │   ├── site.ts             ← phone, WhatsApp number, address, hours, map, socials, nav
    │   ├── images.ts           ← every image URL + alt text
    │   ├── categories.ts       ← 5 product categories (+ their WhatsApp messages)
    │   ├── products.ts         ← featured products
    │   ├── services.ts         ← "Why LUMIN-TECH" points + services list
    │   ├── gallery.ts          ← gallery photos + captions
    │   └── testimonials.ts     ← reviews + client names (PLACEHOLDERS)
    ├── components/
    │   ├── Header.tsx  Hero.tsx  CategorySection.tsx  TrustBand.tsx
    │   ├── ServicesSection.tsx  FeaturedProducts.tsx  ProductCard.tsx
    │   ├── Gallery.tsx  Testimonials.tsx  ContactSection.tsx  Footer.tsx
    │   ├── WhatsAppButton.tsx           ← reusable <WhatsAppButton message="…" />
    │   ├── FloatingWhatsAppButton.tsx   ← persistent bottom-right bubble
    │   ├── Logo.tsx                     ← inline SVG logo (LT monogram + bulb)
    │   ├── icons/BrandIcons.tsx         ← WhatsApp / social SVG icons
    │   └── ui/                          ← SmartImage, Reveal (scroll animation), SectionHeading, Toast
    └── utils/
        ├── whatsapp.ts          ← buildWhatsAppUrl(message)
        └── image.ts             ← Unsplash srcset/sizing helpers
```

---

## How to update content (no React knowledge needed)

All content is in `src/data/`. Edit the text between the quotes, save, and the site
updates. Run `npm run build` again before re-deploying.

### Swap placeholder photos for real ones → `src/data/images.ts`

1. Copy the photo into `public/images/` with the filename shown in the comment above
   each entry (the full list is in [`public/images/README.md`](public/images/README.md)).
2. In `src/data/images.ts`, change `src` to the local path and update the `alt` text:
   ```ts
   categoryChandeliers: {
     src: '/images/category-chandeliers.jpg',
     alt: 'Crystal chandeliers on display at TOP LIGHTS Islamabad',
   },
   ```

Unsplash images get responsive `srcset` sizes automatically. Local images are used as-is,
so resize and compress them first (about 1000px wide, under 250 KB).

### Things marked as placeholders (search the code for `TODO` / `PLACEHOLDER`)

| What                               | File                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Shop address, email, opening hours | `src/data/site.ts`                                                                                           |
| Google Map location                | `src/data/site.ts` → `mapEmbedUrl` / `mapLinkUrl` (Google Maps → Share → _Embed a map_ → copy the `src` URL) |
| Social media links                 | `src/data/site.ts` → `social`                                                                                |
| Customer reviews & client names    | `src/data/testimonials.ts` (set `placeholder: false` on real reviews to remove the "Sample review" tag)      |
| Gallery captions                   | `src/data/gallery.ts`                                                                                        |
| All photos                         | `src/data/images.ts`                                                                                         |
| Social share image / site URL      | `index.html` (`og:image`)                                                                                    |

### Other common edits

- **WhatsApp number / phone**: `src/data/site.ts` (`whatsappNumber` is digits only, e.g. `923215007702`)
- **Add or edit a product**: `src/data/products.ts`. Copy a block, give it a unique `id`, a `category`, and an image from `images.ts`
- **Category text or WhatsApp messages**: `src/data/categories.ts`
- **Services / "Why us" points**: `src/data/services.ts`
- **Hero headline**: `src/components/Hero.tsx`
- **SEO title & description**: `index.html`
- **Brand colours**: `src/index.css` (`--color-navy-*`, `--color-gold-*`)

### Using the WhatsApp button anywhere

```tsx
<WhatsAppButton message="Hi, I'd like a quote for Chandeliers.">Get a quote</WhatsAppButton>
```

Props: `message`, `variant` (`solid` | `outline` | `subtle`), `size` (`sm` | `md` | `lg`), `fullWidth`.

---

## Notes

- **Contact form**: UI only. Submitting shows a confirmation toast and clears the form;
  nothing is sent anywhere. "Send via WhatsApp" opens WhatsApp with the form details
  filled in. To receive form emails, connect a service such as Formspree or EmailJS
  in `handleSubmit` in `src/components/ContactSection.tsx`.
- **Animations** respect the visitor's "reduce motion" OS setting.
- **Placeholder photos** are from [Unsplash](https://unsplash.com/license) (free to use).
