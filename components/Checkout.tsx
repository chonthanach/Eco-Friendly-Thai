/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowLeft, Leaf, CheckCircle2, ShieldCheck, Phone, Mail, FileText, Send } from 'lucide-react';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
  lang: 'th' | 'en';
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    taxId: '',
    notes: ''
  });

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const totalCartons = items.reduce((sum, item) => sum + (item.cartonCount || 0), 0);
  const totalCo2 = items.reduce((sum, item) => sum + (item.carbonOffsetKg || 0), 0).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4D3E] hover:text-[#153D31] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{lang === 'th' ? 'กลับไปเลือกสินค้าเพิ่มเติม' : 'Back to Store'}</span>
        </button>

        {submitted ? (
          <div className="bg-white p-12 sm:p-16 rounded-3xl border border-[#D6D1C7] text-center max-w-2xl mx-auto shadow-xl space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#2C2A26]">
              {lang === 'th' ? 'บันทึกคำสั่งซื้อ / คำขอใบเสนอราคาสำเร็จ!' : 'Quotation & Order Submitted!'}
            </h1>
            <p className="text-sm text-[#4A4740] leading-relaxed font-normal">
              {lang === 'th'
                ? 'ระบบได้ส่งข้อมูลไปยังฝ่ายขายของ บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด เจ้าหน้าที่จะติดต่อกลับพร้อมใบเสนอราคาทางการ (Official Quotation) และกำหนดส่งสินค้า'
                : 'Your order draft and quotation request has been received. Our sales team will email you an official proforma invoice with freight options.'}
            </p>
            
            {/* Impact Metric Card */}
            <div className="p-6 bg-[#1B4D3E] text-white rounded-2xl flex items-center justify-between text-left">
              <div>
                <span className="text-xs uppercase text-[#8AE0B3] font-bold block">Environmental Impact</span>
                <span className="text-xl font-bold">{totalCartons.toLocaleString()} UHT Cartons Recycled</span>
              </div>
              <span className="text-lg font-bold text-[#8AE0B3]">-{totalCo2} kgCO2e</span>
            </div>

            <button
              onClick={onBack}
              className="px-8 py-3.5 bg-[#1B4D3E] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#153D31]"
            >
              {lang === 'th' ? 'กลับสู่หน้าหลัก' : 'Return to Home'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#D6D1C7] shadow-sm">
                <h1 className="text-3xl font-extrabold text-[#2C2A26] mb-2">
                  {lang === 'th' ? 'ข้อมูลการสั่งซื้อและออกใบกำกับภาษี' : 'Order & Invoicing Details'}
                </h1>
                <p className="text-xs sm:text-sm text-[#4A4740] mb-8 font-normal">
                  {lang === 'th' 
                    ? 'กรอกข้อมูลสถานที่จัดส่ง เพื่อให้ฝ่ายขายคำนวณค่าขนส่งและส่วนลดปริมาณ' 
                    : 'Provide delivery and billing details for accurate quotation processing.'}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Contact info */}
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#1B4D3E] mb-4">
                      {lang === 'th' ? '1. ข้อมูลผู้ติดต่อ' : '1. Contact Information'}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-semibold text-[#2C2A26] mb-1">
                          {lang === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'} *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#F5F2EB] border border-[#D6D1C7] rounded-xl px-4 py-3 text-sm text-[#2C2A26] outline-none focus:border-[#1B4D3E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-semibold text-[#2C2A26] mb-1">
                          {lang === 'th' ? 'เบอร์โทรศัพท์' : 'Phone'} *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#F5F2EB] border border-[#D6D1C7] rounded-xl px-4 py-3 text-sm text-[#2C2A26] outline-none focus:border-[#1B4D3E]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company & Billing */}
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#1B4D3E] mb-4">
                      {lang === 'th' ? '2. ที่อยู่จัดส่งและใบกำกับภาษี' : '2. Shipping & Billing Address'}
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase font-semibold text-[#2C2A26] mb-1">
                          {lang === 'th' ? 'ชื่อบริษัท / โรงเรียน / หน่วยงาน' : 'Company or School Name'}
                        </label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[#F5F2EB] border border-[#D6D1C7] rounded-xl px-4 py-3 text-sm text-[#2C2A26] outline-none focus:border-[#1B4D3E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-semibold text-[#2C2A26] mb-1">
                          {lang === 'th' ? 'ที่อยู่สถานที่จัดส่ง (หรือปลายทางโครงการ)' : 'Delivery Address'} *
                        </label>
                        <textarea 
                          rows={3}
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-[#F5F2EB] border border-[#D6D1C7] rounded-xl px-4 py-3 text-sm text-[#2C2A26] outline-none focus:border-[#1B4D3E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-semibold text-[#2C2A26] mb-1">
                          {lang === 'th' ? 'หมายเหตุเพิ่มเติม (เช่น ต้องการเข้าดูตัวอย่างสินค้า)' : 'Special Requirements'}
                        </label>
                        <input 
                          type="text" 
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-[#F5F2EB] border border-[#D6D1C7] rounded-xl px-4 py-3 text-sm text-[#2C2A26] outline-none focus:border-[#1B4D3E]"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#1B4D3E] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-[#153D31] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'th' ? `ยืนยันขอใบเสนอราคา — ฿${subtotal.toLocaleString()}` : `Submit Order Request — ฿${subtotal.toLocaleString()}`}</span>
                  </button>

                </form>
              </div>
            </div>

            {/* Right Column: Order Summary & Carbon Certificate Preview */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Order Items Card */}
              <div className="bg-white p-8 rounded-3xl border border-[#D6D1C7] shadow-sm">
                <h2 className="text-xl font-bold text-[#2C2A26] mb-6">
                  {lang === 'th' ? 'รายการสินค้าที่สั่งซื้อ' : 'Order Summary'}
                </h2>
                
                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center pb-4 border-b border-[#D6D1C7]/60">
                      <div className="w-14 h-14 bg-[#EBE7DE] rounded-lg overflow-hidden shrink-0">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-[#2C2A26]">{item.name}</h3>
                        <span className="text-[10px] text-[#1B4D3E] font-medium block">
                          🌱 {item.cartonCount} cartons
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#2C2A26]">฿{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                {/* Subtotals */}
                <div className="space-y-2 text-xs text-[#5D5A53] pt-2">
                  <div className="flex justify-between">
                    <span>{lang === 'th' ? 'ยอดรวมสินค้า' : 'Subtotal'}</span>
                    <span className="font-semibold text-[#2C2A26]">฿{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'th' ? 'ค่าจัดส่ง' : 'Estimated Freight'}</span>
                    <span className="text-emerald-700 font-semibold">{lang === 'th' ? 'คำนวณตามระยะทาง' : 'Calculated by Zone'}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#D6D1C7] pt-3 text-base font-bold text-[#1B4D3E]">
                    <span>{lang === 'th' ? 'ยอดรวมสุทธิ' : 'Total'}</span>
                    <span>฿{subtotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Eco Certification Guarantee */}
              <div className="p-6 bg-[#183B30] text-white rounded-3xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#8AE0B3] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DCCE Thailand Certified</span>
                </div>
                <h4 className="text-base font-bold">100% Upcycled Circular Economy</h4>
                <p className="text-xs text-white/90 font-normal leading-relaxed">
                  Every product is documented with carbon credits and UHT carton conversion metrics for your company&apos;s annual ESG sustainability report.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
