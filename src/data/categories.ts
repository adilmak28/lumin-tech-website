import { Flower2, Lamp, Plug, Sparkles, UtilityPole, type LucideIcon } from 'lucide-react'
import { IMAGES, type ImageAsset } from './images'

/**
 * Product categories shown in the "Products" grid.
 * `id` is used to link featured products to their category — keep it stable.
 */
export type CategoryId = 'chandeliers' | 'street' | 'outdoor' | 'neon' | 'electrical'

export interface Category {
  id: CategoryId
  name: string
  shortName: string
  description: string
  /** Bullet points shown on the card */
  items: string[]
  icon: LucideIcon
  image: ImageAsset
  /** Pre-filled WhatsApp message for this category */
  whatsappMessage: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'chandeliers',
    name: 'Chandeliers & Fancy Lights',
    shortName: 'Chandeliers',
    description:
      'Crystal, modern and classic chandeliers, pendants and ceiling fixtures that make every room a statement.',
    items: ['Crystal & K9 chandeliers', 'Modern pendants', 'Ceiling & wall fancy lights'],
    icon: Lamp,
    image: IMAGES.categoryChandeliers,
    whatsappMessage: "Hi, I'd like a quote for Chandeliers & Fancy Lights.",
  },
  {
    id: 'street',
    name: 'Street Pole & High Mast Lights',
    shortName: 'Street Lights',
    description:
      'High-efficiency LED & solar street lights, poles and high-mast systems for roads, societies and parking areas.',
    items: ['LED & solar street lights', 'Single / double-arm poles', 'High-mast & flood lights'],
    icon: UtilityPole,
    image: IMAGES.categoryStreetLights,
    whatsappMessage: "Hi, I'm interested in Street Pole Lights.",
  },
  {
    id: 'outdoor',
    name: 'Garden & Wall / Outdoor Lights',
    shortName: 'Outdoor',
    description:
      'Weather-proof garden, gate, wall and landscape lights to light up lawns, driveways and building facades.',
    items: ['Bollard & spike lights', 'Gate & wall lanterns', 'Facade & flood lights'],
    icon: Flower2,
    image: IMAGES.categoryOutdoor,
    whatsappMessage: "Hi, I'm interested in Garden & Outdoor Lights.",
  },
  {
    id: 'neon',
    name: 'Neon & Decorative LED Lights',
    shortName: 'Neon & LED',
    description:
      'Custom neon signs, SMD LED strips, rope lights and decorative lighting for shops, events and interiors.',
    items: ['Custom neon signs', 'SMD LED strips & profiles', 'Fairy & rope lights'],
    icon: Sparkles,
    image: IMAGES.categoryNeon,
    whatsappMessage: "Hi, I'm interested in Neon & Decorative LED Lights.",
  },
  {
    id: 'electrical',
    name: 'Electrical Products',
    shortName: 'Electrical',
    description:
      'Switches, sockets, breakers, cables, distribution panels and LED bulbs — everything for a complete fit-out.',
    items: ['Switches & sockets', 'Breakers & DB panels', 'Cables, wires & LED bulbs'],
    icon: Plug,
    image: IMAGES.categoryElectrical,
    whatsappMessage: "Hi, I'd like a quote for Electrical Products (switches, breakers, cables).",
  },
]

export const getCategory = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)!
