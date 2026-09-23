/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';
import { ArrowRight, Newspaper, Calendar, User } from 'lucide-react';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  lang: 'th' | 'en';
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, lang }) => {
  return (
    <section id="press" className="py-28 px-6 md:px-12 bg-[#EBE7DE] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2 sm:mb-3">
            {lang === 'th' ? 'ข่าวประชาสัมพันธ์และบทความ' : 'PRESS & NEWSROOM'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-4">
            PRESS <span className="text-[#1B4D3E]">& INSIGHTS</span>
          </h2>
          <div className="w-20 h-1 bg-[#1B4D3E] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#5D5A53] font-light text-base sm:text-lg">
            {lang === 'th'
              ? 'ติดตามความเคลื่อนไหว กิจกรรมเพื่อสังคม และรางวัลระดับประเทศของ Eco Friendly Thai'
              : 'Official press releases, social impact initiatives, and circular economy milestones.'}
          </p>
        </div>

        {/* 3 News Articles Grid matching screenshot 11 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article 
              key={article.id}
              onClick={() => onArticleClick(article)}
              className="bg-white rounded-2xl overflow-hidden border border-[#D6D1C7] hover:border-[#1B4D3E] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              {/* Top Image */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B4D3E] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#A8A29E] font-medium mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2C2A26] group-hover:text-[#1B4D3E] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D5A53] font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D6D1C7] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1B4D3E]">
                  <span>{lang === 'th' ? 'อ่านบทความเต็ม' : 'Read Full Release'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journal;
