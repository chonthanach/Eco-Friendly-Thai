import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Recycle, Play, Package, RefreshCw, Award, ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onExplorePlants: () => void;
  onWatchVideo: () => void;
  lang: 'th' | 'en';
}

interface HeroImageItem {
  id: number;
  title: string;
  bgImage: string;
  thumbImage: string;
}

const HERO_IMAGES: HeroImageItem[] = [
  {
    id: 0,
    title: 'Glowing Earth Sprout',
    bgImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=85&w=2400',
    thumbImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 1,
    title: 'Recycling Eco Forest',
    bgImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=85&w=2400',
    thumbImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    title: 'Eco Factory & Materials',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=2400',
    thumbImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    title: 'Green Innovation & Technology',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=2400',
    thumbImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200'
  }
];

// Waving Thai Flag letter 'I' component for THAI brand logo
const ThaiWavingFlagI: React.FC = () => {
  return (
    <span className="inline-flex items-center ml-1 sm:ml-2 select-none self-center">
      <style>{`
        @keyframes thaiFlagWindWave {
          0% {
            transform: perspective(400px) rotateY(0deg) skewY(0deg) scaleX(1);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          }
          20% {
            transform: perspective(400px) rotateY(16deg) skewY(2.5deg) scaleX(0.95);
            filter: drop-shadow(-3px 4px 6px rgba(0,0,0,0.5));
          }
          40% {
            transform: perspective(400px) rotateY(-12deg) skewY(-2deg) scaleX(1.02);
            filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
          }
          60% {
            transform: perspective(400px) rotateY(14deg) skewY(1.8deg) scaleX(0.96);
            filter: drop-shadow(-2px 4px 7px rgba(0,0,0,0.45));
          }
          80% {
            transform: perspective(400px) rotateY(-8deg) skewY(-1deg) scaleX(1.01);
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
          }
          100% {
            transform: perspective(400px) rotateY(0deg) skewY(0deg) scaleX(1);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          }
        }

        @keyframes thaiFlagShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 300% 0;
          }
        }

        .animate-thai-flag-wave {
          animation: thaiFlagWindWave 3s ease-in-out infinite;
          transform-origin: left center;
          will-change: transform, filter;
        }

        .animate-thai-flag-shimmer {
          background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.45) 45%,
            rgba(0, 0, 0, 0.3) 55%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: thaiFlagShimmer 2.2s linear infinite;
        }
      `}</style>

      {/* Flag Container representing letter 'I' matching full height of T H A */}
      <span className="animate-thai-flag-wave relative overflow-hidden rounded-[3px] shadow-xl border border-white/20 h-[0.88em] w-[0.26em] inline-block">
        {/* Flag Stripes (Trairanga: Red 1, White 1, Blue 2, White 1, Red 1) */}
        <span className="w-full h-full flex flex-col">
          <span className="h-[16.66%] w-full bg-[#C8102E]" />
          <span className="h-[16.66%] w-full bg-white" />
          <span className="h-[33.34%] w-full bg-[#1E2B58]" />
          <span className="h-[16.66%] w-full bg-white" />
          <span className="h-[16.68%] w-full bg-[#C8102E]" />
        </span>

        {/* Dynamic Wind Shimmer Overlay */}
        <span className="animate-thai-flag-shimmer absolute inset-0 pointer-events-none mix-blend-overlay" />
      </span>
    </span>
  );
};

// Trust marquee items (ความไว้วางใจจากภาคอุตสาหกรรม - Matching Image 1 Reference)
const TRUST_MARQUEE_ITEMS_TH = [
  { text: 'ความไว้วางใจจากภาคอุตสาหกรรม', isHeader: true },
  { text: 'SCG Chemicals (SCGC)' },
  { text: 'CP ALL (7-Eleven)' },
  { text: 'SCGP Packaging' },
  { text: 'KRS Industrial' },
  { text: 'DCCE Thailand กรมการเปลี่ยนแปลงสภาพภูมิอากาศ' },
  { text: 'The Incubation Network' },
  { text: 'The Circulate Initiative' },
  { text: 'SecondMuse' },
  { text: 'Government of Canada (Global Affairs)' },
  { text: 'ECCA Family Foundation' },
  { text: 'เครือข่ายโครงการต้นกล้าไร้ถัง' },
  { text: 'มาตรฐาน Upcycle 100%' },
  { text: 'Zero-Landfill Circular Solutions' },
];

