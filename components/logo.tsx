"use client"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Original icon - circular energy flow with perfect geometry */}
      <g transform="translate(0, 0)">
        {/* Outer circle - subtle background */}
        <circle 
          cx="18" 
          cy="18" 
          r="16" 
          fill="url(#iconBg)" 
          opacity="0.08"
        />
        
        {/* Main icon shape - three-quarter circle representing continuous energy flow */}
        <circle 
          cx="18" 
          cy="18" 
          r="11" 
          stroke="url(#mainGradient)" 
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="52 17"
          strokeDashoffset="0"
          transform="rotate(-90 18 18)"
        />
        
        {/* Inner accent circle - represents core efficiency */}
        <circle 
          cx="18" 
          cy="18" 
          r="6.5" 
          stroke="url(#innerGradient)" 
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="30 10"
          strokeDashoffset="0"
          transform="rotate(45 18 18)"
        />
        
        {/* Center dot - focal point */}
        <circle 
          cx="18" 
          cy="18" 
          r="2" 
          fill="url(#centerGradient)"
        />
        
        {/* Elegant arrow indicator - subtle directional element */}
        <path
          d="M 23 12 L 25.5 9.5 L 23 7"
          stroke="url(#accentGradient)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Wordmark - getheatpumpquotes in Poppins */}
      <text
        x="44"
        y="23"
        fontFamily="var(--font-poppins), 'Poppins', system-ui, sans-serif"
        fontSize="15"
        fontWeight="500"
        letterSpacing="-0.2"
      >
        <tspan fill="#1a2b49">getheatpump</tspan>
        <tspan fill="#0071e3">quotes</tspan>
      </text>

      {/* Gradient definitions - Premium and refined */}
      <defs>
        {/* Icon background - soft blue */}
        <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="100%" stopColor="#0066cc" />
        </linearGradient>
        
        {/* Main gradient - primary brand blue to vibrant cyan */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="50%" stopColor="#00a2ff" />
          <stop offset="100%" stopColor="#0071e3" />
        </linearGradient>
        
        {/* Inner gradient - blue to green transition */}
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b8ff" />
          <stop offset="100%" stopColor="#34c759" />
        </linearGradient>
        
        {/* Center gradient - bright focal point */}
        <radialGradient id="centerGradient">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="100%" stopColor="#0056b3" />
        </radialGradient>
        
        {/* Accent gradient - green energy indicator */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34c759" />
          <stop offset="100%" stopColor="#30d158" />
        </linearGradient>
      </defs>
    </svg>
  )
}
