/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JournalArticle } from '../types';
import { ArrowLeft, Calendar, User, Share2, Leaf } from 'lucide-react';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
  lang: 'th' | 'en';
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack, lang }) => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] pt-24 animate-fade-in-up pb-32">
      
      {/* Article Top Banner Image */}
      <div className="w-full h-[45vh] md:h-[55vh] relative overflow-hidden bg-stone-900">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183B30] via-black/30 to-transparent" />
      </div>

      {/* Main Content Floating Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-32 relative z-10">
        <div className="bg-white p-8 sm:p-14 rounded-3xl shadow-2xl border border-[#D6D1C7]">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#D6D1C7]">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4D3E] hover:text-[#153D31] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'th' ? 'กลับสู่หน้าข่าวสาร' : 'Back to News & Press'}</span>
            </button>

            <div className="flex items-center gap-4 text-xs text-[#5D5A53]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
                {lang === 'th' ? (article.dateTh || article.date) : article.date}
              </span>
              <span className="px-2.5 py-1 bg-[#1B4D3E]/10 text-[#1B4D3E] font-semibold rounded-full uppercase text-[10px]">
                {lang === 'th' ? (article.categoryTh || article.category) : article.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-8 leading-tight">
            {lang === 'th' ? (article.titleTh || article.title) : (article.title || article.titleTh)}
          </h1>

          {/* Author Badge */}
          {article.author && (
            <div className="flex items-center gap-3 p-4 bg-[#F5F2EB] rounded-xl mb-10 border border-[#D6D1C7]">
              <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-xs">
                EFT
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#1B4D3E] block">
                  {lang === 'th' ? 'เผยแพร่โดย' : 'Published by'}
                </span>
                <span className="text-sm font-medium text-[#2C2A26]">
                  {lang === 'th' ? (article.authorTh || article.author) : article.author}
                </span>
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="text-base sm:text-lg font-normal leading-relaxed text-[#3A3833] space-y-6">
            {lang === 'th' ? (article.contentTh || article.content) : article.content}
          </div>

          {/* Footer Brand Seal */}
          <div className="mt-16 pt-10 border-t border-[#D6D1C7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E]">
            <div className="flex items-center gap-2 text-[#1B4D3E] font-bold text-base">
              <Leaf className="w-5 h-5" />
              <span>Eco Friendly Thai Co., Ltd.</span>
            </div>
            <button
              onClick={onBack}
              className="px-6 py-2.5 bg-[#1B4D3E] text-white font-bold rounded-full uppercase tracking-wider hover:bg-[#153D31]"
            >
              {lang === 'th' ? 'กลับหน้าแรก' : 'Back to Home'}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default JournalDetail;     