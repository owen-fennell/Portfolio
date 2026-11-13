import type { ResponsiveImage } from '../../data/types'

interface PictureProps {
  image: ResponsiveImage
  /** The `sizes` hint so the browser picks the small or large rendition. */
  sizes: string
  className?: string
  /** Set for above-the-fold images; everything else lazy-loads. */
  priority?: boolean
}

export function Picture({ image, sizes, className, priority = false }: PictureProps) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  )
}
