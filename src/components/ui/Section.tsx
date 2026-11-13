import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  /** Two-digit index shown in the eyebrow, e.g. "02". */
  index: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  /**
   * "split" puts the heading in a sticky left column beside the content;
   * "stacked" puts it above full-width content.
   */
  layout?: 'split' | 'stacked'
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, lead, layout = 'split', children }: SectionProps) {
  const heading = (
    <Reveal>
      <p className="label text-accent">
        {index} <span className="mx-1 text-faint">/</span> {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.01em] text-paper sm:text-5xl"
      >
        {title}
      </h2>
      {lead && <p className="mt-5 max-w-md text-muted">{lead}</p>}
    </Reveal>
  )

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        {layout === 'split' ? (
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">{heading}</div>
            </div>
            <div className="lg:col-span-8">{children}</div>
          </div>
        ) : (
          <>
            {heading}
            <div className="mt-12 sm:mt-14">{children}</div>
          </>
        )}
      </div>
    </section>
  )
}
