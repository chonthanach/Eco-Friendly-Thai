/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME, BRAND_NAME_TH, CONTACT_INFO, PLANT_SITES } from '../constants';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Globe, Award } from 'lucide-react';
import { EftNavLogo } from './Logo';

interface FooterProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  lang: 'th' | 'en';
}

const Footer: React.FC<FooterProps> = ({ onNavClick, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122B22] text-[#F5F2EB] border-t border-white/10 pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-start">
              <EftNavLogo isLight={true} />
            </div>

            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-sm">
              {lang === 'th'
                ? 'ผู้นำนวัตกรรมแปรรูปเยื่อกระดาษรีไซเคิล และอัปไซเคิลกล่องเครื่องดื่ม UHT สู่ผลิตภัณฑ์เศรษฐกิจหมุนเวียนมาตรฐานสากลตั้งแต่ปี 2013'
                : 'Pioneering Thailand circular economy with 2,000 MT/month capacity transforming waste paper and beverage cartons into industrial pulp and eco materials.'}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#8AE0B3]">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
              <span>DCCE Upcycle Circular Certified (2024-2027)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#8AE0B3]">
              {lang === 'th' ? 'เมนูด่วน' : 'Navigation'}
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-white/90 font-medium">
              <li>
                <a href="#about" onClick={(e) => onNavClick(e, 'about')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'เกี่ยวกับเรา (About)' : 'About EFT'}
                </a>
              </li>
              <li>
                <a href="#plants" onClick={(e) => onNavClick(e, 'plants')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'โรงงาน 3 สาขา' : 'Plant Sites'}
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => onNavClick(e, 'services')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'บริการ & เทคโนโลยี' : 'Industrial Services'}
                </a>
              </li>
              <li>
                <a href="#incubation" onClick={(e) => onNavClick(e, 'incubation')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'เครือข่ายความร่วมมือ' : 'Incubation Cohort'}
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => onNavClick(e, 'products')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'สินค้า Upcycle Store' : 'Eco Store'}
                </a>
              </li>
              <li>
                <a href="#video" onClick={(e) => onNavClick(e, 'video')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'วิดีโอสัมภาษณ์ SME' : 'Media & Video'}
                </a>
              </li>
              <li>
                <a href="#press" onClick={(e) => onNavClick(e, 'press')} className="hover:text-emerald-300 transition-colors">
                  {lang === 'th' ? 'ข่าวสาร (Press)' : 'Press Releases'}
                </a>
              </li>
            </ul>
          </div>

          {/* Plant Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#8AE0B3]">
              {lang === 'th' ? 'โรงงานและสาขา' : 'Plant Locations'}
            </h4>
            <div className="space-y-4 text-sm sm:text-base text-white/90 font-normal">
              <div>
                <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">
                  {lang === 'th' ? '1. โรงงานไทรน้อย (สำนักงานใหญ่)' : '1. Sai Noi Plant (Headquarters)'}
                </strong>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed block">
                  {lang === 'th' ? CONTACT_INFO.addressPlantSaiNoi : (CONTACT_INFO.addressPlantSaiNoiEn || 'Sai Yai, Sai Noi, Nonthaburi 11150')}
                </span>
              </div>
              <div>
                <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">
                  {lang === 'th' ? '2. โรงงานนครปฐม' : '2. Nakhon Pathom Plant'}
                </strong>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed block">
                  {lang === 'th' ? 'อ.กำแพงแสน จ.นครปฐม (ศูนย์เยื่อกระดาษ)' : 'Kamphaeng Saen, Nakhon Pathom (Recycled Pulp Center)'}
                </span>
              </div>
              <div>
                <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">
                  {lang === 'th' ? '3. โรงงานราชบุรี (เมกะแพลนต์)' : '3. Ratchaburi Mega-Plant'}
                </strong>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed block">
                  {lang === 'th' ? CONTACT_INFO.addressPlantRatchaburi : (CONTACT_INFO.addressPlantRatchaburiEn || '29/4 Moo 7, Nong O, Ban Pong, Ratchaburi 70110')}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#8AE0B3]">
              {lang === 'th' ? 'ติดต่อฝ่ายขาย' : 'Contact Sales'}
            </h4>
            <div className="space-y-3.5 text-sm sm:text-base text-white/90 font-medium">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-[#8AE0B3] shrink-0" />
                <span className="text-white font-bold text-sm sm:text-base">02-9261388-9, 065-961-6199</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-[#8AE0B3] shrink-0" />
                <span>{CONTACT_INFO.emails[0]}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#8AE0B3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {lang === 'th' ? CONTACT_INFO.addressHeadquarters : (CONTACT_INFO.addressHeadquartersEn || '99/92 Moo 2, Sai Ma, Mueang Nonthaburi 11000')}
                </span>
              </p>
              <p className="text-xs text-white/70 pt-1 font-mono">
                Tax ID: {CONTACT_INFO.registrationNo}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar – small info row */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60 font-medium">
          <p>© {new Date().getFullYear()} Eco Friendly Thai Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{lang === 'th' ? 'ภาคีเครือข่ายเศรษฐกิจหมุนเวียนแห่งประเทศไทย' : 'Thailand Circular Economy Alliance'}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8AE0B3] hover:text-white font-semibold transition-colors"
            >
              <span>{lang === 'th' ? 'กลับขึ้นด้านบน' : 'Back to Top'}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Giant EFT Typographic Wordmark – SVG full-bleed, crops at bottom */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none"
        style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center' }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1350 560"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[90%] sm:w-[78%] max-w-[1300px]"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block' }}
        >
          {/* ── E ── (x: 20 → 390, width: 370) */}
          {/* Vertical bar (thicker: 125px) */}
          <rect x="20"  y="10"  width="125" height="540" fill="#FFFFFF" />
          {/* Top bar (thicker: 125px) */}
          <rect x="20"  y="10"  width="370" height="125" fill="#FFFFFF" />

          {/* Eco Leaf Sprout attached directly to white vertical bar (Horizontal + Blinking Light Animation) */}
          <g transform="translate(145, 280)">
            <g id="eft-e-sprout" className="animate-leaf-light pointer-events-auto cursor-pointer">
              {/* Natural Organic Breeze Sway Animation anchored at stem base (0, 0) */}
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 0; -2.2 0 0; 2.5 0 0; -1.2 0 0; 1.5 0 0; 0 0 0"
                keyTimes="0; 0.22; 0.48; 0.72; 0.88; 1"
                dur="4s"
                repeatCount="indefinite"
              />

              {/* Main Leaf (Horizontal, attached flush to white bar at x=0, tip at x=230, y=0) */}
              <path
                d="M 0 -16 C 55 -25, 120 -38, 175 -30 C 205 -25, 225 -8, 230 0 C 220 18, 195 58, 130 65 C 65 52, 20 25, 0 16 Z"
                fill="#4ADE80"
              />

              {/* Left/Top Small Leaf (Fresh Light Green #86EFAC, sitting on top of main leaf) */}
              <path
                d="M 28 6 C 36 -35, 75 -60, 122 -50 C 110 -20, 72 3, 28 6 Z"
                fill="#86EFAC"
              />

              {/* Dark Green Center Leaf Vein Line */}
              <path
                d="M 0 0 C 60 -6, 110 -14, 150 -20 C 185 -15, 212 -5, 230 0"
                stroke="#14532D"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Pulsing Light Glow Orb on the Leaf (ไฟกระพริบดวงไฟเรืองแสง) */}
              <circle cx="150" cy="-22" r="7" fill="#86EFAC" className="animate-ping opacity-75" />
              <circle cx="150" cy="-22" r="3.5" fill="#FFFFFF" className="animate-pulse shadow-md" />
            </g>
          </g>

          {/* Bottom bar (thicker: 125px) */}
          <rect x="20"  y="425" width="370" height="125" fill="#FFFFFF" />

          {/* ── F ── (x: 475 → 835, width: 360) */}
          {/* Vertical bar (thicker: 125px) */}
          <rect x="475" y="10"  width="125" height="540" fill="#FFFFFF" />
          {/* Top bar (thicker: 125px) */}
          <rect x="475" y="10"  width="360" height="125" fill="#FFFFFF" />
          {/* Middle bar (thicker: 105px) */}
          <rect x="475" y="228" width="305" height="105" fill="#FFFFFF" />

          {/* ── T ── (x: 910 → 1330, width: 420, center: 1120) */}
          {/* Crossbar base – navy (full width: 420, height: 125) */}
          <rect x="910"  y="10"  width="420" height="125" fill="#1E2A4A" />
          {/* Vertical stem – navy (width: 140, centered: 1050 → 1190) */}
          <rect x="1050" y="10"  width="140" height="540" fill="#1E2A4A" />
          {/* Left red block : 910 → 980 (width: 70) */}
          <rect x="910"  y="10"  width="70"  height="125" fill="#8B1C2C" />
          {/* Left white divider : 980 → 1050 (width: 70 - equal to red) */}
          <rect x="980"  y="10"  width="70"  height="125" fill="#FFFFFF" />
          {/* Right white divider : 1190 → 1260 (width: 70 - equal to red) */}
          <rect x="1190" y="10"  width="70"  height="125" fill="#FFFFFF" />
          {/* Right red block : 1260 → 1330 (width: 70) */}
          <rect x="1260" y="10"  width="70"  height="125" fill="#8B1C2C" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

