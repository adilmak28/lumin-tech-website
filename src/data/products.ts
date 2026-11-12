import type { CategoryId } from './categories'
import { IMAGES, type ImageAsset } from './images'

/**
 * Featured products. No public prices — pricing depends on order volume,
 * so every product links to a WhatsApp inquiry instead.
 *
 * To add a product: copy one block, give it a unique `id`, pick a `category`
 * and an image from `images.ts` (add a new image there first if needed).
 */
export interface Product {
  id: string
  name: string
  category: CategoryId
  /** One short line of key specs */
  spec: string
  image: ImageAsset
  /** Optional small label, e.g. "Bestseller" or "Bulk orders" */
  badge?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'crystal-chandelier',
    name: 'Grand Crystal Chandelier',
    category: 'chandeliers',
    spec: 'K9 crystal · Gold finish · 12–36 lights · Halls & lobbies',
    image: IMAGES.productCrystalChandelier,
    badge: 'Bestseller',
  },
  {
    id: 'tiered-chandelier',
    name: 'Classic Tiered Chandelier',
    category: 'chandeliers',
    spec: 'Glass shades · Antique brass · E14 LED compatible',
    image: IMAGES.productTieredChandelier,
  },
  {
    id: 'pendant-cluster',
    name: 'Modern Pendant Cluster',
    category: 'chandeliers',
    spec: 'Metal domes · Warm 3000K · Kitchens & dining',
    image: IMAGES.productPendantLights,
  },
  {
    id: 'led-street-light',
    name: 'LED Street Light (Double Arm)',
    category: 'street',
    spec: '100W–200W SMD · IP66 · Galvanised pole options',
    image: IMAGES.productLedStreetLight,
    badge: 'Bulk orders',
  },
  {
    id: 'solar-street-light',
    name: 'Solar Street Light System',
    category: 'street',
    spec: 'All-in-one solar · Dusk-to-dawn sensor · Lithium battery',
    image: IMAGES.productSolarStreetLight,
  },
  {
    id: 'post-lantern',
    name: 'Decorative Post Lantern',
    category: 'street',
    spec: 'Cast-aluminium · Society & park walkways · IP65',
    image: IMAGES.productPostLantern,
  },
  {
    id: 'garden-bollard',
    name: 'Garden Bollard Light',
    category: 'outdoor',
    spec: 'Weather-proof · 60/80cm heights · Warm white LED',
    image: IMAGES.productGardenBollard,
  },
  {
    id: 'string-lights',
    name: 'Outdoor String Lights',
    category: 'outdoor',
    spec: 'Waterproof bulbs · 10–50m lengths · Lawns & events',
    image: IMAGES.productStringLights,
  },
  {
    id: 'neon-sign',
    name: 'Custom Neon LED Sign',
    category: 'neon',
    spec: 'Any text or logo · Flexible silicone neon · Low power',
    image: IMAGES.productNeonSign,
    badge: 'Made to order',
  },
  {
    id: 'smd-led-strip',
    name: 'SMD LED Strip Light',
    category: 'neon',
    spec: '2835 / 5050 SMD · 12V/24V · Warm, cool & RGB',
    image: IMAGES.productLedStrip,
  },
  {
    id: 'led-bulb',
    name: 'LED Bulbs (5W–50W)',
    category: 'electrical',
    spec: 'E27 / B22 · Energy saving · Cartons for wholesale',
    image: IMAGES.productLedBulb,
  },
  {
    id: 'switches-sockets',
    name: 'Modular Switches & Sockets',
    category: 'electrical',
    spec: 'Gang switches · 13A sockets · White, black & gold',
    image: IMAGES.productSwitches,
  },
]

export const productWhatsAppMessage = (p: Product) =>
  `Hi, I'm interested in the ${p.name}. Please share price and availability.`
