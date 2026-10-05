/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, PlantSite, ServiceItem, JournalArticle, PartnerCohort } from './types';

export const BRAND_NAME = 'Eco Friendly Thai';
export const BRAND_NAME_TH = 'บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด';
export const BRAND_TAGLINE = 'We create solutions for waste paper and make sustainable use of plastic recycling';
export const BRAND_TAGLINE_TH = 'ผู้นำนวัตกรรมแปรรูปเยื่อกระดาษรีไซเคิล และอัปไซเคิลกล่องเครื่องดื่ม UHT สู่ผลิตภัณฑ์เศรษฐกิจหมุนเวียน';

export const PRIMARY_COLOR = '#1B4D3E'; // Forest green
export const ACCENT_COLOR = '#008080'; // Teal
export const BG_COLOR = '#F5F2EB'; // Warm cream

export const IMPACT_METRICS = [
  { value: '2,000 MT', label: 'Monthly Production Capacity', labelTh: 'กำลังการผลิตต่อเดือน' },
  { value: '100M+', label: 'UHT Cartons Upcycled', labelTh: 'กล่อง UHT ถูกรีไซเคิลสะสม' },
  { value: '3 Plants', label: 'Strategic Processing Sites', labelTh: 'โรงงานแปรรูปมาตรฐาน 3 แห่ง' },
  { value: '100%', label: 'Circular Economy Certified', labelTh: 'มาตรฐาน Upcycle Circular Economy (DCCE)' }
];

