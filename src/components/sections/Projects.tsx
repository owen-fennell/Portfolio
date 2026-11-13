import { useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../data/types'
import { FeaturedProjectCard, ProjectCard } from '../projects/ProjectCard'
import { ProjectDialog } from '../projects/ProjectDialog'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Things I've built."
      lead="Full-stack web apps, a team hackathon build, and an autonomous robot. Open any project for the details."
      layout="stacked"
    >
      <div className="space-y-5">
        {featured.map((project) => (
          <Reveal key={project.id}>
            <FeaturedProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}

        <ul className="grid gap-5 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * 80}>
              <ProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </ul>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
