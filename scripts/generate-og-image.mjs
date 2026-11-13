// Renders scripts/og-image.html to public/og-image.png (1200x630) using a
// locally installed Chrome or Edge in headless mode. No extra dependencies.
//
//   npm run og

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const template = path.join(root, 'scripts', 'og-image.html')
const output = path.join(root, 'public', 'og-image.png')

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const browser = candidates.find((candidate) => existsSync(candidate))
if (!browser) {
  console.error('No Chrome or Edge found. Set CHROME_PATH to a Chromium-based browser and retry.')
  process.exit(1)
}

const profileDir = mkdtempSync(path.join(tmpdir(), 'og-image-'))
const raw = path.join(profileDir, 'og-raw.png')

try {
  execFileSync(
    browser,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--allow-file-access-from-files',
      `--user-data-dir=${profileDir}`,
      '--window-size=1200,630',
      '--virtual-time-budget=3000',
      `--screenshot=${raw}`,
      pathToFileURL(template).href,
    ],
    { stdio: 'ignore' },
  )

  // Normalize to exactly 1200x630 and compress.
  const info = await sharp(raw)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(output)
  console.log(`og-image.png  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} kB`)
} finally {
  rmSync(profileDir, { recursive: true, force: true })
}
