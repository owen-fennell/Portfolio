import { useCallback, useEffect, useRef, useState } from 'react'
import { navItems, profile, type SectionId } from '../../data/profile'
import { useScrolled } from '../../hooks/useScrolled'
import { iconButtonClass } from '../ui/Button'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MenuIcon } from '../ui/icons'
import { MobileMenu } from './MobileMenu'

interface NavbarProps {
  /** Section currently in view, or null when it has no nav entry. */
  active: SectionId | null
}

export function Navbar({ active }: NavbarProps) {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)

  // Sliding underline: measure the active link and move one indicator beneath it.
  const listRef = useRef<HTMLUListElement>(null)
  const linkRefs = useRef(new Map<SectionId, HTMLAnchorElement>())
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null)

  const measure = useCallback(() => {
    const link = active ? linkRefs.current.get(active) : undefined
    setIndicator(link ? { left: link.offsetLeft + 12, width: link.offsetWidth - 24 } : null)
  }, [active])

  useEffect(() => {
    measure()
    const list = listRef.current
    if (!list) return
    // Re-measure when the layout shifts (resize, web fonts finishing loading).
    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [measure])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? 'border-line bg-ink/80 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#home" className="-ml-1 rounded px-1 font-display text-[1.375rem] leading-none tracking-[-0.01em]">
          Owen Fennell
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul ref={listRef} className="relative flex items-center">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  ref={(el) => {
                    if (el) linkRefs.current.set(id, el)
                    else linkRefs.current.delete(id)
                  }}
                  aria-current={active === id ? 'location' : undefined}
                  className={`block rounded px-3 py-2 text-sm transition-colors duration-200 hover:text-paper ${
                    active === id ? 'text-paper' : 'text-muted'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-0.5 h-px bg-accent transition-[left,width,opacity] duration-300 ease-out-soft"
              style={{
                left: indicator?.left ?? 0,
                width: indicator?.width ?? 0,
                opacity: indicator ? 1 : 0,
              }}
            />
          </ul>
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconButtonClass} text-lg`}
            aria-label="Owen Fennell on GitHub (opens in a new tab)"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconButtonClass} text-lg`}
            aria-label="Owen Fennell on LinkedIn (opens in a new tab)"
          >
            <LinkedInIcon />
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="ml-2 inline-flex h-9 items-center gap-2 rounded-md border border-line-strong px-3.5 text-sm text-paper transition-colors duration-200 hover:border-faint hover:bg-raised"
          >
            <DownloadIcon className="text-base" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className={`${iconButtonClass} -mr-2.5 text-2xl text-paper lg:hidden`}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
        >
          <MenuIcon />
        </button>
      </div>

      <MobileMenu open={menuOpen} active={active} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
