/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect } from 'react';
import { JournalArticle } from '../types';
import { ArrowLeft, Calendar, Leaf, ExternalLink } from 'lucide-react';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
  lang: 'th' | 'en';
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack, lang }) => {
  // Ensure we start at the top of the article when opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article]);

  const title = lang === 'th' ? (article.titleTh || article.title) : (article.title || article.titleTh);
  const date = lang === 'th' ? (article.dateTh || article.date) : article.date;
  const category = lang === 'th' ? (article.categoryTh || article.category) : article.category;
  const author = lang === 'th' ? (article.authorTh || article.author) : article.author;
  const content = lang === 'th' ? (article.contentTh || article.content) : article.content;

  return (
    <div className="min-h-screen bg-[#F5F2EB] pt-24 pb-32 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] hover:text-[#143D31] transition-colors cursor-pointer bg-white px-4 py-2.5 rounded-full border border-[#D6D1C7] shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{lang === 'th' ? 'กลับสู่หน้าข่าวสาร' : 'Back to News & Press'}</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-[#5D5A53]">
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
              {date}
            </span>
            <span className="px-3 py-1 bg-[#1B4D3E]/10 text-[#1B4D3E] font-bold rounded-full uppercase text-[11px] tracking-wide border border-[#1B4D3E]/20">
              {category}
            </span>
          </div>
        </div>

        {/* Main Article Card Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 md:p-14 shadow-xl border border-[#D6D1C7]">
          
          {/* Header Info */}
          <div className="mb-8 space-y-4">
            <div className="flex sm:hidden items-center gap-2 text-xs text-[#5D5A53]">
              <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
              <span>{date}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111] leading-tight">
              {title}
            </h1>

            {author && (
              <div className="flex items-center gap-3 pt-2 text-xs text-[#5D5A53]">
                <div className="w-8 h-8 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-[11px] shrink-0 shadow-sm">
                  EFT
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#1B4D3E] block">
                    {lang === 'th' ? 'เผยแพร่โดย' : 'Published by'}
                  </span>
                  <span className="font-semibold text-[#2C2A26]">{author}</span>
                </div>
              </div>
            )}
          </div>

          {/* Featured Image - Sharp, fully visible, uncropped */}
          <div className="mb-10 rounded-2xl overflow-hidden bg-[#F5F2EB] border border-[#D6D1C7] p-2 sm:p-3 relative group shadow-sm">
            <div className="w-full flex items-center justify-center overflow-hidden rounded-xl bg-white/70 min-h-[300px] sm:min-h-[440px]">
              <img
                src={article.image}
                alt={title}
                className="max-h-[580px] w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            
            <a 
              href={article.image} 
              target="_blank" 
              rel="noreferrer" 
              className="absolute bottom-4 right-4 bg-black/75 hover:bg-black/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md transition-colors shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'ดูรูปขนาดเต็ม' : 'View Full Image'}</span>
            </a>
          </div>

          {/* Article Body Content */}
          <div className="text-base sm:text-lg font-normal leading-relaxed text-[#2C2A26] space-y-6 border-b border-[#EBE7DE] pb-12">
            {content}
          </div>

          {/* Article Footer Seal & Back Button */}
          <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-[#1B4D3E]">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center text-[#1B4D3E]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1B4D3E]">Eco Friendly Thai Co., Ltd.</p>
                <p className="text-xs text-[#7A766D]">Circular Economy & Sustainable Packaging Solutions</p>
              </div>
            </div>

            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4D3E] hover:bg-[#143D31] text-white text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'th' ? 'กลับสู่หน้าข่าวสาร' : 'Back to News'}</span>
            </button>
          </div>

        </article>

      </div>
    </div>
  );
};

export default JournalDetail;