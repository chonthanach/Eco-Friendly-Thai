/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PARTNERS_COHORT, INCUBATION_SUPPORT_ORGS, CLIENT_PARTNERS } from '../constants';
import { Globe } from 'lucide-react';

interface IncubationNetworkProps {
  lang: 'th' | 'en';
}

// Icon colors for each partner
const PARTNER_COLORS = ['#C0392B', '#1B4D3E', '#E67E22', '#2980B9', '#8E44AD'];

// Abstract SVG icons for each partner (white on colored background, matching reference design)
const PARTNER_ICONS: React.FC<{ className?: string }>[] = [
  // KRS — Factory/puzzle piece with circles
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 35H45V25C45 22 48 20 50 20C52 20 55 22 55 25V35H75V55H65C62 55 60 58 60 60C60 62 62 65 65 65H75V80H25V65H35C38 65 40 62 40 60C40 58 38 55 35 55H25V35Z" fill="white"/>
      <circle cx="30" cy="28" r="6" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="72" cy="28" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="72" cy="78" r="6" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="28" cy="78" r="4" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // SCGC — Hexagon molecule
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20L75 35V65L50 80L25 65V35L50 20Z" fill="white"/>
      <path d="M50 35L62 42V58L50 65L38 58V42L50 35Z" fill="currentColor"/>
      <circle cx="50" cy="18" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="78" cy="35" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="78" cy="65" r="4" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="35" r="4" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="65" r="5" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // CP ALL — Shopping/retail shape
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40H70L65 75H35L30 40Z" fill="white"/>
      <path d="M38 40V32C38 26 43 22 50 22C57 22 62 26 62 32V40" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <rect x="40" y="50" width="20" height="12" rx="3" fill="currentColor"/>
      <circle cx="28" cy="35" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="73" cy="35" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="82" r="4" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // SCGP — Package/cube
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 22L78 38V68L50 84L22 68V38L50 22Z" fill="white"/>
      <path d="M50 52L78 38" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 52L22 38" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 52V84" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="18" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="82" cy="55" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="18" cy="55" r="5" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // DCCE — Leaf/environment
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 82C50 82 22 62 22 38C22 24 35 15 50 15C65 15 78 24 78 38C78 62 50 82 50 82Z" fill="white"/>
      <path d="M50 72V38" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M50 55C40 55 32 47 32 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M50 45C60 45 68 37 68 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="25" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="74" cy="25" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="86" r="4" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
];

// Decorative star/molecule SVG background (matching reference design)
const DecorativeBgIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Large star shape */}
    <path d="M200 60L220 160L310 120L240 190L340 200L240 210L310 280L220 240L200 340L180 240L90 280L160 210L60 200L160 190L90 120L180 160Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Outer circles on star tips */}
    <circle cx="200" cy="45" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="200" cy="355" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="45" cy="200" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="355" cy="200" r="18" stroke="currentColor" strokeWidth="1.5"/>
    {/* Diagonal circles */}
    <circle cx="310" cy="105" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="90" cy="105" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="310" cy="295" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="90" cy="295" r="14" stroke="currentColor" strokeWidth="1.5"/>
    {/* Inner ring */}
    <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1.5"/>
    {/* Center dots */}
    <circle cx="200" cy="200" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="200" cy="175" r="5" fill="currentColor" opacity="0.3"/>
    <circle cx="218" cy="210" r="5" fill="currentColor" opacity="0.3"/>
    <circle cx="182" cy="210" r="5" fill="currentColor" opacity="0.3"/>
  </svg>
);

