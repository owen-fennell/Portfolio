import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Built with React, TypeScript and Tailwind CSS.{' '}
          <a href={profile.sourceUrl} target="_blank" rel="noopener noreferrer" className="link text-muted">
            View the source
            <span className="sr-only"> on GitHub (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
