/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

/**
 * EFT Emblem Icon: 4-Arrow Circular Recycling loop with central green Diamond and 'EFT' letters.
 */
export const EftLogoIcon: React.FC<{ className?: string; size?: number | string }> = ({ 
  className = "w-10 h-10", 
  size 
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`shrink-0 ${className}`}
      style={style}
    >
      <defs>
        <linearGradient id="eft-arr-top-v2" x1="20" y1="20" x2="180" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#78C63E" />
          <stop offset="50%" stopColor="#55A82E" />
          <stop offset="100%" stopColor="#368924" />
        </linearGradient>
        <linearGradient id="eft-arr-right-v2" x1="180" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EBF37" />
          <stop offset="100%" stopColor="#2E7E20" />
        </linearGradient>
        <linearGradient id="eft-arr-bottom-v2" x1="180" y1="180" x2="20" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5EB135" />
          <stop offset="100%" stopColor="#2B771E" />
        </linearGradient>
        <linearGradient id="eft-arr-left-v2" x1="20" y1="180" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4CA329" />
          <stop offset="100%" stopColor="#7BC840" />
        </linearGradient>

        <linearGradient id="eft-dia-grad-v2" x1="50" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0E6B4B" />
          <stop offset="50%" stopColor="#0B563C" />
          <stop offset="100%" stopColor="#073B29" />
        </linearGradient>
      </defs>

      {/* 4 Recycling Arrows */}
      <g>
        <path
          d="M 28 32 L 138 32 L 138 14 L 176 46 L 138 78 L 138 60 L 56 60 L 56 32 Z"
          fill="url(#eft-arr-top-v2)"
          stroke="#205B1B"
          strokeWidth="1.8"
        />
        <path
          d="M 168 28 L 168 138 L 186 138 L 154 176 L 122 138 L 140 138 L 140 56 L 168 56 Z"
          fill="url(#eft-arr-right-v2)"
          stroke="#1A4F16"
          strokeWidth="1.8"
        />
        <path
          d="M 172 168 L 62 168 L 62 186 L 24 154 L 62 122 L 62 140 L 144 140 L 144 168 Z"
          fill="url(#eft-arr-bottom-v2)"
          stroke="#164613"
          strokeWidth="1.8"
        />
        <path
          d="M 32 172 L 32 62 L 14 62 L 46 24 L 78 62 L 60 62 L 60 144 L 32 144 Z"
          fill="url(#eft-arr-left-v2)"
          stroke="#1F581A"
          strokeWidth="1.8"
        />
      </g>

      {/* Central Diamond */}
      <g transform="rotate(45 100 100)">
        <rect
          x="62"
          y="62"
          width="76"
          height="76"
          rx="4"
          fill="url(#eft-dia-grad-v2)"
          stroke="#8AE0B3"
          strokeWidth="2.5"
          strokeOpacity="0.8"
        />
      </g>

      {/* EFT Letters */}
      <g>
        <path d="M 64 86 L 82 86 M 64 100 L 78 100 M 64 114 L 82 114 M 64 86 L 64 114" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="square" />
        <path d="M 91 86 L 109 86 M 91 100 L 105 100 M 91 86 L 91 114" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="square" />
        <path d="M 118 86 L 138 86 M 128 86 L 128 114" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="square" />
      </g>
    </svg>
  );
};

/**
 * Navbar Logo Lockup matching the screenshot:
 * Emblem on the left + "ECO FRIENDLY" / "THAI CO., LTD." stacked on the right
 */
export const EftNavLogo: React.FC<{
  className?: string;
  isLight?: boolean;
}> = ({
  className = "",
  isLight = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="w-10 h-10 shrink-0">
        <EftLogoIcon className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center text-left leading-none">
        <span className={`text-base sm:text-lg font-black tracking-tight font-sans uppercase ${
          isLight ? 'text-white' : 'text-[#1B4D3E]'
        }`}>
          ECO FRIENDLY
        </span>
        <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider font-sans uppercase mt-0.5 ${
          isLight ? 'text-emerald-300' : 'text-[#2E7D5F]'
        }`}>
          THAI CO., LTD.
        </span>
      </div>
    </div>
  );
};

export default EftNavLogo;
