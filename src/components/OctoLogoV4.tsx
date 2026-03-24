export default function OctoLogoV4({ className = '' }: { className?: string }) {
  const leg = {
    stroke: '#f28c5a',
    strokeWidth: 7,
    strokeLinecap: 'round' as const,
    fill: 'none',
  }
  const dot = { stroke: '#f28c5a', strokeWidth: 4, fill: 'none' }

  return (
    <svg
      className={className}
      viewBox="0 0 200 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Body: smooth rounded dome ── */}
      <ellipse cx="100" cy="68" rx="52" ry="54" fill="#f28c5a" />

      {/* Eye */}
      <circle cx="100" cy="60" r="7" fill="#1a3b40" />

      {/* ── Tentacles: all cubic beziers, roots hidden under body ──
          Each path: M root C cp1 cp2 endpoint
          Tentacles fan from under the body, curving outward organically */}

      {/* Far-left — sweeps wide left then curls down */}
      <path d="M 66,112 C 38,114 12,118 12,160" {...leg} />
      <circle cx="12" cy="166" r="5" {...dot} />

      {/* Mid-left — arcs left then drops with a slight S */}
      <path d="M 76,120 C 54,124 30,136 26,170" {...leg} />
      <circle cx="26" cy="176" r="5" {...dot} />

      {/* Inner-left — curves gently left-down */}
      <path d="M 88,122 C 80,138 68,152 62,174" {...leg} />
      <circle cx="62" cy="180" r="5" {...dot} />

      {/* Inner-right — mirror */}
      <path d="M 112,122 C 120,138 132,152 138,174" {...leg} />
      <circle cx="138" cy="180" r="5" {...dot} />

      {/* Mid-right — mirror */}
      <path d="M 124,120 C 146,124 170,136 174,170" {...leg} />
      <circle cx="174" cy="176" r="5" {...dot} />

      {/* Far-right — mirror of far-left */}
      <path d="M 134,112 C 162,114 188,118 188,160" {...leg} />
      <circle cx="188" cy="166" r="5" {...dot} />
    </svg>
  )
}
