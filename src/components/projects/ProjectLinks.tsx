import type { Project } from '../../data/types'
import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'

const linkClass =
  'relative z-10 inline-flex h-9 items-center gap-1.5 rounded-md border border-line-strong px-3 text-sm text-paper transition-colors duration-200 hover:border-faint hover:bg-raised'

/** Source / live-demo links. Renders nothing for projects that have neither yet. */
export function ProjectLinks({ project }: { project: Project }) {
  if (!project.repoUrl && !project.liveUrl) return null

  return (
    <>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GitHubIcon className="text-[0.95rem]" />
          Source
          <span className="sr-only"> code for {project.name} on GitHub (opens in a new tab)</span>
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Live demo
          <ArrowUpRightIcon className="text-base" />
          <span className="sr-only"> of {project.name} (opens in a new tab)</span>
        </a>
      )}
    </>
  )
}