export const PLANT_SITES: PlantSite[] = [
  {
    id: 'sainoi',
    name: 'Sai Noi Plant & Headquarters',
    nameTh: 'โรงงานไทรน้อย (สำนักงานใหญ่และศูนย์วิจัยนวัตกรรม)',
    location: 'Sai Yai, Sai Noi District, Nonthaburi 11150',
    locationTh: 'ต.ไทรใหญ่ อ.ไทรน้อย จ.นนทบุรี 11150',
    capacity: '800 MT / Month',
    capacityTh: '800 เมตริกตัน / เดือน',
    focus: 'Upcycled Building Materials & Eco Products Innovation',
    focusTh: 'นวัตกรรมแปรรูปวัสดุก่อสร้างและผลิตภัณฑ์ Upcycle รักษ์โลก',
    description: 'Our primary innovation and composite product manufacturing plant in Nonthaburi, specializing in thermo-compression of UHT carton aluminum-poly layers into high-durability Eco Boards, Eco Bricks, Tiles, and School furniture.',
    descriptionTh: 'โรงงานนวัตกรรมหลักและการผลิตคอมโพสิตในจังหวัดนนทบุรี เชี่ยวชาญการอัดขึ้นรูปด้วยความร้อนของชั้นพลาสติกอะลูมิเนียมจากกล่อง UHT เป็นแผ่นสมาร์ทบอร์ด อิฐบล็อก กระเบื้อง และโต๊ะเก้าอี้นักเรียน',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    established: '2013',
    establishedTh: 'พ.ศ. 2556 (2013)',
    specs: [
      { label: 'Facility Area', value: '12,000 sq.m.' },
      { label: 'Main Equipment', value: 'High-Tonnage Hydraulic Hot Press, Shredders, Compactor lines' },
      { label: 'Workforce', value: '65 skilled engineers & operators' },
      { label: 'Certifications', value: 'DCCE Circular Economy, ISO 9001:2015' }
    ],
    specsTh: [
      { label: 'พื้นที่โรงงาน', value: '12,000 ตร.ม.' },
      { label: 'เครื่องจักรหลัก', value: 'เครื่องอัดไฮดรอลิกร้อนแรงดันสูง, เครื่องบดย่อย, สายพานอัดก้อน' },
      { label: 'บุคลากร', value: 'วิศวกรและช่างผู้ชำนาญการ 65 คน' },
      { label: 'มาตรฐานการรับรอง', value: 'DCCE Circular Economy, ISO 9001:2015' }
    ]
  },
  {
    id: 'nakornpathom',
    name: 'Nakorn Pathom Plant',
    nameTh: 'โรงงานนครปฐม (ศูนย์แปรรูปเยื่อกระดาษรีไซเคิล)',
    location: 'Kamphaeng Saen, Nakhon Pathom Province',
    locationTh: 'อ.กำแพงแสน จ.นครปฐม',
    capacity: '600 MT / Month',
    capacityTh: '600 เมตริกตัน / เดือน',
    focus: 'Industrial Recycled Pulp Refining for Packaging & Fiber Cement',
    focusTh: 'ศูนย์กลั่นแยกเยื่อกระดาษรีไซเคิลเกรดอุตสาหกรรม สำหรับบรรจุภัณฑ์และไฟเบอร์ซีเมนต์',
    description: 'Dedicated industrial pulping plant separating high-purity virgin-grade cellulose fibers from post-consumer milk & beverage UHT cartons. Serving packaging manufacturers and fiber cement producers across Southeast Asia.',
    descriptionTh: 'โรงงานผลิตเยื่อกระดาษอุตสาหกรรม แยกเส้นใยเซลลูโลสบริสุทธิ์จากกล่องนมและเครื่องดื่ม UHT ส่งมอบให้โรงงานผลิตบรรจุภัณฑ์และผู้ผลิตไฟเบอร์ซีเมนต์ชั้นนำในเอเชียตะวันออกเฉียงใต้',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    established: '2016',
    establishedTh: 'พ.ศ. 2559 (2016)',
    specs: [
      { label: 'Pulping Technology', value: 'Hydrapulper hydro-mechanical fiber separation' },
      { label: 'Water Recycling', value: '98% closed-loop zero-discharge water system' },
      { label: 'Daily Input', value: '35 Tons of raw waste carton bales' },
      { label: 'Main Output', value: 'Clean unbleached Kraft recycled pulp (Air-dry sheets/bales)' }
    ],
    specsTh: [
      { label: 'เทคโนโลยีเยื่อกระดาษ', value: 'ไฮดราพัลเปอร์แยกเส้นใยด้วยพลังน้ำและกลไก' },
      { label: 'ระบบบำบัดน้ำ', value: 'ระบบหมุนเวียนน้ำแบบปิด ไร้น้ำเสียสู่ภายนอก 98%' },
      { label: 'ปริมาณรับเข้าต่อวัน', value: 'ขยะกล่องเครื่องดื่มอัดก้อน 35 ตัน' },
      { label: 'ผลผลิตหลัก', value: 'เยื่อกระดาษคราฟต์รีไซเคิลแผ่น/ก้อน สะอาดไร้สารฟอกขาว' }
    ]
  },
  {
    id: 'ratchaburi',
    name: 'Ratchaburi Plant',
    nameTh: 'โรงงานราชบุรี (ศูนย์ขยายกำลังผลิตระดับเมกะแพลนต์)',
    location: 'Ban Pong District, Ratchaburi Province',
    locationTh: 'ต.หนองอ้อ อ.บ้านโป่ง จ.ราชบุรี 70110',
    capacity: '1,000 MT / Month (Phase 3 Expanded)',
    capacityTh: '1,000 เมตริกตัน / เดือน (เฟส 3 ขยายกำลังผลิต)',
    focus: 'High-Volume Pulp Refining & Refuse-Derived Fuel (RDF) Processing',
    focusTh: 'การสกัดเยื่อปริมาณสูง และการแปรรูปเชื้อเพลิงขยะพลังงานสูง (RDF)',
    description: 'Our newest state-of-the-art facility expanded to double EFT capacity to 2,000 MT/month. Features automated sorting, heavy-duty densification for RDF pellets, and large-scale carton processing.',
    descriptionTh: 'โรงงานแห่งใหม่ที่ทันสมัยที่สุดเพื่อขยายกำลังการผลิตของ EFT สู่ 2,000 ตัน/เดือน ครบครันด้วยระบบคัดแยกอัตโนมัติ การอัดเม็ดเชื้อเพลิง RDF และระบบแปรรูปขยะกล่องขนาดใหญ่',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200',
    established: '2021 (Expanded 2022)',
    establishedTh: 'พ.ศ. 2564 (ขยายปี 2565)',
    specs: [
      { label: 'Installed Capacity', value: '1,000 MT / Month' },
      { label: 'Energy Recovery', value: 'RDF Pelletizing with 4,800+ kcal/kg calorific value' },
      { label: 'Automation Level', value: 'SCADA-controlled continuous pulping' },
      { label: 'Expansion Area', value: '25,000 sq.m.' }
    ],
    specsTh: [
      { label: 'กำลังการผลิตติดตั้ง', value: '1,000 เมตริกตัน / เดือน' },
      { label: 'พลังงานทดแทน', value: 'เม็ดเชื้อเพลิง RDF ค่าความร้อนสูงกว่า 4,800 kcal/kg' },
      { label: 'ระบบควบคุม', value: 'ระบบ SCADA ควบคุมกระบวนการผลิตอัตโนมัติต่อเนื่อง' },
      { label: 'พื้นที่ขยายงาน', value: '25,000 ตร.ม.' }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'pulp',
    title: 'Recycled Pulp Production',
    titleTh: 'การผลิตเยื่อกระดาษรีไซเคิลเกรดอุตสาหกรรม',
    description: 'We produce premium quality recycled pulp from beverage cartons with exceptional tensile strength for packaging, tissue, and fiber cement manufacturers.',
    descriptionTh: 'ผลิตเยื่อกระดาษรีไซเคิลคุณภาพสูงจากกล่องเครื่องดื่ม UHT ให้ค่าความต้านทานแรงดึงและการระเบิดเป็นเลิศ สำหรับโรงงานผลิตกล่องบรรจุภัณฑ์ ทิชชู่ และแผ่นไฟเบอร์ซีเมนต์',
    details: 'Using advanced hydro-pulper separation without toxic chlorine chemicals, our process extracts long Kraft cellulose fibers from UHT cartons, delivering high freeness and high burst index pulp.',
    detailsTh: 'ด้วยการแยกเส้นใยผ่านระบบ Hydrapulper ปราศจากสารเคมีคลอรีนฟอกขาวอันตราย สกัดได้เส้นใยเซลลูโลสยาวที่มีความเหนียวและทนทานสูง พร้อมใช้งานเชิงอุตสาหกรรม',
    iconName: 'Layers',
    outputCapacity: '1,500 MT / Month',
    outputCapacityTh: '1,500 เมตริกตัน / เดือน',
    imageUrl: '/images/recycled-pulp-production.jpg',
    targetIndustries: ['Corrugated Box & Packaging', 'Tissue Paper Mills', 'Fiber Cement Construction Boards', 'Molded Pulp Packaging'],
    targetIndustriesTh: ['โรงงานกล่องและบรรจุภัณฑ์กระดาษ', 'โรงงานผลิตกระดาษทิชชู่', 'อุตสาหกรรมแผ่นไฟเบอร์ซีเมนต์', 'บรรจุภัณฑ์เยื่อกระดาษขึ้นรูป']
  },
  {
    id: 'plastic',
    title: 'Upcycled Plastic & Composite Materials',
    titleTh: 'การแปรรูปพลาสติกอะลูมิเนียมเป็นวัสดุก่อสร้างและเฟอร์นิเจอร์',
    description: 'Transforming leftover Poly-Al (Polyethylene & Aluminum foil) from UHT cartons into weather-proof building blocks, smart boards, eco roof tiles, and furniture.',
    descriptionTh: 'เปลี่ยนชั้น Poly-Al (พลาสติกโพลีเอทิลีนและฟอยล์อะลูมิเนียม) จากกล่อง UHT ให้เป็นบล็อกก่อสร้าง สมาร์ทบอร์ด กระเบื้องหลังคา และเฟอร์นิเจอร์ ทนแดด ทนฝน 100%',
    details: 'Through thermocompression molding, we fabricate waterproof, termite-free, asbestos-free building panels and structural blocks with superior acoustic and thermal insulation.',
    detailsTh: 'ผ่านกระบวนการอัดขึ้นรูปด้วยความร้อนสูง ไร้สารแร่ใยหิน กันน้ำ ปลวกไม่กิน เป็นฉนวนกันเสียงและกันความร้อนชั้นยอด',
    iconName: 'Boxes',
    outputCapacity: '500 MT / Month',
    outputCapacityTh: '500 เมตริกตัน / เดือน',
    imageUrl: '/images/upcycled-plastic-composite.jpg',
    targetIndustries: ['Green Architecture & Construction', 'School Furniture & Public Amenities', 'Landscape Pavers & Walkways', 'Interior Decorative Cladding'],
    targetIndustriesTh: ['งานสถาปัตยกรรมและก่อสร้างสีเขียว', 'โต๊ะเก้าอี้นักเรียนและสาธารณูปโภค', 'บล็อกปูพื้นทางเดินและจัดสวน', 'แผ่นตกแต่งผนังภายใน-ภายนอก']
  },
  {
    id: 'rdf',
    title: 'Refuse-Derived Fuel (RDF) from Plastic',
    titleTh: 'เชื้อเพลิงขยะพลังงานสูง (RDF) จากเศษพลาสติก',
    description: 'Converting non-recyclable multi-layer plastic fractions into high-calorific Refuse-Derived Fuel (RDF-5) for industrial cement kilns and biomass power plants.',
    descriptionTh: 'แปรรูปเศษพลาสติกที่ไม่สามารถนำกลับมารีไซเคิลซ้ำได้ เป็นเชื้อเพลิงขยะคุณภาพสูง (RDF-5) สำหรับเตาเผาปูนซีเมนต์และโรงไฟฟ้าชีวมวล',
    details: 'We provide sustainable co-processing feedstock that replaces fossil coal, lowering industrial greenhouse gas emissions and achieving absolute zero-landfill disposal.',
    detailsTh: 'เป็นพลังงานทดแทนถ่านหิน ช่วยลดการปล่อยก๊าซเรือนกระจกในภาคอุตสาหกรรมและบรรลุเป้าหมาย Zero-Landfill ขยะเหลือศูนย์อย่างแท้จริง',
    iconName: 'Flame',
    outputCapacity: '300 MT / Month',
    outputCapacityTh: '300 เมตริกตัน / เดือน',
    imageUrl: '/images/rdf-fuel-pellets.jpg',
    targetIndustries: ['Cement Kilns Co-processing', 'Biomass & Waste-to-Energy Power Plants', 'Industrial Boiler Facilities'],
    targetIndustriesTh: ['เตาเผาปูนซีเมนต์ทดแทนถ่านหิน', 'โรงไฟฟ้าชีวมวลและขยะพลังงาน', 'โรงงานอุตสาหกรรมที่ใช้หม้อต้มไอน้ำ (Boiler)']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-chair-top',
    name: 'ECO CHAIR TOP',
    nameTh: 'ท็อปเก้าอี้นักเรียน Eco Upcycle',
    tagline: '998 UHT cartons transformed into school furniture.',
    taglineTh: 'ผลิตจากกล่องนม UHT 998 กล่อง สู่เฟอร์นิเจอร์สถานศึกษา',
    description: 'Upcycled durable chair seat top engineered from 998 beverage cartons with Department of Climate Change and Environment certification.',
    descriptionTh: 'ท็อปเก้าอี้นักเรียนอัปไซเคิล ผลิตจากกล่องนม UHT 998 กล่อง ผ่านการรับรองมาตรฐานจากกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม',
    longDescription: 'The Eco Chair Top is designed for standard school desk-and-chair steel frames. Manufactured by high-heat hydraulic compression of Poly-Aluminum composite derived from 998 recycled UHT cartons (300cc). Completely waterproof, termite-proof, splinter-free, and guaranteed for 5 years.',
    longDescriptionTh: 'ท็อปเก้าอี้นักเรียน Eco ออกแบบมาสำหรับติดตั้งกับโครงเหล็กมาตรฐานของโต๊ะเก้าอี้นักเรียน ผลิตโดยการอัดขึ้นรูปด้วยความร้อนและแรงดันไฮดรอลิกสูงจากคอมโพสิตพลาสติกอะลูมิเนียม (Poly-Al) รีไซเคิลจากกล่องนม UHT 998 กล่อง กันน้ำ ปลวกไม่กิน ไม่แตกหักเป็นเสี้ยน รับประกันการใช้งานยาวนาน 5 ปี',
    price: 110,
    originalPrice: 200,
    discountPercent: 45,
    wholesalePrice: 90,
    minWholesaleQty: 1000,
    dimensions: '40.5 x 43.5 x 1.5 cm',
    dimensionsTh: '40.5 x 43.5 x 1.5 ซม.',
    weightKg: 3.61,
    coveragePerSqm: '5.6 pieces / sq.m.',
    cartonCount: 998,
    carbonOffsetKg: 13.45,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2567-2570 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'School & Furniture',
    imageUrl: '/photos/PD1.webp',
    brochureUrl: '/photos/PD1.webp',
    gallery: [
      '/photos/PD1.webp'
    ],
    features: [
      'Made from 998 Recycled UHT Cartons (300cc)',
      '13.45 kgCO2e Carbon Footprint Reduction',
      'Waterproof, Heat-Resistant & Termite-Proof',
      'Standard Mount for Steel Classroom Frames',
      '5-Year Durability Replacement Warranty'
    ],
    featuresTh: [
      'ผลิตจากกล่องนม UHT 998 กล่อง สู่เฟอร์นิเจอร์สถานศึกษา',
      'ทนทานต่อแรงกระแทกและรอยขีดข่วน',
      'ผิวหน้าทำความสะอาดง่ายและกันน้ำ',
      'ยึดติดตั้งกับโครงเหล็กมาตรฐานโต๊ะเก้าอี้เรียนได้ทันที',
      'รับประกัน 5 ปี (แตกหักเปลี่ยนใหม่ฟรี)'
    ],
    inStock: true
  },
  {
    id: 'p-brick',
    name: 'ECO BRICK',
    nameTh: 'อิฐบล็อกก่อผนัง Eco Brick',
    tagline: 'Lightweight, ultra-strong building block for walls & planters.',
    taglineTh: 'อิฐบล็อกน้ำหนักเบา แข็งแกร่งสูง สำหรับก่อผนังและแปลงต้นไม้',
    description: 'High-density interlocking building block made from 719 UHT cartons. Certified Upcycle Circular Economy material.',
    descriptionTh: 'บล็อกก่อผนังความหนาแน่นสูง ผลิตจากกล่อง UHT 719 กล่อง ได้รับการรับรองวัสดุหมุนเวียนมาตรฐาน DCCE',
    longDescription: 'Eco Bricks replace conventional cement blocks with an eco-composite alternative that offers superior acoustic dampening, moisture resistance, and thermal insulation. Ideal for perimeter walls, interior partition accents, garden retaining walls, and DIY eco-structures.',
    longDescriptionTh: 'Eco Brick ใช้วัสดุคอมโพสิตทดแทนอิฐบล็อกซีเมนต์ทั่วไป กันเสียง ดูดซับความชื้นต่ำ และเป็นฉนวนกันความร้อน เหมาะสำหรับแนวกำแพงรั้ว ผนังกั้นห้อง และสิ่งปลูกสร้างรักษ์โลก',
    price: 36,
    originalPrice: 50,
    discountPercent: 28,
    wholesalePrice: 32,
    minWholesaleQty: 1000,
    dimensions: '10.0 x 30.0 x 10.0 cm',
    dimensionsTh: '10.0 x 30.0 x 10.0 ซม.',
    weightKg: 2.60,
    coveragePerSqm: '40.0 pieces / sq.m.',
    cartonCount: 719,
    carbonOffsetKg: 9.69,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2567-2570 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'Building & Decor',
    imageUrl: '/photos/PD2.webp',
    brochureUrl: '/photos/PD2.webp',
    gallery: [
      '/photos/PD2.webp'
    ],
    features: [
      'Made from 719 Recycled UHT Cartons (300cc)',
      '9.69 kgCO2e Carbon Offset per Brick',
      'Zero Water Absorption & No Cracking',
      'Excellent Thermal & Sound Insulation',
      '40.0 pcs required per square meter'
    ],
    featuresTh: [
      'ผลิตจากกล่องนม UHT รีไซเคิล 719 กล่อง (300cc)',
      'ลดการปล่อยคาร์บอน 9.69 kgCO2e ต่อก้อน',
      'ไม่ดูดซึมน้ำ ไร้ปัญหาแตกร้าว',
      'เป็นฉนวนกันความร้อนและกันเสียงดีเยี่ยม',
      'ใช้ 40.0 ก้อนต่อตารางเมตร'
    ],
    inStock: true
  },
  {
    id: 'p-smart-board',
    name: 'ECO SMART BOARD',
    nameTh: 'แผ่นสมาร์ทบอร์ด Eco Smart Board',
    tagline: 'Versatile sheet for ceiling, interior walls, and partitions.',
    taglineTh: 'แผ่นอเนกประสงค์สำหรับงานฝ้าเพดาน ผนังเบา และฉากกั้นห้อง',
    description: 'Heavy-duty 0.5 cm thick upcycled board constructed from 1,629 beverage cartons. Impact-resistant and 100% moisture immune.',
    descriptionTh: 'แผ่นสมาร์ทบอร์ดอัปไซเคิลหนา 0.5 ซม. ผลิตจากกล่อง 1,629 กล่อง ทนแรงกระแทกและทนความชื้น 100%',
    longDescription: 'Eco Smart Board provides an eco-friendly substitute for plywood, gypsum, and fiber cement boards. Produced via continuous high-pressure thermo-lamination without formaldehyde resins. Perfect for interior partitions, ceiling baffles, wet area walls, and acoustic panels.',
    longDescriptionTh: 'แผ่นสมาร์ทบอร์ด Eco ใช้วัสดุรักษ์โลกทดแทนไม้อัด ยิปซัม และไฟเบอร์ซีเมนต์ ผลิตด้วยการอัดความร้อนแรงดันสูงต่อเนื่อง ปราศจากสารฟอร์มาลดีไฮด์ เหมาะสำหรับผนังเบา ฝ้าเพดาน และงานตกแต่ง',
    price: 120,
    originalPrice: 200,
    discountPercent: 40,
    wholesalePrice: 90,
    minWholesaleQty: 1000,
    dimensions: '60.0 x 120.0 x 0.5 cm',
    dimensionsTh: '60.0 x 120.0 x 0.5 ซม.',
    weightKg: 5.89,
    coveragePerSqm: '1.3 pieces / sq.m.',
    cartonCount: 1629,
    carbonOffsetKg: 21.95,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2567-2570 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'Building & Decor',
    imageUrl: '/photos/PD3.webp',
    brochureUrl: '/photos/PD3.webp',
    gallery: [
      '/photos/PD3.webp'
    ],
    features: [
      'Made from 1,629 Recycled UHT Cartons (300cc)',
      '21.95 kgCO2e Carbon Offset per Board',
      'Non-Flammable & Termite-Proof',
      'Can be sawn, drilled, nailed, and screwed easily',
      'Smooth clean surface ready for painting or natural look'
    ],
    featuresTh: [
      'ผลิตจากกล่อง UHT รีไซเคิล 1,629 กล่อง (300cc)',
      'ลดคาร์บอน 21.95 kgCO2e ต่อแผ่น',
      'ไม่ติดไฟ ปลวกไม่กินตลอดอายุการใช้งาน',
      'เลื่อย เจาะ ตอกตะปู และขันสกรูได้ง่ายเหมือนไม้',
      'ติดตั้งฝ้าเพดาน ผนัง และพื้นได้คงทน'
    ],
    inStock: true
  },
  {
    id: 'p-block',
    name: 'ECO BLOCK',
    nameTh: 'บล็อกปูพื้น Eco Block',
    tagline: 'High-strength paving block for sidewalks, driveways & landscape.',
    taglineTh: 'บล็อกปูพื้นความแข็งแกร่งสูง สำหรับทางเท้า ทางเดินสวน และลานกิจกรรม',
    description: 'Durable paving block made from 196 UHT cartons with high skid-resistance and natural earthy finish.',
    descriptionTh: 'บล็อกปูพื้นทนทานจากกล่อง UHT 196 กล่อง ผิวสัมผัสกันลื่น ลวดลายธรรมชาติ',
    longDescription: 'Eco Blocks offer extreme compressive strength for pedestrian plazas, walkway paths, and public parks. Made from recycled Poly-Al composites that will never chip like cement or absorb water during monsoon rains.',
    longDescriptionTh: 'Eco Block รับแรงอัดได้สูงมาก สำหรับลานคนเดิน ทางเดินสวนสาธารณะ และลานกิจกรรมชุมชน ไม่กระเทาะบิ่นเหมือนซีเมนต์ และไม่ดูดซับน้ำฝน',
    price: 18,
    originalPrice: 25,
    discountPercent: 28,
    wholesalePrice: 14,
    minWholesaleQty: 1000,
    dimensions: '10.0 x 20.0 x 3.5 cm',
    dimensionsTh: '10.0 x 20.0 x 3.5 ซม.',
    weightKg: 0.71,
    coveragePerSqm: '50.0 pieces / sq.m.',
    cartonCount: 196,
    carbonOffsetKg: 2.64,
    certification: 'Upcycle Circular Economy Certified (2023-2026 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2566-2569 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'Paving & Ground',
    imageUrl: '/photos/PD4.webp',
    brochureUrl: '/photos/PD4.webp',
    gallery: [
      '/photos/PD4.webp'
    ],
    features: [
      'Made from 196 Recycled Cartons per Block (300cc)',
      '2.64 kgCO2e Sequestered Carbon',
      'High Slip-Resistance & UV Stability',
      'Lightweight compared to solid concrete',
      '50 pieces per square meter'
    ],
    featuresTh: [
      'ผลิตจากกล่องรีไซเคิล 196 กล่องต่อก้อน (300cc)',
      'กักเก็บคาร์บอน 2.64 kgCO2e',
      'กันลื่น ทนรังสี UV ไม่ซีดจางง่าย',
      'น้ำหนักเบากว่าคอนกรีต ขนย้ายติดตั้งสะดวก',
      'ใช้ 50 ก้อนต่อตารางเมตร'
    ],
    inStock: true
  },
  {
    id: 'p-tile',
    name: 'ECO TILE',
    nameTh: 'กระเบื้องปูพื้น Eco Tile',
    tagline: 'Outdoor garden and patio tile with modern stone texture.',
    taglineTh: 'กระเบื้องปูพื้นในร่มและกลางแจ้ง ลวดลายหินธรรมชาติสไตล์โมเดิร์น',
    description: 'Lightweight 30x30 cm modular tiles made from 122 UHT cartons for terraces, walkways, and wet areas.',
    descriptionTh: 'กระเบื้องโมดูลาร์ 30x30 ซม. ผลิตจากกล่อง 122 กล่อง สำหรับระเบียง ทางเดิน และพื้นที่เปียก',
    longDescription: 'Eco Tiles provide a beautiful stone-textured floor finish that is lightweight, impact resistant, and 100% moisture proof. Can be installed directly onto sand beds or concrete slabs with standard tile adhesives.',
    longDescriptionTh: 'Eco Tile ให้ผิวสัมผัสคล้ายหินธรรมชาติ น้ำหนักเบา ทนแรงกระแทก กันน้ำ 100% ปูบนพื้นทรายปรับระดับหรือพื้นคอนกรีตได้สะดวก',
    price: 35,
    originalPrice: 50,
    discountPercent: 30,
    wholesalePrice: 30,
    minWholesaleQty: 1000,
    dimensions: '30.0 x 30.0 x 0.5 cm',
    dimensionsTh: '30.0 x 30.0 x 0.5 ซม.',
    weightKg: 0.44,
    coveragePerSqm: '11.1 pieces / sq.m.',
    cartonCount: 122,
    carbonOffsetKg: 1.64,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2567-2570 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'Tile & Roof',
    imageUrl: '/photos/PD5.jpg',
    brochureUrl: '/photos/PD5.jpg',
    gallery: [
      '/photos/PD5.jpg'
    ],
    features: [
      'Made from 122 Recycled UHT Cartons (300cc)',
      '1.64 kgCO2e Carbon Offset per Tile',
      'Zero Water Infiltration',
      'Earthy natural mottled aesthetic',
      '11.1 pieces per square meter'
    ],
    featuresTh: [
      'ผลิตจากกล่อง UHT รีไซเคิล 122 กล่อง (300cc)',
      'ลดคาร์บอน 1.64 kgCO2e ต่อแผ่น',
      'น้ำไม่ซึมผ่าน ป้องกันตะไคร่น้ำ',
      'ลวดลายเนื้อวัสดุธรรมชาติ สวยงามไม่ซ้ำใคร',
      'ใช้ 11.1 แผ่นต่อตารางเมตร'
    ],
    inStock: true
  },
  {
    id: 'p-roof',
    name: 'ECO ROOF',
    nameTh: 'แผ่นกระเบื้องหลังคา Eco Roof',
    tagline: 'Superior heat-insulating corrugated eco roofing sheets.',
    taglineTh: 'แผ่นหลังคาลอนประหยัดพลังงาน สะท้อนความร้อนเป็นเลิศ',
    description: 'Engineered roofing sheet made from 1,798 cartons. Reflects radiant solar heat and reduces indoor temperature by up to 4°C.',
    descriptionTh: 'แผ่นหลังคานวัตกรรมจากกล่อง 1,798 กล่อง สะท้อนความร้อนจากแสงแดด ลดอุณหภูมิภายในอาคารได้ดีเยี่ยม',
    longDescription: 'Eco Roof corrugated sheets utilize the reflective properties of recycled aluminum flakes embedded in high-density polyethylene. The result is an ultra-durable roofing panel that eliminates rain noise, resists corrosion in chemical/coastal environments, and requires zero asbestos.',
    longDescriptionTh: 'แผ่นหลังคาลอน Eco Roof ใช้คุณสมบัติสะท้อนความร้อนของเกล็ดอะลูมิเนียม ผสานพลาสติกโพลีเอทิลีนความหนาแน่นสูง ช่วยลดเสียงดังยามฝนตก ไม่เป็นสนิม ทนการกัดกร่อนจากสารเคมีและไอทะเล ไร้แร่ใยหิน 100%',
    price: 150,
    originalPrice: 200,
    discountPercent: 25,
    wholesalePrice: 120,
    minWholesaleQty: 1000,
    dimensions: '50.0 x 120.0 x 0.5 cm',
    dimensionsTh: '50.0 x 120.0 x 0.5 ซม.',
    weightKg: 6.50,
    coveragePerSqm: '2.2 pieces / sq.m.',
    cartonCount: 1798,
    carbonOffsetKg: 24.23,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2567-2570 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'Tile & Roof',
    imageUrl: '/photos/PD6.webp',
    brochureUrl: '/photos/PD6.webp',
    gallery: [
      '/photos/PD6.webp'
    ],
    features: [
      '1,798 Cartons Recycled per Sheet (300cc)',
      '24.23 kgCO2e Greenhouse Gas Avoidance',
      'Cuts Indoor Heat by up to 4°C (High Solar Reflectance)',
      'Substantially Quieter during Heavy Rain',
      'Rust-Proof & Chemical Resistant'
    ],
    featuresTh: [
      'รีไซเคิลกล่องเครื่องดื่ม 1,798 กล่องต่อแผ่น (300cc)',
      'ลดก๊าซเรือนกระจกได้ถึง 24.23 kgCO2e',
      'ลดความร้อนในอาคารได้สูงสุด 4°C (สะท้อนรังสีความร้อนสูง)',
      'เงียบกว่าหลังคาโลหะเวลาฝนตก',
      'ไม่เป็นสนิม ทนทานไอเกลือทะเลและกรดด่าง'
    ],
    inStock: true
  },
  {
    id: 'p-wood',
    name: 'ECO WOOD',
    nameTh: 'ไม้เทียมสังเคราะห์ Eco Wood',
    tagline: 'Synthetic lumber planks for conference tables, parquet flooring & fencing.',
    taglineTh: 'ไม้เทียมสังเคราะห์สำหรับโต๊ะประชุม ปูพื้น ระแนงบังตา และรั้ว',
    description: 'Upcycled composite wood planks made from 288-866 cartons with authentic wood grain feel and zero rot.',
    descriptionTh: 'ไม้คอมโพสิตอัปไซเคิลจากกล่อง 288 - 866 กล่อง ให้สัมผัสเหมือนไม้จริง ปลวกไม่กิน ไม่ผุกร่อน',
    longDescription: 'Eco Wood planks are crafted for commercial and residential applications including outdoor decking, conference table tops, wall battens, and perimeter fence slats. No painting required, never rots, and will not warp under tropical sun.',
    longDescriptionTh: 'ไม้เทียม Eco Wood รองรับทั้งงานพาณิชย์และที่พักอาศัย เช่น พื้นระเบียงภายนอก ท็อปโต๊ะประชุม ระแนงตกแต่งผนัง และไม้รั้ว ไม่ต้องทาสี ไม่ผุพัง ไม่บิดงอจากแดดเมืองไทย',
    price: 150,
    originalPrice: 200,
    discountPercent: 25,
    wholesalePrice: 120,
    minWholesaleQty: 1000,
    dimensions: '10.0-12.5 x 100.0 x 1.0-2.5 cm',
    dimensionsTh: '10.0-12.5 x 100.0 x 1.0-2.5 ซม.',
    weightKg: 1.04,
    coveragePerSqm: '8.0 - 10.0 pieces / sq.m.',
    cartonCount: 288,
    carbonOffsetKg: 3.88,
    certification: 'Upcycle Circular Economy Certified (2023-2026 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2566-2569 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'Building & Decor',
    imageUrl: '/photos/PD7.jpg',
    brochureUrl: '/photos/PD7.jpg',
    gallery: [
      '/photos/PD7.jpg'
    ],
    features: [
      'Made from 288 - 866 Recycled UHT Cartons',
      '3.88 - 11.67 kgCO2e Carbon Offset per Plank',
      '100% Water, Rot and Termite Proof',
      'Workable with Standard Woodworking Tools'
    ],
    featuresTh: [
      'ผลิตจากกล่อง UHT รีไซเคิล 288 - 866 กล่อง',
      'ลดคาร์บอน 3.88 - 11.67 kgCO2e ต่อท่อน',
      'กันน้ำ ปลวกไม่กิน ไม่ผุพัง 100%',
      'ตัด เลื่อย เจาะ ได้ด้วยเครื่องมืองานไม้ทั่วไป'
    ],
    inStock: true
  },
  {
    id: 'p-table-top',
    name: 'ECO TABLE TOP',
    nameTh: 'ท็อปโต๊ะเรียน Eco Table Top',
    tagline: 'Spacious 60x40 cm school & study desk surface.',
    taglineTh: 'ท็อปโต๊ะเรียนและโต๊ะทำงานขนาดกว้าง 40x60 ซม.',
    description: 'Heavy-duty study desk top made from 1,391 beverage cartons. Smooth, scratch-resistant, and stain-resistant.',
    descriptionTh: 'หน้าโต๊ะเรียนทนทานสูง ผลิตจากกล่องเครื่องดื่ม 1,391 กล่อง ผิวสัมผัสเรียบ ทนรอยขีดข่วน และกันคราบสกปรก',
    longDescription: 'Eco Table Top is engineered to withstand intensive everyday classroom and office usage. Resistant to pen inks, liquid spills, and impact scratches. Seamlessly replaces old wooden tops on standard school metal frames.',
    longDescriptionTh: 'ท็อปโต๊ะเรียน Eco ออกแบบมาเพื่อรองรับการใช้งานหนักในห้องเรียนและสำนักงาน ทนต่อหมึกปากกา ของเหลวหกใส่ และรอยขีดข่วน เปลี่ยนแทนหน้าโต๊ะไม้เดิมบนโครงเหล็กได้พอดี',
    price: 150,
    originalPrice: 220,
    discountPercent: 32,
    wholesalePrice: 125,
    minWholesaleQty: 1000,
    dimensions: '40.0 x 60.0 x 2.5 cm',
    dimensionsTh: '40.0 x 60.0 x 2.5 ซม.',
    weightKg: 5.03,
    coveragePerSqm: '4.1 pieces / sq.m.',
    cartonCount: 1391,
    carbonOffsetKg: 18.75,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    certificationTh: 'มาตรฐาน Upcycle Circular Economy (2567-2570 โดย DCCE ประเทศไทย)',
    warranty: '5 Years (Broken cases replaced free)',
    warrantyTh: 'รับประกัน 5 ปี (แตกหักเปลี่ยนฟรี)',
    category: 'School & Furniture',
    imageUrl: '/photos/PD8.webp',
    brochureUrl: '/photos/PD8.webp',
    gallery: [
      '/photos/PD8.webp'
    ],
    features: [
      'Made from 1,391 Recycled UHT Cartons (300cc)',
      '18.75 kgCO2e Carbon Offset per Top',
      'Ink-Resistant & Easy Clean Surface',
      'Rounded Safety Edges for Students',
      '5-Year Institutional Warranty'
    ],
    featuresTh: [
      'ผลิตจากกล่อง UHT รีไซเคิล 1,391 กล่อง (300cc)',
      'ลดคาร์บอน 18.75 kgCO2e ต่อหน้าโต๊ะ',
      'ทนรอยปากกา ทำความสะอาดคราบง่าย',
      'ลบมุมมน ปลอดภัยสำหรับนักเรียนทุกระดับชั้น',
      'รับประกัน 5 ปี (แตกหักเปลี่ยนใหม่ฟรี)'
    ],
    inStock: true
  }
];

export const PARTNERS_COHORT: PartnerCohort[] = [
  {
    name: 'ECO FRIENDLY THAI (EFT)',
    role: 'Pulp & Poly-Al Upcycling Leader',
    roleTh: 'ผู้นำการสกัดเยื่อกระดาษและอัปไซเคิล Poly-Al',
    logoText: 'EFT',
    description: 'Pioneering Thailand circular economy with 2,000 MT/mo capacity transforming waste paper and beverage cartons.',
    descriptionTh: 'ผู้นำเศรษฐกิจหมุนเวียนของไทย กำลังการผลิตรวม 2,000 ตัน/เดือน แปรรูปขยะกระดาษและกล่องเครื่องดื่มใช้แล้ว 100%'
  },
  {
    name: 'CIRAC',
    role: 'Circular Innovation Partner',
    roleTh: 'พันธมิตรนวัตกรรมเศรษฐกิจหมุนเวียน',
    logoText: 'CIRAC',
    description: 'Collaborative initiative advancing plastic recycling technologies and circularity metrics.',
    descriptionTh: 'โครงการความร่วมมือพัฒนานวัตกรรมเทคโนโลยีรีไซเคิลพลาสติกและการประเมินความคุ้มค่าหมุนเวียน'
  },
  {
    name: 'CORSAIR',
    role: 'Chemical Recycling & Bio-Oil',
    roleTh: 'เทคโนโลยีรีไซเคิลเคมีและน้ำมันชีวภาพ',
    logoText: 'CORSAIR',
    description: 'Transforming mixed plastic waste into advanced bio-oil for sustainable industrial feeds.',
    descriptionTh: 'แปรรูปขยะพลาสติกผสมเป็นน้ำมันชีวภาพไพโรไลซิสขั้นสูง เพื่อเป็นวัตถุดิบอุตสาหกรรมหมุนเวียน'
  },
  {
    name: 'Trash Lucky',
    role: 'Waste Separation & Public Engagement',
    roleTh: 'แพลตฟอร์มคัดแยกขยะและการมีส่วนร่วมของชุมชน',
    logoText: 'Trash Lucky',
    description: 'Incentivized recycling platform driving community collection and sorting across Bangkok.',
    descriptionTh: 'แพลตฟอร์มรีไซเคิลลุ้นโชค จูงใจประชาชนคัดแยกขยะตั้งแต่ต้นทางทั่วกรุงเทพฯ และปริมณฑล'
  },
  {
    name: '2nd Life',
    role: 'Ocean Bound Plastic Solutions',
    roleTh: 'การจัดการขยะพลาสติกก่อนลงสู่ทะเล',
    logoText: '2nd Life',
    description: 'Traceable ocean-bound plastic collection infrastructure supporting global sustainability goals.',
    descriptionTh: 'พัฒนาระบบรวบรวมขยะพลาสติกตกค้างในชุมชนชายฝั่ง พร้อมระบบตรวจสอบย้อนกลับมาตรฐานระดับสากล'
  }
];

export const INCUBATION_SUPPORT_ORGS = [
  'The Incubation Network',
  'The Circulate Initiative',
  'SecondMuse',
  'Government of Canada (Global Affairs Canada)',
  'ECCA Family Foundation'
];

export const CLIENT_PARTNERS = [
  { 
    name: 'KRS Industrial', 
    logo: 'KRS', 
    desc: 'Major packaging and paperboard manufacturer', 
    descTh: 'ผู้ผลิตบรรจุภัณฑ์และกระดาษแข็งอุตสาหกรรมชั้นนำ' 
  },
  { 
    name: 'SCG Chemicals (SCGC)', 
    logo: 'SCGC', 
    desc: 'Green polymer and recycling alliance', 
    descTh: 'พันธมิตรนวัตกรรมกรีนโพลิเมอร์และรีไซเคิล' 
  },
  { 
    name: 'CP ALL (7-Eleven)', 
    logo: 'CP ALL', 
    desc: 'Ton-Kla Rai Tung youth waste management network', 
    descTh: 'เครือข่ายโครงการต้นกล้าไร้ถังและการจัดการขยะเยาวชน' 
  },
  { 
    name: 'SCGP Packaging', 
    logo: 'SCGP', 
    desc: 'Sustainable packaging ecosystem collaboration', 
    descTh: 'ความร่วมมือพัฒนาระบบนิเวศบรรจุภัณฑ์เพื่อความยั่งยืน' 
  },
  { 
    name: 'DCCE Thailand', 
    logo: 'DCCE', 
    desc: 'Department of Climate Change and Environment certification', 
    descTh: 'การรับรองมาตรฐานจากกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม' 
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'EFT join careton กล่องนมรักษ์โลก',
    titleTh: 'EFT join careton กล่องนมรักษ์โลก',
    date: 'October 18, 2024',
    dateTh: '18 ตุลาคม 2567',
    category: 'Sustainability Alliance',
    categoryTh: 'พันธมิตรความยั่งยืน',
    author: 'Eco Friendly Thai & Careton Alliance',
    authorTh: 'อีโค่ เฟรนด์ลี่ ไทย และภาคี Careton',
    excerpt: 'EFT joins forces with the Careton project — transforming post-consumer UHT beverage cartons into high-value circular resources and eco-friendly products.',
    excerptTh: 'EFT ร่วมกับโครงการ careton กล่องนมรักษ์โลก เดินหน้าขับเคลื่อนการคัดแยกและรวบรวมกล่องนม UHT นำกลับมารีไซเคิลเป็นทรัพยากรหมุนเวียนทรงคุณค่า',
    image: '/news/new1.jpg',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "Eco Friendly Thai (EFT) proudly joins the 'Careton — กล่องนมรักษ์โลก' national campaign, taking a major leap toward sustainable packaging recycling and zero-waste communities across Thailand."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Through this partnership, used UHT beverage and milk cartons collected from schools, consumers, and partner networks are systematically channeled into EFT's advanced recycling facilities. The separated paper fibers are upcycled into clean paper products, while the poly-aluminum composite layers are pressed into durable building boards and eco-friendly school furniture."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"Every single carton saved from landfills is a step forward for the circular economy. We turn everyday carton waste into lasting community assets.\" — Eco Friendly Thai"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "This collaboration reaffirms EFT's dedication to closing the loop on post-consumer carton packaging and establishing a truly circular model in Thailand."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (EFT) เข้าร่วมโครงการ 'careton กล่องนมรักษ์โลก' อย่างเป็นทางการ เพื่อขับเคลื่อนการบริหารจัดการบรรจุภัณฑ์กล่องเครื่องดื่มอย่างยั่งยืน และขยายระบบการคัดแยกกล่องนม UHT หลังการบริโภคสู่การรีไซเคิล 100%"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "โครงการ careton กล่องนมรักษ์โลก มุ่งเน้นการสร้างความตระหนักรู้และรวบรวมกล่องนมใช้แล้วจากโรงเรียน ชุมชน และภาคีเครือข่าย โดยส่งตรงเข้าสู่กระบวนการรีไซเคิลของ EFT ที่สามารถแยกเยื่อกระดาษบริสุทธิ์นำกลับมาทำกระดาษคุณภาพสูง และนำชั้นพลาสติกอะลูมิเนียม (Poly-Al) มาอัดขึ้นรูปเป็นแผ่นกระดาน แผ่นหลังคา และโต๊ะเก้าอี้เพื่อสิ่งแวดล้อม"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"กล่องนมใช้แล้วไม่ใช่ขยะ แต่คือทรัพยากรหมุนเวียนทรงคุณค่าที่จะกลับมาสร้างประโยชน์ให้สังคมและสิ่งแวดล้อมต่อไป\" — อีโค่ เฟรนด์ลี่ ไทย"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ความร่วมมือในครั้งนี้ช่วยลดปริมาณขยะฝังกลบ ลดการปล่อยก๊าซเรือนกระจก และตอกย้ำพันธกิจของ EFT ในการเป็นผู้นำด้าน Circular Economy ของประเทศไทย"
      )
    )
  },
  {
    id: 2,
    title: 'EFT product in ECO MALL THAILAND',
    titleTh: 'EFT product in ECO MALL THAILAND',
    date: 'November 2, 2024',
    dateTh: '2 พฤศจิกายน 2567',
    category: 'Exhibition & Retail',
    categoryTh: 'นิทรรศการและพื้นที่จำหน่าย',
    author: 'ECO MALL THAILAND & EFT Showcase',
    authorTh: 'ECO MALL THAILAND และทีมงาน EFT',
    excerpt: 'Our products are now featured in ECO MALL THAILAND — showcasing innovative upcycled building materials and lifestyle items made from 100% recycled cartons.',
    excerptTh: 'our product in ECO MALL THAILAND — ผลิตภัณฑ์รักษ์โลกของ EFT ร่วมจัดแสดงและเปิดพื้นที่จำหน่ายในศูนย์รวมผลิตภัณฑ์เพื่อความยั่งยืน ECO MALL THAILAND',
    image: '/news/new2.webp',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "We are proud to present our products in ECO MALL THAILAND! Eco Friendly Thai's full line of circular upcycled materials is now prominently displayed in Thailand's premier eco-lifestyle destination."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Visitors and eco-conscious businesses can explore firsthand the exceptional durability, waterproof qualities, and aesthetics of EFT's eco-boards, structural panels, and sustainable home items engineered entirely from recycled beverage cartons."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"Our presence in ECO MALL THAILAND connects responsible consumers and designers with genuine circular materials, proving sustainable living is practical and beautiful.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Visit ECO MALL THAILAND to experience EFT's circular innovations in person and join our green transition today."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "our product in ECO MALL THAILAND — บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด ภูมิใจนำเสนอผลิตภัณฑ์รักษ์โลกครบวงจรที่ผ่านการรีไซเคิลจากกล่องเครื่องดื่ม UHT 100% ภายในพื้นที่จัดแสดงและจำหน่ายของ ECO MALL THAILAND"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ภายในบูธจัดแสดง ผู้เข้าชมและผู้ประกอบการสามารถสัมผัสนวัตกรรมวัสดุก่อสร้างและของใช้รักษ์โลก อาทิ แผ่นไม้อีโค่บอร์ด แผ่นลายหินอ่อน แผ่นทางเดินภายนอก และเฟอร์นิเจอร์อัปไซเคิล ที่โดดเด่นด้วยคุณสมบัติกันน้ำ 100% กันปลวก และทนทานต่อทุกสภาวะอากาศ"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"การนำผลิตภัณฑ์ EFT มาร่วมจัดแสดงที่ ECO MALL THAILAND ช่วยให้ประชาชนและสถาปนิกเห็นคุณค่าของการนำวัสดุหมุนเวียนมาใช้งานได้จริงในชีวิตประจำวัน\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ขอเชิญผู้สนใจร่วมชมนวัตกรรมผลิตภัณฑ์ของ EFT ได้ที่ ECO MALL THAILAND เพื่อร่วมสร้างสังคมไร้ขยะไปด้วยกัน"
      )
    )
  },
  {
    id: 3,
    title: 'มอบให้แก่โรงเรียนสอนคนตาบอด',
    titleTh: 'มอบให้แก่โรงเรียนสอนคนตาบอด',
    date: 'December 12, 2024',
    dateTh: '12 ธันวาคม 2567',
    category: 'CSR & Education',
    categoryTh: 'กิจกรรมเพื่อสังคมและการศึกษา',
    author: 'EFT Community CSR Program',
    authorTh: 'โครงการปันน้ำใจเพื่อสังคม EFT',
    excerpt: 'Recycled milk cartons transformed into specialized braille writing paper, donated directly to the School for the Blind to empower inclusive education.',
    excerptTh: 'กล่องนมผลิตกระดาษใช้ในการเขียนอักษรเบรลล์ มอบให้แก่โรงเรียนสอนคนตาบอด เพื่อสนับสนุนการเรียนรู้ของน้องๆ ผู้มีความบกพร่องทางการมองเห็น',
    image: '/news/new3.jpg',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "Eco Friendly Thai transforms discarded UHT milk cartons into specialized, thick braille writing paper and donates them directly to the School for the Blind."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Braille embossing requires high-durability paper with specific tensile strength and fiber density. EFT's hydrapulping process extracts long, high-purity virgin fibers from clean milk cartons, creating the ideal medium for tactile braille dots that do not collapse easily."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"Turning everyday milk cartons into braille paper opens up a world of knowledge and tactile learning for visually impaired students.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "This project exemplifies how circular recycling creates direct, heartwarming social benefits while conserving natural forestry resources."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "กล่องนมผลิตกระดาษใช้ในการเขียนอักษรเบรลล์ มอบให้แก่โรงเรียนสอนคนตาบอด — โครงการสร้างสรรค์สังคมโดย บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด ร่วมส่งต่อโอกาสทางการศึกษาให้แก่น้องๆ ผู้มีความบกพร่องทางการมองเห็น"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "เยื่อกระดาษบริสุทธิ์เส้นใยยาวที่ได้จากการสกัดกล่องนม UHT ของ EFT มีคุณสมบัติเหนียว หนา และทนทาน เหมาะสมเป็นพิเศษสำหรับการนำมาผลิตเป็นกระดาษเขียนและพิมพ์อักษรเบรลล์ ทำให้จุดนูนมีความคมชัดคงทน ไม่ยุบตัวง่าย ช่วยให้นักเรียนสามารถอ่านและเขียนบทเรียนได้อย่างสะดวกและมีประสิทธิภาพ"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"การเปลี่ยนกล่องนมธรรมดาให้กลายเป็นกระดาษอักษรเบรลล์ คือการเปลี่ยนขยะให้เป็นโอกาส และเปิดประตูสู่โลกแห่งการเรียนรู้ที่เท่าเทียมกันของทุกคนในสังคม\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "EFT มุ่งมั่นเดินหน้าโครงการมอบกระดาษอักษรเบรลล์อย่างต่อเนื่อง เพื่อเป็นส่วนหนึ่งในการสนับสนุนการศึกษาพิเศษและลดการใช้ทรัพยากรป่าไม้ใหม่อย่างยั่งยืน"
      )
    )
  },
  {
    id: 4,
    title: 'ECO BLOCK G-GREEN',
    titleTh: 'ECO BLOCK G-GREEN',
    date: 'January 15, 2025',
    dateTh: '15 มกราคม 2568',
    category: 'Award & Innovation',
    categoryTh: 'รางวัลและนวัตกรรม',
    author: 'Research Team led by Ajarn Rommanee Wangdeetham',
    authorTh: 'ทีมวิจัย โดย หัวหน้าทีมวิจัย อาจารย์รมณีย์ หวังดีธรรม',
    excerpt: 'ECO BLOCK G-GREEN — Innovative upcycled plastic product awarded the G-GREEN certification in Green Production, led by Head of Research Ajarn Rommanee Wangdeetham.',
    excerptTh: 'ECO BLOCK G-GREEN - ผลิตภัณฑ์ พลาสติกนวัตรกรรมได้รางวัล G-GREEN กลุ่มผู้ผลิต (Green Production) โดย หัวหน้าทีมวิจัย อาจารย์รมณีย์ หวังดีธรรม',
    image: '/news/new4.webp',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "ECO BLOCK G-GREEN is honored with the prestigious G-GREEN certification in the Green Production category, under the visionary research leadership of Ajarn Rommanee Wangdeetham."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "The ECO BLOCK represents a breakthrough in sustainable construction materials, transforming post-consumer poly-aluminum plastic waste from beverage cartons into heavy-duty, high-load-bearing interlocking paving blocks and structural modules without emitting toxic VOCs."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"The G-GREEN award validates our rigorous standards in clean eco-manufacturing, energy efficiency, and verified carbon abatement in construction.\" — Ajarn Rommanee Wangdeetham"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "This national recognition solidifies EFT's status as a pioneer in circular building technology, providing municipal and commercial projects with certified low-carbon alternatives."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "ECO BLOCK G-GREEN - ผลิตภัณฑ์ พลาสติกนวัตรกรรมได้รางวัล G-GREEN กลุ่มผู้ผลิต (Green Production) โดย หัวหน้าทีมวิจัย อาจารย์รมณีย์ หวังดีธรรม ตอกย้ำความเป็นเลิศในการผลิตที่เป็นมิตรต่อสิ่งแวดล้อม"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ECO BLOCK เป็นนวัตกรรมบล็อกปูพื้นและอิฐก่อสร้างที่พัฒนาขึ้นจากการแปรรูปพลาสติกคอมโพสิตและเศษฟอยล์อะลูมิเนียมจากกล่องนม UHT ผ่านกระบวนการขึ้นรูปด้วยความร้อนและแรงอัดสูงโดยปราศจากสารเคมีอันตราย มีความทนทานต่อแรงกด รับน้ำหนักได้สูง ไม่แตกหักง่าย และมีอายุการใช้งานยาวนานนับสิบปี"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"รางวัล G-GREEN กลุ่มผู้ผลิต (Green Production) คือเครื่องหมายยืนยันถึงมาตรฐานกระบวนการผลิตสะอาดที่ไม่สร้างมลพิษ และช่วยลดการปล่อยคาร์บอนได้อย่างแท้จริง\" — อาจารย์รมณีย์ หวังดีธรรม"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ความสำเร็จนี้สะท้อนถึงการผสานพลังทางวิชาการและเทคโนโลยีอุตสาหกรรมรีไซเคิล เพื่อยกระดับวัสดุก่อสร้างไทยสู่มาตรฐานสากลที่เป็นมิตรกับโลก"
      )
    )
  },
  {
    id: 5,
    title: 'ECO FRIENDLY THAI, TAIWA, and CHUGAI Launch ES GREEN SOLUTION – A Sustainable Solution in Recycled Plastic Pallets',
    titleTh: 'ECO FRIENDLY THAI, TAIWA และ CHUGAI เปิดตัว ES GREEN SOLUTION – นวัตกรรมพาเลทพลาสติกรีไซเคิลเพื่อความยั่งยืน',
    date: 'May 16, 2025',
    dateTh: '16 พฤษภาคม 2568',
    category: 'International Joint Venture',
    categoryTh: 'การร่วมทุนระดับสากล',
    author: 'ES GREEN SOLUTION (EFT, TAIWA, CHUGAI)',
    authorTh: 'ES GREEN SOLUTION (EFT, TAIWA, CHUGAI)',
    excerpt: '(Plastic and rubber, BITEC, BANGKOK) - ECO FRIENDLY THAI, TAIWA, and CHUGAI announce the launch of ES GREEN SOLUTION, a joint venture manufacturing high-quality recycled plastic pallets for circular logistics.',
    excerptTh: '(Plastic and rubber, BITEC, BANGKOK) - 16 พฤษภาคม 2568: ECO FRIENDLY THAI, TAIWA และ CHUGAI ร่วมประกาศจัดตั้ง ES GREEN SOLUTION ผลิตพาเลทพลาสติกรีไซเคิลคุณภาพสูง ยกระดับซัพพลายเชนสู่ความยั่งยืน',
    image: '/news/new5.jpg',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "(Plastic and rubber, BITEC, BANGKOK) — 16 May 2025, ECO FRIENDLY THAI, TAIWA, and CHUGAI are proud to announce the establishment of ES GREEN SOLUTION, a joint venture company dedicated to manufacturing high-quality recycled plastic pallets."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "This strategic partnership combines the expertise and sustainability commitments of all three companies to deliver innovative, eco-friendly logistics solutions for industries worldwide. ES GREEN SOLUTION will focus on producing durable, lightweight, and environmentally responsible plastic pallets made from recycled materials, supporting the global shift toward a circular economy."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"By reducing waste and carbon footprint, ES GREEN aims to set new standards in sustainable supply chain solutions.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "The joint venture will serve modern warehousing, cold chain, and international shipping sectors, proving that recycled plastics offer superior lifecycle economic and ecological returns compared to conventional single-use timber pallets."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "(Plastic and rubber, BITEC, BANGKOK) - 16 พฤษภาคม 2568, บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (ECO FRIENDLY THAI), บริษัท TAIWA และ บริษัท CHUGAI ร่วมกันประกาศจัดตั้งบริษัทร่วมทุน 'ES GREEN SOLUTION' อย่างเป็นทางการ เพื่อมุ่งเน้นการผลิตพาเลทพลาสติกรีไซเคิลคุณภาพสูง"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ความร่วมมือเชิงกลยุทธ์ในครั้งนี้ เป็นการรวมพลังความเชี่ยวชาญด้านเทคโนโลยีวัสดุศาสตร์และพันธกิจด้านความยั่งยืนของทั้งสามบริษัท เพื่อส่งมอบโซลูชันโลจิสติกส์ที่เป็นมิตรกับสิ่งแวดล้อมสู่อุตสาหกรรมทั่วโลก โดย ES GREEN SOLUTION จะมุ่งเน้นการผลิตพาเลทพลาสติกที่มีความทนทาน น้ำหนักเบา และผลิตจากวัสดุรีไซเคิล ซึ่งสนับสนุนการเปลี่ยนผ่านสู่เศรษฐกิจหมุนเวียน (Circular Economy) ในระดับสากล"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"ด้วยการลดของเสียและการลดคาร์บอนฟุตพริ้นท์ ES GREEN มีเป้าหมายในการสร้างมาตรฐานใหม่สำหรับโซลูชันซัพพลายเชนและโลจิสติกส์ที่ยั่งยืน\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "พาเลทพลาสติกรีไซเคิลจาก ES GREEN SOLUTION พร้อมรองรับภาคการขนส่ง คลังสินค้าอัจฉริยะ และการส่งออกระหว่างประเทศ ตอบโจทย์เป้าหมาย Net Zero และ ESG ขององค์กรชั้นนำทั่วโลก"
      )
    )
  }
];

