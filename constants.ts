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
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=1000',
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
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
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
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
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
    title: 'ต้นกล้าไร้ถัง: ภาคีเครือข่ายระบบนิเวศจัดการขยะ สร้างเยาวชนกู้โลก',
    titleTh: 'ต้นกล้าไร้ถัง: ภาคีเครือข่ายระบบนิเวศจัดการขยะ สร้างเยาวชนกู้โลก',
    date: 'June 22, 2022',
    dateTh: '22 มิถุนายน 2565',
    category: 'Press Release & Social Impact',
    categoryTh: 'ข่าวประชาสัมพันธ์และผลลัพธ์ทางสังคม',
    author: 'EFT Public Relations & Network Alliance',
    authorTh: 'ฝ่ายสื่อสารองค์กรและภาคีเครือข่าย EFT',
    excerpt: 'Eco Friendly Thai partners with SCGC, CP ALL, and SCGP to turn school carton waste into new school desks and chairs for underprivileged schools across Thailand.',
    excerptTh: 'อีโค่ เฟรนด์ลี่ ไทย ผนึกกำลัง SCGC, CP ALL และ SCGP เปลี่ยนขยะกล่องนมโรงเรียนเป็นโต๊ะเก้าอี้นักเรียนชุดใหม่ มอบแด่โรงเรียนที่ขาดแคลนทั่วประเทศ',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "The 'Ton-Kla Rai Tung' (Zero-Waste Sprouts) initiative marks a landmark alliance between Eco Friendly Thai (EFT) and industry leaders including CP ALL, SCGC, and SCGP to establish upstream waste segregation ecosystems in schools nationwide."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Students learn practical techniques for cleaning and flattening UHT milk cartons. These are collected and processed through EFT's closed-loop hydrapulpers to isolate high-purity paper pulp, while residual Poly-Al layers are compressed into durable Eco School Furniture tops delivered back to rural schools."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"Waste is never truly waste when we understand how to transform it into enduring resources that benefit youth and communities.\" — Somyot Watpanich, Managing Director, Eco Friendly Thai"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "To date, the program has collected over 5,000,000 UHT beverage cartons, diverted over 65 metric tons from landfills, and prevented more than 67,000 kgCO2e in greenhouse gas emissions."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "โครงการ 'ต้นกล้าไร้ถัง' (Ton-Kla Rai Tung) คือความร่วมมือครั้งสำคัญระหว่าง บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (EFT) ร่วมกับภาคีเครือข่ายชั้นนำ อาทิ CP ALL, SCGC และ SCGP เพื่อสร้างระบบนิเวศการคัดแยกขยะตั้งแต่ต้นทางในโรงเรียนทั่วประเทศ"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ในโครงการนี้ นักเรียนได้เรียนรู้การพับกล่องนม UHT ให้แบนสะอาด เพื่อส่งต่อให้โรงงาน EFT นำไปผ่านกระบวนการไฮโดรพัลเปอร์ (Hydrapulper) แยกเยื่อกระดาษบริสุทธิ์ และนำแผ่นพลาสติกอะลูมิเนียม (Poly-Al) มาอัดขึ้นรูปเป็นท็อปโต๊ะและเก้าอี้นักเรียน Eco School Furniture ส่งมอบกลับคืนสู่โรงเรียนที่ขาดแคลน"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"ขยะไม่ใช่ขยะ ถ้าเรารู้วิธีเปลี่ยนมันให้กลายเป็นทรัพยากรที่มีคุณค่ากลับคืนสู่เยาวชนและสังคม\" — คุณสมยศ วัฒน์พานิช, กรรมการผู้จัดการ อีโค่ เฟรนด์ลี่ ไทย"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ปัจจุบันโครงการสามารถรวบรวมกล่องนม UHT ได้มากกว่า 5,000,000 กล่อง ลดปริมาณขยะฝังกลบได้กว่า 65 ตัน และลดการปล่อยก๊าซเรือนกระจกได้มากกว่า 67,000 kgCO2e อย่างเป็นรูปธรรม"
      )
    )
  },
  {
    id: 2,
    title: 'SME Scale Up Program Winner Announcement Pitching Day',
    titleTh: 'SME Scale Up Program Winner Announcement Pitching Day',
    date: 'June 25, 2022',
    dateTh: '25 มิถุนายน 2565',
    category: 'Award & Milestone',
    categoryTh: 'รางวัลและการยอมรับ',
    author: 'Thailand SME Development Council',
    authorTh: 'สภาพัฒนาวิสาหกิจขนาดกลางและขนาดย่อม',
    excerpt: 'Eco Friendly Thai won 1st Place in the Thailand SME Scale Up Program, recognizing breakthrough circular economy scalability and 2,000 MT/month expansion.',
    excerptTh: 'อีโค่ เฟรนด์ลี่ ไทย คว้ารางวัลชนะเลิศอันดับ 1 ในโครงการ SME Scale Up ตอกย้ำความสำเร็จการขยายธุรกิจหมุนเวียนสู่ระดับ 2,000 ตัน/เดือน',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "Eco Friendly Thai Co., Ltd. secured 1st Place at the Thailand SME Scale Up Program Pitching Day, recognized for its breakthrough closed-loop business model that extracts 100% value from post-consumer beverage cartons."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "The distinguished judging committee commended EFT as an exemplary circular enterprise solving waste challenges economically without reliance on donations alone, generating viable commercial products for both the industrial pulp and construction sectors."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "This achievement served as a strategic catalyst for expanding EFT's third manufacturing facility in Ratchaburi province, bringing total operational capacity to 2,000 metric tons per month."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด ได้รับรางวัลชนะเลิศอันดับ 1 ในงาน Thailand SME Scale Up Program Pitching Day จากผลงานการขยายโมเดลธุรกิจหมุนเวียน (Circular Business Model) ที่สามารถสร้างมูลค่าเพิ่มให้กับขยะบรรจุภัณฑ์เครื่องดื่มได้ครบวงจร 100%"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "คณะกรรมการผู้ทรงคุณวุฒิยกย่อง EFT ในฐานะองค์กรต้นแบบที่สามารถแก้ปัญหาขยะแบบ Zero-Waste ได้จริงทางเศรษฐศาสตร์ โดยไม่พึ่งพาเพียงการบริจาค แต่สร้างผลิตภัณฑ์ที่มีคุณภาพเชิงพาณิชย์ แข่งขันได้ทั้งในตลาดเยื่อกระดาษอุตสาหกรรมและวัสดุก่อสร้างทดแทนไม้"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "รางวัลนี้เป็นแรงผลักดันสำคัญในการเดินหน้าขยายโรงงานแห่งที่ 3 ที่จังหวัดราชบุรี เพื่อเพิ่มกำลังการผลิตรวมเป็น 2,000 เมตริกตันต่อเดือน รองรับความต้องการของตลาดทั้งในประเทศและระดับสากล"
      )
    )
  },
  {
    id: 3,
    title: 'The Incubation Network: Thailand Plastics Circularity Accelerator Cohort',
    titleTh: 'The Incubation Network: Thailand Plastics Circularity Accelerator Cohort',
    date: 'December 17, 2021',
    dateTh: '17 ธันวาคม 2564',
    category: 'International Network',
    categoryTh: 'เครือข่ายนวัตกรรมสากล',
    author: 'The Incubation Network & The Circulate Initiative',
    authorTh: 'The Incubation Network และ The Circulate Initiative',
    excerpt: 'The Incubation Network announced the wonderful cohort of 5 selected organizations including Eco Friendly Thai for the Thailand Plastics Circularity Accelerator.',
    excerptTh: 'The Incubation Network ประกาศคัดเลือก 5 องค์กรแถวหน้าของไทย รวมถึง Eco Friendly Thai เข้าร่วมโครงการเร่งรัดนวัตกรรมพลาสติกหมุนเวียนระดับสากล',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "The Incubation Network, in partnership with The Circulate Initiative, SecondMuse, Global Affairs Canada, and ECCA Family Foundation, officially revealed the 5 vanguard organizations selected for the Thailand Plastics Circularity Accelerator."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Eco Friendly Thai (EFT) was chosen alongside CIRAC, CORSAIR, Trash Lucky, and 2nd Life for its patented poly-aluminum separation and heavy compression thermo-forming methods that yield certified upcycled building materials."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Participation has accelerated digital carbon credit traceability and enabled access to global ESG-compliant green procurement supply chains."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "The Incubation Network ร่วมกับ The Circulate Initiative, SecondMuse, รัฐบาลแคนาดา และมูลนิธิ ECCA Family Foundation ได้ประกาศคัดเลือก 5 องค์กรแถวหน้าของประเทศไทยเข้าร่วมโครงการ Thailand Plastics Circularity Accelerator"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Eco Friendly Thai (EFT) ได้รับการคัดเลือกเป็น 1 ใน 5 องค์กร (ร่วมกับ CIRAC, CORSAIR, Trash Lucky และ 2nd Life) ด้วยจุดเด่นด้านเทคโนโลยีการแยกชั้น Poly-Aluminium และการแปรรูปเป็นผลิตภัณฑ์ Upcycled Building Materials ที่มีมาตรฐานรับรองทางวิศวกรรม"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "การเข้าร่วมโครงการดังกล่าวช่วยยกระดับระบบตรวจสอบย้อนกลับ (Traceability) ของคาร์บอนเครดิต และการขยายตลาดผลิตภัณฑ์หมุนเวียนสู่กลุ่มลูกค้าสากลที่ให้ความสำคัญกับมาตรฐาน ESG"
      )
    )
  },
  {
    id: 4,
    title: 'Poly-Al Composite Innovation: จากขยะสู่แผ่นสมาร์ทบอร์ดและบล็อกก่อสร้างเขียว',
    titleTh: 'Poly-Al Composite Innovation: จากขยะสู่แผ่นสมาร์ทบอร์ดและบล็อกก่อสร้างเขียว',
    date: 'March 14, 2023',
    dateTh: '14 มีนาคม 2566',
    category: 'Material Innovation',
    categoryTh: 'นวัตกรรมวัสดุหมุนเวียน',
    author: 'EFT R&D Engineering Team',
    authorTh: 'ทีมนักวิจัยและวิศวกรรม EFT',
    excerpt: 'Transforming post-consumer milk carton Poly-Al layers into termite-proof, waterproof, heat-insulating building panels and structural roof tiles.',
    excerptTh: 'การแปรรูปชั้นอะลูมิเนียมฟอยล์และพลาสติกจากกล่องนม UHT เป็นแผ่นสมาร์ทบอร์ดกันน้ำ 100% กันปลวก และกระเบื้องหลังคาฉนวนความร้อน',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "Eco Friendly Thai's R&D engineering division has successfully perfected thermo-compression composite manufacturing that fuses post-consumer beverage carton Poly-Al layers without synthetic resins or harmful adhesive chemicals."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "The resulting Poly-Al boards are 100% waterproof, rot-proof, termite-resistant, and provide exceptional thermal insulation compared to standard gypsum or cement boards. Applications range from architectural wall cladding, acoustic ceilings, and heavy-duty industrial pallets to outdoor paving tiles."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"Upcycling is not merely about finding a second use; it is about engineering a material that outperforms traditional virgin counterparts in durability and eco-efficiency.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Every standard 1.2m x 2.4m board recycles approximately 1,200 UHT milk cartons and locks in carbon for decades."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "ทีมนักวิจัยและวิศวกรรมของ EFT ประสบความสำเร็จในการพัฒนาเทคโนโลยี Thermocompression ขั้นสูง หลอมรวมเศษพลาสติก Polyethylene และอะลูมิเนียมฟอยล์ (Poly-Al) โดยไม่ใช้กาวหรือสารเคมีอันตราย"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "วัสดุที่ได้มีความแข็งแรงทนทานสูง กันน้ำ 100% กันปลวก ไม่เป็นเชื้อรา และช่วยลดความร้อนเข้าสู่ตัวอาคารได้มากกว่าวัสดุทั่วไป เหมาะสำหรับงานก่อสร้างและตกแต่งทั้งภายนอกและภายใน ทดแทนไม้และยิปซัมได้อย่างสมบูรณ์แบบ"
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#1B4D3E] pl-6 italic text-xl text-[#2C2A26] my-8 font-medium bg-[#EBE7DE]/60 p-6 rounded-r-lg" },
        "\"การอัปไซเคิลไม่ใช่แค่การหาทางกำจัดขยะ แต่คือการสร้างสรรค์วัสดุใหม่ที่มีสมรรถนะเหนือกว่าวัสดุธรรมชาติเดิม และลดการทำลายทรัพยากรโลก\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "แผ่นสมาร์ทบอร์ด EFT ขนาดมาตรฐาน 1.2 x 2.4 เมตร หนึ่งแผ่น ช่วยรีไซเคิลกล่องนม UHT ได้มากถึง 1,200 กล่อง กักเก็บคาร์บอนและช่วยลดปริมาณขยะฝังกลบอย่างมหาศาล"
      )
    )
  },
  {
    id: 5,
    title: 'DCCE Circular Economy Standard Certification & Carbon Reduction',
    titleTh: 'DCCE Circular Economy Standard Certification & Carbon Reduction',
    date: 'August 10, 2023',
    dateTh: '10 สิงหาคม 2566',
    category: 'Environmental Standard',
    categoryTh: 'มาตรฐานสิ่งแวดล้อมและคาร์บอน',
    author: 'Department of Climate Change and Environment',
    authorTh: 'กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม (DCCE)',
    excerpt: 'EFT official certification for Circular Economy compliance, validating over 67,000+ kgCO2e greenhouse gas reduction through full-loop carton recycling.',
    excerptTh: 'EFT ได้รับการรับรองมาตรฐาน Upcycle Circular Economy ยืนยันการลดก๊าซเรือนกระจกได้จริงกว่า 67,000+ kgCO2e ผ่านระบบหมุนเวียนแบบครบวงจร',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "Eco Friendly Thai Co., Ltd. has earned official Upcycle Circular Economy standard accreditation from Thailand's Department of Climate Change and Environment (DCCE), Ministry of Natural Resources and Environment."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "This certification validates EFT's rigorous chain of custody and data traceability, verifying reductions exceeding 67,000+ kgCO2e through closed-loop carton hydrapulping and zero-waste recovery processes."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Corporate partners across retail, beverage production, and building materials can now seamlessly account for verified ESG carbon offset metrics when collaborating with EFT."
      )
    ),
    contentTh: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-lg font-medium text-[#1B4D3E]" },
        "บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด ได้รับการรับรองมาตรฐาน Upcycle Circular Economy อย่างเป็นทางการจาก กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม (DCCE) กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "การรับรองนี้ยืนยันถึงความแม่นยำของกระบวนการรีไซเคิลและระบบตรวจสอบย้อนกลับ (Traceability) ของปริมาณการลดก๊าซเรือนกระจกกว่า 67,000+ kgCO2e อย่างเป็นรูปธรรม"
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "ส่งผลให้องค์กรพันธมิตรทั้งผู้ผลิตเครื่องดื่ม ผู้ประกอบการค้าปลีก และภาคอุตสาหกรรมก่อสร้าง สามารถนำรายงาน Carbon Offset ไปใช้ประโยชน์ในมิติ ESG และรายงานความยั่งยืนระดับสากลได้อย่างถูกต้องตามกฎเกณฑ์"
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

