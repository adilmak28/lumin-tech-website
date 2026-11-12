import { IMAGES, type ImageAsset } from './images'

/**
 * Gallery photos (installations & products).
 * Replace images in `images.ts` (gallery01…gallery08) with real project photos
 * and update the captions here. `span` controls the tile size on desktop.
 */
export interface GalleryItem {
  image: ImageAsset
  caption: string
  span?: 'wide' | 'tall' | 'large'
}

// The order + spans below tile perfectly on both the 2-column (mobile) and
// 4-column (desktop) grid. If you add/remove items, keep the total cell count
// a multiple of 4 (large = 4 cells, wide/tall = 2, normal = 1).
export const GALLERY: GalleryItem[] = [
  { image: IMAGES.gallery01, caption: 'Crystal chandelier – banquet hall', span: 'large' },
  { image: IMAGES.gallery03, caption: 'Landscape pathway lighting', span: 'tall' },
  { image: IMAGES.gallery02, caption: 'Villa facade & garden lighting' },
  { image: IMAGES.gallery04, caption: 'Concealed LED profile lighting' },
  { image: IMAGES.gallery05, caption: 'Office pendant installation', span: 'wide' },
  { image: IMAGES.gallery06, caption: 'Neon LED feature installation', span: 'tall' },
  { image: IMAGES.gallery08, caption: 'Electrical fitting & wiring', span: 'tall' },
  { image: IMAGES.gallery07, caption: 'Residential interior lighting', span: 'wide' },
]
