import {
  BadgePercent,
  Building2,
  Globe2,
  Hammer,
  MessageCircle,
  ShoppingBag,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

/** "Why LUMIN-TECH" trust band (4 items). */
export interface TrustPoint {
  icon: LucideIcon
  title: string
  stat: string
  description: string
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Globe2,
    stat: 'Factory-direct',
    title: 'Direct Import from China',
    description: 'No middlemen — we source straight from manufacturers, so you pay less.',
  },
  {
    icon: BadgePercent,
    stat: 'Bulk rates',
    title: 'Wholesale & Retail Pricing',
    description: 'One light or a full container — special rates for contractors & shops.',
  },
  {
    icon: Users,
    stat: 'Local team',
    title: 'Installation Team in Islamabad',
    description: 'Trained electricians for fitting, wiring and testing on site.',
  },
  {
    icon: Truck,
    stat: 'Nationwide',
    title: 'Delivery Across Pakistan',
    description: 'Safe, packed delivery to Lahore, Karachi, Peshawar and beyond.',
  },
]

/** Services grid. */
export interface Service {
  icon: LucideIcon
  title: string
  description: string
  whatsappMessage: string
}

export const SERVICES: Service[] = [
  {
    icon: ShoppingBag,
    title: 'Lighting & Electrical Sales',
    description:
      'Wide range of imported lights and electrical products — retail, wholesale and bulk.',
    whatsappMessage: "Hi, I'd like to know about your lighting products and prices.",
  },
  {
    icon: Wrench,
    title: 'Home & Office Installation',
    description: 'Complete installation for homes, offices and shops by our Islamabad-based team.',
    whatsappMessage: 'Hi, I need lighting installation for my home/office in Islamabad.',
  },
  {
    icon: Hammer,
    title: 'Chandelier & Fitting Services',
    description:
      'Safe assembly and hanging of heavy chandeliers, fancy lights and outdoor fittings.',
    whatsappMessage: 'Hi, I need a chandelier / light fitting service.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Order Assistance',
    description:
      'Send a photo or room size — we suggest the right lights and share options on WhatsApp.',
    whatsappMessage: "Hi, I'd like help choosing lights. I'll share photos of my space.",
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Carefully packed shipments to any city in Pakistan via trusted couriers.',
    whatsappMessage: "Hi, do you deliver to my city? I'd like to place an order.",
  },
  {
    icon: Building2,
    title: 'Commercial & Contract Supply',
    description:
      'Street lighting for housing societies, builders and commercial projects — with BOQ quotes.',
    whatsappMessage:
      "Hi, I'd like a contract quote for street lighting / commercial supply for a project.",
  },
]
