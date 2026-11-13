import type { Project } from '../../data/types'
import { ArrowRightIcon, AwardIcon } from '../ui/icons'
import { TagList } from '../ui/Tag'
import { ProjectLinks } from './ProjectLinks'
import { ProjectMedia } from './ProjectMedia'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

const cardClass =
  'group relative h-full rounded-lg border border-line bg-surface transition-colors duration-300 hover:border-line-strong hover:bg-raised/70'

/** The "Details" button stretches over the whole card, so the card is one big target. */
function DetailsButton({ project, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-haspopup="dialog"
      className="inline-flex h-9 items-center gap-1.5 rounded-md text-sm font-medium text-accent after:absolute after:inset-0 after:rounded-lg"
    >
      Details
      <span className="sr-only"> about {project.name}</span>
      <ArrowRightIcon className="text-base transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  )
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-faint">
      <span>{project.date}</span>
      {project.recognition && (
        <span className="inline-flex items-center gap-1 text-accent">
          <AwardIcon className="text-sm" />
          {project.recognition}
        </span>
      )}
    </p>
  )
}

/** Large two-column card for the featured project. */
export function FeaturedProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className={`${cardClass} grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-10`}>
      <div className="lg:order-2 lg:col-span-7">
        <ProjectMedia project={project} sizes="(min-width: 1024px) 620px, 92vw" interactive />
      </div>
      <div className="lg:col-span-5">
        <p className="label flex items-center gap-3 text-faint">
          <span className="text-accent">Featured project</span>
          <span>{project.date}</span>
        </p>
        <h3 className="mt-4 font-display text-3xl leading-[1.1] sm:text-4xl">{project.name}</h3>
        <p className="mt-4 text-muted">{project.description}</p>
        <div className="mt-6">
          <TagList items={project.tech} label={`Technologies used in ${project.name}`} />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ProjectLinks project={project} />
          <DetailsButton project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  )
}

/**
 * Standard project card. Stacked on phones and in the desktop three-column
 * grid; side-by-side (image left) on tablets, where cards run full width.
 */
export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className={`${cardClass} grid gap-5 p-5 sm:grid-cols-5 sm:gap-7 sm:p-6 lg:flex lg:flex-col lg:gap-5 lg:p-5`}>
      <div className="sm:col-span-2">
        <ProjectMedia
          project={project}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 40vw, 92vw"
          frame={false}
          interactive
        />
      </div>
      <div className="flex flex-1 flex-col sm:col-span-3">
        <Meta project={project} />
        <h3 className="mt-3 font-display text-2xl leading-[1.15]">{project.name}</h3>
        <p className="mt-2.5 text-[0.9375rem] text-muted">{project.tagline}</p>
        <div className="mt-5">
          <TagList items={project.tech} label={`Technologies used in ${project.name}`} />
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
          <ProjectLinks project={project} />
          <DetailsButton project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  )
}
