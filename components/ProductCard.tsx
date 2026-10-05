/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { ShieldCheck, ArrowRight, TreeDeciduous, Landmark, List, Globe2, Leaf } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart?: (e: React.MouseEvent, product: Product) => void;
  lang: 'th' | 'en';
}

// Default "before → after" material images (shared by all upcycled products)
const DEFAULT_RAW_MATERIAL = '/images/material-raw-cartons.jpg';
const DEFAULT_FINISHED_MATERIAL = '/images/material-finished-board.jpg';

const CATEGORY_TH: Record<string, string> = {
  'School & Furniture': 'โต๊ะเก้าอี้และสถานศึกษา',
  'Building & Decor': 'วัสดุก่อสร้างและตกแต่ง',
  'Paving & Ground': 'บล็อกปูพื้นและทางเดิน',
  'Tile & Roof': 'กระเบื้องและหลังคา',
  'Industrial Pulp': 'เยื่อกระดาษอุตสาหกรรม',
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, lang }) => {
  const isTh = lang === 'th';
  const titleMain = isTh && product.nameTh ? product.nameTh : product.name;
  const titleSub = isTh ? product.name : (product.nameTh || '');
  const category = isTh ? (CATEGORY_TH[product.category] || product.category) : product.category;

  // Bullets: tagline + first 2 features (3 lines like the reference)
  const features = (isTh ? (product.featuresTh || product.features) : product.features) || [];
  const tagline = isTh ? (product.taglineTh || product.tagline) : product.tagline;
  const bullets = [tagline, ...features.filter((f) => f !== tagline)].filter(Boolean).slice(0, 3);

  // Split the English sub-title so the last words are bold: "ECO **CHAIR TOP**"
  const subWords = titleSub.split(' ');
  const subLight = subWords.length > 1 ? subWords[0] : '';
  const subBold = subWords.length > 1 ? subWords.slice(1).join(' ') : titleSub;

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-3xl overflow-hidden border border-[#E4E0D8] hover:border-[#1B4D3E]/40 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Hero Image */}
      <div className="relative aspect-[16/9] bg-[#EBE7DE] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={titleMain}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />

        {product.discountPercent && (
          <div className="absolute top-3 left-3 bg-[#E53935] text-white text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full tracking-wide shadow-lg">
            SAVE {product.discountPercent}%
          </div>
        )}

        {product.cartonCount && (
          <div className="absolute top-3 right-3 bg-[#1B4D3E]/95 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <TreeDeciduous className="w-4 h-4 text-[#8AE0B3]" />
            <span>{product.cartonCount.toLocaleString()} {isTh ? 'กล่อง' : 'Cartons'}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="px-5 sm:px-6 pt-4 pb-5 flex-1 flex flex-col">

        {/* Warranty */}
        {product.warranty && (
          <div className="flex justify-end mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#4A4740] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" />
              {isTh ? (product.warrantyTh || product.warranty) : product.warranty}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A1A] leading-snug group-hover:text-[#1B4D3E] transition-colors">
          {titleMain}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 mt-0.5 mb-4">
          {titleSub && (
            <p className="text-base sm:text-lg text-[#1A1A1A] leading-tight">
              ({subLight && <span className="font-normal">{subLight} </span>}
              <span className="font-extrabold">{subBold}</span>)
            </p>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#8C7B5E] font-medium">
            <Landmark className="w-3.5 h-3.5" />
            {category}
          </span>
        </div>

        {/* Before → After material */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="flex-1 aspect-[4/3] rounded-xl overflow-hidden bg-[#EBE7DE] shadow-sm">
            <img
              src={product.rawMaterialImage || DEFAULT_RAW_MATERIAL}
              alt={isTh ? 'วัตถุดิบ กล่องนม UHT ใช้แล้ว' : 'Raw material: used UHT cartons'}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#6B6860] shrink-0 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          <div className="flex-1 aspect-[4/3] rounded-xl overflow-hidden bg-[#EBE7DE] shadow-sm">
            <img
              src={product.finishedMaterialImage || DEFAULT_FINISHED_MATERIAL}
              alt={isTh ? 'วัสดุอัปไซเคิลสำเร็จรูป' : 'Finished upcycled material'}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bullets + Certified badge */}
        <div className="flex items-end justify-between gap-3 mb-5">
          <ul className="space-y-1 text-[13px] sm:text-sm text-[#2C2A26] leading-snug list-disc pl-4 marker:text-[#2C2A26]">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {product.certification && (
            <div className="relative shrink-0 inline-flex items-center gap-1 pl-2 pr-1 py-1 rounded-md border border-[#1B4D3E]/60 text-[#1B4D3E]" title={isTh ? (product.certificationTh || product.certification) : product.certification}>
              <span className="text-[9px] font-extrabold tracking-wider">CERTIFIED</span>
              <Globe2 className="w-5 h-5" strokeWidth={1.5} />
              <Leaf className="absolute -top-2.5 right-0 w-3.5 h-3.5 text-[#2E9E5B] fill-[#2E9E5B]" />
            </div>
          )}
        </div>

        {/* Price row */}
        <div className="mt-auto flex items-end justify-between gap-3 mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#1F7A4D] tracking-tight leading-none">
              ฿{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm sm:text-base text-[#8A857C] line-through">
                ฿{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="text-right text-xs sm:text-sm text-[#2C2A26] leading-snug">
            <div>
              {isTh ? 'ราคาปลีก' : 'Retail'} <span className="font-extrabold">฿{product.price.toLocaleString()}</span>
            </div>
            {product.wholesalePrice && (
              <div>
                {isTh ? 'ราคาขายส่ง' : 'Wholesale'} <span className="font-extrabold">฿{product.wholesalePrice.toLocaleString()}</span>/{isTh ? 'ชิ้น' : 'pc'}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          id={`product-view-${product.id}`}
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          className="w-full py-3 rounded-full bg-[#1F7A4D] hover:bg-[#17633E] text-white text-base sm:text-lg font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <List className="w-5 h-5" />
          {isTh ? 'ดูสินค้า' : 'View Product'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
