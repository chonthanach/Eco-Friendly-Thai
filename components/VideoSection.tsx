/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { FEATURED_VIDEO } from '../constants';
import { Play, Eye, Clock, CheckCircle2, Share2, Sparkles, X, ExternalLink } from 'lucide-react';

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
            {lang === 'th' ? (
              <>สารคดีและ <span className="text-[#8AE0B3]">สื่อสัมภาษณ์</span></>
            ) : (
              <>FEATURED <span className="text-[#8AE0B3]">MEDIA</span></>
            )}
          </h2>
          <div className="w-20 h-1 bg-[#8AE0B3] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/90 font-normal text-base sm:text-lg leading-relaxed">
            {lang === 'th' ? (
              <>
                รายการ <strong className="font-bold text-[#8AE0B3]">SME กล้าเปลี่ยน EP 37</strong>: เรื่องราวของคุณสมยศ วัฒน์พานิช ในการเปลี่ยนขยะกล่องนมสู่ธุรกิจหมุนเวียน <strong className="font-bold text-[#8AE0B3]">300 ล้านบาท</strong>
              </>
            ) : (
              <>
                Deep-dive documentary on how Eco Friendly Thai scaled from zero to a <strong className="font-bold text-[#8AE0B3]">300M THB</strong> sustainable recycling leader.
              </>
            )}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          
          {/* Left Column: Video Embed / Screen */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/20 shadow-2xl group">
              {isPlaying ? (
                <div className="w-full h-full relative bg-black">
                  <iframe
                    className="w-full h-full"
                    src={FEATURED_VIDEO.embedUrl}
                    title={lang === 'th' ? FEATURED_VIDEO.title : (FEATURED_VIDEO.titleEn || FEATURED_VIDEO.title)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/80 hover:bg-black text-white transition-colors border border-white/20 shadow-lg cursor-pointer"
                    title={lang === 'th' ? 'ปิดวิดีโอ' : 'Close video'}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <img 
                    src={FEATURED_VIDEO.thumbnailUrl} 
                    alt="EFT Video Documentary" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#1B4D3E]/95 hover:bg-emerald-600 text-white border-2 border-[#8AE0B3] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-current text-[#8AE0B3] ml-1" />
                  </button>

                  {/* Video Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm font-bold">
                      {lang === 'th' ? 'EP. 37 | SME กล้าให้ (ธนาคารไทยเครดิต)' : 'EP. 37 | Thai Credit Bank SME'}
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#8AE0B3]" />
                      {lang === 'th' ? (FEATURED_VIDEO.durationTh || FEATURED_VIDEO.duration) : FEATURED_VIDEO.duration}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Quick Watch on YouTube bar below video */}
            <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
              <a
                href={FEATURED_VIDEO.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CC0000] hover:bg-[#AA0000] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'th' ? 'เปิดรับชมบน YouTube' : 'Watch on YouTube'}</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <span className="text-xs text-white/70">
                {lang === 'th' ? FEATURED_VIDEO.viewsTh : FEATURED_VIDEO.views}
              </span>
            </div>
          </div>

          {/* Right Column: Highlights & Interviewee Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#8AE0B3] block mb-2">
                {lang === 'th' ? 'บทสัมภาษณ์ผู้บริหาร' : 'Executive Interview'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-3">
                {lang === 'th' ? FEATURED_VIDEO.title : (FEATURED_VIDEO.titleEn || FEATURED_VIDEO.title)}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                {lang === 'th' ? FEATURED_VIDEO.subtitle : (FEATURED_VIDEO.subtitleEn || FEATURED_VIDEO.subtitle)}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white/90 block">
                {lang === 'th' ? 'ประเด็นสำคัญในวิดีโอ (Key Highlights)' : 'Key Takeaways'}
              </span>
              {(lang === 'th' ? FEATURED_VIDEO.highlights : (FEATURED_VIDEO.highlightsEn || FEATURED_VIDEO.highlights)).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 font-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#8AE0B3] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 font-serif italic">
              {lang === 'th' 
                ? '“เราไม่ได้มองว่าขยะคือของเหลือทิ้ง แต่มันคือวัตถุดิบต้นทุนต่ำที่รอการเปลี่ยนสภาพเป็นของที่มีมูลค่าสูงสุด”' 
                : '“We do not view waste as discarded debris, but as prime low-cost raw material waiting to be transformed into high-value circular products.”'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoSection;
