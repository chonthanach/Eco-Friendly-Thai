/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PARTNERS_COHORT } from '../constants';

interface IncubationNetworkProps {
  lang: 'th' | 'en';
}

// Icon colors for each slide
const PARTNER_COLORS = [
  '#1B4D3E', '#C0392B', '#E67E22', '#2980B9', '#8E44AD',
  '#16A085', '#D35400', '#2C3E50', '#B03A2E', '#7D3C98',
];

// Abstract SVG icons (white on colored background, "Trusted by Leading Enterprises" original design)
const PARTNER_ICONS: React.FC<{ className?: string }>[] = [
  // Puzzle piece with circles
  ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 35H45V25C45 22 48 20 50 20C52 20 55 22 55 25V35H75V55H65C62 55 60 58 60 60C60 62 62 65 65 65H75V80H25V65H35C38 65 40 62 40 60C40 58 38 55 35 55H25V35Z" fill="white"/>
      <circle cx="30" cy="28" r="6" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="72" cy="28" r="5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="72" cy="78" r="6" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="28" cy="78" r="4" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // Hexagon molecule
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
  // Shopping/retail shape
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
  // Package/cube
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
  // Leaf/environment
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

// Decorative star/molecule SVG background
const DecorativeBgIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 60L220 160L310 120L240 190L340 200L240 210L310 280L220 240L200 340L180 240L90 280L160 210L60 200L160 190L90 120L180 160Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="200" cy="45" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="200" cy="355" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="45" cy="200" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="355" cy="200" r="18" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="310" cy="105" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="90" cy="105" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="310" cy="295" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="90" cy="295" r="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="200" cy="200" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="200" cy="175" r="5" fill="currentColor" opacity="0.3"/>
    <circle cx="218" cy="210" r="5" fill="currentColor" opacity="0.3"/>
    <circle cx="182" cy="210" r="5" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Program partners & global supporters (shown as slides in the same card design)
const SUPPORT_ORG_SLIDES = [
  {
    name: 'The Incubation Network',
    role: 'Program Organizer',
    roleTh: 'ผู้จัดโครงการ',
    description: 'Global initiative accelerating innovative solutions to tackle plastic pollution across South & Southeast Asia.',
    descriptionTh: 'เครือข่ายระดับโลกที่เร่งรัดนวัตกรรมเพื่อแก้ปัญหามลพิษพลาสติกในภูมิภาคเอเชียใต้และเอเชียตะวันออกเฉียงใต้',
  },
  {
    name: 'The Circulate Initiative',
    role: 'Co-founding Partner',
    roleTh: 'พันธมิตรผู้ร่วมก่อตั้ง',
    description: 'Non-profit building inclusive and investable circular economy ecosystems in emerging markets.',
    descriptionTh: 'องค์กรไม่แสวงผลกำไรที่สร้างระบบนิเวศเศรษฐกิจหมุนเวียนที่ครอบคลุมและน่าลงทุนในตลาดเกิดใหม่',
  },
  {
    name: 'SecondMuse',
    role: 'Innovation Program Partner',
    roleTh: 'พันธมิตรด้านโปรแกรมนวัตกรรม',
    description: 'Innovation company designing and delivering programs that build resilient, sustainable economies.',
    descriptionTh: 'บริษัทนวัตกรรมที่ออกแบบและดำเนินโปรแกรมพัฒนาเศรษฐกิจที่ยั่งยืนและยืดหยุ่น',
  },
  {
    name: 'Government of Canada (Global Affairs Canada)',
    role: 'Global Supporter',
    roleTh: 'ผู้สนับสนุนระดับสากล',
    description: 'Supporting the Thailand Plastics Circularity Accelerator to reduce ocean plastic and empower local innovators.',
    descriptionTh: 'สนับสนุนโครงการ Thailand Plastics Circularity Accelerator เพื่อลดขยะพลาสติกในทะเลและส่งเสริมผู้ประกอบการท้องถิ่น',
  },
  {
    name: 'ECCA Family Foundation',
    role: 'Global Supporter',
    roleTh: 'ผู้สนับสนุนระดับสากล',
    description: 'Philanthropic foundation funding scalable solutions for a cleaner, circular planet.',
    descriptionTh: 'มูลนิธิที่สนับสนุนทุนแก่โซลูชันที่ขยายผลได้ เพื่อโลกที่สะอาดและหมุนเวียนอย่างยั่งยืน',
  },
];

const IncubationNetwork: React.FC<IncubationNetworkProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All slides: 5 cohort organizations + 5 program partners/supporters
  const slides = [
    ...PARTNERS_COHORT.map((p) => ({
      name: p.name,
      role: lang === 'th' ? (p.roleTh || p.role) : p.role,
      desc: lang === 'th' ? (p.descriptionTh || p.description) : p.description,
      tag: lang === 'th' ? 'ภาคีเครือข่ายหมุนเวียนไทย' : 'Thailand Circular Cohort',
    })),
    ...SUPPORT_ORG_SLIDES.map((o) => ({
      name: o.name,
      role: lang === 'th' ? o.roleTh : o.role,
      desc: lang === 'th' ? o.descriptionTh : o.description,
      tag: lang === 'th' ? 'ได้รับการสนับสนุนและร่วมมือโดย' : 'Program Partners & Global Supporters',
    })),
  ];

  const current = slides[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === slides.length - 1;

  const goToPrev = () => {
    if (!isFirst) setCurrentIndex((prev) => prev - 1);
  };
  const goToNext = () => {
    if (!isLast) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section id="incubation" className="py-28 px-6 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1800px] mx-auto">

        {/* Section Header (same style as "ความไว้วางใจจากภาคอุตสาหกรรม") */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4D3E] block mb-2">
            {lang === 'th' ? 'โครงการเร่งรัดนวัตกรรมระดับสากล' : 'GLOBAL PARTNERSHIPS & ACCELERATION'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2A26] mb-4">
            {lang === 'th' ? 'เครือข่ายความร่วมมือระดับสากล' : 'The Incubation Network'}
          </h2>
          <p className="max-w-2xl mx-auto text-[#5D5A53] font-normal text-sm sm:text-base leading-relaxed">
            {lang === 'th'
              ? 'ภาคี 5 องค์กรชั้นนำในโครงการ Thailand Plastics Circularity Accelerator โดย The Incubation Network ร่วมกับ The Circulate Initiative และ SecondMuse'
              : 'Official Cohort of the Thailand Plastics Circularity Accelerator supported by Global Affairs Canada and ECCA Family Foundation.'}
          </p>
        </div>

        {/* Slider Card — full viewport width breakout */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen px-4 sm:px-8 md:px-12">
          <div
            className="bg-[#E8E5DE] relative overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex items-center"
            style={{ borderRadius: '1.5rem 9rem 9rem 1.5rem' }}
          >

            {/* Decorative Background Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ left: '10%' }}>
              <DecorativeBgIcon className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] text-[#C5C0B6]" />
            </div>

            {/* Left Content */}
            <div key={currentIndex} className="relative z-10 flex-1 pl-8 sm:pl-14 pr-4 py-8 sm:py-12 animate-fade-in-up">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-1.5 leading-tight">
                {current.name}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1B4D3E] block mb-3">
                {current.role}
              </span>
              <p className="text-[13px] sm:text-sm md:text-base text-[#6B6860] font-normal leading-relaxed max-w-md mb-1.5">
                {current.desc}
              </p>
              <p className="text-xs font-bold text-[#1A1A1A] tracking-wide">
                {current.tag}
              </p>

              {/* Navigation Arrows + Counter */}
              <div className="flex items-center gap-2.5 mt-6 sm:mt-8">
                <button
                  onClick={goToPrev}
                  disabled={isFirst}
                  className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all duration-200 ${
                    isFirst ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md active:scale-95'
                  }`}
                  aria-label="Previous partner"
                  id="incubation-prev"
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
                  id="incubation-next"
                >
                  <span className="text-[#1A1A1A] text-lg font-light select-none">→</span>
                </button>
                <span className="ml-2 text-xs font-semibold text-[#6B6860] tabular-nums">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Right Circular Icon */}
            <div className="relative z-10 flex-shrink-0 pr-8 sm:pr-14 hidden sm:flex items-center justify-center">
              <div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500"
                style={{ backgroundColor: PARTNER_COLORS[currentIndex % PARTNER_COLORS.length], color: PARTNER_COLORS[currentIndex % PARTNER_COLORS.length] }}
              >
                {React.createElement(PARTNER_ICONS[currentIndex % PARTNER_ICONS.length], {
                  className: 'w-16 h-16 md:w-22 md:h-22'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Partner name chips — jump to any slide */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-10">
          {slides.map((s, i) => (
            <button
              key={i}
              id={`incubation-chip-${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 ${
                i === currentIndex
                  ? 'bg-[#1B4D3E] text-white border-[#1B4D3E] shadow-md'
                  : 'bg-white/80 text-[#2C2A26] border-[#D6D1C7] hover:border-[#1B4D3E] hover:text-[#1B4D3E]'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IncubationNetwork;
