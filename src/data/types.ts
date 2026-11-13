export interface ResponsiveImage {
  /** Largest rendition, used as the fallback `src`. */
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
}

export interface ExperienceItem {
  company: string
  role: string
  /** Human-readable date range. Leave undefined when it can't be stated yet. */
  period?: string
  location?: string
  /** Short status badge, e.g. "Incoming". */
  status?: string
  summary?: string
  highlights?: string[]
}

export interface LeadershipItem {
  organization: string
  role: string
  period: string
  location?: string
  /** One headline number that sums up the impact. */
  stat: { value: string; label: string }
  highlights: string[]
}

/** Projects without screenshots can use a built-in illustration instead. */
export type ProjectIllustration = 'cybot'

export interface Project {
  id: string
  name: string
  /** One-line positioning shown under the name. */
  tagline: string
  description: string
  date: string
  role: string
  tech: string[]
  highlights: string[]
  /** First image is the card cover; all of them appear in the details view. */
  images?: ResponsiveImage[]
  illustration?: ProjectIllustration
  /** Wrap screenshots in a browser-window frame (true for web app captures). */
  framed?: boolean
  recognition?: string
  /** Leave links undefined until they exist — the UI simply omits them. */
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface SkillGroup {
  title: string
  icon: 'frontend' | 'backend' | 'database' | 'tools'
  skills: string[]
}
