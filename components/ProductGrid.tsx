/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  onAddToCart?: (e: React.MouseEvent, product: Product) => void;
  lang: 'th' | 'en';
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'School & Furniture',
    'Building & Decor',
    'Paving & Ground',
    'Tile & Roof'
  ];

  const categoryNamesTh: Record<string, string> = {
    'All': 'สินค้าทั้งหมด',
    'School & Furniture': 'โต๊ะเก้าอี้และสถานศึกษา',
    'Building & Decor': 'วัสดุก่อสร้างและตกแต่ง',
    'Paving & Ground': 'บล็อกปูพื้นและทางเดิน',
    'Tile & Roof': 'กระเบื้องและหลังคา'
  };

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-28 px-6 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2 sm:mb-3">
            {lang === 'th' ? 'ผลิตภัณฑ์อัปไซเคิลมาตรฐานสากล' : 'CERTIFIED CIRCULAR PRODUCTS'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-4">
            {lang === 'th' ? (
              <>ร้านค้าผลิตภัณฑ์ <span className="text-[#1B4D3E]">UPCYCLE</span></>
            ) : (
              <>UPCYCLE <span className="text-[#1B4D3E]">ECO STORE</span></>
            )}
          </h2>
          <div className="w-20 h-1 bg-[#1B4D3E] mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#3A3833] font-normal text-base sm:text-lg leading-relaxed">
            {lang === 'th' ? (
              <>
                ท็อปโต๊ะเรียน แผ่นสมาร์ทบอร์ด อิฐบล็อก กระเบื้อง และไม้เทียม ผลิตจากกล่องเครื่องดื่ม <strong className="font-bold text-[#1B4D3E]">UHT 100%</strong> รับประกันคุณภาพ <strong className="font-bold text-[#1B4D3E]">5-10 ปี</strong>
              </>
            ) : (
              <>
                Direct from factory: School tops, smart boards, interlocking bricks, and roof sheets certified by <strong className="font-bold text-[#1B4D3E]">DCCE Thailand</strong>.
              </>
            )}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#1B4D3E] text-white shadow-md'
                  : 'bg-white text-[#5D5A53] hover:bg-[#EBE7DE] border border-[#D6D1C7]'
              }`}
            >
              {cat === 'All' 
                ? (lang === 'th' ? 'สินค้าทั้งหมด' : 'All Products') 
                : (lang === 'th' ? (categoryNamesTh[cat] || cat) : cat)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
              lang={lang}
            />
          ))}
        </div>

        {/* Guarantee & Bulk Supply Banner */}
        <div className="mt-20 p-8 rounded-2xl bg-[#EBE7DE] border border-[#D6D1C7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1B4D3E] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2C2A26]">
                {lang === 'th' ? (
                  <>รับประกันสินค้า <span className="font-extrabold text-[#1B4D3E]">5 - 10 ปี</span> พร้อมราคาส่งหน้าโรงงาน</>
                ) : (
                  '5-10 Year Direct Factory Warranty & Wholesale Support'
                )}
              </h4>
              <p className="text-xs sm:text-sm text-[#4A4740] font-normal">
                {lang === 'th' 
                  ? 'รองรับงานสั่งผลิตขนาดพิเศษสำหรับโครงการก่อสร้าง โรงเรียน และเทศบาลทั่วประเทศ'
                  : 'Custom dimensions and bulk delivery available for school districts and green architecture contractors.'}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl text-xs uppercase font-bold tracking-wider hover:bg-[#153D31] transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{lang === 'th' ? 'ขอใบเสนอราคาโครงการ' : 'Request Bulk Quote'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
