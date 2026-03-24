export default function OctoLogoV1({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="50" cy="38" rx="22" ry="24" fill="#f28c5a" />
      {/* Eye */}
      <circle cx="50" cy="36" r="4" fill="#1a3b40" />

      {/* Tentacle 1 - far left, goes down-left */}
      <path d="M30 54 L22 54 L22 72 L16 72" stroke="#f28c5a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="72" r="3" stroke="#f28c5a" strokeWidth="3" fill="none" />

      {/* Tentacle 2 - mid-left, goes down */}
      <path d="M36 58 L36 68 L28 68 L28 80" stroke="#f28c5a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="28" cy="82" r="3" stroke="#f28c5a" strokeWidth="3" fill="none" />

      {/* Tentacle 3 - center-left */}
      <path d="M44 62 L44 72 L38 72 L38 84" stroke="#f28c5a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="86" r="3" stroke="#f28c5a" strokeWidth="3" fill="none" />

      {/* Tentacle 4 - center-right */}
      <path d="M56 62 L56 72 L62 72 L62 84" stroke="#f28c5a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="62" cy="86" r="3" stroke="#f28c5a" strokeWidth="3" fill="none" />

      {/* Tentacle 5 - mid-right */}
      <path d="M64 58 L64 68 L72 68 L72 80" stroke="#f28c5a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="72" cy="82" r="3" stroke="#f28c5a" strokeWidth="3" fill="none" />

      {/* Tentacle 6 - far right */}
      <path d="M70 54 L78 54 L78 72 L84 72" stroke="#f28c5a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="86" cy="72" r="3" stroke="#f28c5a" strokeWidth="3" fill="none" />
    </svg>
  )
}
