/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { FEATURED_VIDEO } from '../constants';
import { Play, Eye, Clock, CheckCircle2, Share2, Sparkles } from 'lucide-react';

interface VideoSectionProps {
  lang: 'th' | 'en';
}

const VideoSection: React.FC<VideoSectionProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-28 px-6 md:px-12 bg-[#122B22] text-white relative overflow-hidden">
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8AE0B3] block mb-2 sm:mb-3">
            {lang === 'th' ? 'สารคดีและบทสัมภาษณ์พิเศษ' : 'FEATURED INTERVIEW & DOCUMENTARY'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            FEATURED <span className="text-[#8AE0B3]">MEDIA</span>
          </h2>
          <div className="w-20 h-1 bg-[#8AE0B3] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg">
            {lang === 'th'
              ? 'รายการ SME กล้าเปลี่ยน EP 37: เรื่องราวของคุณสมยศ วัฒน์พานิช ในการเปลี่ยนขยะกล่องนมสู่ธุรกิจหมุนเวียน 300 ล้านบาท'
              : 'Deep-dive documentary on how Eco Friendly Thai scaled from zero to a 300M THB sustainable recycling leader.'}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          
          {/* Left Column: Video Embed / Screen */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/20 shadow-2xl group">
              {isPlaying ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-stone-900 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{FEATURED_VIDEO.title}</h4>
                  <p className="text-xs text-white/70 max-w-md mb-6">{FEATURED_VIDEO.subtitle}</p>
                  <a
                    href="https://www.youtube.com/results?search_query=SME+%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99+EP+37+%E0%B8%AD%E0%B8%B5%E0%B9%82%E0%B8%84%E0%B9%88+%E0%B9%80%E0%B8%9F%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B8%A5%E0%B8%B5%E0%B9%88+%E0%B9%84%E0%B8%97%E0%B8%A2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-emerald-500 text-[#122B22] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-emerald-400 transition-colors"
                  >
                    Open on YouTube
                  </a>
                </div>
              ) : (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" 
                    alt="EFT Video Documentary" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#1B4D3E]/90 hover:bg-[#1B4D3E] text-white border-2 border-[#8AE0B3] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-current text-[#8AE0B3] ml-1" />
                  </button>

                  {/* Video Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                      EP. 37 | SME กล้าให้ (ธนาคารไทยเครดิต)
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                      <Clock className="w-3.5 h-3.5 text-[#8AE0B3]" />
                      {FEATURED_VIDEO.duration}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Highlights & Interviewee Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#8AE0B3] block mb-2">
                {lang === 'th' ? 'บทสัมภาษณ์ผู้บริหาร' : 'Executive Interview'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-3">
                {FEATURED_VIDEO.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                {FEATURED_VIDEO.subtitle}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white/90 block">
                {lang === 'th' ? 'ประเด็นสำคัญในวิดีโอ (Key Highlights)' : 'Key Takeaways'}
              </span>
              {FEATURED_VIDEO.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#8AE0B3] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 font-serif italic">
              “เราไม่ได้มองว่าขยะคือของเหลือทิ้ง แต่มันคือวัตถุดิบต้นทุนต่ำที่รอการเปลี่ยนสภาพเป็นของที่มีมูลค่าสูงสุด”
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoSection;