export const FEATURED_VIDEO = {
  title: 'SME กล้าเปลี่ยน EP 37: ใช้ขยะสร้างธุรกิจ 300 ล้านบาท อีโค่ เฟรนด์ลี่ ไทย',
  titleEn: 'SME Bold Change EP 37: Building a 300M Baht Circular Enterprise from Waste — Eco Friendly Thai',
  subtitle: 'บทสัมภาษณ์เจาะลึก คุณสมยศ วัฒน์พานิช (กรรมการผู้จัดการ บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด) โดย ธนาคารไทยเครดิต SME กล้าให้',
  subtitleEn: 'In-depth interview with Mr. Somyot Watpanich (MD, Eco Friendly Thai Co., Ltd.) by Thai Credit Bank SME',
  videoUrl: 'https://www.youtube.com/watch?v=jrE2dqN35IM&t=2s',
  embedUrl: 'https://www.youtube.com/embed/jrE2dqN35IM?autoplay=1&rel=0',
  youtubeId: 'jrE2dqN35IM',
  thumbnailUrl: 'https://img.youtube.com/vi/jrE2dqN35IM/maxresdefault.jpg',
  views: '450,000+ views',
  viewsTh: '450,000+ ยอดรับชม',
  duration: '14:28 min',
  durationTh: '14:28 นาที',
  highlights: [
    'จุดเริ่มต้นจากศูนย์ สู่โรงงานแปรรูปขยะมูลค่า 300 ล้านบาท',
    'เทคนิคการแยกเยื่อกระดาษขาวจากกล่องนม UHT โดยไม่ใช้สารเคมีฟอกขาวอันตราย',
    'การคิดค้นสูตรอัด Poly-Al เป็นแผ่นสมาร์ทบอร์ดและบล็อกปูพื้นทดแทนไม้และปูน',
    'วิสัยทัศน์ Zero-Waste สู่การขยายโรงงาน 3 แห่ง กำลังการผลิต 2,000 MT/เดือน'
  ],
  highlightsEn: [
    'From zero to a 300-million-baht waste transformation enterprise',
    'Eco-friendly technique for separating virgin pulp from UHT cartons without hazardous bleaches',
    'Formulating compressed Poly-Al into smart boards and paving tiles replacing wood and concrete',
    'Zero-waste vision expanding across 3 manufacturing plants with 2,000 MT/month total capacity'
  ]
};

