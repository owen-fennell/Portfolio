import { useEffect, useState, type ReactNode } from 'react'
import { profile } from '../../data/profile'
import { buttonClass } from '../ui/Button'
import { ArrowUpRightIcon, CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../ui/icons'
import { Reveal } from '../ui/Reveal'

interface ContactLink {
  label: string
  value: string
  href: string
  icon: ReactNode
  external: boolean
}

const links: ContactLink[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon />, external: false },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/owen-fennell',
    href: profile.linkedin,
    icon: <LinkedInIcon />,
    external: true,
  },
  { label: 'GitHub', value: 'github.com/owen-fennell', href: profile.github, icon: <GitHubIcon />, external: true },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard access can be blocked; the address is still visible and linked below.
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="label text-accent">
              06 <span className="mx-1 text-faint">/</span> Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-[clamp(3rem,9vw,5.75rem)] leading-[0.95] tracking-[-0.02em]"
            >
              Let&rsquo;s <em className="text-accent">connect.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Whether you&rsquo;re a recruiter, an engineer, or a fellow student building something interesting,
              I&rsquo;d like to hear from you. Email is the fastest way to reach me.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className={buttonClass('primary')}>
                <MailIcon className="text-base" />
                Email me
              </a>
              <button type="button" onClick={copyEmail} className={buttonClass('secondary')}>
                {copied ? <CheckIcon className="text-base text-accent" /> : <CopyIcon className="text-base" />}
                <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <ul className="border-t border-line">
              {links.map(({ label, value, href, icon, external }) => (
                <li key={label} className="border-b border-line">
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="text-lg text-faint transition-colors duration-200 group-hover:text-accent">
                      {icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="label block text-faint">{label}</span>
                      <span className="mt-1 block truncate text-paper">{value}</span>
                      {external && <span className="sr-only"> (opens in a new tab)</span>}
                    </span>
                    <ArrowUpRightIcon className="shrink-0 text-xl text-faint transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
