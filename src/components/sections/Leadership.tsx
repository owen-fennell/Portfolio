import { leadership } from '../../data/experience'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Leadership() {
  return (
    <Section
      id="leadership"
      index="05"
      eyebrow="Leadership"
      title="Leading outside the classroom."
      lead="Organizing people and events on campus, and writing a little code to make it easier."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {leadership.map((item, i) => (
          <Reveal
            as="article"
            key={item.organization}
            delay={i * 80}
            className="flex flex-col rounded-lg border border-line bg-surface p-6 sm:p-7"
          >
            <p className="font-display text-5xl leading-none text-paper">{item.stat.value}</p>
            <p className="mt-2.5 max-w-[16rem] text-sm leading-snug text-muted">{item.stat.label}</p>

            <div className="mt-7 border-t border-line pt-6">
              <h3 className="text-lg font-medium tracking-[-0.01em]">{item.role}</h3>
              <p className="mt-0.5 text-muted">{item.organization}</p>
              <p className="label mt-2.5 text-faint">{item.period}</p>
            </div>

            <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-muted">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-5">
                  <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-line-strong" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
