/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { SERVICES } from '../constants';
import { Layers, Boxes, Flame, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  lang: 'th' | 'en';
  onConsultService?: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ lang, onConsultService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-7 h-7 text-[#1B4D3E]" />;
      case 'Boxes': return <Boxes className="w-7 h-7 text-[#1B4D3E]" />;
      case 'Flame': return <Flame className="w-7 h-7 text-[#1B4D3E]" />;
      default: return <Layers className="w-7 h-7 text-[#1B4D3E]" />;
    }
  };

  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-[#EBE7DE] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2 sm:mb-3">
            {lang === 'th' ? 'บริการอุตสาหกรรมและผลิตภัณฑ์หลัก' : 'CORE INDUSTRIAL SERVICES'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-4">
            {lang === 'th' ? (
              <>บริการและ <span className="text-[#1B4D3E]">โซลูชัน</span></>
            ) : (
              <>SERVICES <span className="text-[#1B4D3E]">& SOLUTIONS</span></>
            )}
          </h2>
          <div className="w-20 h-1 bg-[#1B4D3E] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#3A3833] font-normal text-base sm:text-lg leading-relaxed">
            {lang === 'th' ? (
              <>
                บริการหลักครบวงจร <span className="font-bold text-[#1B4D3E]">3</span> ด้าน ตั้งแต่การแยกสกัดเยื่อกระดาษรีไซเคิลเกรดสูง การขึ้นรูปพลาสติกทดแทนไม้ ไปจนถึงการแปรรูปเชื้อเพลิง <span className="font-bold text-[#1B4D3E]">RDF</span>
              </>
            ) : (
              <>
                <span className="font-bold text-[#1B4D3E]">3</span> end-to-end circular services transforming packaging waste into valuable industrial feedstock and carbon-negative products.
              </>
            )}
          </p>
        </div>

        {/* 3 Services Cards Grid matching user's site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-[#F5F2EB] rounded-2xl overflow-hidden border border-[#D6D1C7] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Top Service Image */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-200">
                <img 
                  src={service.imageUrl} 
                  alt={lang === 'th' ? service.titleTh : service.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#1B4D3E]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                    {lang === 'th' ? (service.outputCapacityTh || service.outputCapacity) : service.outputCapacity}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#D6D1C7] mb-5 group-hover:bg-[#1B4D3E]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-2xl font-bold text-[#2C2A26] mb-2 leading-tight">
                    {lang === 'th' ? service.titleTh : service.title}
                  </h3>
                  <p className="text-xs text-[#1B4D3E] font-semibold mb-4">
                    {lang === 'th' ? service.title : service.titleTh}
                  </p>

                  <p className="text-sm font-semibold text-[#2C2A26] mb-3">
                    {lang === 'th' ? (service.descriptionTh || service.description) : service.description}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A4740] font-normal leading-relaxed mb-6">
                    {lang === 'th' ? (service.detailsTh || service.details) : service.details}
                  </p>

                  {/* Target Industries */}
                  <div className="space-y-2 pt-4 border-t border-[#D6D1C7]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A766E] block">
                      {lang === 'th' ? 'กลุ่มอุตสาหกรรมเป้าหมาย' : 'Target Applications'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(lang === 'th' && service.targetIndustriesTh ? service.targetIndustriesTh : service.targetIndustries).map((ind, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 bg-white text-[#2C2A26] rounded-md border border-[#D6D1C7]/70 font-semibold">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {onConsultService && (
                  <button
                    onClick={() => onConsultService(service.title)}
                    className="w-full py-3 bg-[#1B4D3E] text-white rounded-xl text-xs uppercase font-bold tracking-wider hover:bg-[#153D31] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{lang === 'th' ? 'ขอใบเสนอราคา / ปรึกษาเทคนิค' : 'Inquire / Request Quote'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
