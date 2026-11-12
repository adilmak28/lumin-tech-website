/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL SITE IMAGES LIVE HERE.
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every photo on the website is referenced through this file, so swapping in
 *  real shop / installation photos is a one-line change per image.
 *
 *  HOW TO SWAP IN A REAL PHOTO
 *   1. Put the photo in `public/images/` using the filename shown in the
 *      comment next to each entry (e.g. `public/images/hero-chandelier.jpg`).
 *   2. Change that entry's `src` to the local path, e.g.
 *        src: '/images/hero-chandelier.jpg',
 *   3. Update the `alt` text to describe the real photo (good for SEO).
 *
 *  Unsplash URLs get automatic responsive sizing (srcset). Local images are
 *  used as-is, so export them at a sensible size (~1600px wide for the hero,
 *  ~1000px for cards) and compress them (e.g. squoosh.app) before adding.
 *
 *  Current photos are royalty-free placeholders from Unsplash
 *  (https://unsplash.com/license).
 */

export interface ImageAsset {
  /** Unsplash base URL (no query string) or a local path like `/images/foo.jpg` */
  src: string
  alt: string
}

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`

export const IMAGES = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  /** public/images/hero-chandelier.jpg */
  heroChandelier: {
    src: unsplash('1627306411131-358d6d0fd2cb'),
    alt: 'Glowing crystal chandelier against a dark background',
  },

  // ── Product categories ───────────────────────────────────────────────────
  /** public/images/category-chandeliers.jpg */
  categoryChandeliers: {
    src: unsplash('1777601526152-23e5b026e22e'),
    alt: 'Gold crystal chandelier with warm candle-style bulbs',
  },
  /** public/images/category-street-lights.jpg */
  categoryStreetLights: {
    src: unsplash('1566276423184-a8c13d2a88a1'),
    alt: 'Road lit by LED street pole lights at night',
  },
  /** public/images/category-outdoor.jpg */
  categoryOutdoor: {
    src: unsplash('1594353162824-a8b237f9adae'),
    alt: 'Garden pathway lit with low outdoor path lights',
  },
  /** public/images/category-neon.jpg */
  categoryNeon: {
    src: unsplash('1602918955248-d1bbfcbfae38'),
    alt: 'Yellow lightning-bolt neon LED sign on a dark wall',
  },
  /** public/images/category-electrical.jpg */
  categoryElectrical: {
    src: unsplash('1544724569-5f546fd6f2b5'),
    alt: 'Electrical distribution board with circuit breakers',
  },

  // ── Featured products ────────────────────────────────────────────────────
  /** public/images/product-crystal-chandelier.jpg */
  productCrystalChandelier: {
    src: unsplash('1711102661247-ee734904b6de'),
    alt: 'Large crystal chandelier in a luxury hall',
  },
  /** public/images/product-tiered-chandelier.jpg */
  productTieredChandelier: {
    src: unsplash('1774916698992-14e374bfda7f'),
    alt: 'Multi-tier chandelier with glass shades, lit up',
  },
  /** public/images/product-pendant-lights.jpg */
  productPendantLights: {
    src: unsplash('1540932239986-30128078f3c5'),
    alt: 'Cluster of modern gold pendant lights',
  },
  /** public/images/product-led-street-light.jpg */
  productLedStreetLight: {
    src: unsplash('1565199975350-a723a63c053f'),
    alt: 'Double-arm street light pole glowing at dusk',
  },
  /** public/images/product-solar-street-light.jpg */
  productSolarStreetLight: {
    src: unsplash('1597419587733-c0318f1a93ff'),
    alt: 'Row of street light poles along a road at dusk',
  },
  /** public/images/product-post-lantern.jpg */
  productPostLantern: {
    src: unsplash('1568401332366-0e3ebe917e1f'),
    alt: 'Classic decorative lantern-style street lamp at night',
  },
  /** public/images/product-garden-bollard.jpg */
  productGardenBollard: {
    src: unsplash('1658692051708-519fbdac7e8f'),
    alt: 'Garden bollard light glowing among plants at night',
  },
  /** public/images/product-string-lights.jpg */
  productStringLights: {
    src: unsplash('1592318072094-2694c98adb73'),
    alt: 'Warm outdoor string lights hanging over a garden',
  },
  /** public/images/product-neon-sign.jpg */
  productNeonSign: {
    src: unsplash('1546443046-ed1ce6ffd1ab'),
    alt: 'Custom red neon sign glowing on a wall',
  },
  /** public/images/product-led-strip.jpg */
  productLedStrip: {
    src: unsplash('1601698015099-9459a95728fd'),
    alt: 'Reel of SMD LED strip light',
  },
  /** public/images/product-led-bulb.jpg */
  productLedBulb: {
    src: unsplash('1532007271951-c487760934ae'),
    alt: 'Energy-saving LED bulb on a dark background',
  },
  /** public/images/product-switches.jpg */
  productSwitches: {
    src: unsplash('1705938298629-5e474cf76245'),
    alt: 'Modern white double switch plate on a wall',
  },

  // ── Services / contract band ─────────────────────────────────────────────
  /** public/images/services-installation.jpg */
  servicesInstallation: {
    src: unsplash('1621905251189-08b45d6a269e'),
    alt: 'Electrician installing and testing electrical fittings',
  },
  /** public/images/contract-street-lighting.jpg */
  contractStreetLighting: {
    src: unsplash('1530639834082-05bafb67fbbe'),
    alt: 'Technician working on top of a light pole',
  },

  // ── Gallery ──────────────────────────────────────────────────────────────
  /** public/images/gallery-01.jpg */
  gallery01: {
    src: unsplash('1526568929-7cdd510e77fd'),
    alt: 'Grand hallway lit by a crystal chandelier',
  },
  /** public/images/gallery-02.jpg */
  gallery02: {
    src: unsplash('1600585154340-be6161a56a0c'),
    alt: 'Modern home exterior with warm architectural lighting at dusk',
  },
  /** public/images/gallery-03.jpg */
  gallery03: {
    src: unsplash('1582016309733-5865c2f9f21f'),
    alt: 'Landscape pathway lighting leading to a lit building',
  },
  /** public/images/gallery-04.jpg */
  gallery04: {
    src: unsplash('1584259432824-3d124136ea4c'),
    alt: 'Concealed LED profile light along a wall',
  },
  /** public/images/gallery-05.jpg */
  gallery05: {
    src: unsplash('1600508774634-4e11d34730e2'),
    alt: 'Office interior with rows of pendant lights',
  },
  /** public/images/gallery-06.jpg */
  gallery06: {
    src: unsplash('1511447333015-45b65e60f6d5'),
    alt: 'Purple neon LED tunnel installation',
  },
  /** public/images/gallery-07.jpg */
  gallery07: {
    src: unsplash('1600607687939-ce8a6c25118c'),
    alt: 'Bright modern living room with ceiling lighting',
  },
  /** public/images/gallery-08.jpg */
  gallery08: {
    src: unsplash('1621905251918-48416bd8575a'),
    alt: 'Electrician fitting a wall-mounted electrical unit',
  },
} satisfies Record<string, ImageAsset>

export type ImageKey = keyof typeof IMAGES