const TRUST_MARQUEE_ITEMS_EN = [
  { text: 'TRUSTED BY LEADING ENTERPRISES', isHeader: true },
  { text: 'SCG Chemicals (SCGC)' },
  { text: 'CP ALL (7-Eleven)' },
  { text: 'SCGP Packaging' },
  { text: 'KRS Industrial' },
  { text: 'DCCE Thailand Climate Change Dept.' },
  { text: 'The Incubation Network' },
  { text: 'The Circulate Initiative' },
  { text: 'SecondMuse' },
  { text: 'Government of Canada' },
  { text: 'ECCA Family Foundation' },
  { text: 'Ton-Kla Rai Tung Network' },
  { text: '100% Upcycled Certified Standards' },
  { text: 'Zero-Landfill Circular Solutions' },
];

const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExplorePlants, onWatchVideo, lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const marqueeItems = lang === 'th' ? TRUST_MARQUEE_ITEMS_TH : TRUST_MARQUEE_ITEMS_EN;

  // Auto slide image every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#071610]">

      {/* 1. Main Hero Dark Stage */}
      <div className="relative min-h-0 flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 px-4 sm:px-8 lg:px-14">

        {/* Background Images with Fade Transition (Only image changes) */}
        {HERO_IMAGES.map((imgItem, idx) => (
          <div 
            key={imgItem.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={imgItem.bgImage}
              alt={imgItem.title}
              className="w-full h-full object-cover object-right lg:object-center filter brightness-[0.65] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071610] via-[#071610]/85 to-transparent lg:via-[#071610]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071610] via-transparent to-[#071610]/80" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          </div>
        ))}

        {/* Hero Top & Main Two-Column Grid */}
        <div className="relative z-10 max-w-[1800px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Fixed Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">


            {/* Main Brand Headline: ECO on Line 1, FRIENDLY + THAI on Line 2 */}
            <div className="relative flex flex-col items-start mb-4 select-none">
              {/* Line 1: ECO */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans text-white tracking-tight leading-none mb-2 sm:mb-3">
                ECO
              </h1>

              {/* Line 2: FRIENDLY (with sprout) + THAI (with waving flag 'I') */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans text-white tracking-tight leading-none flex items-center whitespace-nowrap gap-x-3 sm:gap-x-5">
                <span className="relative inline-block text-white">
                  FRIENDLY
                  {/* Sprout Leaves on top of Y */}
                  <svg
                    className="absolute -top-3 sm:-top-5 -right-4 sm:-right-6 w-5 h-5 sm:w-9 sm:h-9 text-[#4ADE80] drop-shadow-md animate-pulse pointer-events-none"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 34 C12 20, 24 10, 36 6 C38 18, 30 28, 16 32 C12 33, 8 34, 6 34 Z"
                      fill="#4ADE80"
                    />
                    <path
                      d="M18 20 C22 14, 28 10, 36 6"
                      stroke="#14532D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 32 C6 24, 8 16, 16 12 C18 18, 16 26, 10 32 Z"
                      fill="#86EFAC"
                    />
                  </svg>
                </span>

                {/* THAI line with waving flag 'I' */}
                <div className="flex items-center tracking-wider">
                  <span className="leading-none">THA</span>
                  <ThaiWavingFlagI />
                </div>
              </div>
            </div>

            {/* Thai Subheadline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-medium tracking-normal mb-4 leading-snug max-w-2xl">
              {lang === 'th'
                ? 'เราสร้างโซลูชันเพื่อการจัดการขยะกระดาษ และแปรรูปพลาสติกรีไซเคิลอย่างยั่งยืน'
                : 'We create solutions for waste paper & make sustainable use of plastic recycling.'}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed max-w-xl mb-8">
              {lang === 'th'
                ? 'เปลี่ยนกล่องนม UHT และขยะบรรจุภัณฑ์ให้เป็นเยื่อกระดาษขาวบริสุทธิ์เกรดอุตสาหกรรม และแผ่นสมาร์ทบอร์ด บล็อกก่อสร้าง เฟอร์นิเจอร์รักษ์โลกมาตรฐาน DCCE'
                : 'Transforming post-consumer UHT cartons into industrial recycled Kraft pulp, certified eco smart boards, and sustainable building materials.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="px-6 sm:px-7 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg text-sm sm:text-base font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/30 hover:translate-y-[-1px]"
              >
                <span>{lang === 'th' ? 'เลือกชมสินค้า UPCYCLE' : 'Explore UPCYCLE Products'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWatchVideo}
                className="px-5 sm:px-6 py-3.5 bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md rounded-lg text-sm sm:text-base font-medium flex items-center gap-2.5 transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>{lang === 'th' ? 'รับชมวิดีโอสัมภาษณ์ SME' : 'Watch SME Story'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Floating Glassmorphism Feature Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#132A20]/60 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6">

              {/* Item 1: Eco Friendly */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">
                    {lang === 'th' ? 'เป็นมิตรต่อสิ่งแวดล้อม' : 'Eco-Friendly'}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                    {lang === 'th' ? 'ลดการใช้ทรัพยากร และลดมลพิษ' : 'Resource optimization & zero pollution'}
                  </p>
                </div>
              </div>

              {/* Item 2: Upcycle 100% */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <Recycle className="w-6 h-6" />
                </div>
                <div> 
                  <h4 className="text-base font-bold text-white mb-0.5">
                    {lang === 'th' ? 'Upcycle 100%' : '100% Upcycled'}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                    {lang === 'th' ? 'เปลี่ยนขยะให้มีมูลค่า ใช้งานได้จริง' : 'High-utility circular products'}
                  </p>
                </div>
              </div>

              {/* Item 3: International Standards */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">
                    {lang === 'th' ? 'มาตรฐานสากล' : 'Global Standards'}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                    {lang === 'th' ? 'ผ่านการรับรอง มาตรฐาน DCCE' : 'Certified DCCE & ISO Compliant'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Carousel Control Dots & Thumbnail Bar */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 pt-6 pb-2">
          
          {/* Slide Indicators / Thumbnails Bar */}
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-lg">
            
            {/* Prev Button */}
            <button
              onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              title="Previous Image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Clickable Dots with Thumbnail Images */}
            <div className="flex items-center gap-2.5">
              {HERO_IMAGES.map((imgItem, idx) => (
                <button
                  key={imgItem.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative flex items-center transition-all duration-300 ${
                    idx === currentSlide 
                      ? 'w-12 sm:w-16 h-7 rounded-full ring-2 ring-emerald-400 p-0.5 bg-emerald-500/20' 
                      : 'w-7 h-7 rounded-full hover:scale-110 opacity-60 hover:opacity-100'
                  }`}
                  title={imgItem.title}
                >
                  {/* Thumbnail Image inside dot */}
                  <img
                    src={imgItem.thumbImage}
                    alt={imgItem.title}
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* Active Indicator Glow Badge */}
                  {idx === currentSlide && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                  )}

                  {/* Hover Tooltip Title */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-black/90 text-white text-[10px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-md">
                    {imgItem.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_IMAGES.length)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              title="Next Image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Industry Trust Marquee Pill Ribbon (ความไว้วางใจจากภาคอุตสาหกรรม) — placed between hero and stats */}
      <div className="w-full bg-white border-y border-slate-200/80 shadow-sm">
        <div className="relative w-full">
          <div className="w-full bg-white py-3 sm:py-4 overflow-hidden relative group">
            {/* Fade Gradients on edges for smooth appearance/disappearance */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

            {/* Continuous Marquee Track (Scrolling to Left indefinitely) */}
            <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] items-center">
              {[0, 1].map((copyIndex) => (
                <div key={copyIndex} className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
                  {marqueeItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {item.isHeader ? (
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#1B4D3E] uppercase tracking-wider whitespace-nowrap">
                          <span className="w-2 h-2 rounded-full bg-[#1B4D3E] animate-pulse" />
                          {item.text}
                        </span>
                      ) : (
                        <span className="text-xs sm:text-sm font-semibold text-[#2C2A26] hover:text-[#1B4D3E] transition-colors whitespace-nowrap">
                          {item.text}
                        </span>
                      )}
                      <span className="text-[#B5B0A5] text-xs select-none">
                        {idx === 0 || idx === 5 || idx === 10 ? '✦' : '•'}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Impact Metrics Row on Clean White Background matching screenshot */}
      <div className="w-full bg-white py-8 px-4 sm:px-8 border-b border-slate-100 shadow-sm">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

          {/* Stat 1: 3 Factories */}
          <div className="flex items-center gap-4 justify-start sm:justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">3</div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">{lang === 'th' ? 'โรงงาน' : 'Plants'}</div>
              <div className="text-[11px] text-slate-500">{lang === 'th' ? 'ทั่วประเทศ' : 'Nationwide'}</div>
            </div>
          </div>

          {/* Stat 2: 2,000+ MT/Year */}
          <div className="flex items-center gap-4 justify-start sm:justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">2,000+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">{lang === 'th' ? 'MT/ปี' : 'MT / Year'}</div>
              <div className="text-[11px] text-slate-500">{lang === 'th' ? 'กำลังการผลิตรวม' : 'Total Capacity'}</div>
            </div>
          </div>

          {/* Stat 3: 200+ Partners */}
          <div className="flex items-center gap-4 justify-start sm:justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">200+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">{lang === 'th' ? 'พันธมิตร' : 'Partners'}</div>
              <div className="text-[11px] text-slate-500">{lang === 'th' ? 'เครือข่ายความร่วมมือ' : 'Incubation Cohorts'}</div>
            </div>
          </div>

          {/* Stat 4: 10+ Years */}
          <div className="flex items-center gap-4 justify-start sm:justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">10+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">{lang === 'th' ? 'ปีแห่งความยั่งยืน' : 'Years Sustainability'}</div>
              <div className="text-[11px] text-slate-500">{lang === 'th' ? 'ตั้งแต่ปี 2013' : 'Since 2013'}</div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Services Overview Bento Grid Row matching screenshot */}
      <div className="w-full bg-[#F7F6F2] py-8 sm:py-10 px-4 sm:px-8 border-b border-slate-200/60">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">

          {/* Card 1: Section Headline */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                {lang === 'th' ? 'บริการของเรา' : 'OUR SERVICES'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {lang === 'th' ? 'ครบวงจรเพื่อความยั่งยืน' : 'End-to-End Circularity'}
              </h3>
              <div className="w-9 h-1 bg-emerald-500 rounded-full mt-3"></div>
            </div>
            <div className="pt-6 flex justify-start">
              <a
                href="#services"
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 flex items-center justify-center text-slate-700 hover:text-emerald-700 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Card 2: Waste Paper Management */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-emerald-200 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">
                {lang === 'th' ? 'จัดการขยะกระดาษ' : 'Paper Sourcing'}
              </h4>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                {lang === 'th' ? 'รับซื้อและคัดแยกขยะกระดาษ และกล่องบรรจุภัณฑ์' : 'Collection & sorting of industrial carton waste'}
              </p>
            </div>
          </div>

          {/* Card 3: Recycling & Pulp Processing */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-emerald-200 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">
                {lang === 'th' ? 'แปรรูปรีไซเคิล' : 'Pulp Recycling'}
              </h4>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                {lang === 'th' ? 'แปรรูปเป็นเยื่อกระดาษ และวัสดุ Upcycle' : 'Virgin-grade pulp & polymer separation'}
              </p>
            </div>
          </div>

          {/* Card 4: Upcycle Products */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-emerald-200 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">
                {lang === 'th' ? 'ผลิตภัณฑ์ Upcycle' : 'Upcycled Goods'}
              </h4>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                {lang === 'th' ? 'ผลิตภัณฑ์คุณภาพสูง เป็นมิตรต่อสิ่งแวดล้อม' : 'Premium eco smart boards & building blocks'}
              </p>
            </div>
          </div>

          {/* Card 5: Better World Banner with Sprout Graphic */}
          <div className="lg:col-span-3 bg-[#0A261C] rounded-2xl p-6 relative overflow-hidden text-white flex flex-col justify-between shadow-md">
            <div className="absolute -right-4 -bottom-4 w-36 h-36 opacity-80 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=300"
                alt="Green Sprout"
                className="w-full h-full object-cover rounded-full filter brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A261C] via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              <h4 className="text-lg font-bold text-white leading-snug mb-1">
                {lang === 'th' ? 'ร่วมสร้างโลกที่ดีขึ้นไปด้วยกัน' : 'Build a Greener World Together'}
              </h4>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="#about"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                <span>{lang === 'th' ? 'ดูเพิ่มเติม' : 'Learn More'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
