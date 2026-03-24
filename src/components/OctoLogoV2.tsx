export default function OctoLogoV2({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head — dome shape, flat-ish bottom */}
      <path
        d="M45 100 Q45 40 100 40 Q155 40 155 100 L155 108 Q155 115 100 115 Q45 115 45 108 Z"
        fill="#f28c5a"
      />

      {/* Eye */}
      <circle cx="100" cy="80" r="7" fill="#1a3b40" />

      {/* ── TENTACLES (PCB right-angle traces) ── */}
      {/* stroke-linejoin="miter" keeps sharp corners */}

      {/* Far-left: exits body ~x=55, goes left then down */}
      <polyline
        points="58,108 20,108 20,148"
        stroke="#f28c5a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" fill="none"
      />
      <circle cx="20" cy="154" r="5" stroke="#f28c5a" strokeWidth="4" fill="none" />

      {/* Mid-left: exits ~x=68, goes left then down */}
      <polyline
        points="68,113 50,113 50,135 34,135 34,158"
        stroke="#f28c5a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" fill="none"
      />
      <circle cx="34" cy="164" r="5" stroke="#f28c5a" strokeWidth="4" fill="none" />

      {/* Inner-left: exits ~x=82, goes down then left */}
      <polyline
        points="82,115 82,140 62,140 62,165"
        stroke="#f28c5a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" fill="none"
      />
      <circle cx="62" cy="171" r="5" stroke="#f28c5a" strokeWidth="4" fill="none" />

      {/* Inner-right: mirror of inner-left */}
      <polyline
        points="118,115 118,140 138,140 138,165"
        stroke="#f28c5a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" fill="none"
      />
      <circle cx="138" cy="171" r="5" stroke="#f28c5a" strokeWidth="4" fill="none" />

      {/* Mid-right: mirror of mid-left */}
      <polyline
        points="132,113 150,113 150,135 166,135 166,158"
        stroke="#f28c5a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" fill="none"
      />
      <circle cx="166" cy="164" r="5" stroke="#f28c5a" strokeWidth="4" fill="none" />

      {/* Far-right: mirror of far-left */}
      <polyline
        points="142,108 180,108 180,148"
        stroke="#f28c5a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter" fill="none"
      />
      <circle cx="180" cy="154" r="5" stroke="#f28c5a" strokeWidth="4" fill="none" />
    </svg>
  )
}
