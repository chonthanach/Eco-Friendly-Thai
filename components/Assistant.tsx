/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Sparkles, X, MessageSquare, Bot } from 'lucide-react';
import { EftLogoIcon } from './Logo';

interface AssistantProps {
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
  lang: 'th' | 'en';
}

const Assistant: React.FC<AssistantProps> = ({ isOpenExternal, onCloseExternal, lang }) => {
  const [isOpenLocal, setIsOpenLocal] = useState(false);
  const isOpen = isOpenExternal !== undefined ? isOpenExternal : isOpenLocal;
  const setIsOpen = (val: boolean) => {
    if (onCloseExternal && !val) {
      onCloseExternal();
    }
    setIsOpenLocal(val);
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: lang === 'th' 
        ? 'สวัสดีครับ ผมคือผู้ช่วย AI ด้านเศรษฐกิจหมุนเวียนของ บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (EFT) ยินดีให้คำปรึกษาเรื่องการรีไซเคิลกล่องเครื่องดื่ม สเปกผลิตภัณฑ์ Upcycle หรือขอใบเสนอราคาครับ'
        : 'Welcome to Eco Friendly Thai. I am your circular economy AI advisor. How may I assist you with recycled pulp, upcycled building materials, or factory capacities today?', 
      timestamp: Date.now() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = lang === 'th' ? [
    'แผ่นสมาร์ทบอร์ดมีขนาดเท่าไหร่?',
    'โรงงาน 3 แห่ง ตั้งอยู่ที่ไหนบ้าง?',
    'เก้าอี้นักเรียน Eco ใช้กล่องกี่ใบ?',
    'ขอใบเสนอราคาต้องทำอย่างไร?'
  ] : [
    'What are the dimensions of Smart Board?',
    'Where are the 3 factory sites located?',
    'How many cartons in Eco Chair Top?',
    'How to request a quotation?'
  ];

  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === 'model') {
        return [{
          role: 'model',
          text: lang === 'th' 
            ? 'สวัสดีครับ ผมคือผู้ช่วย AI ด้านเศรษฐกิจหมุนเวียนของ บริษัท อีโค่ เฟรนด์ลี่ ไทย จำกัด (EFT) ยินดีให้คำปรึกษาเรื่องการรีไซเคิลกล่องเครื่องดื่ม สเปกผลิตภัณฑ์ Upcycle หรือขอใบเสนอราคาครับ'
            : 'Welcome to Eco Friendly Thai. I am your circular economy AI advisor. How may I assist you with recycled pulp, upcycled building materials, or factory capacities today?', 
          timestamp: Date.now()
        }];
      }
      return prev;
    });
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendText = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendText(inputValue);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-[92vw] sm:w-[420px] h-[580px] mb-4 flex flex-col overflow-hidden border border-slate-200 animate-slide-up-fade">
          
          {/* Header */}
          <div className="bg-[#0A261C] p-4 text-white flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 p-1 border border-[#8AE0B3]/40 flex items-center justify-center shadow-sm">
                <EftLogoIcon className="w-full h-full" />
              </div>
              <div>
                <span className="font-sans font-bold text-sm tracking-wide block text-white">
                  {lang === 'th' ? 'EFT Circular AI Advisor' : 'EFT Eco AI Advisor'}
                </span>
                <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {lang === 'th' ? 'พร้อมให้คำปรึกษาตลอด 24 ชม.' : 'Online 24/7'}
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                <div 
                  className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-none shadow-sm' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 text-xs">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center shadow-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendText(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-[11px] font-medium transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={lang === 'th' ? 'พิมพ์คำถาม เช่น จำนวนกล่อง, สเปกสินค้า...' : 'Ask about cartons, specs, or plants...'} 
                className="flex-1 bg-slate-100 border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-colors placeholder-slate-400 text-slate-800"
              />
              <button 
                onClick={() => handleSendText(inputValue)}
                disabled={!inputValue.trim() || isThinking}
                className="bg-emerald-600 text-white px-4 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Floating Pill Button matching screenshot: "💬 ปรึกษาเรา" */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#059669] hover:bg-[#047857] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 z-50 flex items-center gap-2 font-bold text-sm border-2 border-emerald-400/40 group shadow-emerald-900/30"
        aria-label="Consultation"
      >
        <MessageSquare className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
        <span>{lang === 'th' ? 'ปรึกษาเรา' : 'Consult Us'}</span>
      </button>
    </div>
  );
};

export default Assistant;
