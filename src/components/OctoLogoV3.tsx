export default function OctoLogoV3({ className = '' }: { className?: string }) {
  // Body ellipse: cx=100, cy=70, rx=50, ry=52
  // Bottom edge of body at y≈122. Tentacle roots placed on that lower arc.
  // stroke-linejoin="round" gives organic rounded bends matching the reference.
  const T = {
    strokeWidth: 7,
    stroke: '#f28c5a',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  }
  const N = { stroke: '#f28c5a', strokeWidth: 4, fill: 'none' }

  return (
    <svg
      className={className}
      viewBox="0 0 200 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Body ── */}
      <ellipse cx="100" cy="70" rx="50" ry="52" fill="#f28c5a" />

      {/* Eye */}
      <circle cx="100" cy="63" r="7" fill="#1a3b40" />

      {/* ── Tentacles ──
          Roots are set a few px inside the ellipse so they emerge cleanly.
          All corners use stroke-linejoin="round" for the organic PCB feel. */}

      {/* Far-left: exits left then drops */}
      <path d="M71,117 L16,117 L16,158" {...T} />
      <circle cx="16" cy="164" r="5" {...N} />

      {/* Mid-left: exits left, jogs down, exits left again, drops */}
      <path d="M79,121 L52,121 L52,142 L32,142 L32,165" {...T} />
      <circle cx="32" cy="171" r="5" {...N} />

      {/* Inner-left: drops then jogs left */}
      <path d="M89,122 L89,148 L66,148 L66,168" {...T} />
      <circle cx="66" cy="174" r="5" {...N} />

      {/* Inner-right: drops then jogs right */}
      <path d="M111,122 L111,148 L134,148 L134,168" {...T} />
      <circle cx="134" cy="174" r="5" {...N} />

      {/* Mid-right: exits right, jogs down, exits right again, drops */}
      <path d="M121,121 L148,121 L148,142 L168,142 L168,165" {...T} />
      <circle cx="168" cy="171" r="5" {...N} />

      {/* Far-right: exits right then drops */}
      <path d="M129,117 L184,117 L184,158" {...T} />
      <circle cx="184" cy="164" r="5" {...N} />
    </svg>
  )
}
