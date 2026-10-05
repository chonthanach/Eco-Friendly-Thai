/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { PLANT_SITES } from '../constants';
import { PlantSite } from '../types';
import { Factory, MapPin, Gauge, ShieldCheck, ArrowRight, X, Layers } from 'lucide-react';

interface PlantSitesProps {
  onSelectPlant?: (plant: PlantSite) => void;
  lang: 'th' | 'en';
}

const PlantSites: React.FC<PlantSitesProps> = ({ onSelectPlant, lang }) => {
  const [selectedPlantModal, setSelectedPlantModal] = useState<PlantSite | null>(null);

  const handleOpenPlant = (plant: PlantSite) => {
    if (onSelectPlant) {
      onSelectPlant(plant);
    } else {
      setSelectedPlantModal(plant);
    }
  };

  return (
    <section id="plants" className="py-28 px-6 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2 sm:mb-3">
            {lang === 'th' ? 'ศักยภาพการผลิตและที่ตั้งโรงงาน' : 'MANUFACTURING CAPACITY & LOCATIONS'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-4">
            {lang === 'th' ? (
              <>โรงงานและ <span className="text-[#1B4D3E]">ฐานการผลิต</span></>
            ) : (
              <>OUR PLANT <span className="text-[#1B4D3E]">SITES</span></>
            )}
          </h2>
          <div className="w-20 h-1 bg-[#1B4D3E] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#3A3833] font-normal text-base sm:text-lg leading-relaxed">
            {lang === 'th' ? (
              <>
                โรงงานมาตรฐานอุตสาหกรรมสีเขียว <span className="font-bold text-[#1B4D3E]">3</span> แห่ง ครอบคลุมพื้นที่นนทบุรี นครปฐม และราชบุรี พร้อมระบบบำบัดแบบ <span className="font-bold text-[#1B4D3E]">Zero-Discharge</span>
              </>
            ) : (
              <>
                <span className="font-bold text-[#1B4D3E]">3</span> strategic processing facilities across Nonthaburi, Nakhon Pathom, and Ratchaburi with <span className="font-bold text-[#1B4D3E]">2,000 MT/month</span> total output.
              </>
            )}
          </p>
        </div>

        {/* 3 Plant Cards Grid matching user's site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANT_SITES.map((plant) => (
            <div 
              key={plant.id} 
              className="group relative bg-[#EBE7DE] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-[#D6D1C7]/80"
            >
              {/* Plant Image Box */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-300">
                <img 
                  src={plant.imageUrl} 
                  alt={plant.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 contrast-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183B30]/90 via-[#183B30]/40 to-transparent" />
                
                {/* Established badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B4D3E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {lang === 'th' ? `ก่อตั้ง ${plant.establishedTh || plant.established}` : `Est. ${plant.established}`}
                </div>

                {/* Capacity badge */}
                <div className="absolute top-4 right-4 bg-[#1B4D3E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-[#8AE0B3]" />
                  <span className="font-bold tracking-tight">{lang === 'th' ? (plant.capacityTh || plant.capacity) : plant.capacity}</span>
                </div>

                {/* Center Title overlay matching original site style */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight mb-1 drop-shadow-sm">
                    {lang === 'th' ? plant.nameTh : plant.name}
                  </h3>
                  <p className="text-xs text-[#8AE0B3] font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'th' ? (plant.locationTh || plant.location) : plant.location}</span>
                  </p>
                </div>
              </div>

              {/* Plant Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2">
                    {lang === 'th' ? 'จุดเน้นกระบวนการ' : 'Core Processing Focus'}
                  </span>
                  <p className="text-sm font-semibold text-[#2C2A26] mb-3">
                    {lang === 'th' ? (plant.focusTh || plant.focus) : plant.focus}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A4740] font-normal leading-relaxed">
                    {lang === 'th' ? (plant.descriptionTh || plant.description) : plant.description}
                  </p>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => handleOpenPlant(plant)}
                  className="w-full py-3 px-4 bg-white border border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{lang === 'th' ? 'ดูรายละเอียดโรงงาน (VIEW)' : 'VIEW PLANT SPECS'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Plant Detail Modal */}
      {selectedPlantModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in-up">
          <div className="bg-[#F5F2EB] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D6D1C7] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-60 w-full overflow-hidden shrink-0">
              <img 
                src={selectedPlantModal.imageUrl} 
                alt={selectedPlantModal.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183B30] via-black/30 to-transparent" />
              <button 
                onClick={() => setSelectedPlantModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#8AE0B3] font-bold">
                  {lang === 'th' ? 'ศูนย์การผลิตมาตรฐาน EFT' : 'EFT Manufacturing Site'}
                </span>
                <h3 className="text-2xl font-bold">
                  {lang === 'th' ? selectedPlantModal.nameTh : selectedPlantModal.name}
                </h3>
                <p className="text-xs text-white/90 font-medium">
                  {lang === 'th' ? selectedPlantModal.name : selectedPlantModal.nameTh}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B4D3E] mb-2">
                  {lang === 'th' ? 'ที่ตั้งและข้อมูลการเดินทาง' : 'Location & Address'}
                </h4>
                <p className="text-sm text-[#2C2A26] font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1B4D3E]" />
                  {lang === 'th' ? (selectedPlantModal.locationTh || selectedPlantModal.location) : selectedPlantModal.location}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B4D3E] mb-2">
                  {lang === 'th' ? 'ภาพรวมกระบวนการผลิต' : 'Plant Overview'}
                </h4>
                <p className="text-sm text-[#4A4740] leading-relaxed font-normal">
                  {lang === 'th' ? (selectedPlantModal.descriptionTh || selectedPlantModal.description) : selectedPlantModal.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B4D3E] mb-3">
                  {lang === 'th' ? 'ข้อมูลจำเพาะและเทคโนโลยี' : 'Facility Specifications'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(lang === 'th' && selectedPlantModal.specsTh ? selectedPlantModal.specsTh : selectedPlantModal.specs).map((spec, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-[#D6D1C7] text-xs">
                      <span className="text-[#7A766E] block uppercase font-bold text-[10px] tracking-wider">{spec.label}</span>
                      <span className="font-bold text-[#1B4D3E] mt-1 block text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D6D1C7] flex justify-end">
                <button
                  onClick={() => setSelectedPlantModal(null)}
                  className="px-6 py-2.5 bg-[#1B4D3E] text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-[#153D31]"
                >
                  {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default PlantSites;