const IncubationNetwork: React.FC<IncubationNetworkProps> = ({ lang }) => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const currentPartner = CLIENT_PARTNERS[currentPartnerIndex];

  const isFirst = currentPartnerIndex === 0;
  const isLast = currentPartnerIndex === CLIENT_PARTNERS.length - 1;

  const goToPrev = () => {
    if (!isFirst) setCurrentPartnerIndex((prev) => prev - 1);
  };
  const goToNext = () => {
    if (!isLast) setCurrentPartnerIndex((prev) => prev + 1);
  };

  return (
    <section id="incubation" className="py-28 px-6 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2 sm:mb-3">
            {lang === 'th' ? 'โครงการเร่งรัดนวัตกรรมระดับสากล' : 'GLOBAL PARTNERSHIPS & ACCELERATION'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-4">
            THE INCUBATION <span className="text-[#1B4D3E]">NETWORK</span>
          </h2>
          <div className="w-20 h-1 bg-[#1B4D3E] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#5D5A53] font-light text-base sm:text-lg">
            {lang === 'th'
              ? 'ภาคี 5 องค์กรชั้นนำในโครงการ Thailand Plastics Circularity Accelerator โดย The Incubation Network ร่วมกับ The Circulate Initiative และ SecondMuse'
              : 'Official Cohort of the Thailand Plastics Circularity Accelerator supported by Global Affairs Canada and ECCA Family Foundation.'}
          </p>
        </div>

        {/* 5 Cohort Organizations Grid matching user's site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PARTNERS_COHORT.map((partner, index) => {
            const isEFT = partner.name.includes('ECO FRIENDLY');
            return (
              <div 
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isEFT 
                    ? 'bg-[#1B4D3E] text-white border-[#1B4D3E] shadow-xl scale-105 z-10' 
                    : 'bg-white text-[#2C2A26] border-[#D6D1C7] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Emblem */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm mb-4 ${
                    isEFT ? 'bg-white/20 text-[#8AE0B3]' : 'bg-[#1B4D3E]/10 text-[#1B4D3E]'
                  }`}>
                    {partner.logoText}
                  </div>

                  <h3 className={`text-lg font-bold mb-1 leading-tight ${isEFT ? 'text-white' : 'text-[#2C2A26]'}`}>
                    {partner.name}
                  </h3>
                  
                  <span className={`text-xs font-semibold block mb-3 uppercase tracking-wider ${
                    isEFT ? 'text-[#8AE0B3]' : 'text-[#1B4D3E]'
                  }`}>
                    {partner.role}
                  </span>

                  <p className={`text-xs font-light leading-relaxed ${isEFT ? 'text-white/80' : 'text-[#5D5A53]'}`}>
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/20 flex items-center gap-1.5 text-[11px] font-semibold">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Thailand Circular Cohort</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supported by Pill Banner */}
        <div className="bg-[#EBE7DE] rounded-2xl p-8 border border-[#D6D1C7] mb-20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5D5A53]">
              {lang === 'th' ? 'ได้รับการสนับสนุนและร่วมมือโดย' : 'PROGRAM PARTNERS & GLOBAL SUPPORTERS'}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {INCUBATION_SUPPORT_ORGS.map((org, i) => (
              <div key={i} className="px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-[#D6D1C7] text-xs sm:text-sm font-semibold text-[#2C2A26] shadow-sm">
                {org}
              </div>
            ))}
          </div>
        </div>

        {/* Client Partners Slider – Redesigned to match "Healthy Defenses" card style */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4D3E] block mb-2">
              {lang === 'th' ? 'พันธมิตรและลูกค้าองค์กรชั้นนำ' : 'CLIENTS & STRATEGIC ALLIANCES'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2A26]">
              {lang === 'th' ? 'ความไว้วางใจจากภาคอุตสาหกรรม' : 'Trusted by Leading Enterprises'}
            </h3>
          </div>

          {/* Slider Card — full viewport width breakout */}
          <div className="relative left-1/2 -translate-x-1/2 w-screen px-4 sm:px-8 md:px-12">
            <div 
              className="bg-[#E8E5DE] relative overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex items-center"
              style={{ borderRadius: '1.5rem 9rem 9rem 1.5rem' }}
            >
            
            {/* Decorative Background Icon — centered star/molecule line-art */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ left: '10%' }}>
              <DecorativeBgIcon className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] text-[#C5C0B6]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex-1 pl-8 sm:pl-14 pr-4 py-8 sm:py-12">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-3 leading-tight">
                {currentPartner.name}
              </h4>
              <p className="text-[13px] sm:text-sm md:text-base text-[#6B6860] font-normal leading-relaxed max-w-md mb-1.5">
                {currentPartner.desc}
              </p>
              <p className="text-xs font-bold text-[#1A1A1A] tracking-wide">
                {lang === 'th' ? 'พันธมิตรองค์กร' : 'Enterprise Partner'}
              </p>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2.5 mt-6 sm:mt-8">
                <button
                  onClick={goToPrev}
                  disabled={isFirst}
                  className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all duration-200 ${
                    isFirst ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md active:scale-95'
                  }`}
                  aria-label="Previous partner"
                >
                  <span className="text-[#1A1A1A] text-lg font-light select-none">←</span>
                </button>
                <button
                  onClick={goToNext}
                  disabled={isLast}
                  className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all duration-200 ${
                    isLast ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md active:scale-95'
                  }`}
                  aria-label="Next partner"
                >
                  <span className="text-[#1A1A1A] text-lg font-light select-none">→</span>
                </button>
              </div>
            </div>

            {/* Right Circular Icon — abstract SVG with decorative circles */}
            <div className="relative z-10 flex-shrink-0 pr-8 sm:pr-14 hidden sm:flex items-center justify-center">
              <div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500"
                style={{ backgroundColor: PARTNER_COLORS[currentPartnerIndex] }}
              >
                {React.createElement(PARTNER_ICONS[currentPartnerIndex], {
                  className: 'w-16 h-16 md:w-22 md:h-22'
                })}
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IncubationNetwork;

