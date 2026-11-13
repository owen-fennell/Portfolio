import { about, profile } from '../../data/profile'
import { buttonClass, iconButtonClass } from '../ui/Button'
import { ArrowDownIcon, ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from '../ui/icons'
import { Picture } from '../ui/Picture'

const facts = [
  { label: 'Studying', value: 'B.S. Software Engineering', detail: 'Iowa State University' },
  { label: 'Up next', value: 'Technology Intern', detail: 'Nationwide' },
  { label: 'Building with', value: 'React, TypeScript, Python', detail: 'and C for embedded systems' },
  { label: 'Based in', value: profile.location, detail: `Graduating ${about.education.graduation.replace('Expected ', '')}` },
]

export function Hero() {
  const [first, second, third] = profile.headline

  return (
    <section id="home" aria-labelledby="home-heading" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />

      <div className="container-page pt-28 pb-14 sm:pt-36 md:pt-40 lg:pt-44 lg:pb-20">
        <div className="grid items-center gap-x-12 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4">
              {/* Phones get a compact portrait here; larger screens get the full one on the right. */}
              <Picture
                image={profile.headshot}
                sizes="56px"
                priority
                className="size-14 shrink-0 rounded-md border border-line-strong object-cover object-[50%_18%] md:hidden"
              />
              <a
                href="#experience"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/70 py-1.5 pr-3 pl-3 text-[0.8125rem] leading-snug text-muted transition-colors duration-200 hover:border-faint hover:text-paper"
              >
                <span aria-hidden="true" className="relative flex size-1.5 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {profile.status}
                <ArrowRightIcon className="hidden shrink-0 text-sm transition-transform duration-300 group-hover:translate-x-0.5 sm:block" />
              </a>
            </div>

            <h1
              id="home-heading"
              className="mt-8 font-display text-[clamp(3.75rem,13vw,8.25rem)] leading-[0.9] tracking-[-0.02em]"
            >
              Owen
              <br />
              Fennell
            </h1>

            <p className="label mt-7 flex flex-col gap-x-3 gap-y-1.5 text-muted min-[480px]:flex-row min-[480px]:items-center">
              <span>{profile.titles[0]}</span>
              <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong min-[480px]:block" />
              <span>{profile.titles[1]}</span>
            </p>

            <p className="mt-8 font-display text-[1.75rem] leading-[1.2] text-paper sm:text-[2rem]">
              {first} {second} <em className="text-accent">{third}</em>
            </p>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted">{profile.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className={buttonClass('primary')}>
                View projects
                <ArrowDownIcon className="text-base" />
              </a>
              <a href={profile.resumeUrl} download={profile.resumeFileName} className={buttonClass('secondary')}>
                <DownloadIcon className="text-base" />
                Download resume
              </a>
              <div className="flex items-center">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconButtonClass} text-xl`}
                  aria-label="Owen Fennell on GitHub (opens in a new tab)"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconButtonClass} text-xl`}
                  aria-label="Owen Fennell on LinkedIn (opens in a new tab)"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:col-span-5 md:block">
            <figure className="relative ml-auto max-w-[26rem]">
              {/* Offset hairline frame behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 h-full w-full rounded-md border border-accent/30"
              />
              <div className="relative overflow-hidden rounded-md border border-line-strong bg-surface">
                <Picture
                  image={profile.headshot}
                  sizes="(min-width: 1024px) 416px, 38vw"
                  priority
                  className="aspect-[4/5] w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent" />
                <figcaption className="label absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-3.5 text-paper/90">
                  <span>Iowa State University</span>
                  <span>Class of 2028</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-20 lg:grid-cols-4">
          {facts.map(({ label, value, detail }) => (
            <div key={label}>
              <dt className="label text-faint">{label}</dt>
              <dd className="mt-2.5 text-[0.9375rem] leading-snug text-paper">
                {value}
                <span className="mt-0.5 block text-muted">{detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
