import { experience } from '../../data/experience'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've worked, and where I'm headed."
      lead="An upcoming technology internship, a summer inside venture capital, and client web work."
    >
      <div className="relative">
        {/* The timeline rail */}
        <div aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
        <ol>

        {experience.map((item, i) => {
          const upcoming = Boolean(item.status)
          return (
            <Reveal as="li" key={item.company} delay={i * 60} className="relative pb-12 pl-9 last:pb-0 sm:pl-12">
              <span
                aria-hidden="true"
                className={`absolute top-[0.55rem] left-0 size-[11px] rounded-full border-2 ${
                  upcoming
                    ? 'border-accent bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]'
                    : 'border-line-strong bg-ink'
                }`}
              />

              <div className={upcoming ? 'rounded-lg border border-accent/25 bg-surface p-6 sm:p-7' : undefined}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-paper">{item.role}</h3>
                  {item.status ? (
                    <span className="label rounded-full border border-accent/40 px-2.5 py-1 leading-none text-accent">
                      {item.status}
                    </span>
                  ) : (
                    <p className="label text-faint">{item.period}</p>
                  )}
                </div>
                <p className="mt-1 text-muted">
                  {item.company}
                  {item.location && (
                    <>
                      <span aria-hidden="true" className="mx-2 text-line-strong">
                        /
                      </span>
                      {item.location}
                    </>
                  )}
                </p>

                {item.summary && <p className="mt-4 max-w-2xl text-paper/90">{item.summary}</p>}

                {item.highlights && (
                  <ul className="mt-4 max-w-2xl space-y-2.5 text-[0.9375rem] text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="relative pl-5">
                        <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-line-strong" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          )
        })}
        </ol>
      </div>
    </Section>
  )
}
