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
    capacity: '800 MT / Month',
    focus: 'Upcycled Building Materials & Eco Products Innovation',
    description: 'Our primary innovation and composite product manufacturing plant in Nonthaburi, specializing in thermo-compression of UHT carton aluminum-poly layers into high-durability Eco Boards, Eco Bricks, Tiles, and School furniture.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    established: '2013',
    specs: [
      { label: 'Facility Area', value: '12,000 sq.m.' },
      { label: 'Main Equipment', value: 'High-Tonnage Hydraulic Hot Press, Shredders, Compactor lines' },
      { label: 'Workforce', value: '65 skilled engineers & operators' },
      { label: 'Certifications', value: 'DCCE Circular Economy, ISO 9001:2015' }
    ]
  },
  {
    id: 'nakornpathom',
    name: 'Nakorn Pathom Plant',
    nameTh: 'โรงงานนครปฐม (ศูนย์แปรรูปเยื่อกระดาษรีไซเคิล)',
    location: 'Kamphaeng Saen, Nakhon Pathom Province',
    capacity: '600 MT / Month',
    focus: 'Industrial Recycled Pulp Refining for Packaging & Fiber Cement',
    description: 'Dedicated industrial pulping plant separating high-purity virgin-grade cellulose fibers from post-consumer milk & beverage UHT cartons. Serving packaging manufacturers and fiber cement producers across Southeast Asia.',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    established: '2016',
    specs: [
      { label: 'Pulping Technology', value: 'Hydrapulper hydro-mechanical fiber separation' },
      { label: 'Water Recycling', value: '98% closed-loop zero-discharge water system' },
      { label: 'Daily Input', value: '35 Tons of raw waste carton bales' },
      { label: 'Main Output', value: 'Clean unbleached Kraft recycled pulp (Air-dry sheets/bales)' }
    ]
  },
  {
    id: 'ratchaburi',
    name: 'Ratchaburi Plant',
    nameTh: 'โรงงานราชบุรี (ศูนย์ขยายกำลังผลิตระดับเมกะแพลนต์)',
    location: 'Photharam Industrial Zone, Ratchaburi Province',
    capacity: '1,000 MT / Month (Phase 3 Expanded)',
    focus: 'High-Volume Pulp Refining & Refuse-Derived Fuel (RDF) Processing',
    description: 'Our newest state-of-the-art facility expanded to double EFT capacity to 2,000 MT/month. Features automated sorting, heavy-duty densification for RDF pellets, and large-scale carton processing.',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200',
    established: '2021 (Expanded 2022)',
    specs: [
      { label: 'Installed Capacity', value: '1,000 MT / Month' },
      { label: 'Energy Recovery', value: 'RDF Pelletizing with 4,800+ kcal/kg calorific value' },
      { label: 'Automation Level', value: 'SCADA-controlled continuous pulping' },
      { label: 'Expansion Area', value: '25,000 sq.m.' }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'pulp',
    title: 'Recycled Pulp Production',
    titleTh: 'การผลิตเยื่อกระดาษรีไซเคิลเกรดอุตสาหกรรม',
    description: 'We produce premium quality recycled pulp from beverage cartons with exceptional tensile strength for packaging, tissue, and fiber cement manufacturers.',
    details: 'Using advanced hydro-pulper separation without toxic chlorine chemicals, our process extracts long Kraft cellulose fibers from UHT cartons, delivering high freeness and high burst index pulp.',
    iconName: 'Layers',
    outputCapacity: '1,500 MT / Month',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=1000',
    targetIndustries: ['Corrugated Box & Packaging', 'Tissue Paper Mills', 'Fiber Cement Construction Boards', 'Molded Pulp Packaging']
  },
  {
    id: 'plastic',
    title: 'Upcycled Plastic & Composite Materials',
    titleTh: 'การแปรรูปพลาสติกอะลูมิเนียมเป็นวัสดุก่อสร้างและเฟอร์นิเจอร์',
    description: 'Transforming leftover Poly-Al (Polyethylene & Aluminum foil) from UHT cartons into weather-proof building blocks, smart boards, eco roof tiles, and furniture.',
    details: 'Through thermocompression molding, we fabricate waterproof, termite-free, asbestos-free building panels and structural blocks with superior acoustic and thermal insulation.',
    iconName: 'Boxes',
    outputCapacity: '500 MT / Month',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
    targetIndustries: ['Green Architecture & Construction', 'School Furniture & Public Amenities', 'Landscape Pavers & Walkways', 'Interior Decorative Cladding']
  },
  {
    id: 'rdf',
    title: 'Refuse-Derived Fuel (RDF) from Plastic',
    titleTh: 'เชื้อเพลิงขยะพลังงานสูง (RDF) จากเศษพลาสติก',
    description: 'Converting non-recyclable multi-layer plastic fractions into high-calorific Refuse-Derived Fuel (RDF-5) for industrial cement kilns and biomass power plants.',
    details: 'We provide sustainable co-processing feedstock that replaces fossil coal, lowering industrial greenhouse gas emissions and achieving absolute zero-landfill disposal.',
    iconName: 'Flame',
    outputCapacity: '300 MT / Month',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    targetIndustries: ['Cement Kilns Co-processing', 'Biomass & Waste-to-Energy Power Plants', 'Industrial Boiler Facilities']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-chair-top',
    name: 'ECO CHAIR TOP',
    nameTh: 'ท็อปเก้าอี้นักเรียน Eco Upcycle',
    tagline: '998 UHT cartons transformed into school furniture.',
    description: 'Upcycled durable chair seat top engineered from 998 beverage cartons with Department of Climate Change and Environment certification.',
    longDescription: 'The Eco Chair Top is designed for standard school desk-and-chair steel frames. Manufactured by high-heat hydraulic compression of Poly-Aluminum composite derived from 998 recycled UHT cartons (300cc). Completely waterproof, termite-proof, splinter-free, and guaranteed for 5 years.',
    price: 110,
    originalPrice: 200,
    discountPercent: 45,
    wholesalePrice: 90,
    minWholesaleQty: 100,
    dimensions: '40.5 x 43.5 x 1.5 cm',
    weightKg: 3.61,
    coveragePerSqm: '5.6 pieces / sq.m.',
    cartonCount: 998,
    carbonOffsetKg: 13.45,
    certification: 'Upcycle Circular Economy Certified (2024-2027 by DCCE Thailand)',
    warranty: '5 Years (Broken cases replaced free)',
    category: 'School & Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000'
    ],
    features: [
      'Made from 998 Recycled UHT Cartons (300cc)',
      '13.45 kgCO2e Carbon Footprint Reduction',
      'Waterproof, Heat-Resistant & Termite-Proof',
      'Standard Mount for Steel Classroom Frames',
      '5-Year Durability Replacement Warranty'
    ],
    inStock: true
  },
  {
    id: 'p-brick',
    name: 'ECO BRICK',
    nameTh: 'อิฐบล็อกก่อผนัง Eco Brick',
    tagline: 'Lightweight, ultra-strong building block for walls & planters.',
    description: 'High-density interlocking building block made from 719 UHT cartons. Certified Upcycle Circular Economy material.',
    longDescription: 'Eco Bricks replace conventional cement blocks with an eco-composite alternative that offers superior acoustic dampening, moisture resistance, and thermal insulation. Ideal for perimeter walls, interior partition accents, garden retaining walls, and DIY eco-structures.',
    price: 36,
    originalPrice: 50,
    discountPercent: 28,
    wholesalePrice: 32,
    minWholesaleQty: 500,
    dimensions: '10.0 x 30.0 x 10.0 cm',
    weightKg: 2.60,
    coveragePerSqm: '40.0 pieces / sq.m.',
    cartonCount: 719,
    carbonOffsetKg: 9.69,
    certification: 'Upcycle Circular Economy Certified (DCCE Thailand)',
    warranty: '5 Years Warranty',
    category: 'Building & Decor',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000'
    ],
    features: [
      'Made from 719 Recycled UHT Cartons',
      '9.69 kgCO2e Carbon Offset per Brick',
      'Zero Water Absorption & No Cracking',
      'Excellent Thermal & Sound Insulation',
      '40.0 pcs required per square meter'
    ],
    inStock: true
  },
  {
    id: 'p-smart-board',
    name: 'ECO SMART BOARD',
    nameTh: 'แผ่นสมาร์ทบอร์ด Eco Smart Board',
    tagline: 'Versatile sheet for ceiling, interior walls, and partitions.',
    description: 'Heavy-duty 0.5 cm thick upcycled board constructed from 1,629 beverage cartons. Impact-resistant and 100% moisture immune.',
    longDescription: 'Eco Smart Board provides an eco-friendly substitute for plywood, gypsum, and fiber cement boards. Produced via continuous high-pressure thermo-lamination without formaldehyde resins. Perfect for interior partitions, ceiling baffles, wet area walls, and acoustic panels.',
    price: 120,
    originalPrice: 200,
    discountPercent: 40,
    wholesalePrice: 90,
    minWholesaleQty: 200,
    dimensions: '60.0 x 120.0 x 0.5 cm',
    weightKg: 5.89,
    coveragePerSqm: '1.3 pieces / sq.m.',
    cartonCount: 1629,
    carbonOffsetKg: 21.95,
    certification: 'Upcycle Circular Economy Certified (2024-2027 DCCE)',
    warranty: '5 Years Warranty',
    category: 'Building & Decor',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
    ],
    features: [
      'Made from 1,629 Recycled UHT Cartons',
      '21.95 kgCO2e Carbon Offset per Board',
      'Non-Flammable & Termite-Proof',
      'Can be sawn, drilled, nailed, and screwed easily',
      'Smooth clean surface ready for painting or natural look'
    ],
    inStock: true
  },
  {
    id: 'p-block',
    name: 'ECO BLOCK',
    nameTh: 'บล็อกปูพื้น Eco Block',
    tagline: 'High-strength paving block for sidewalks, driveways & landscape.',
    description: 'Durable paving block made from 196 UHT cartons with high skid-resistance and natural earthy finish.',
    longDescription: 'Eco Blocks offer extreme compressive strength for pedestrian plazas, walkway paths, and public parks. Made from recycled Poly-Al composites that will never chip like cement or absorb water during monsoon rains.',
    price: 18,
    originalPrice: 200,
    discountPercent: 91,
    wholesalePrice: 14,
    minWholesaleQty: 1000,
    dimensions: '10.0 x 20.0 x 3.5 cm',
    weightKg: 0.71,
    coveragePerSqm: '50.0 pieces / sq.m.',
    cartonCount: 196,
    carbonOffsetKg: 2.64,
    certification: 'Upcycle Circular Economy Certified (2023-2026 DCCE)',
    warranty: '5 Years Warranty',
    category: 'Paving & Ground',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1000'
    ],
    features: [
      'Made from 196 Recycled Cartons per Block',
      '2.64 kgCO2e Sequestered Carbon',
      'High Slip-Resistance & UV Stability',
      'Lightweight compared to solid concrete',
      '50 pieces per square meter'
    ],
    inStock: true
  },
  {
    id: 'p-tile',
    name: 'ECO TILE',
    nameTh: 'กระเบื้องปูพื้น Eco Tile',
    tagline: 'Outdoor garden and patio tile with modern stone texture.',
    description: 'Lightweight 30x30 cm modular tiles made from 122 UHT cartons for terraces, walkways, and wet areas.',
    longDescription: 'Eco Tiles provide a beautiful stone-textured floor finish that is lightweight, impact resistant, and 100% moisture proof. Can be installed directly onto sand beds or concrete slabs with standard tile adhesives.',
    price: 45,
    originalPrice: 120,
    discountPercent: 62,
    wholesalePrice: 38,
    minWholesaleQty: 300,
    dimensions: '30.0 x 30.0 x 0.5 cm',
    weightKg: 0.44,
    coveragePerSqm: '11.1 pieces / sq.m.',
    cartonCount: 122,
    carbonOffsetKg: 1.64,
    certification: 'Upcycle Circular Economy Certified (DCCE Thailand)',
    warranty: '5 Years Warranty',
    category: 'Tile & Roof',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Made from 122 Recycled UHT Cartons',
      '1.64 kgCO2e Carbon Offset per Tile',
      'Zero Water Infiltration',
      'Earthy natural mottled aesthetic'
    ],
    inStock: true
  },
  {
    id: 'p-roof',
    name: 'ECO ROOF SHEET',
    nameTh: 'แผ่นหลังคาประหยัดพลังงาน Eco Roof',
    tagline: 'Superior heat-insulating corrugated eco roofing sheets.',
    description: 'Engineered roofing sheet made from 2,450 cartons. Reflects radiant solar heat and reduces indoor temperature by up to 4°C.',
    longDescription: 'Eco Roof corrugated sheets utilize the reflective properties of recycled aluminum flakes embedded in high-density polyethylene. The result is an ultra-durable roofing panel that eliminates rain noise, resists corrosion in chemical/coastal environments, and requires zero asbestos.',
    price: 195,
    originalPrice: 650,
    discountPercent: 70,
    wholesalePrice: 165,
    minWholesaleQty: 100,
    dimensions: '50.0 x 120.0 x 0.5 cm',
    weightKg: 8.50,
    coveragePerSqm: '1.6 pieces / sq.m.',
    cartonCount: 2450,
    carbonOffsetKg: 32.50,
    certification: 'Upcycle Circular Economy Certified (DCCE Thailand)',
    warranty: '10 Years Warranty',
    category: 'Tile & Roof',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
    features: [
      '2,450 Cartons Recycled per Sheet',
      '32.50 kgCO2e Greenhouse Gas Avoidance',
      'Cuts Indoor Heat by up to 4°C (High Solar Reflectance)',
      'Substantially Quieter during Heavy Rain',
      'Rust-Proof & Chemical Resistant'
    ],
    inStock: true
  },
  {
    id: 'p-wood',
    name: 'ECO WOOD PLANKS',
    nameTh: 'ไม้เทียมสังเคราะห์ Eco Wood',
    tagline: 'Synthetic lumber planks for conference tables, parquet flooring & fencing.',
    description: 'Upcycled composite wood planks made from 1,150 cartons with authentic wood grain feel and zero rot.',
    longDescription: 'Eco Wood planks are crafted for commercial and residential applications including outdoor decking, conference table tops, wall battens, and perimeter fence slats. No painting required, never rots, and will not warp under tropical sun.',
    price: 180,
    originalPrice: 380,
    discountPercent: 52,
    wholesalePrice: 145,
    minWholesaleQty: 100,
    dimensions: '10.0 x 100.0 x 1.5 cm',
    weightKg: 2.88,
    coveragePerSqm: '10.0 pieces / sq.m.',
    cartonCount: 1150,
    carbonOffsetKg: 15.80,
    certification: 'Upcycle Circular Economy Certified (DCCE)',
    warranty: '5 Years Warranty',
    category: 'Building & Decor',
    imageUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Made from 1,150 Recycled UHT Cartons',
      '15.80 kgCO2e Carbon Offset per Plank',
      '100% Water, Rot and Termite Proof',
      'Workable with Standard Woodworking Tools'
    ],
    inStock: true
  },
  {
    id: 'p-table-top',
    name: 'ECO TABLE TOP',
    nameTh: 'ท็อปโต๊ะเรียน Eco Table Top',
    tagline: 'Spacious 60x40 cm school & study desk surface.',
    description: 'Heavy-duty study desk top made from 1,391 beverage cartons. Smooth, scratch-resistant, and stain-resistant.',
    longDescription: 'Eco Table Top is engineered to withstand intensive everyday classroom and office usage. Resistant to pen inks, liquid spills, and impact scratches. Seamlessly replaces old wooden tops on standard school metal frames.',
    price: 280,
    originalPrice: 1800,
    discountPercent: 85,
    wholesalePrice: 240,
    minWholesaleQty: 50,
    dimensions: '40.0 x 60.0 x 2.5 cm',
    weightKg: 5.03,
    coveragePerSqm: '4.1 pieces / sq.m.',
    cartonCount: 1391,
    carbonOffsetKg: 18.75,
    certification: 'Upcycle Circular Economy Certified (DCCE)',
    warranty: '5 Years Warranty',
    category: 'School & Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Made from 1,391 Recycled UHT Cartons',
      '18.75 kgCO2e Carbon Offset per Top',
      'Ink-Resistant & Easy Clean Surface',
      'Rounded Safety Edges for Students',
      '5-Year Institutional Warranty'
    ],
    inStock: true
  }
];

