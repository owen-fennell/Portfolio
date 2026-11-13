import { about } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function About() {
  const { education } = about

  return (
    <Section id="about" index="01" eyebrow="About" title="A builder at heart, an engineer in training.">
      <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i} className={i === 0 ? 'text-paper' : undefined}>
            {paragraph}
          </p>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-5">
        <Reveal className="rounded-lg border border-line bg-surface p-6 sm:col-span-3 sm:p-7">
          <h3 className="label text-faint">Education</h3>
          <p className="mt-4 font-display text-2xl leading-tight">{education.school}</p>
          <p className="mt-2 text-paper">{education.degree}</p>
          <p className="text-muted">{education.minor}</p>
          <p className="label mt-4 text-faint">
            {education.graduation} <span className="mx-1.5">·</span> {education.location}
          </p>
          <ul aria-label="Honors" className="mt-5 space-y-1.5 border-t border-line pt-5 text-[0.9375rem] text-muted">
            {education.honors.map((honor) => (
              <li key={honor} className="relative pl-5">
                <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
                {honor}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="rounded-lg border border-line bg-surface p-6 sm:col-span-2 sm:p-7">
          <h3 className="label text-faint">Away from the keyboard</h3>
          <p className="mt-4 text-[0.9375rem] text-muted">
            Usually in the weight room, on a court or a golf course, or somewhere outdoors with friends.
          </p>
          <ul aria-label="Interests" className="mt-5 flex flex-wrap gap-1.5">
            {about.interests.map((interest) => (
              <li
                key={interest}
                className="rounded border border-line bg-raised/60 px-2.5 py-1 text-[0.8125rem] leading-snug text-muted"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
