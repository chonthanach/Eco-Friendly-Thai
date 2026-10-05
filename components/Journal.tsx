/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * EFT NEWS — Scroll-locked fullscreen editorial section.
 * Uses the native "tall section + sticky inner" pattern:
 *   • The outer <section> is N × 100vh tall (one viewport per article).
 *   • The inner card is position:sticky so it stays pinned to the viewport.
 *   • A passive scroll listener computes which article is active based on
 *     how far the user has scrolled through the tall section.
 *   • No wheel/touch event hijacking — 100% native browser scroll = buttery smooth.
 */

import React, { useState, useEffect, useRef } from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';
import { ArrowRight } from 'lucide-react';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  lang: 'th' | 'en';
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isClickScrolling = useRef(false);

  const totalArticles = JOURNAL_ARTICLES.length;
  const activeArticle = JOURNAL_ARTICLES[activeIndex] || JOURNAL_ARTICLES[0];

  // ── Passive scroll listener ──
  // Maps scroll progress through the tall section → active article index.
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      // How far have we scrolled into this section? (0 … totalScrollable)
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      // Map progress → article index
      const idx = Math.min(
        totalArticles - 1,
        Math.floor(progress * totalArticles)
      );
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();            // compute on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalArticles]);

  // ── Click a topic title / dot → scroll to its "slot" ──
  const handleSelectArticle = (index: number) => {
    setActiveIndex(index);
    if (!sectionRef.current) return;

    isClickScrolling.current = true;

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    // Place the scroll so this article is centred in its "slot"
    const ratio = (index + 0.25) / totalArticles;
    const targetY = sectionTop + ratio * totalScrollable;

    window.scrollTo({ top: targetY, behavior: 'smooth' });

    setTimeout(() => { isClickScrolling.current = false; }, 700);
  };

  // ── Intersection Observer for entrance animation ──
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsInView(true); },
      { threshold: 0.08 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const eftLetters = ['E', 'F', 'T', '\u00A0', 'N', 'E', 'W', 'S'];

  // ── Render ──
  return (
    <section
      id="press"
      ref={sectionRef}
      className="relative w-full bg-[#EBE7DE]"
      /* ↓ one full viewport per article → the browser scroll-bar handles paging */
      style={{ height: `${totalArticles * 100}vh` }}
    >
      {/* ── Sticky full-screen card ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Visible card — fills the viewport, cream background */}
        <div className="relative w-full h-full bg-[#EFEFEA] overflow-hidden flex flex-col justify-between
                        py-20 sm:py-24 pb-6 sm:pb-8 px-6 sm:px-14 lg:px-20
                        select-none selection:bg-[#1B4D3E] selection:text-white">

          {/* ── EFT NEWS watermark (top) ── */}
          <div className="absolute inset-x-0 -top-6 sm:-top-10 lg:-top-14 pointer-events-none select-none
                          overflow-hidden flex justify-center text-center">
            <h2 className={`text-[19vw] font-black uppercase tracking-tighter text-white
                            whitespace-nowrap leading-none font-sans drop-shadow-sm
                            transition-transform duration-700
                            ${isInView ? 'animate-eft-news-top' : 'opacity-0 scale-90 -translate-y-10'}`}>
              {eftLetters.map((c, i) => (
                <span key={`t${i}`} className="inline-block will-change-transform"
                  style={{ animation: isInView
                    ? `letterRiseIn .9s cubic-bezier(.34,1.56,.64,1) ${i * 55}ms both`
                    : 'none' }}>
                  {c}
                </span>
              ))}
            </h2>
          </div>

          {/* ── EFT NEWS watermark (bottom) ── */}
          <div className="absolute inset-x-0 -bottom-8 sm:-bottom-14 lg:-bottom-20 pointer-events-none select-none
                          overflow-hidden flex justify-center text-center">
            <h2 className={`text-[19vw] font-black uppercase tracking-tighter text-white
                            whitespace-nowrap leading-none font-sans drop-shadow-sm
                            transition-transform duration-700
                            ${isInView ? 'animate-eft-news-bottom' : 'opacity-0 scale-90 translate-y-10'}`}>
              {eftLetters.map((c, i) => (
                <span key={`b${i}`} className="inline-block will-change-transform"
                  style={{ animation: isInView
                    ? `letterRiseIn .9s cubic-bezier(.34,1.56,.64,1) ${(eftLetters.length - 1 - i) * 55}ms both`
                    : 'none' }}>
                  {c}
                </span>
              ))}
            </h2>
          </div>

          {/* ═══════════ 3-column grid ═══════════ */}
          <div className="relative z-10 max-w-[1720px] mx-auto w-full
                          grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14
                          items-center my-auto py-2">

            {/* ── Col 1: topic list ── */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[.2em]
                               text-[#111] block font-sans">
                {lang === 'th' ? 'เรื่องราวและนวัตกรรม' : "HOW IT'S MADE"}
              </span>

              <div className="space-y-3.5 sm:space-y-4">
                {JOURNAL_ARTICLES.map((article, idx) => (
                  <div key={article.id}
                       onClick={() => handleSelectArticle(idx)}
                       className="cursor-pointer transition-all duration-300 group">
                    <h3 className={`text-base sm:text-lg lg:text-xl xl:text-2xl
                                    font-black leading-tight tracking-tight
                                    transition-all duration-300
                                    ${idx === activeIndex
                                      ? 'text-[#111] translate-x-1.5'
                                      : 'text-[#C7C3B9] hover:text-[#8E8A80]'}`}>
                      {lang === 'th' ? (article.titleTh || article.title) : (article.title || article.titleTh)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Col 2: image showcase ── */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div onClick={() => onArticleClick(activeArticle)}
                   className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px]
                              overflow-hidden shadow-2xl group cursor-pointer
                              border border-white/80 bg-stone-200">
                <img key={activeArticle.id}
                     src={activeArticle.image}
                     alt={lang === 'th' ? (activeArticle.titleTh || activeArticle.title) : activeArticle.title}
                     className="w-full h-full object-cover
                                group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-wider
                                   flex items-center gap-2">
                    {lang === 'th' ? 'คลิกเพื่ออ่านบทความฉบับเต็ม' : 'Click to Read Full Story'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* ── Col 3: summary + CTA ── */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-3.5">
                <p className="text-sm sm:text-base font-bold text-[#111] leading-relaxed">
                  {lang === 'th' ? (activeArticle.titleTh || activeArticle.title) : (activeArticle.title || activeArticle.titleTh)}
                </p>
                <p className="text-xs sm:text-sm text-[#4A4740] leading-relaxed line-clamp-4">
                  {lang === 'th' ? (activeArticle.excerptTh || activeArticle.excerpt) : (activeArticle.excerpt || activeArticle.excerptTh)}
                </p>
              </div>

              <button onClick={() => onArticleClick(activeArticle)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase
                                 tracking-wider text-[#1B4D3E] hover:text-[#143D31]
                                 transition-colors pt-2 group cursor-pointer">
                <span>{lang === 'th' ? 'อ่านรายละเอียดเพิ่มเติม' : 'Read Article'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ── Bottom bar: hint + counter + dots ── */}
          <div className="relative z-10 max-w-[1720px] mx-auto w-full
                          flex items-center justify-between pt-4
                          border-t border-[#DCD7CD] text-xs text-[#8C887F]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D3E] animate-pulse" />
              <span className="font-medium text-xs sm:text-sm">
                {lang === 'th' ? 'เลื่อนลงเพื่อเปลี่ยนหัวข้อ' : 'Scroll down to switch topics'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono font-bold text-[#1B4D3E]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(totalArticles).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1.5">
                {JOURNAL_ARTICLES.map((_, idx) => (
                  <button key={idx}
                          onClick={() => handleSelectArticle(idx)}
                          aria-label={`Topic ${idx + 1}`}
                          className={`transition-all duration-500 rounded-full cursor-pointer
                                      ${idx === activeIndex
                                        ? 'w-6 h-2 bg-[#1B4D3E]'
                                        : 'w-2 h-2 bg-[#C5C1B6] hover:bg-[#8C887F]'}`} />
                ))}
              </div>
            </div>
          </div>

        </div>{/* end visible card */}
      </div>{/* end sticky wrapper */}
    </section>
  );
};

export default Journal;
