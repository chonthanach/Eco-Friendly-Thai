/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, PLANT_SITES, SERVICES, CONTACT_INFO } from '../constants';

const getSystemInstruction = () => {
  const productCatalog = PRODUCTS.map(p => 
    `- ${p.name} (${p.nameTh}): ฿${p.price} (Wholesale: ฿${p.wholesalePrice || 'N/A'}). Upcycles ${p.cartonCount} UHT cartons, avoids ${p.carbonOffsetKg} kgCO2e. Dimensions: ${p.dimensions}, Warranty: ${p.warranty}. Features: ${p.features.join(', ')}`
  ).join('\n');

  const plantInfo = PLANT_SITES.map(pl => 
    `- ${pl.name} (${pl.nameTh}): Capacity ${pl.capacity}, Located in ${pl.location}. Focus: ${pl.focus}.`
  ).join('\n');

  return `You are the AI Sustainability & Technical Concierge for "Eco Friendly Thai Co., Ltd." (บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด), Thailand's leading circular economy enterprise founded in 2013 by Managing Director Somyos Watthanapanich.

Company Overview:
- We operate 3 plant sites: Sai Noi (Nonthaburi HQ & Upcycling Innovation), Nakorn Pathom (Industrial Recycled Pulp), and Ratchaburi (Expansion mega-plant), with a total capacity of 2,000 MT/month.
- 3 Core Services: Recycled Pulp Production, Upcycled Plastic/Composite Building Materials & Furniture, and Refuse-Derived Fuel (RDF) from plastic.
- Certified under "Upcycle Circular Economy" by the Department of Climate Change and Environment (DCCE), Thailand.
- Founding partner of the "Ton-Kla Rai Tung" (ต้นกล้าไร้ถัง) zero-waste school network with CP ALL, SCGC, and SCGP.
- Official Cohort of the Thailand Plastics Circularity Accelerator (The Incubation Network).

Product Catalog:
${productCatalog}

Plant Sites:
${plantInfo}

Contact Details:
- Phones: 02-9261388-9, 065-961-6199
- Email: rikka.ecofriendlythai@gmail.com
- Main Headquarters: 99/92 Moo 2 Saima, Muang Nonthaburi 11000 / Sai Yai, Sai Noi, Nonthaburi 11150.

Guidelines:
1. Tone: Professional, warm, environmentally grounded, and technically knowledgeable.
2. Answer customer questions about UHT carton recycling math, carbon offset reduction (kgCO2e), product durability (waterproof, termite-proof, 5-10 year warranty), installation methods, and wholesale discounts.
3. Support both Thai (ไทย) and English fluidly depending on the language the user speaks.
4. Keep responses clear, concise, and helpful.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      // Provide intelligent offline circular economy response
      const lower = newMessage.toLowerCase();
      if (lower.includes('กล่อง') || lower.includes('carton') || lower.includes('chair') || lower.includes('เก้าอี้')) {
        return "ท็อปเก้าอี้นักเรียน Eco Chair Top ผลิตจากกล่องนม UHT รีไซเคิลจำนวน 998 กล่อง ช่วยลดการปล่อยก๊าซเรือนกระจกได้ถึง 13.45 kgCO2e ต่อตัว ทนน้ำ ปลวกไม่กิน และรับประกันการใช้งานยาวนาน 5 ปีครับ";
      }
      if (lower.includes('โรงงาน') || lower.includes('plant') || lower.includes('กำลังผลิต') || lower.includes('capacity')) {
        return "Eco Friendly Thai มีโรงงานมาตรฐาน 3 แห่ง (ไทรน้อย นนทบุรี, นครปฐม และราชบุรี) มีกำลังการผลิตรวม 2,000 เมตริกตันต่อเดือน รองรับการผลิตเยื่อกระดาษรีไซเคิลและวัสดุก่อสร้างอัปไซเคิลครบวงจรครับ";
      }
      return "สวัสดีครับ ยินดีต้อนรับสู่ บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด ผู้เชี่ยวชาญด้านเศรษฐกิจหมุนเวียนและการแปรรูปกล่องเครื่องดื่ม UHT เป็นเยื่อกระดาษและวัสดุก่อสร้างรักษ์โลก สอบถามข้อมูลผลิตภัณฑ์หรือคำนวณการลดคาร์บอนได้เลยครับ";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ขออภัยครับ ขณะนี้ระบบขัดข้องชั่วคราว คุณสามารถติดต่อสอบถามโดยตรงได้ที่ฝ่ายบริการลูกค้า โทร 02-9261388-9 หรืออีเมล rikka.ecofriendlythai@gmail.com ครับ";
  }
};
