/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, ChevronDown, Check, Mail } from 'lucide-react';
import { EftNavLogo } from './Logo';
// SVG Flag Components matching screenshot
const ThaiFlagIcon = () => (
  <svg className="w-5 h-3.5 rounded-[3px] shadow-sm inline-block shrink-0 overflow-hidden border border-white/20" viewBox="0 0 900 600">
    <rect width="900" height="600" fill="#ED1C24"/>
    <rect y="100" width="900" height="400" fill="#FFFFFF"/>
    <rect y="200" width="900" height="200" fill="#241D4F"/>
  </svg>
);

const UsFlagIcon = () => (
  <svg className="w-5 h-3.5 rounded-[3px] shadow-sm inline-block shrink-0 overflow-hidden border border-white/20" viewBox="0 0 741 390">
    <rect width="741" height="390" fill="#B22234"/>
    <path d="M0,30H741M0,90H741M0,150H741M0,210H741M0,270H741M0,330H741" stroke="#FFFFFF" strokeWidth="30"/>
    <rect width="296.4" height="210" fill="#3C3B6E"/>
    <g fill="#FFFFFF">
      <circle cx="25" cy="20" r="7"/>
      <circle cx="75" cy="20" r="7"/>
      <circle cx="125" cy="20" r="7"/>
      <circle cx="175" cy="20" r="7"/>
      <circle cx="225" cy="20" r="7"/>
      <circle cx="275" cy="20" r="7"/>
      <circle cx="50" cy="50" r="7"/>
      <circle cx="100" cy="50" r="7"/>
      <circle cx="150" cy="50" r="7"/>
      <circle cx="200" cy="50" r="7"/>
      <circle cx="250" cy="50" r="7"/>
      <circle cx="25" cy="80" r="7"/>
      <circle cx="75" cy="80" r="7"/>
      <circle cx="125" cy="80" r="7"/>
      <circle cx="175" cy="80" r="7"/>
      <circle cx="225" cy="80" r="7"/>
      <circle cx="275" cy="80" r="7"/>
      <circle cx="50" cy="110" r="7"/>
      <circle cx="100" cy="110" r="7"/>
      <circle cx="150" cy="110" r="7"/>
      <circle cx="200" cy="110" r="7"/>
      <circle cx="250" cy="110" r="7"/>
      <circle cx="25" cy="140" r="7"/>
      <circle cx="75" cy="140" r="7"/>
      <circle cx="125" cy="140" r="7"/>
      <circle cx="175" cy="140" r="7"/>
      <circle cx="225" cy="140" r="7"/>
      <circle cx="275" cy="140" r="7"/>
    </g>
  </svg>
);

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount?: number;
  onOpenCart?: () => void;
  lang: 'th' | 'en';
  onToggleLang: () => void;
  onSelectLang?: (lang: 'th' | 'en') => void;
  onOpenAi: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavClick, 
  lang, 
  onToggleLang,
  onSelectLang,
  onOpenAi
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    setAboutMenuOpen(false);
    onNavClick(e, targetId);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen 
            ? 'bg-[#0E2019]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10' 
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, '');
            }}
            className="flex items-center group z-50"
            title="Eco Friendly Thai Co., Ltd."
          >
            <EftNavLogo isLight={true} />
          </a>
          
          {/* Center Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] lg:text-sm xl:text-[15px] font-bold text-white tracking-normal antialiased">
            
            {/* 1. About Us Dropdown Menu */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
              >
                <span>{lang === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}</span>
                <ChevronDown className={`w-4 h-4 text-white/70 transition-transform duration-200 ${aboutMenuOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {aboutMenuOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl bg-[#0E2019]/95 backdrop-blur-md border border-white/20 shadow-2xl py-2 z-50 text-sm overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="#about"
                    onClick={(e) => handleLinkClick(e, 'about')}
                    className="block px-4 py-2.5 text-white hover:text-emerald-400 hover:bg-emerald-500/20 transition-colors font-semibold"
                  >
                    {lang === 'th' ? 'เกี่ยวกับบริษัท (ภาพรวม)' : 'About Us (Overview)'}
                  </a>
                  <a
                    href="#plants"
                    onClick={(e) => handleLinkClick(e, 'plants')}
                    className="block px-4 py-2.5 text-white hover:text-emerald-400 hover:bg-emerald-500/20 transition-colors font-semibold"
                  >
                    {lang === 'th' ? 'โรงงานของเรา' : 'Our Plants'}
                  </a>
                  <a
                    href="#incubation"
                    onClick={(e) => handleLinkClick(e, 'incubation')}
                    className="block px-4 py-2.5 text-white hover:text-emerald-400 hover:bg-emerald-500/20 transition-colors font-semibold"
                  >
                    {lang === 'th' ? 'เครือข่ายความร่วมมือ' : 'Partnership Network'}
                  </a>
                </div>
              )}
            </div>

            {/* 2. บริการ & เทคโนโลยี */}
            <a 
              href="#services" 
              onClick={(e) => handleLinkClick(e, 'services')} 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {lang === 'th' ? 'บริการ & เทคโนโลยี' : 'Services & Tech'}
            </a>

            {/* 3. สินค้า UPCYCLE */}
            <a 
              href="#products" 
              onClick={(e) => handleLinkClick(e, 'products')} 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {lang === 'th' ? 'สินค้า UPCYCLE' : 'UPCYCLE Products'}
            </a>

            {/* 4. ข่าวสาร */}
            <a 
              href="#press" 
              onClick={(e) => handleLinkClick(e, 'press')} 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {lang === 'th' ? 'ข่าวสาร' : 'News'}
            </a>

            {/* 5. ติดต่อเรา */}
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')} 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
            </a>
          </div>



          {/* Right Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 z-50">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-all backdrop-blur-sm shadow-sm"
                title="Select Language"
              >
                {lang === 'th' ? <ThaiFlagIcon /> : <UsFlagIcon />}
                <span>{lang === 'th' ? 'ไทย' : 'English'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#0E2019]/95 backdrop-blur-md border border-white/20 shadow-2xl py-1.5 z-50 text-xs overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => {
                      if (onSelectLang) {
                        onSelectLang('th');
                      } else if (lang !== 'th') {
                        onToggleLang();
                      }
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-emerald-500/20 transition-colors ${
                      lang === 'th' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-white/80'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <ThaiFlagIcon /> ไทย
                    </span>
                    {lang === 'th' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectLang) {
                        onSelectLang('en');
                      } else if (lang !== 'en') {
                        onToggleLang();
                      }
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-emerald-500/20 transition-colors ${
                      lang === 'en' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-white/80'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <UsFlagIcon /> English
                    </span>
                    {lang === 'en' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                </div>
              )}
            </div>

            {/* AI Advisor Pill Button */}
            <button
              onClick={onOpenAi}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#0E2F23]/80 hover:bg-[#144634] border border-emerald-500/40 text-white transition-all backdrop-blur-sm shadow-sm group"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>AI Advisor</span>
            </button>

            {/* Contact Us CTA Pill */}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#092219] font-bold text-xs transition-all shadow-md cursor-pointer group"
              title={lang === 'th' ? 'ติดต่อสอบถาม / ขอใบเสนอราคา' : 'Contact Us / Request Quote'}
            >
              <Mail className="w-3.5 h-3.5 text-[#092219] group-hover:scale-110 transition-transform" />
              <span>{lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Solid Opaque Background */}
      <div 
        className={`fixed inset-0 bg-[#071610] bg-gradient-to-b from-[#0B1F17] via-[#0A1B14] to-[#05100B] z-40 flex flex-col justify-start pt-24 px-6 sm:px-8 pb-12 transition-all duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
      >
        <div className="flex flex-col space-y-2 text-base font-sans text-white border-b border-white/10 pb-6 max-w-lg mx-auto w-full">
          {/* About Us Sub-group Mobile */}
          <div className="space-y-1 bg-white/5 p-2 rounded-xl border border-white/10 mb-2">
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')} 
              className="hover:text-emerald-400 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between font-bold text-emerald-400"
            >
              <span>{lang === 'th' ? 'เกี่ยวกับเรา (ภาพรวม)' : 'About Us (Overview)'}</span>
              <span className="text-xs text-emerald-400/60">01</span>
            </a>
            <a 
              href="#plants" 
              onClick={(e) => handleLinkClick(e, 'plants')} 
              className="hover:text-emerald-400 py-2 px-3 pl-6 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between text-sm text-white/80"
            >
              <span>↳ {lang === 'th' ? 'โรงงานของเรา' : 'Our Plants'}</span>
            </a>
            <a 
              href="#incubation" 
              onClick={(e) => handleLinkClick(e, 'incubation')} 
              className="hover:text-emerald-400 py-2 px-3 pl-6 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between text-sm text-white/80"
            >
              <span>↳ {lang === 'th' ? 'เครือข่ายความร่วมมือ' : 'Partnership Network'}</span>
            </a>
          </div>
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'services')} 
            className="hover:text-emerald-400 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
          >
            <span>{lang === 'th' ? 'บริการ & เทคโนโลยี' : 'Services & Technology'}</span>
            <span className="text-xs text-white/40">02</span>
          </a>
          <a 
            href="#products" 
            onClick={(e) => handleLinkClick(e, 'products')} 
            className="hover:text-emerald-400 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
          >
            <span>{lang === 'th' ? 'สินค้า UPCYCLE' : 'UPCYCLE Products'}</span>
            <span className="text-xs text-white/40">05</span>
          </a>
          <a 
            href="#press" 
            onClick={(e) => handleLinkClick(e, 'press')} 
            className="hover:text-emerald-400 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
          >
            <span>{lang === 'th' ? 'ข่าวสาร' : 'News'}</span>
            <span className="text-xs text-white/40">04</span>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')} 
            className="hover:text-emerald-400 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
          >
            <span>{lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}</span>
            <span className="text-xs text-white/40">07</span>
          </a>
        </div>

        {/* Mobile quick action */}
        <div className="pt-6 space-y-3 max-w-lg mx-auto w-full">
          {/* Mobile Language Selector */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 text-xs">
            <span className="text-white/60 px-2 font-medium">
              {lang === 'th' ? 'เลือกภาษา / Language:' : 'Select Language:'}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  if (onSelectLang) onSelectLang('th');
                  else if (lang !== 'th') onToggleLang();
                }}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  lang === 'th' ? 'bg-emerald-500 text-white shadow' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <ThaiFlagIcon /> ไทย
              </button>
              <button
                onClick={() => {
                  if (onSelectLang) onSelectLang('en');
                  else if (lang !== 'en') onToggleLang();
                }}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  lang === 'en' ? 'bg-emerald-500 text-white shadow' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <UsFlagIcon /> English
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAi();
            }}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>{lang === 'th' ? 'ปรึกษา AI Advisor' : 'Ask AI Advisor'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
