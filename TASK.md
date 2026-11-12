# Build LUMIN-TECH website

Build "LUMIN-TECH" — a modern business website for a lighting & electrical
products company based in Islamabad, Pakistan (shop name: "TOP LIGHTS"). The
owner imports LED and SMD lights directly from China and sells/installs them
locally: chandeliers, street pole lights, garden & wall lights, neon/decorative
LED lights, and general electrical products (switches, sockets, breakers,
cables, panels).

## GOAL
Replace a dated Google Sites template with a premium-feeling, trustworthy
storefront that drives WhatsApp inquiries and orders. The key differentiator
to communicate: we import directly from China, so we offer better prices,
wider variety, and bulk/wholesale options than local resellers.

## BRAND & STYLE
- Name: LUMIN-TECH, tagline "Top Lights"
- Tone: professional, premium, locally trustworthy — serves homes, offices,
  commercial spaces, and contracts (societies/builders ordering street lighting).
- Color palette: deep navy/charcoal base (#0a0f1e / #0f172a style) with warm
  amber/gold accents (#f0b429 / #d4a017 style). Dark hero sections with glowing
  light imagery; gold/amber used sparingly for CTAs and highlights. Avoid
  clashing bright orange — keep it cohesive and premium.
- Use a bulb/light icon motif for the logo mark (LT monogram + bulb). Build it
  as an inline SVG component, no external icon font needed (can also use
  lucide-react for section icons).
- Use royalty-free / placeholder stock photography for now — pull real working
  image URLs from Unsplash (https://images.unsplash.com/... with query params
  for sizing) for: chandeliers, street lighting at night, modern home
  interiors, LED strip lights, electrician installing fixtures, electrical
  panels/switches. Structure the code so images can be swapped easily later:
  put all image references as named constants in `src/data/images.js` (or
  similar), and also create a `/public/images/` folder with a README noting
  where real photos should eventually go with matching filenames.

## PRIMARY CTA
WhatsApp click-to-chat everywhere — a sticky/floating WhatsApp button on every
page/section, plus inline "Inquire on WhatsApp" buttons per product category.
Use number +92 321 5007702 in wa.me/923215007702 links, with a pre-filled
message that changes per section, e.g. "Hi, I'm interested in Street Pole
Lights" / "Hi, I'd like a quote for Chandeliers." Build a reusable
WhatsAppButton component that takes a `message` prop and builds the wa.me URL.

## PAGE/SECTION STRUCTURE (single scrolling landing page with anchor nav)
1. Sticky header: logo, nav links (Home, Products, Services, Gallery, Location,
   Contact), WhatsApp button. Mobile hamburger menu.
2. Hero: headline "Premium Lighting Solutions — Imported & Installed Across
   Pakistan", subheadline about chandeliers/street lights/decorative/electrical,
   two CTAs: "Chat on WhatsApp" and "View Products". Dark hero image/background
   with glowing lights (use a dark overlay gradient over an Unsplash image).
3. Product categories grid (5 cards, each with icon/photo, short description,
   "View Products" + WhatsApp button):
   - Chandeliers & Fancy Lights
   - Street Pole & High Mast Lights
   - Garden & Wall / Outdoor Lights
   - Neon & Decorative LED Lights
   - Electrical Products (switches, sockets, cables, panels, LED bulbs)
4. "Why LUMIN-TECH" trust band (4 icons/stats): Direct Import from China,
   Wholesale & Retail Pricing, Installation Team in Islamabad, Delivery
   Across Pakistan.
5. Services section: sales, home/office installation, fitting services,
   WhatsApp order assistance, nationwide delivery, commercial/contract supply
   (e.g. street lighting for housing societies).
6. Featured products showcase: photo grid, product name, short spec line,
   "Inquire on WhatsApp" button (no fixed public pricing — pricing varies
   by order volume).
7. Gallery: grid of installation/product photos (placeholder for now).
8. Testimonials/clients placeholder section (build it but it's fine if it
   uses clearly-labeled placeholder quotes/names that are easy to find/replace
   later).
9. Location & contact: Islamabad address placeholder, embedded Google Map
   (iframe embed, generic Islamabad coordinates is fine as placeholder), phone
   number, WhatsApp button, simple contact form (UI only — no backend, submit
   can just show a toast/alert or no-op for now).
10. Footer: logo, nav links, social links placeholder, WhatsApp number,
    copyright.

## TECHNICAL REQUIREMENTS
- Stack: Vite + React + TypeScript + Tailwind CSS. Use `lucide-react` for
  icons, and `framer-motion` (or CSS/Intersection Observer if you prefer
  something lighter) for subtle scroll entrance animations.
- Fully responsive, mobile-first (most traffic is mobile via WhatsApp referrals).
- Fast-loading: optimized images via responsive `srcset`/sizing params on the
  Unsplash URLs, `loading="lazy"` on below-the-fold images, minimal heavy
  animation.
- Clean, reusable components in `src/components/`: Header, Footer, Hero,
  WhatsAppButton (+ a persistent FloatingWhatsAppButton), ProductCard,
  CategorySection, TrustBand, ServicesSection, FeaturedProducts, Gallery,
  Testimonials, ContactSection. Keep content data (categories, products,
  services, testimonials) in `src/data/` files so it's easy to edit later.
- Basic on-page SEO: descriptive `<title>` and meta description in `index.html`
  targeting "LED lights Islamabad", "chandelier shop Islamabad", "street light
  supplier Pakistan", "import LED lights Pakistan". Add Open Graph tags too.
- Smooth scroll anchor navigation between sections (`scroll-behavior: smooth`
  + anchor hrefs matching section ids).
- Subtle entrance animations on scroll (fade/slide-in), tasteful, not excessive.
- Set up ESLint/Prettier defaults from the Vite template, make sure
  `npm run build` succeeds with no errors, and `npm run dev` runs clean.
- Add a root `README.md` explaining the project, how to run it
  (`npm install && npm run dev`), the folder structure, and exactly which
  files to edit to swap in real photos/copy later (point to `src/data/images.js`
  and the `src/data/*.js` content files).
- Initialize a git repo in this folder (`git init` if not already present),
  add a sensible `.gitignore` (node_modules, dist, .env, etc.), and make clear
  incremental commits as you build (e.g. "scaffold project", "add header/hero",
  "add product sections", "add gallery/contact/footer", "polish + build fix").

Work entirely inside the current directory. When finished, run `npm run build`
to confirm it compiles with zero errors, and report a final summary of what
was built and the commands to run it locally.
