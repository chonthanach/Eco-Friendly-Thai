/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Leaf, Recycle, Award, CheckCircle2, Globe2, Sparkles, TrendingUp } from 'lucide-react';
import { EftLogoIcon } from './Logo';

interface AboutProps {
  lang: 'th' | 'en';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="bg-[#EBE7DE] py-28 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4D3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B4D3E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2 sm:mb-3">
            {lang === 'th' ? 'เรื่องราวและความมุ่งมั่นของเรา' : 'OUR HERITAGE & MISSION'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-4">
            ABOUT <span className="text-[#1B4D3E]">EFT</span>
          </h2>
          <div className="w-20 h-1 bg-[#1B4D3E] mx-auto rounded-full"></div>
        </div>

        {/* Two-Column Story Grid with Glass/Crystal Globe Aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Left Column: Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-sm border border-[#D6D1C7]/60">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E]">
                  <Leaf className="w-3.5 h-3.5" />
                  {lang === 'th' ? 'ก่อตั้งขึ้นในปี พ.ศ. 2556 (2013)' : 'Founded in 2013, Thailand'}
                </span>
                <div className="w-9 h-9 p-0.5 rounded-lg bg-[#143D31] flex items-center justify-center shadow-sm">
                  <EftLogoIcon className="w-full h-full" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2A26] leading-snug mb-6">
                {lang === 'th'
                  ? 'จากขยะบรรจุภัณฑ์ สู่คุณค่าใหม่ของเศรษฐกิจหมุนเวียน 2,000 เมตริกตัน/เดือน'
                  : 'From Beverage Carton Waste to High-Grade Circular Resources'}
              </h3>

              <p className="text-base sm:text-lg text-[#5D5A53] font-light leading-relaxed mb-6">
                {lang === 'th'
                  ? 'สำหรับสายการผลิตเยื่อกระดาษรีไซเคิล เราได้เริ่มต้นโรงงานแห่งแรกในนาม Eco Friendly Thailand ในปี 2013 เพื่อนำกล่องนม UHT และขยะบรรจุภัณฑ์มาแยกสกัดเป็นเยื่อกระดาษขาวบริสุทธิ์เกรดพรีเมียม'
                  : 'For recycle pulp, we started our plant named Eco Friendly Thailand in 2013. Today we have scaled to serve customers with massive monthly production, expanding to a third mega-plant to reach 2,000 MT/month total capacity.'}
              </p>

              <p className="text-base sm:text-lg text-[#5D5A53] font-light leading-relaxed mb-8">
                {lang === 'th'
                  ? 'ปัจจุบันเราขยายโรงงานครอบคลุม 3 จุดยุทธศาสตร์ (ไทรน้อย นนทบุรี, นครปฐม และราชบุรี) มีกำลังการผลิตรวมทะลุ 2,000 MT/เดือน พร้อมต่อยอดนำพลาสติกอะลูมิเนียม (Poly-Al) มาอัดขึ้นรูปเป็นวัสดุก่อสร้าง ไม้เทียม และโต๊ะเก้าอี้นักเรียน Eco School Furniture 100% Zero-Waste'
                  : 'Today we operate across 3 strategic sites with state-of-the-art closed-loop hydro-pulping and heavy thermo-compression systems, achieving 100% material utilization without harmful chemical bleaching.'}
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D6D1C7]/60">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C2A26]">100% Closed-Loop System</h4>
                    <p className="text-xs text-[#5D5A53]">{lang === 'th' ? 'ระบบหมุนเวียนน้ำและไร้สารพิษ 98%' : '98% closed-loop zero discharge'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C2A26]">DCCE Certified</h4>
                    <p className="text-xs text-[#5D5A53]">{lang === 'th' ? 'มาตรฐาน Upcycle จากกรมการเปลี่ยนแปลงสภาพภูมิอากาศ' : 'National circular economy certified'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Crystal Globe / Nature Image matching user's site */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] sm:aspect-[16/11]">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Hand holding crystal globe reflecting lush green forest" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-[#2C2A26] shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#1B4D3E] font-bold block mb-1">
                      {lang === 'th' ? 'วิสัยทัศน์สีเขียว' : 'Green Vision'}
                    </span>
                    <p className="text-sm font-medium text-[#2C2A26]">
                      {lang === 'th' 
                        ? '“เปลี่ยนขยะที่ไม่ต้องการ สู่คุณค่าใหม่เพื่อโลกที่น่าอยู่”' 
                        : '“Creating high-value circular solutions for our planet.”'}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center text-white shrink-0">
                    <Globe2 className="w-5 h-5 text-[#8AE0B3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars of Circular Value */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#F5F2EB] p-8 rounded-xl border border-[#D6D1C7] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B4D3E]/10 text-[#1B4D3E] flex items-center justify-center mb-6">
                <Recycle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B4D3E] block mb-2">Pillar 01</span>
              <h4 className="text-xl font-bold text-[#2C2A26] mb-3">
                {lang === 'th' ? 'แยกเยื่อกระดาษบริสุทธิ์' : 'Hydro-Pulping Separation'}
              </h4>
              <p className="text-sm text-[#5D5A53] leading-relaxed font-light">
                {lang === 'th'
                  ? 'สกัดเส้นใยเซลลูโลสยาว (Long Kraft Fiber) คุณภาพสูงจากกล่อง UHT สำหรับส่งโรงงานผลิตกระดาษคราฟต์ บรรจุภัณฑ์ และกระเบื้องไฟเบอร์ซีเมนต์'
                  : 'Extracting virgin-grade unbleached Kraft fibers with superior tensile and burst index for high-performance packaging.'}
              </p>
            </div>
          </div>

          <div className="bg-[#F5F2EB] p-8 rounded-xl border border-[#D6D1C7] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B4D3E]/10 text-[#1B4D3E] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B4D3E] block mb-2">Pillar 02</span>
              <h4 className="text-xl font-bold text-[#2C2A26] mb-3">
                {lang === 'th' ? 'อัปไซเคิล Poly-Al ไม่ใช้ไม้' : 'Poly-Al Wood Replacement'}
              </h4>
              <p className="text-sm text-[#5D5A53] leading-relaxed font-light">
                {lang === 'th'
                  ? 'นำฟิล์มพลาสติกและฟอยล์อะลูมิเนียมมาอัดขึ้นรูปด้วยความร้อนสูง เป็นไม้เทียม แผ่นสมาร์ทบอร์ด และบล็อกปูพื้น กันน้ำ ปลวกไม่กิน 100%'
                  : 'Compressing Poly-Al into weather-proof, termite-proof, asbestos-free building panels and modular pavers.'}
              </p>
            </div>
          </div>

          <div className="bg-[#F5F2EB] p-8 rounded-xl border border-[#D6D1C7] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B4D3E]/10 text-[#1B4D3E] flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B4D3E] block mb-2">Pillar 03</span>
              <h4 className="text-xl font-bold text-[#2C2A26] mb-3">
                {lang === 'th' ? 'พลังงานสะอาด RDF Zero-Waste' : 'RDF Energy Recovery'}
              </h4>
              <p className="text-sm text-[#5D5A53] leading-relaxed font-light">
                {lang === 'th'
                  ? 'เศษพลาสติกที่ไม่สามารถนำมารีไซเคิลซ้ำได้ จะถูกแปรรูปเป็นเชื้อเพลิงขยะ RDF คุณภาพสูง เพื่อใช้ทดแทนถ่านหินในเตาเผาอุตสาหกรรม'
                  : 'Transforming residual plastic fractions into high-calorific Refuse-Derived Fuel for clean industrial co-processing.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
