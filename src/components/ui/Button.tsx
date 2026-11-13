type Variant = 'primary' | 'secondary'

const base =
  'inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium whitespace-nowrap transition-colors duration-200'

const variants: Record<Variant, string> = {
  primary: 'bg-paper text-ink hover:bg-white',
  secondary: 'border border-line-strong text-paper hover:border-faint hover:bg-raised',
}

/** Class string for button-styled links and buttons, so both share one look. */
export function buttonClass(variant: Variant = 'primary', extra = ''): string {
  return `${base} ${variants[variant]} ${extra}`
}

/** Square icon-only control (social links, close buttons). */
export const iconButtonClass =
  'inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:bg-raised hover:text-paper'
