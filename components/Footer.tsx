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
                <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">1. โรงงานไทรน้อย (สำนักงานใหญ่)</strong>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed block">{CONTACT_INFO.addressPlantSaiNoi}</span>
              </div>
              <div>
                <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">2. โรงงานนครปฐม</strong>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed block">อ.กำแพงแสน จ.นครปฐม (ศูนย์เยื่อกระดาษ)</span>
              </div>
              <div>
                <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">3. โรงงานราชบุรี (เมกะแพลนต์)</strong>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed block">นิคมอุตสาหกรรมโพธาราม จ.ราชบุรี</span>
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
                <span className="text-xs sm:text-sm text-white/85 leading-relaxed">{CONTACT_INFO.addressHeadquarters}</span>
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
            <span>Thailand Circular Economy Alliance</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8AE0B3] hover:text-white font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Giant EFT Typographic Wordmark – SVG full-bleed, crops at bottom */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none"
        style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1310 560"
          xmlns="http://www.w3.org/2000/svg"
          width="65%"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block' }}
        >
          {/* ── E ── (x: 10 → 380) */}
          {/* Vertical bar */}
          <rect x="10"  y="10"  width="72" height="540" fill="#FFFFFF" />
          {/* Top bar */}
          <rect x="10"  y="10"  width="340" height="82"  fill="#FFFFFF" />
          {/* Middle bar */}
          <rect x="10"  y="249" width="295" height="72"  fill="#FFFFFF" />
          {/* Bottom bar */}
          <rect x="10"  y="468" width="340" height="82"  fill="#FFFFFF" />

          {/* ── F ── (x: 460 → 790) */}
          {/* Vertical bar */}
          <rect x="460" y="10"  width="72" height="540" fill="#FFFFFF" />
          {/* Top bar */}
          <rect x="460" y="10"  width="330" height="82"  fill="#FFFFFF" />
          {/* Middle bar */}
          <rect x="460" y="249" width="285" height="72"  fill="#FFFFFF" />

          {/* ── T ── (x: 870 → 1290, center: 1080) */}
          {/* Crossbar base – navy (full width) */}
          <rect x="870"  y="10"  width="420" height="85" fill="#1E2A4A" />
          {/* Vertical stem – navy (centered at x=1080, width=90 → x:1035→1125) */}
          <rect x="1035" y="10"  width="100"  height="540" fill="#1E2A4A" />
          {/* Left red block  : 870 → 990 (width=120) */}
          <rect x="870"  y="10"  width="85" height="85" fill="#8B1C2C" />
          {/* Left white divider : 990 → 1035 (width=45) */}
          <rect x="950"  y="10"  width="85"  height="85" fill="#FFFFFF" />
          {/* Right white divider : 1125 → 1170 (width=45) */}
          <rect x="1135" y="10"  width="85"  height="85" fill="#FFFFFF" />
          {/* Right red block : 1170 → 1290 (width=120) */}
          <rect x="1220" y="10"  width="85" height="85" fill="#8B1C2C" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

