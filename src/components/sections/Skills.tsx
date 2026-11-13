import type { ComponentType, SVGProps } from 'react'
import { skillGroups } from '../../data/skills'
import type { SkillGroup } from '../../data/types'
import { BackendIcon, DatabaseIcon, FrontendIcon, ToolsIcon } from '../ui/icons'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const icons: Record<SkillGroup['icon'], ComponentType<SVGProps<SVGSVGElement>>> = {
  frontend: FrontendIcon,
  backend: BackendIcon,
  database: DatabaseIcon,
  tools: ToolsIcon,
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="The tools I reach for."
      lead="Languages, frameworks and fundamentals I've used in coursework, projects and client work."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <Reveal key={group.title} delay={(i % 2) * 80} className="rounded-lg border border-line bg-surface p-6 sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-medium tracking-[-0.01em]">
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-line bg-raised text-lg text-accent">
                  <Icon />
                </span>
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-line bg-raised/60 px-3 py-1.5 text-sm leading-snug text-paper/90 transition-colors duration-200 hover:border-line-strong"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
