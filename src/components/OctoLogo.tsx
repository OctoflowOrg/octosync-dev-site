export default function OctoLogo({
  className = '',
  color = '#f28c5a',
  eyeColor = '#1a3b40',
}: {
  className?: string
  color?: string
  eyeColor?: string
}) {
  const arm = {
    stroke: color,
    strokeWidth: 8,
    strokeLinecap: 'round' as const,
    fill: 'none',
  }
  const node = { stroke: color, strokeWidth: 4, fill: 'none' }

  return (
    <svg
      className={className}
      viewBox="0 0 215 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Body: full circle for the classic octopus dome ── */}
      <circle cx="105" cy="66" r="52" fill={color} />

      {/* Eye — slightly left of center, matching reference */}
      <circle cx="101" cy="60" r="7.5" fill={eyeColor} />

      {/* ── Arms ──
          Cubic bezier: M start C cp1 cp2 end
          Roots tucked inside the body so the fill covers the join. */}

      {/* 1. Far-left — exits left side of body (~x=55,y=66), arcs left-down */}
      <path d="M 57,72 C 28,74 8,90 8,138" {...arm} />
      <circle cx="8" cy="144" r="5.5" {...node} />

      {/* 2. Lower-left — exits lower-left arc (~x=68,y=106), sweeps left then down */}
      <path d="M 70,108 C 48,116 24,130 18,164" {...arm} />
      <circle cx="18" cy="170" r="5.5" {...node} />

      {/* 3. Center-left — exits bottom-left (~x=88,y=116), drops with slight left lean */}
      <path d="M 88,116 C 80,134 70,155 64,174" {...arm} />
      <circle cx="64" cy="180" r="5.5" {...node} />

      {/* 4. Center — exits bottom (~x=105,y=118), drops mostly straight */}
      <path d="M 105,118 C 100,136 96,158 94,176" {...arm} />
      <circle cx="94" cy="182" r="5.5" {...node} />

      {/* 5. Center-right — exits bottom-right (~x=122,y=116), drops with slight right lean */}
      <path d="M 122,116 C 128,132 138,150 148,166" {...arm} />
      <circle cx="150" cy="172" r="5.5" {...node} />

      {/* 6. Right-mid — exits lower-right (~x=142,y=105), sweeps right */}
      <path d="M 142,106 C 162,110 182,118 188,148" {...arm} />
      <circle cx="188" cy="154" r="5.5" {...node} />

      {/* 7. Far-right — exits right side of body (~x=155,y=70), curves UP and right */}
      <path d="M 155,72 C 172,64 190,68 194,100" {...arm} />
      <circle cx="194" cy="106" r="5.5" {...node} />
    </svg>
  )
}
