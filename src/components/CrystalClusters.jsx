import React from 'react';

/**
 * Crystalline Mineral Shards rising from the flanks of the awakening dais,
 * recreating the glowing crystal clusters seen in the reference design.
 */
export const CrystalClusters = ({ side = 'left', className = '' }) => {
  const isLeft = side === 'left';

  return (
    <div
      className={`absolute bottom-0 pointer-events-none select-none z-10 transition-transform duration-700 ${
        isLeft ? 'left-[-40px] md:left-4 lg:left-12' : 'right-[-40px] md:right-4 lg:right-12'
      } ${className}`}
      style={{
        transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)',
        filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.45))'
      }}
    >
      <svg
        width="260"
        height="320"
        viewBox="0 0 260 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[180px] sm:w-[220px] md:w-[260px] h-auto opacity-85 hover:opacity-100 transition-opacity"
      >
        <defs>
          <linearGradient id={`crystalGrad1-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#c084fc" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#7e22ce" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2e1065" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id={`crystalGrad2-${side}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#d8b4fe" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#9333ea" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1e0b38" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id={`crystalGrad3-${side}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#170329" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#581c87" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.75" />
          </linearGradient>

          <filter id={`crystalGlow-${side}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Tall Main Spire */}
        <polygon
          points="80,20 120,70 110,290 60,285"
          fill={`url(#crystalGrad1-${side})`}
          stroke="rgba(216, 180, 254, 0.7)"
          strokeWidth="1.2"
        />
        <polygon
          points="80,20 120,70 95,290 60,285"
          fill={`url(#crystalGrad2-${side})`}
          opacity="0.85"
        />
        <polygon
          points="80,20 50,85 60,285"
          fill={`url(#crystalGrad3-${side})`}
          stroke="rgba(192, 132, 252, 0.5)"
          strokeWidth="1"
        />

        {/* Medium Slanted Spire */}
        <polygon
          points="155,90 190,135 175,295 125,290"
          fill={`url(#crystalGrad2-${side})`}
          stroke="rgba(233, 213, 255, 0.65)"
          strokeWidth="1.2"
        />
        <polygon
          points="155,90 135,145 125,290"
          fill={`url(#crystalGrad1-${side})`}
          opacity="0.7"
        />

        {/* Small Foreground Shard */}
        <polygon
          points="35,140 65,175 55,295 20,290"
          fill={`url(#crystalGrad1-${side})`}
          stroke="rgba(216, 180, 254, 0.8)"
          strokeWidth="1"
        />
        <polygon
          points="35,140 20,180 20,290"
          fill={`url(#crystalGrad3-${side})`}
          opacity="0.65"
        />

        {/* Far Left Tiny Shard */}
        <polygon
          points="10,195 28,220 22,298 5,295"
          fill={`url(#crystalGrad2-${side})`}
          stroke="rgba(192, 132, 252, 0.6)"
          strokeWidth="0.8"
        />

        {/* Specular Edge Highlights */}
        <line x1="80" y1="20" x2="110" y2="290" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.85" />
        <line x1="155" y1="90" x2="175" y2="295" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.75" />
        <line x1="35" y1="140" x2="55" y2="295" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />

        {/* Twinkling points atop crystal vertices */}
        <circle cx="80" cy="20" r="3.5" fill="#ffffff" filter={`url(#crystalGlow-${side})`} />
        <circle cx="155" cy="90" r="2.5" fill="#f3e8ff" />
        <circle cx="35" cy="140" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
};
