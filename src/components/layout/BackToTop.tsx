import { useScrolled } from '../../hooks/useScrolled'
import { ArrowUpIcon } from '../ui/icons'

/** Floating button that appears after the first screenful of scrolling. */
export function BackToTop() {
  const visible = useScrolled(900)

  return (
    <a
      href="#home"
      aria-label="Back to top"
      // Keep it out of the tab order and accessibility tree while hidden.
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
      className={`fixed right-4 bottom-4 z-30 inline-flex size-11 items-center justify-center rounded-md border border-line-strong bg-surface/90 text-lg text-muted backdrop-blur transition-[opacity,transform,color,border-color] duration-300 hover:border-faint hover:text-paper sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <ArrowUpIcon />
    </a>
  )
}
