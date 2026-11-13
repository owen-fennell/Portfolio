import { useEffect, useRef, useState, type MouseEvent } from 'react'
import type { Project } from '../../data/types'
import { iconButtonClass } from '../ui/Button'
import { AwardIcon, CloseIcon } from '../ui/icons'
import { Picture } from '../ui/Picture'
import { TagList } from '../ui/Tag'
import { ProjectLinks } from './ProjectLinks'
import { ProjectMedia } from './ProjectMedia'

interface ProjectDialogProps {
  /** The project to show, or null when closed. */
  project: Project | null
  onClose: () => void
}

/**
 * Project details in a native modal <dialog>: the browser handles focus
 * trapping, Escape to close, and returning focus to the card that opened it.
 */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) {
      setImageIndex(0)
      dialog.showModal()
      dialog.scrollTop = 0
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  // A click that lands on the <dialog> itself (not its content) is on the backdrop.
  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) event.currentTarget.close()
  }

  const images = project?.images ?? []

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={closeOnBackdrop}
      aria-labelledby="project-dialog-title"
      className="dialog-panel m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-lg border border-line-strong bg-surface p-0 shadow-2xl shadow-black/60"
    >
      {project && (
        <div>
          <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-5 py-4 backdrop-blur sm:px-8">
            <div>
              <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-faint">
                <span>{project.date}</span>
                <span>{project.role}</span>
                {project.recognition && (
                  <span className="inline-flex items-center gap-1 text-accent">
                    <AwardIcon className="text-sm" />
                    {project.recognition}
                  </span>
                )}
              </p>
              <h2 id="project-dialog-title" className="mt-2 font-display text-3xl leading-[1.1]">
                {project.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className={`${iconButtonClass} -mr-2 text-xl`}
              aria-label="Close project details"
            >
              <CloseIcon />
            </button>
          </header>

          <div className="space-y-8 px-5 py-6 sm:px-8 sm:py-8">
            <div>
              <ProjectMedia
                project={project}
                image={images[imageIndex]}
                sizes="(min-width: 768px) 700px, 92vw"
                priority
              />
              {images.length > 1 && (
                <ul aria-label="Screenshots" className="mt-3 flex gap-2">
                  {images.map((image, i) => (
                    <li key={image.src}>
                      <button
                        type="button"
                        onClick={() => setImageIndex(i)}
                        aria-label={`Show screenshot ${i + 1} of ${images.length}`}
                        aria-pressed={i === imageIndex}
                        className={`block w-20 overflow-hidden rounded border transition-[border-color,opacity] duration-200 sm:w-24 ${
                          i === imageIndex ? 'border-accent' : 'border-line opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Picture
                          image={{ ...image, alt: '' }}
                          sizes="96px"
                          className="aspect-[16/10] w-full object-cover object-top"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className="text-lg leading-relaxed text-paper/90">{project.description}</p>

            <div>
              <h3 className="label text-faint">What I built</h3>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="relative pl-5 text-muted">
                    <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label text-faint">Built with</h3>
              <div className="mt-4">
                <TagList items={project.tech} label={`Technologies used in ${project.name}`} />
              </div>
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-3 border-t border-line pt-6">
                <ProjectLinks project={project} />
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
