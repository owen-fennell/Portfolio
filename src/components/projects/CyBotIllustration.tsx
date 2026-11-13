import { useId } from 'react'

// Illustration for the PURGE CyBot project: a 180° sensor sweep with detected
// objects, plus a strip for the 11-state machine. It's a diagram of the idea,
// not captured data.

const CENTER = { x: 200, y: 220 }
const RANGE = 160

/** Converts a sensor reading (angle in degrees, distance in px) to SVG coordinates. */
function polar(angle: number, distance: number) {
  const rad = (angle * Math.PI) / 180
  return { x: CENTER.x + distance * Math.cos(rad), y: CENTER.y - distance * Math.sin(rad) }
}

const rings = [RANGE / 3, (RANGE * 2) / 3, RANGE]
const spokes = [30, 60, 90, 120, 150]
const detections = [
  { angle: 52, distance: 118, delay: '0s' },
  { angle: 112, distance: 84, delay: '0.9s' },
  { angle: 151, distance: 138, delay: '1.7s' },
]
const STATE_COUNT = 11
const ACTIVE_STATE = 4

export function CyBotIllustration({ className = '' }: { className?: string }) {
  const wedgeEnd = polar(100, RANGE)
  // Unique ids so the card and the details dialog can both render this SVG.
  const id = useId()
  const gridId = `${id}-grid`
  const wedgeId = `${id}-wedge`

  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label="Diagram of the CyBot sweeping its sensors across 180 degrees and marking three detected objects"
      className={`block h-full w-full bg-[#0e0e10] ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#ffffff" strokeOpacity="0.04" />
        </pattern>
        <linearGradient id={wedgeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${gridId})`} />

      {/* State machine strip */}
      <text x="24" y="24" className="fill-faint font-mono text-[9px] tracking-[0.14em]">
        FSM · 11 STATES
      </text>
      {Array.from({ length: STATE_COUNT }, (_, i) => (
        <rect
          key={i}
          x={24 + i * 12}
          y={32}
          width={9}
          height={4}
          rx={1}
          fill={i === ACTIVE_STATE ? 'var(--color-accent)' : 'var(--color-line-strong)'}
        />
      ))}
      <text x="376" y="24" textAnchor="end" className="fill-faint font-mono text-[9px] tracking-[0.14em]">
        PING · IR · SERVO
      </text>

      {/* Range rings and bearing lines */}
      <g fill="none" stroke="var(--color-line-strong)" strokeWidth="1">
        {rings.map((r) => (
          <path key={r} d={`M${CENTER.x - r} ${CENTER.y}A${r} ${r} 0 0 1 ${CENTER.x + r} ${CENTER.y}`} />
        ))}
        {spokes.map((angle) => {
          const end = polar(angle, RANGE)
          return (
            <line
              key={angle}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={end.x}
              y2={end.y}
              strokeDasharray="2 5"
              strokeOpacity="0.7"
            />
          )
        })}
        <line x1={CENTER.x - RANGE - 12} y1={CENTER.y} x2={CENTER.x + RANGE + 12} y2={CENTER.y} />
      </g>

      {/* Sweeping sensor beam */}
      <g className="cybot-sweep">
        <path
          d={`M${CENTER.x} ${CENTER.y}L${wedgeEnd.x} ${wedgeEnd.y}A${RANGE} ${RANGE} 0 0 1 ${CENTER.x} ${CENTER.y - RANGE}Z`}
          fill={`url(#${wedgeId})`}
        />
        <line
          x1={CENTER.x}
          y1={CENTER.y}
          x2={CENTER.x}
          y2={CENTER.y - RANGE}
          stroke="var(--color-accent)"
          strokeWidth="1.25"
          strokeOpacity="0.9"
        />
      </g>

      {/* Detected objects */}
      {detections.map(({ angle, distance, delay }) => {
        const { x, y } = polar(angle, distance)
        return (
          <g key={angle} className="cybot-ping" style={{ animationDelay: delay }}>
            <circle cx={x} cy={y} r="9" fill="none" stroke="var(--color-accent)" strokeOpacity="0.35" />
            <circle cx={x} cy={y} r="3.5" fill="var(--color-accent)" />
          </g>
        )
      })}

      {/* The robot */}
      <circle cx={CENTER.x} cy={CENTER.y} r="10" fill="#0e0e10" stroke="var(--color-paper)" strokeWidth="1.5" />
      <path d={`M${CENTER.x} ${CENTER.y + 3}v-8`} stroke="var(--color-paper)" strokeWidth="1.5" strokeLinecap="round" />

      <g className="fill-faint font-mono text-[9px] tracking-[0.1em]">
        <text x={CENTER.x - RANGE} y="238" textAnchor="middle">
          180°
        </text>
        <text x={CENTER.x} y="243" textAnchor="middle">
          TM4C123
        </text>
        <text x={CENTER.x + RANGE} y="238" textAnchor="middle">
          0°
        </text>
      </g>
    </svg>
  )
}
