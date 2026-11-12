/**
 * ⚠️  PLACEHOLDER TESTIMONIALS — replace with real customer reviews.
 *
 * Every entry below is marked `placeholder: true` and shows a small
 * "Sample review" label on the site. When you add a real review, set
 * `placeholder: false` (or remove the field) and the label disappears.
 * Search the codebase for "PLACEHOLDER" to find everything to replace.
 */
export interface Testimonial {
  quote: string
  name: string
  role: string
  rating: 1 | 2 | 3 | 4 | 5
  placeholder?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '[PLACEHOLDER] Ordered chandeliers for our new house on WhatsApp. Great variety and better prices than the market — the team installed everything the same week.',
    name: '[Customer Name]',
    role: 'Homeowner, DHA Islamabad',
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      '[PLACEHOLDER] We sourced LED street lights for our society roads. Bulk rates were very competitive and delivery was on time.',
    name: '[Customer Name]',
    role: 'Project Manager, Housing Society',
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      '[PLACEHOLDER] Custom neon sign and LED strips for our café came out perfect. Quick replies and helpful suggestions.',
    name: '[Customer Name]',
    role: 'Café Owner, Blue Area',
    rating: 5,
    placeholder: true,
  },
]

/**
 * ⚠️  PLACEHOLDER CLIENT NAMES — replace with real clients / partners
 * (or delete the list to hide the "Trusted by" strip).
 */
export const CLIENTS: string[] = [
  '[Client / Society 1]',
  '[Builder 2]',
  '[Hotel / Hall 3]',
  '[Office 4]',
  '[Restaurant 5]',
]
