# Owen Fennell — Portfolio

My personal portfolio: who I am, where I've worked, and what I've built as a Software Engineering student at Iowa State University.

**Live site:** https://owen-fennell.github.io/Portfolio/

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for dev server and builds
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- Self-hosted fonts (Instrument Serif, Geist, Geist Mono) via Fontsource
- No UI, animation or icon libraries — the dialogs, scroll reveals and icons are hand-written

## Run it locally

Requires Node 20+.

```bash
npm install
npm run dev
```

Then open http://localhost:5173/Portfolio/

| Command             | What it does                                                       |
| ------------------- | ------------------------------------------------------------------ |
| `npm run dev`       | Start the dev server with hot reload                               |
| `npm run build`     | Type-check, then build the production site into `dist/`            |
| `npm run preview`   | Serve the production build locally                                 |
| `npm run typecheck` | Type-check only                                                    |
| `npm run images`    | Regenerate optimized WebP images from the originals in `images/`   |
| `npm run og`        | Regenerate the social preview image (needs Chrome or Edge)         |

## Project structure

```
├── index.html               Page shell + SEO / Open Graph metadata
├── images/                  Original, full-size images (never shipped as-is)
├── public/                  Files served untouched: resume PDF, favicon, og-image
├── scripts/                 Image optimization + social image generation
└── src/
    ├── data/                ← All site content lives here
    │   ├── profile.ts         Name, intro, links, about, education, nav
    │   ├── experience.ts      Work experience + leadership
    │   ├── projects.ts        Projects
    │   └── skills.ts          Skill groups
    ├── components/
    │   ├── layout/            Navbar, MobileMenu, Footer, BackToTop
    │   ├── sections/          One component per page section
    │   ├── projects/          Project cards, details dialog, CyBot illustration
    │   └── ui/                Shared pieces: Section, Reveal, Tag, Picture, icons
    ├── hooks/                 useActiveSection, useScrolled
    ├── assets/img/            Generated WebP images (output of `npm run images`)
    └── index.css              Design tokens (colors, fonts) + global styles
```

## Updating content

Everything on the page is driven by the files in `src/data/`. Components don't need to change for routine updates.

- **Add a job** — add an object to the top of `experience` in `src/data/experience.ts`.
- **Fill in the Nationwide internship** — in the same file, add `period`, `location` and `highlights` to the Nationwide entry and remove `status` once it's no longer upcoming.
- **Add a project** — add an object to `src/data/projects.ts`. `repoUrl` and `liveUrl` are optional; the buttons appear when they're set. Set `featured: true` for the large card.
- **Add a project screenshot** — put the original in `images/`, add an entry to the list in `scripts/optimize-images.mjs`, run `npm run images`, then reference it with `image('name', 'alt text')`.
- **Update the resume** — replace `public/Owen_Fennell_Resume.pdf` (keep the file name). The published copy intentionally omits my phone number.
- **Change colors or fonts** — edit the `@theme` block at the top of `src/index.css`.

## Deployment

The site deploys to GitHub Pages with the workflow in `.github/workflows/deploy.yml`: every push to `main` builds the site and publishes `dist/`.

One-time setup in the GitHub repository: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The `base` option in `vite.config.ts` is set to `/Portfolio/` to match the Pages URL. If the site moves to a custom domain or a different repository name, update `base` there and the absolute URLs in `index.html` (canonical, Open Graph, JSON-LD).
