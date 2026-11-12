import type { ImgHTMLAttributes } from 'react'
import type { ImageAsset } from '../../data/images'
import { buildSrcSet, sizedSrc } from '../../utils/image'

interface SmartImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'alt' | 'width' | 'height'
> {
  image: ImageAsset
  /** Widths to generate for srcset (Unsplash only) */
  widths?: number[]
  /** width / height — used for cropping + to reserve layout space */
  aspectRatio?: number
  /** `sizes` attribute, e.g. "(min-width: 1024px) 33vw, 100vw" */
  sizes?: string
  /** Above-the-fold images should be eager; everything else lazy */
  priority?: boolean
}

/**
 * Responsive image: generates srcset for Unsplash URLs, lazy-loads by default,
 * and works with plain local paths from /public/images too.
 */
export default function SmartImage({
  image,
  widths = [400, 640, 960, 1280],
  aspectRatio,
  sizes = '100vw',
  priority = false,
  className,
  ...rest
}: SmartImageProps) {
  const fallbackWidth = widths[Math.min(1, widths.length - 1)]
  const fallbackHeight = aspectRatio ? Math.round(fallbackWidth / aspectRatio) : undefined

  return (
    <img
      src={sizedSrc(image.src, fallbackWidth, fallbackHeight)}
      srcSet={buildSrcSet(image.src, widths, aspectRatio)}
      sizes={sizes}
      alt={image.alt}
      width={fallbackWidth}
      height={fallbackHeight}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      {...rest}
    />
  )
}
