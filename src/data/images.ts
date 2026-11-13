import manifest from '../assets/img/manifest.json'
import type { ResponsiveImage } from './types'

// Every optimized image produced by `npm run images`, keyed by file path.
const files = import.meta.glob<string>('../assets/img/*.webp', {
  eager: true,
  import: 'default',
})

type ImageName = keyof typeof manifest

/** Builds a responsive image (small + large WebP) from a name in the manifest. */
export function image(name: ImageName, alt: string): ResponsiveImage {
  const { sm, lg } = manifest[name]
  const small = files[`../assets/img/${name}-sm.webp`]
  const large = files[`../assets/img/${name}-lg.webp`]

  return {
    src: large,
    srcSet: `${small} ${sm.width}w, ${large} ${lg.width}w`,
    width: lg.width,
    height: lg.height,
    alt,
  }
}