export const PARTNERS_COHORT: PartnerCohort[] = [
  {
    name: 'ECO FRIENDLY THAI (EFT)',
    role: 'Pulp & Poly-Al Upcycling Leader',
    logoText: 'EFT',
    description: 'Pioneering Thailand circular economy with 2,000 MT/mo capacity transforming waste paper and beverage cartons.'
  },
  {
    name: 'CIRAC',
    role: 'Circular Innovation Partner',
    logoText: 'CIRAC',
    description: 'Collaborative initiative advancing plastic recycling technologies and circularity metrics.'
  },
  {
    name: 'CORSAIR',
    role: 'Chemical Recycling & Bio-Oil',
    logoText: 'CORSAIR',
    description: 'Transforming mixed plastic waste into advanced bio-oil for sustainable industrial feeds.'
  },
  {
    name: 'Trash Lucky',
    role: 'Waste Separation & Public Engagement',
    logoText: 'Trash Lucky',
    description: 'Incentivized recycling platform driving community collection and sorting across Bangkok.'
  },
  {
    name: '2nd Life',
    role: 'Ocean Bound Plastic Solutions',
    logoText: '2nd Life',
    description: 'Traceable ocean-bound plastic collection infrastructure supporting global sustainability goals.'
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
  { name: 'KRS Industrial', logo: 'KRS', desc: 'Major packaging and paperboard manufacturer' },
  { name: 'SCG Chemicals (SCGC)', logo: 'SCGC', desc: 'Green polymer and recycling alliance' },
  { name: 'CP ALL (7-Eleven)', logo: 'CP ALL', desc: 'Ton-Kla Rai Tung youth waste management network' },
  { name: 'SCGP Packaging', logo: 'SCGP', desc: 'Sustainable packaging ecosystem collaboration' },
  { name: 'DCCE Thailand', logo: 'DCCE', desc: 'Department of Climate Change and Environment certification' }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'ต้นกล้าไร้ถัง: ภาคีเครือข่ายระบบนิเวศจัดการขยะ สร้างเยาวชนกู้โลก',
    titleTh: 'Ton-Kla Rai Tung: Zero-Waste Ecosystem Network Empowering Thai Youth',
    date: 'June 22, 2022',
    category: 'Press Release & Social Impact',
    author: 'EFT Public Relations & Network Alliance',
    excerpt: 'Eco Friendly Thai partners with SCGC, CP ALL, and SCGP to turn school carton waste into new school desks and chairs for underprivileged schools across Thailand.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
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
    titleTh: 'EFT คว้าชัยชนะในโครงการ SME Scale Up Program Pitching Day',
    date: 'June 25, 2022',
    category: 'Award & Milestone',
    author: 'Thailand SME Development Council',
    excerpt: 'Eco Friendly Thai won 1st Place in the Thailand SME Scale Up Program, recognizing breakthrough circular economy scalability and 2,000 MT/month expansion.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
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
    titleTh: 'ประกาศผล 5 องค์กรชั้นนำ โครงการเร่งรัดนวัตกรรมพลาสติกหมุนเวียนแห่งประเทศไทย',
    date: 'December 17, 2021',
    category: 'International Network',
    author: 'The Incubation Network & The Circulate Initiative',
    excerpt: 'The Incubation Network announced the wonderful cohort of 5 selected organizations including Eco Friendly Thai for the Thailand Plastics Circularity Accelerator.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(React.Fragment, null,
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
  }
];

