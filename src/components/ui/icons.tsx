import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Shared wrapper for the outline icons. Decorative by default (aria-hidden). */
function Outline({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

function Solid({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  )
}

export const GitHubIcon = (props: IconProps) => (
  <Solid {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </Solid>
)

export const LinkedInIcon = (props: IconProps) => (
  <Solid {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </Solid>
)

export const MailIcon = (props: IconProps) => (
  <Outline {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Outline>
)

export const ArrowUpRightIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </Outline>
)

export const ArrowDownIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Outline>
)

export const ArrowUpIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Outline>
)

export const ArrowRightIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Outline>
)

export const DownloadIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
  </Outline>
)

export const MenuIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M4 8h16M4 16h16" />
  </Outline>
)

export const CloseIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Outline>
)

export const CopyIcon = (props: IconProps) => (
  <Outline {...props}>
    <rect x="9" y="9" width="11" height="11" rx="1.5" />
    <path d="M5 15V5.5A1.5 1.5 0 0 1 6.5 4H15" />
  </Outline>
)

export const CheckIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Outline>
)

export const AwardIcon = (props: IconProps) => (
  <Outline {...props}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
  </Outline>
)

// Skill category icons
export const FrontendIcon = (props: IconProps) => (
  <Outline {...props}>
    <rect x="3" y="4" width="18" height="16" rx="1.5" />
    <path d="M3 9h18M9 9v11" />
  </Outline>
)

export const BackendIcon = (props: IconProps) => (
  <Outline {...props}>
    <rect x="4" y="4.5" width="16" height="6" rx="1.5" />
    <rect x="4" y="13.5" width="16" height="6" rx="1.5" />
    <path d="M8 7.5h.01M8 16.5h.01" />
  </Outline>
)

export const DatabaseIcon = (props: IconProps) => (
  <Outline {...props}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
  </Outline>
)

export const ToolsIcon = (props: IconProps) => (
  <Outline {...props}>
    <path d="m5 7 5 5-5 5M12.5 17H19" />
  </Outline>
)
