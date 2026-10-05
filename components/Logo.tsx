/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

/**
 * Official EFT Logo Emblem (from LOGO/Logo.png)
 */
export const EftLogoIcon: React.FC<{ 
  className?: string; 
  size?: number | string;
  alt?: string;
}> = ({ 
  className = "w-10 h-10", 
  size,
  alt = "Eco Friendly Thai Logo"
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <img 
      src="/logo.png" 
      alt={alt}
      loading="eager"
      className={`shrink-0 object-contain drop-shadow-sm select-none ${className}`}
      style={style}
    />
  );
};

/**
 * Navbar & Footer Logo Lockup:
 * Official EFT Emblem on the left + "ECO FRIENDLY THAI" title on the right
 */
export const EftNavLogo: React.FC<{
  className?: string;
  isLight?: boolean;
}> = ({
  className = "",
  isLight = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
        <EftLogoIcon className="w-full h-full" />
      </div>
      <div className="flex items-center text-left">
        <span className={`text-base sm:text-lg font-black tracking-tight font-sans uppercase whitespace-nowrap ${
          isLight ? 'text-white' : 'text-[#1B4D3E]'
        }`}>
          ECO FRIENDLY THAI
        </span>
      </div>
    </div>
  );
};

export default EftNavLogo;
