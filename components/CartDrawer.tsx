/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';
import { Leaf, X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  lang: 'th' | 'en';
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem, 
  onCheckout,
  lang 
}) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const totalCartons = items.reduce((sum, item) => sum + (item.cartonCount || 0), 0);
  const totalCo2 = items.reduce((sum, item) => sum + (item.carbonOffsetKg || 0), 0).toFixed(2);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[480px] bg-[#F5F2EB] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[#D6D1C7] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D6D1C7] bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#1B4D3E]" />
            <h2 className="text-xl font-bold text-[#2C2A26]">
              {lang === 'th' ? `ตะกร้าสินค้า (${items.length})` : `Your Cart (${items.length})`}
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-[#A8A29E] hover:text-[#2C2A26] hover:bg-[#EBE7DE] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Environmental Impact Banner inside Cart */}
        {items.length > 0 && (
          <div className="bg-[#1B4D3E] text-white px-6 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#8AE0B3]" />
              <span>{totalCartons.toLocaleString()} {lang === 'th' ? 'กล่อง UHT ถูกช่วยชีวิต' : 'Cartons Recycled'}</span>
            </div>
            <span className="text-[#8AE0B3] font-bold">-{totalCo2} kgCO2e</span>
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-70">
              <div className="w-16 h-16 rounded-full bg-[#EBE7DE] flex items-center justify-center text-[#A8A29E]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-semibold text-[#2C2A26] text-lg">
                {lang === 'th' ? 'ไม่มีสินค้าในตะกร้า' : 'Your cart is empty.'}
              </p>
              <p className="text-xs text-[#4A4740] max-w-xs font-normal">
                {lang === 'th' ? 'เลือกชมสินค้าอัปไซเคิลเพื่อเริ่มคำนวณการลดขยะและคาร์บอน' : 'Explore our catalog of certified upcycled building and school furniture products.'}
              </p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 p-4 bg-white rounded-xl border border-[#D6D1C7] shadow-sm animate-fade-in-up">
                <div className="w-20 h-20 bg-[#EBE7DE] rounded-lg overflow-hidden shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-[#2C2A26] leading-tight">{item.name}</h3>
                      <span className="text-sm font-bold text-[#1B4D3E]">฿{item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] text-[#A8A29E] uppercase tracking-wider mt-0.5">{item.category}</p>
                    {item.cartonCount && (
                      <span className="text-[10px] text-[#1B4D3E] font-medium block mt-1">
                        🌱 {item.cartonCount} cartons saved
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-[11px] text-red-500 hover:text-red-700 self-start flex items-center gap-1 font-medium mt-2"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>{lang === 'th' ? 'ลบออก' : 'Remove'}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#D6D1C7] bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D5A53]">
              {lang === 'th' ? 'ยอดรวมโดยประมาณ' : 'Estimated Total'}
            </span>
            <span className="text-2xl font-extrabold text-[#1B4D3E]">
              ฿{total.toLocaleString()}
            </span>
          </div>
          <p className="text-[11px] text-[#A8A29E] mb-6 text-center">
            {lang === 'th' ? 'ราคานี้ยังไม่รวมค่าขนส่งและส่วนลดพิเศษสำหรับยอดสั่งซื้อปริมาณมาก' : 'Prices do not include freight and volume-based tier discounts.'}
          </p>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-[#1B4D3E] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-[#153D31] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
          >
            <span>{lang === 'th' ? 'ดำเนินการสั่งซื้อ / ขอใบเสนอราคา' : 'Proceed to Checkout & Quotation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