export const FEATURED_VIDEO = {
  title: 'SME กล้าเปลี่ยน EP 37: ใช้ขยะสร้างธุรกิจ 300 ล้านบาท อีโค่ เฟรนด์ลี่ ไทย',
  subtitle: 'บทสัมภาษณ์เจาะลึก คุณสมยศ วัฒน์พานิช (กรรมการผู้จัดการ บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด) โดย ธนาคารไทยเครดิต SME กล้าให้',
  embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Clean interactive video placeholder
  youtubeId: 'sme-eco-friendly-thai',
  views: '450,000+ views',
  duration: '14:28 min',
  highlights: [
    'จุดเริ่มต้นจากศูนย์ สู่โรงงานแปรรูปขยะมูลค่า 300 ล้านบาท',
    'เทคนิคการแยกเยื่อกระดาษขาวจากกล่องนม UHT โดยไม่ใช้สารเคมีฟอกขาวอันตราย',
    'การคิดค้นสูตรอัด Poly-Al เป็นแผ่นสมาร์ทบอร์ดและบล็อกปูพื้นทดแทนไม้และปูน',
    'วิสัยทัศน์ Zero-Waste สู่การขยายโรงงาน 3 แห่ง กำลังการผลิต 2,000 MT/เดือน'
  ]
};

export const CONTACT_INFO = {
  companyName: 'Eco Friendly Thai Company Limited',
  companyNameTh: 'บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด',
  registrationNo: '0125556012658',
  addressHeadquarters: '99/92 หมู่ 2 ต.ไทรม้า อ.เมืองนนทบุรี จ.นนทบุรี 11000',
  addressPlantSaiNoi: 'ตำบลไทรใหญ่ อำเภอไทรน้อย จังหวัดนนทบุรี 11150',
  addressPlantRatchaburi: '29/4 หมู่ที่ 7 ตำบลหนองอ้อ อำเภอบ้านโป่ง จังหวัดราชบุรี 70110',
  googleMapsUrl: 'https://maps.app.goo.gl/NQd78xLVNMuEWejU7',
  phones: ['02-9261388-9', '065-961-6199', '061-348-9292', '088-564-2993'],
  fax: '02-9245623',
  emails: ['contact@ecofriendlythai.com', 'rikka.ecofriendlythai@gmail.com'],
  workingHours: 'จันทร์ - เสาร์ : 08:30 - 17:30 น.',
  coordinates: { lat: 13.7818431, lng: 99.8969191 }
};
