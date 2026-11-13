import { useEffect, useRef } from 'react'
import { navItems, profile, type SectionId } from '../../data/profile'
import { buttonClass, iconButtonClass } from '../ui/Button'
import { CloseIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../ui/icons'

interface MobileMenuProps {
  open: boolean
  active: SectionId | null
  onClose: () => void
}

/**
 * Full-screen navigation for phones and tablets. A modal <dialog> gives us a
 * focus trap, Escape-to-close and focus restoration without extra code.
 */
export function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])

  // If the window grows to the desktop layout while the menu is open, close it.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => desktop.matches && ref.current?.close()
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label="Site menu"
      className="dialog-sheet m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-ink p-0"
    >
      <div className="container-page flex min-h-full flex-col">
        <div className="flex h-16 shrink-0 items-center justify-between">
          <a href="#home" onClick={close} className="-ml-1 rounded px-1 font-display text-[1.375rem] leading-none">
            Owen Fennell
          </a>
          <button
            type="button"
            onClick={close}
            className={`${iconButtonClass} -mr-2.5 text-2xl text-paper`}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Primary" className="flex-1 py-6">
          <ul className="border-t border-line">
            {navItems.map(({ id, label }) => (
              <li key={id} className="border-b border-line">
                <a
                  href={`#${id}`}
                  onClick={close}
                  aria-current={active === id ? 'location' : undefined}
                  className="group flex items-center justify-between gap-5 py-4"
                >
                  <span
                    className={`font-display text-4xl leading-none transition-colors duration-200 group-hover:text-paper ${
                      active === id ? 'text-paper' : 'text-muted'
                    }`}
                  >
                    {label}
                  </span>
                  {active === id && <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 pb-8">
          <a href={profile.resumeUrl} download={profile.resumeFileName} className={buttonClass('primary')}>
            <DownloadIcon className="text-base" />
            Download resume
          </a>
          <div className="-mr-2.5 flex items-center gap-1">
            <a
              href={`mailto:${profile.email}`}
              className={`${iconButtonClass} text-xl`}
              aria-label={`Email Owen at ${profile.email}`}
            >
              <MailIcon />
            </a>
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
    </dialog>
  )
}
