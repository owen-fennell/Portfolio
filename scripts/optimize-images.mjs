// Generates the optimized WebP images the site ships, from the originals in /images.
//
//   npm run images
//
// To add an image: drop the original into /images, add an entry below, run the
// script, then reference it by name with `image('name', 'alt text')` in src/data.

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = path.join(root, 'images')
const outDir = path.join(root, 'src', 'assets', 'img')
const publicDir = path.join(root, 'public')

/**
 * name    -> output file prefix (name-sm.webp / name-lg.webp)
 * file    -> original in /images
 * widths  -> [small, large] output widths in px
 * crop    -> optional { left, top, width, height } applied to the original first
 */
const images = [
  {
    name: 'headshot',
    file: '26CompositePic.png',
    widths: [432, 864],
    crop: { left: 0, top: 40, width: 864, height: 1080 }, // 4:5 portrait
    quality: 82,
  },
  { name: 'movierec-compare', file: 'movieRecCompare.png', widths: [704, 1408], quality: 84 },
  { name: 'movierec-home', file: 'movieRecHome.png', widths: [704, 1408], quality: 84 },
  { name: 'movierec-recommend', file: 'movieRecRecommend.png', widths: [704, 1408], quality: 84 },
  { name: 'trueyou-team', file: 'Team-TrueYou.jpg', widths: [704, 1408], quality: 76 },
  { name: 'casino-home', file: 'casinoHome.png', widths: [720, 1440], quality: 80 },
  { name: 'casino-blackjack', file: 'casinoBlackjack.png', widths: [720, 1440], quality: 80 },
  { name: 'casino-baccarat', file: 'casinoBaccarat.png', widths: [720, 1440], quality: 80 },
]

await mkdir(outDir, { recursive: true })

const manifest = {}

for (const { name, file, widths, crop, quality } of images) {
  const input = path.join(srcDir, file)
  manifest[name] = {}

  for (const [i, width] of widths.entries()) {
    const size = i === 0 ? 'sm' : 'lg'
    let pipeline = sharp(input, { limitInputPixels: false }).rotate()
    if (crop) pipeline = pipeline.extract(crop)

    const info = await pipeline
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(path.join(outDir, `${name}-${size}.webp`))

    manifest[name][size] = { width: info.width, height: info.height }
    console.log(`${name}-${size}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} kB`)
  }
}

await writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')

// Home-screen icon (the SVG favicon covers everything else).
await sharp(path.join(publicDir, 'favicon.svg'), { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'))

console.log('Done.')