export const CONTACT_INFO = {
  companyName: 'Eco Friendly Thai Company Limited',
  companyNameTh: 'บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด',
  registrationNo: '0125556012658',
  addressHeadquarters: '99/92 หมู่ 2 ต.ไทรม้า อ.เมืองนนทบุรี จ.นนทบุรี 11000',
  addressHeadquartersEn: '99/92 Moo 2, Sai Ma, Mueang Nonthaburi, Nonthaburi 11000',
  addressPlantSaiNoi: 'ตำบลไทรใหญ่ อำเภอไทรน้อย จังหวัดนนทบุรี 11150',
  addressPlantSaiNoiEn: 'Sai Yai, Sai Noi, Nonthaburi 11150',
  addressPlantRatchaburi: '29/4 หมู่ที่ 7 ตำบลหนองอ้อ อำเภอบ้านโป่ง จังหวัดราชบุรี 70110',
  addressPlantRatchaburiEn: '29/4 Moo 7, Nong O, Ban Pong, Ratchaburi 70110',
  googleMapsUrl: 'https://maps.app.goo.gl/NQd78xLVNMuEWejU7',
  phones: ['02-9261388-9', '065-961-6199', '061-348-9292', '088-564-2993'],
  fax: '02-9245623',
  emails: ['contact@ecofriendlythai.com', 'rikka.ecofriendlythai@gmail.com'],
  workingHours: 'จันทร์ - เสาร์ : 08:30 - 17:30 น.',
  workingHoursEn: 'Monday - Saturday: 08:30 AM - 05:30 PM',
  coordinates: { lat: 13.7818431, lng: 99.8969191 }
};

