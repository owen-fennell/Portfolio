import type { ReactNode } from 'react'

/** Small monospace label for technologies and skills. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-raised/60 px-2.5 py-1 font-mono text-xs leading-none text-muted">
      {children}
    </span>
  )
}

export function TagList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex">
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
