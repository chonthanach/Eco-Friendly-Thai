/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import { Download, ExternalLink, Send, CheckCircle2, Sparkles, MessageSquare, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

interface ContactProps {
  lang: 'th' | 'en';
  prefilledProduct?: string | null;
  onClearPrefilledProduct?: () => void;
}

// Social Media Icons matching screenshot
const FacebookIcon = () => (
  <svg className="w-9 h-9 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="18" fill="#1877F2" />
    <path d="M21 18.5H23.5L24 15.5H21V13.5C21 12.7 21.2 12 22.3 12H24V9.2C23.3 9.1 22.4 9 21.5 9C19.2 9 17.6 10.4 17.6 13V15.5H15V18.5H17.6V26.5C18.2 26.6 18.8 26.7 19.4 26.7C19.9 26.7 20.5 26.6 21 26.5V18.5Z" fill="white" />
  </svg>
);

const XIcon = () => (
  <svg className="w-9 h-9 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="18" fill="#000000" />
    <path d="M22 12H24.2L19.4 17.5L25 25H20.7L17.3 20.6L13.5 25H11.2L16.4 19.1L11 12H15.5L18.6 16.1L22 12ZM21.2 23.6H22.5L14.7 13.3H13.4L21.2 23.6Z" fill="white" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-9 h-9 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="18" fill="#FF0000" />
    <path d="M24.8 14.8C24.7 13.9 24 13.2 23.1 13C21.6 12.6 18 12.6 18 12.6C18 12.6 14.4 12.6 12.9 13C12 13.2 11.3 13.9 11.2 14.8C10.8 16.2 10.8 18 10.8 18C10.8 18 10.8 19.8 11.2 21.2C11.3 22.1 12 22.8 12.9 23C14.4 23.4 18 23.4 18 23.4C18 23.4 21.6 23.4 23.1 23C24 22.8 24.7 22.1 24.8 21.2C25.2 19.8 25.2 18 25.2 18C25.2 18 25.2 16.2 24.8 14.8ZM16.5 20.3V15.7L20.5 18L16.5 20.3Z" fill="white" />
  </svg>
);

// Eco Forest Green teardrop Location Pin matching website theme
const MapPinIcon = () => (
  <svg className="w-8 h-8 text-[#1B4D3E] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

// Eco Forest Green Envelope Mail Icon matching website theme
const MailSolidIcon = () => (
  <svg className="w-8 h-8 text-[#1B4D3E] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

// Eco Forest Green Phone Handset Icon matching website theme
const PhoneSolidIcon = () => (
  <svg className="w-8 h-8 text-[#1B4D3E] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
  </svg>
);

// 3D Isometric Folded Map Icon in Eco Green matching website theme
const FoldedMapIcon = () => (
  <svg className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-md" viewBox="0 0 120 120" fill="none">
    {/* Left Leaf */}
    <path d="M20 38L48 24V96L20 108V38Z" fill="#0F2C23" />
    {/* Middle Leaf */}
    <path d="M48 24L74 38V108L48 96V24Z" fill="#1B4D3E" />
    {/* Right Leaf */}
    <path d="M74 38L100 24V96L74 108V38Z" fill="#2D6A56" />
    {/* Center Pin Marker */}
    <path d="M61 14C54.37 14 49 19.37 49 26C49 35.5 61 48 61 48C61 48 73 35.5 73 26C73 19.37 67.63 14 61 14Z" fill="#10B981" />
    <circle cx="61" cy="26" r="4" fill="white" />
  </svg>
);

const Contact: React.FC<ContactProps> = ({ lang, prefilledProduct, onClearPrefilledProduct }) => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: 'Eco Upcycle Products',
    message: ''
  });

  useEffect(() => {
    if (prefilledProduct) {
      setShowInquiryForm(true);
      setFormData(prev => ({
        ...prev,
        inquiryType: 'Eco Upcycle Products',
        message: lang === 'th'
          ? `สนใจสั่งซื้อ / ขอใบเสนอราคาสินค้า: ${prefilledProduct}\n\nจำนวนที่ต้องการประมาณ: \nสถานที่จัดส่ง: \nข้อกำหนดเพิ่มเติม: `
          : `Interested in purchasing / quotation for: ${prefilledProduct}\n\nEstimated quantity: \nDelivery location: \nAdditional requirements: `
      }));
    }
  }, [prefilledProduct, lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.addressPlantRatchaburi);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMap = () => {
    // Generate a printable visual roadmap sheet or open Google Maps directly
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Header Banner
      ctx.fillStyle = '#1B4D3E';
      ctx.fillRect(0, 0, canvas.width, 140);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (Eco Friendly Thai Co., Ltd.)', 50, 60);
      ctx.font = '20px sans-serif';
      ctx.fillText('แผนที่เส้นทางการเดินทาง โรงงานรีไซเคิลและแปรรูปผลิตภัณฑ์อัปไซเคิล', 50, 105);

      // Details Block
      ctx.fillStyle = '#2C2A26';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('ที่ตั้งโรงงาน (บ้านโป่ง ราชบุรี):', 50, 200);
      ctx.font = '20px sans-serif';
      ctx.fillText(CONTACT_INFO.addressPlantRatchaburi, 50, 240);

      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('สำนักงานใหญ่ (นนทบุรี):', 50, 310);
      ctx.font = '20px sans-serif';
      ctx.fillText(CONTACT_INFO.addressHeadquarters, 50, 350);

      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('เบอร์โทรศัพท์ติดต่อ:', 50, 420);
      ctx.font = '20px sans-serif';
      ctx.fillText('02-9261388-9, 065-961-6199, 061-348-9292', 50, 460);

      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('พิกัด GPS / Google Maps Link:', 50, 530);
      ctx.fillStyle = '#1B4D3E';
      ctx.font = '20px sans-serif';
      ctx.fillText('https://maps.app.goo.gl/NQd78xLVNMuEWejU7 (13.7818431, 99.8969191)', 50, 570);

      // Route guide note
      ctx.fillStyle = '#5D5A53';
      ctx.font = 'italic 18px sans-serif';
      ctx.fillText('* รองรับรถบรรทุก 10 ล้อ และรถเทรลเลอร์ขนถ่ายสินค้า มีลานจอดกว้างขวางเข้า-ออกสะดวกสบาย', 50, 660);

      const link = document.createElement('a');
      link.download = 'EcoFriendlyThai_Factory_Map.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }

    // Also open the official Google Maps link in a new tab for seamless directions
    window.open(CONTACT_INFO.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/60">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B4D3E] block mb-2">
            {lang === 'th' ? 'ติดต่อสอบถามและเส้นทางการเดินทาง' : 'GET IN TOUCH & LOCATION MAP'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2A26] mb-3">
            {lang === 'th' ? 'ติดต่อ' : 'CONTACT'} <span className="text-[#1B4D3E]">{lang === 'th' ? 'เรา' : 'US'}</span>
          </h2>
          <div className="w-16 h-1 bg-[#1B4D3E] mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-[#5D5A53] font-light text-sm sm:text-base">
            {lang === 'th'
              ? 'บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด พร้อมต้อนรับและประสานงานด้านผลิตภัณฑ์อัปไซเคิล เยื่อกระดาษรีไซเคิล และงานโครงการทุกประเภท'
              : 'Eco Friendly Thai Co., Ltd. - Factory location, customer hotline, and official Google Maps directions.'}
          </p>
        </div>

        {/* Banner when arriving from a product detail */}
        {prefilledProduct && (
          <div className="max-w-5xl mx-auto mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm animate-fade-in-up">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'th' ? 'คุณกำลังติดต่อสั่งซื้อสำหรับสินค้า: ' : 'Order inquiry for: '}
                <strong className="text-emerald-900 font-bold">{prefilledProduct}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowInquiryForm(true)}
                className="px-3 py-1.5 bg-[#1B4D3E] text-white text-xs font-bold rounded-lg hover:bg-[#153D31] transition-colors"
              >
                {lang === 'th' ? 'กรอกแบบฟอร์มส่งข้อมูล' : 'Open Inquiry Form'}
              </button>
              {onClearPrefilledProduct && (
                <button
                  type="button"
                  onClick={onClearPrefilledProduct}
                  className="text-xs text-emerald-800 hover:text-emerald-950 underline font-semibold ml-2 cursor-pointer"
                >
                  {lang === 'th' ? 'ล้าง' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TOP SECTION: Google Map (Left) + Contact Info Card (Right) */}
        {/* Exactly matching the user's screenshot layout             */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 items-stretch">
          
          {/* Left Column: Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D6D1C7] shadow-sm overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col relative group">
            <div className="relative w-full flex-1 min-h-[340px]">
              <iframe 
                title="Eco Friendly Thai Google Maps"
                src="https://maps.google.com/maps?q=13.7818431,99.8969191&hl=th&z=16&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '100%', width: '100%' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px]"
              />
            </div>
            
            {/* Map Overlay Button */}
            <div className="p-3 bg-white/95 backdrop-blur-sm border-t border-[#D6D1C7]/60 flex items-center justify-between text-xs px-4">
              <span className="text-[#5D5A53] font-medium truncate pr-2">
                📍 {CONTACT_INFO.companyNameTh} (ต.หนองอ้อ อ.บ้านโป่ง จ.ราชบุรี)
              </span>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1B4D3E] hover:bg-[#153D31] text-white rounded-lg font-bold transition-colors shrink-0 shadow-sm"
              >
                <span>{lang === 'th' ? 'เปิดใน Google Maps' : 'Open in Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Info Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D6D1C7] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6 sm:space-y-7">
              
              {/* Row 1: ที่ตั้ง (Location) */}
              <div className="flex items-start gap-4">
                <MapPinIcon />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2C2A26] leading-snug">
                    {lang === 'th' ? 'ที่ตั้ง' : 'Location'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5D5A53] mt-1 leading-relaxed">
                    {CONTACT_INFO.addressPlantRatchaburi}
                  </p>
                  <p className="text-[11px] text-[#A8A29E] mt-1 leading-normal">
                    {lang === 'th' ? 'สำนักงานใหญ่:' : 'Headquarters:'} {CONTACT_INFO.addressHeadquarters}
                  </p>
                  <button 
                    onClick={handleCopyAddress}
                    className="mt-2 text-[11px] text-[#1B4D3E] hover:text-[#153D31] font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? (lang === 'th' ? 'คัดลอกที่อยู่แล้ว' : 'Copied!') : (lang === 'th' ? 'คัดลอกที่อยู่' : 'Copy address')}</span>
                  </button>
                </div>
              </div>

              {/* Row 2: อีเมล (Email) */}
              <div className="flex items-start gap-4">
                <MailSolidIcon />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2C2A26] leading-snug">
                    {lang === 'th' ? 'อีเมล' : 'Email'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5D5A53] mt-1">
                    <a href={`mailto:${CONTACT_INFO.emails[0]}`} className="hover:text-[#1B4D3E] transition-colors">
                      {CONTACT_INFO.emails[0]}
                    </a>
                  </p>
                  <p className="text-xs text-[#A8A29E] mt-0.5">
                    <a href={`mailto:${CONTACT_INFO.emails[1]}`} className="hover:text-[#1B4D3E] transition-colors">
                      {CONTACT_INFO.emails[1]}
                    </a>
                  </p>
                </div>
              </div>

              {/* Row 3: โทรศัพท์ (Phone) */}
              <div className="flex items-start gap-4">
                <PhoneSolidIcon />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2C2A26] leading-snug">
                    {lang === 'th' ? 'โทรศัพท์' : 'Phone'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2C2A26] font-semibold mt-1">
                    <a href="tel:029261388" className="hover:text-[#1B4D3E] transition-colors">02-9261388-9</a>
                    <span className="mx-1.5 text-[#D6D1C7]">|</span>
                    <a href="tel:0659616199" className="hover:text-[#1B4D3E] transition-colors">065-961-6199</a>
                  </p>
                  <p className="text-xs text-[#A8A29E] mt-0.5">
                    {lang === 'th' ? 'สายด่วนโรงงาน:' : 'Factory Hotline:'} 061-348-9292, 088-564-2993
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons at Bottom Right */}
            <div className="pt-6 border-t border-[#D6D1C7]/60 mt-6 flex items-center justify-end gap-3">
              <a 
                href="https://facebook.com/ecofriendlythai" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Facebook: Eco Friendly Thai"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="X / Twitter"
              >
                <XIcon />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM CARD: Downloadable Map Box                         */}
        {/* Exactly matching the user's screenshot layout             */}
        {/* ========================================================= */}
        <div className="bg-white rounded-2xl border border-[#D6D1C7] shadow-sm overflow-hidden mb-8">
          
          {/* Center Map Icon & Text Area */}
          <div className="py-16 sm:py-20 px-6 flex flex-col items-center justify-center text-center">
            
            {/* 3D Folded Green Map Icon */}
            <div className="mb-6 hover:scale-105 transition-transform duration-300">
              <FoldedMapIcon />
            </div>

            {/* Title matching screenshot */}
            <h3 className="text-lg sm:text-xl font-bold text-[#2C2A26] tracking-tight mb-2">
              {lang === 'th' ? 'รูปภาพแผนที่ ที่อัปโหลดจากระบบ' : 'System-Uploaded Factory Roadmap'}
            </h3>

            {/* Subtitle with EFT info */}
            <p className="text-xs sm:text-sm text-[#5D5A53] max-w-lg font-light leading-relaxed">
              {lang === 'th' 
                ? 'แผนผังเส้นทางการเดินทางและจุดขนถ่ายสินค้า โรงงานรีไซเคิล บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (อ.บ้านโป่ง จ.ราชบุรี)'
                : 'Logistics access route and material drop-off points for Eco Friendly Thai Co., Ltd. (Ban Pong, Ratchaburi)'}
            </p>
          </div>

          {/* Bottom Action Line with Website Green Button */}
          <div className="border-t border-[#D6D1C7]/60 py-4 px-6 flex items-center justify-center bg-[#EBE7DE]/40">
            <button
              onClick={handleDownloadMap}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#1B4D3E] via-[#164436] to-[#0E2E24] hover:from-[#153D31] hover:to-[#0B231B] text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer border border-emerald-500/20"
            >
              <span>{lang === 'th' ? 'ดาวน์โหลดแผนที่' : 'Download Map'}</span>
              <Download className="w-4 h-4 text-[#8AE0B3] ml-0.5" />
            </button>
          </div>

        </div>

        {/* ========================================================= */}
        {/* QUICK QUOTE / INQUIRY FORM (Optional Accordion / Drawer)   */}
        {/* Keeps order inquiries working seamlessly for customers   */}
        {/* ========================================================= */}
        <div className="bg-white rounded-2xl border border-[#D6D1C7] shadow-sm overflow-hidden">
          <button
            onClick={() => setShowInquiryForm(!showInquiryForm)}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-gray-50/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B4D3E]/10 text-[#1B4D3E] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900">
                  {lang === 'th' ? 'ส่งข้อความติดต่อฝ่ายขาย หรือ ขอใบเสนอราคาออนไลน์' : 'Send Message or Request Quotation Online'}
                </h4>
                <p className="text-xs text-gray-500 font-light">
                  {lang === 'th' ? 'คลิกที่นี่เพื่อกรอกรายละเอียดสินค้าและจำนวนที่ต้องการสั่งซื้อ' : 'Click to submit custom product requirements and dimensions'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1B4D3E]">
              <span className="hidden sm:inline">{showInquiryForm ? (lang === 'th' ? 'ซ่อนแบบฟอร์ม' : 'Hide Form') : (lang === 'th' ? 'เปิดแบบฟอร์ม' : 'Open Form')}</span>
              {showInquiryForm ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {showInquiryForm && (
            <div className="p-6 sm:p-8 border-t border-gray-100 bg-[#FCFBF8]">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {lang === 'th' ? 'ส่งข้อมูลสำเร็จเรียบร้อย' : 'Inquiry Submitted Successfully!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                    {lang === 'th' 
                      ? 'เจ้าหน้าที่ฝ่ายขาย บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด จะติดต่อกลับพร้อมใบเสนอราคาโดยเร็วที่สุด'
                      : 'Our sales engineering team will review your inquiry and contact you with a quotation.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 bg-[#1B4D3E] text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    {lang === 'th' ? 'ส่งข้อความใหม่' : 'Send Another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-bold text-gray-700 mb-1">
                        {lang === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'} *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. สมยศ วัฒน์พานิช"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1B4D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold text-gray-700 mb-1">
                        {lang === 'th' ? 'ชื่อบริษัท / หน่วยงาน' : 'Company / Organization'}
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. เทศบาล / บริษัทรับเหมาก่อสร้าง"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1B4D3E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-bold text-gray-700 mb-1">
                        {lang === 'th' ? 'เบอร์โทรศัพท์' : 'Phone Number'} *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="08x-xxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1B4D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold text-gray-700 mb-1">
                        {lang === 'th' ? 'อีเมล' : 'Email Address'} *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1B4D3E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-700 mb-1">
                      {lang === 'th' ? 'รายละเอียดสินค้าที่ต้องการสอบถามหรือสั่งซื้อ' : 'Product Inquiry / Order Notes'}
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="ระบุชื่อสินค้า ขนาด จำนวน หรือสถานที่จัดส่งโครงการ..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#1B4D3E]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#1B4D3E] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#153D31] transition-colors flex items-center gap-2 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>{lang === 'th' ? 'ส่งคำขอใบเสนอราคา' : 'Submit Quotation Request'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
