import type { Project, ResponsiveImage } from '../../data/types'
import { Picture } from '../ui/Picture'
import { CyBotIllustration } from './CyBotIllustration'

interface ProjectMediaProps {
  project: Project
  /** Which of the project's images to show (defaults to the cover). */
  image?: ResponsiveImage
  sizes: string
  /** Show the browser-window bar on framed projects. Off in the small card grid so covers line up. */
  frame?: boolean
  /** Adds the slow zoom on card hover. */
  interactive?: boolean
  priority?: boolean
}

/**
 * The visual for a project: a screenshot (optionally in a browser-window
 * frame), a photo, or a built-in illustration. Always 16:10 so cards line up.
 */
export function ProjectMedia({ project, image, sizes, frame = true, interactive = false, priority }: ProjectMediaProps) {
  const cover = image ?? project.images?.[0]
  const zoom = interactive
    ? 'transition-transform duration-500 ease-out-soft group-hover:scale-[1.025] motion-reduce:transform-none'
    : ''

  return (
    <div className="overflow-hidden rounded-md border border-line bg-[#0e0e10]">
      {project.framed && frame && (
        <div aria-hidden="true" className="flex h-7 items-center gap-1.5 border-b border-line bg-surface px-3">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
      )}
      <div className="aspect-[16/10] overflow-hidden">
        {cover ? (
          <Picture
            image={cover}
            sizes={sizes}
            priority={priority}
            className={`h-full w-full object-cover object-top ${zoom}`}
          />
        ) : project.illustration === 'cybot' ? (
          <CyBotIllustration className={zoom} />
        ) : null}
      </div>
    </div>
  )
}
