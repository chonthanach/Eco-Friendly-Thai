/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { Leaf, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart?: (e: React.MouseEvent, product: Product) => void;
  lang: 'th' | 'en';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, lang }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden border border-[#D6D1C7]/80 hover:border-[#1B4D3E] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
    >
      {/* Product Image Box */}
      <div className="relative aspect-[4/3] bg-[#EBE7DE] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.98]"
        />
        
        {/* Discount Badge */}
        {product.discountPercent && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
            SAVE {product.discountPercent}%
          </div>
        )}

        {/* Carton Savings Pill Badge */}
        {product.cartonCount && (
          <div className="absolute top-3 right-3 bg-[#1B4D3E]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-white/20">
            <Leaf className="w-3 h-3 text-[#8AE0B3]" />
            <span>{product.cartonCount.toLocaleString()} {lang === 'th' ? 'กล่อง' : 'Cartons'}</span>
          </div>
        )}

        {/* View Details Pill Badge (View Only Mode) */}
        <div
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/95 text-[#1B4D3E] shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 backdrop-blur-sm border border-emerald-900/10"
        >
          <Eye className="w-3.5 h-3.5 text-[#1B4D3E]" />
          <span>{lang === 'th' ? 'ดูรายละเอียด' : 'View Details'}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Certification */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#A8A29E] mb-1 font-semibold">
            <span>{product.category}</span>
            {product.warranty && (
              <span className="text-[#1B4D3E] font-bold flex items-center gap-0.5">
                <ShieldCheck className="w-3 h-3" />
                {product.warranty.split(' ')[0]} {product.warranty.split(' ')[1]}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-xl font-bold text-[#2C2A26] group-hover:text-[#1B4D3E] transition-colors leading-snug">
            {lang === 'th' && product.nameTh ? product.nameTh : product.name}
          </h3>
          <p className="text-xs text-[#5D5A53] mt-0.5 font-light">
            {lang === 'th' ? product.name : (product.nameTh || '')}
          </p>

          {/* Tagline */}
          <p className="text-xs text-[#7A766E] line-clamp-2 mt-2 font-light leading-relaxed">
            {product.tagline || product.description}
          </p>
        </div>

        {/* Specs & Environmental Impact Pill */}
        {product.carbonOffsetKg && (
          <div className="bg-[#EBE7DE]/70 px-3 py-2 rounded-lg text-[11px] flex items-center justify-between text-[#2C2A26]">
            <span className="text-[#5D5A53] font-medium">{lang === 'th' ? 'ลดคาร์บอน' : 'CO2e Offset'}</span>
            <span className="font-bold text-[#1B4D3E]">-{product.carbonOffsetKg} kgCO2e</span>
          </div>
        )}

        {/* Price Row */}
        <div className="pt-3 border-t border-[#D6D1C7]/60 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#1B4D3E]">
              ฿{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#A8A29E] line-through">
                ฿{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {product.wholesalePrice && (
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#A8A29E] block leading-none">
                {lang === 'th' ? 'ราคาส่ง' : 'Wholesale'}
              </span>
              <span className="text-xs font-bold text-[#2C2A26]">
                ฿{product.wholesalePrice}/pc
              </span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
