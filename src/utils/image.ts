const isUnsplash = (src: string) => src.includes('images.unsplash.com')

/** Returns a sized URL for Unsplash images; local images are returned unchanged. */
export function sizedSrc(src: string, width: number, height?: number, quality = 72): string {
  if (!isUnsplash(src)) return src
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: String(quality),
  })
  if (height) params.set('h', String(height))
  return `${src}?${params.toString()}`
}

/**
 * Builds a `srcset` for Unsplash images at several widths, keeping the given
 * aspect ratio (width / height). Returns undefined for local images.
 */
export function buildSrcSet(
  src: string,
  widths: number[],
  aspectRatio?: number,
  quality?: number,
): string | undefined {
  if (!isUnsplash(src)) return undefined
  return widths
    .map((w) => {
      const h = aspectRatio ? Math.round(w / aspectRatio) : undefined
      return `${sizedSrc(src, w, h, quality)} ${w}w`
    })
    .join(', ')
}
