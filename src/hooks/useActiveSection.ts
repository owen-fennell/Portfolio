import { useEffect, useState } from 'react'

/**
 * Tracks which section the reader is currently in.
 *
 * `navIds` are sections that have a nav link. `otherIds` are sections without
 * one (e.g. "leadership"); while one of those is on screen the hook returns
 * null so no nav link is highlighted.
 */
export function useActiveSection<T extends string>(navIds: readonly T[], otherIds: readonly string[] = []): T | null {
  const [active, setActive] = useState<T | null>(navIds[0])

  useEffect(() => {
    const isNavId = (id: string): id is T => (navIds as readonly string[]).includes(id)

    // Sections in the order they appear on the page.
    const sections = [...navIds, ...otherIds]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => a.offsetTop - b.offsetTop)

    let frame = 0

    const update = () => {
      frame = 0
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      // The active section is the last one whose top has passed a line 40% down
      // the viewport. At the very bottom of the page the last section always wins,
      // even if it's too short to reach that line.
      const line = window.innerHeight * 0.4
      let current = sections[0]
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section
      }
      if (atBottom) current = sections[sections.length - 1]

      setActive(current && isNavId(current.id) ? current.id : null)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
    // The section lists are static, so this only needs to run once.
  }, [])

  return active
}
