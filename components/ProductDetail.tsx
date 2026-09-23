/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { ArrowLeft, Leaf, ShieldCheck, CheckCircle2, Mail, Phone, Scale, Ruler, Layers, ArrowRight } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onContactOrder?: (product: Product) => void;
  lang: 'th' | 'en';
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onContactOrder, lang }) => {

  return (
    <div className="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up pb-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4D3E] hover:text-[#153D31] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{lang === 'th' ? 'กลับสู่หน้ารายการสินค้า' : 'Back to Eco Store'}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Product Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="w-full aspect-[4/3] bg-[#EBE7DE] rounded-3xl overflow-hidden shadow-md border border-[#D6D1C7] relative">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              
              {product.discountPercent && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow-md">
                  SAVE {product.discountPercent}%
                </div>
              )}

              {product.cartonCount && (
                <div className="absolute top-4 right-4 bg-[#1B4D3E] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Leaf className="w-3.5 h-3.5 text-[#8AE0B3]" />
                  <span>{product.cartonCount.toLocaleString()} {lang === 'th' ? 'กล่อง UHT/ชิ้น' : 'Cartons/pc'}</span>
                </div>
              )}
            </div>

            {/* Environmental Impact Summary Pill */}
            <div className="p-6 rounded-2xl bg-[#1B4D3E] text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-[#8AE0B3]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8AE0B3] font-bold block">
                    {lang === 'th' ? 'ผลกระทบต่อสิ่งแวดล้อม' : 'Carbon Reduction'}
                  </span>
                  <span className="text-sm font-semibold">
                    -{product.carbonOffsetKg} kgCO2e Greenhouse Gas Avoidance
                  </span>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-xs text-white/80 block">Standard</span>
                <span className="text-xs font-bold text-[#8AE0B3]">DCCE Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Spec & Ordering */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B4D3E] block mb-2">
                {product.category}
              </span>

              {/* Name */}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-2 leading-tight">
                {lang === 'th' && product.nameTh ? product.nameTh : product.name}
              </h1>
              <p className="text-base text-[#5D5A53] mb-6 font-light">
                {lang === 'th' ? product.name : (product.nameTh || '')}
              </p>

              {/* Price Row */}
              <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-[#D6D1C7]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#1B4D3E]">
                  ฿{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-[#A8A29E] line-through">
                    ฿{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.wholesalePrice && (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                    {lang === 'th' ? `ราคาส่ง ฿${product.wholesalePrice.toLocaleString()}/ชิ้น (ขั้นต่ำ ${product.minWholesaleQty || 100} ชิ้น)` : `Wholesale ฿${product.wholesalePrice.toLocaleString()}/pc (Min ${product.minWholesaleQty || 100})`}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[#5D5A53] leading-relaxed font-light text-base mb-8">
                {product.longDescription || product.description}
              </p>

              {/* Specifications Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {product.dimensions && (
                  <div className="p-3 bg-white rounded-xl border border-[#D6D1C7] text-xs">
                    <span className="text-[#A8A29E] flex items-center gap-1 uppercase font-medium">
                      <Ruler className="w-3.5 h-3.5 text-[#1B4D3E]" /> ขนาด
                    </span>
                    <span className="font-semibold text-[#2C2A26] mt-1 block">{product.dimensions}</span>
                  </div>
                )}

                {product.weightKg && (
                  <div className="p-3 bg-white rounded-xl border border-[#D6D1C7] text-xs">
                    <span className="text-[#A8A29E] flex items-center gap-1 uppercase font-medium">
                      <Scale className="w-3.5 h-3.5 text-[#1B4D3E]" /> น้ำหนัก
                    </span>
                    <span className="font-semibold text-[#2C2A26] mt-1 block">{product.weightKg} kg</span>
                  </div>
                )}

                {product.coveragePerSqm && (
                  <div className="p-3 bg-white rounded-xl border border-[#D6D1C7] text-xs">
                    <span className="text-[#A8A29E] flex items-center gap-1 uppercase font-medium">
                      <Layers className="w-3.5 h-3.5 text-[#1B4D3E]" /> ตร.ม.
                    </span>
                    <span className="font-semibold text-[#2C2A26] mt-1 block">{product.coveragePerSqm}</span>
                  </div>
                )}

                {product.warranty && (
                  <div className="p-3 bg-white rounded-xl border border-[#D6D1C7] text-xs">
                    <span className="text-[#A8A29E] flex items-center gap-1 uppercase font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1B4D3E]" /> รับประกัน
                    </span>
                    <span className="font-semibold text-[#2C2A26] mt-1 block">{product.warranty}</span>
                  </div>
                )}
              </div>

              {/* View-Only Catalog Notice & Eco Metrics */}
              <div className="p-5 bg-white rounded-2xl border border-[#D6D1C7] mb-6 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2C2A26] uppercase tracking-wide">
                    {lang === 'th' ? 'โหมดแสดงแคตตาล็อกสินค้า' : 'Catalog View Only'}
                  </span>
                  <span className="text-[#1B4D3E] font-semibold text-[11px] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {lang === 'th' ? 'สั่งผลิตตามจำนวน / งานโครงการ' : 'Custom / Project Orders'}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#D6D1C7] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5D5A53]">
                  <span>{lang === 'th' ? `ขยะกล่องนมที่ช่วยชีวิต: ${product.cartonCount?.toLocaleString() || 0} กล่อง/ชิ้น` : `Cartons Upcycled: ${product.cartonCount?.toLocaleString() || 0} / pc`}</span>
                  <span className="font-bold text-[#1B4D3E]">{lang === 'th' ? `ลดคาร์บอน: -${product.carbonOffsetKg || 0} kgCO2e/ชิ้น` : `Carbon: -${product.carbonOffsetKg || 0} kgCO2e/pc`}</span>
                </div>
              </div>

              {/* Contact to Purchase / Request Quote Action Box */}
              <div className="p-6 bg-gradient-to-br from-[#183B30] to-[#0E261E] rounded-2xl text-white shadow-xl space-y-4 mb-8">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#8AE0B3] block mb-1">
                    {lang === 'th' ? 'หากท่านต้องการสั่งซื้อสินค้าชิ้นนี้' : 'READY TO PURCHASE THIS PRODUCT'}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {lang === 'th' ? 'ติดต่อเราเพื่อสั่งซื้อ / ขอใบเสนอราคา' : 'Contact Us to Order / Request Quotation'}
                  </h3>
                  <p className="text-xs text-white/80 font-light mt-1">
                    {lang === 'th' 
                      ? 'คลิกปุ่มด้านล่างเพื่อไปยังหน้าติดต่อเรา พร้อมส่งข้อมูลสินค้านี้เพื่อรับใบเสนอราคาพิเศษหน้าโรงงาน' 
                      : 'Click below to navigate to our contact form with this product pre-selected for factory-direct pricing.'}
                  </p>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => {
                      if (onContactOrder) {
                        onContactOrder(product);
                      } else {
                        const contactElem = document.getElementById('contact');
                        if (contactElem) {
                          contactElem.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.hash = '#contact';
                        }
                      }
                    }}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-[#092219] uppercase tracking-wider text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <Mail className="w-4 h-4 text-[#092219] group-hover:scale-110 transition-transform" />
                    <span>{lang === 'th' ? 'ไปยังหน้าติดต่อเราเพื่อสั่งซื้อ' : 'Go to Contact Us to Place Order'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Direct Hotline Contacts */}
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
                  <a 
                    href="tel:0659616199" 
                    className="flex items-center gap-2 hover:text-[#8AE0B3] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8AE0B3]" />
                    <span>{lang === 'th' ? 'สายด่วนฝ่ายขาย:' : 'Sales Hotline:'} <strong className="text-white">065-961-6199</strong></span>
                  </a>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <a 
                    href="tel:029261388" 
                    className="flex items-center gap-2 hover:text-[#8AE0B3] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8AE0B3]" />
                    <span>{lang === 'th' ? 'สำนักงาน:' : 'Office:'} <strong className="text-white">02-9261388-9</strong></span>
                  </a>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="mt-10 pt-8 border-t border-[#D6D1C7]">
                <span className="text-xs uppercase font-bold text-[#2C2A26] block mb-3">
                  {lang === 'th' ? 'คุณสมบัติเด่นของผลิตภัณฑ์' : 'Product Features'}
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5D5A53]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
