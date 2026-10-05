/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PlantSites from './components/PlantSites';
import Services from './components/Services';
import IncubationNetwork from './components/IncubationNetwork';
import ProductGrid from './components/ProductGrid';
import VideoSection from './components/VideoSection';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import { Product, JournalArticle, ViewState, PlantSite } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [inquiryProduct, setInquiryProduct] = useState<string | null>(null);
  const [lang, setLang] = useState<'th' | 'en'>('th');
  const [isAiOpen, setIsAiOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => prev === 'th' ? 'en' : 'th');
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const tryScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        try {
          window.history.pushState(null, '', `#${targetId}`);
        } catch (err) {
          // Ignore iframe security error
        }
        return true;
      }
      return false;
    };

    if (!tryScroll()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (tryScroll() || attempts > 15) {
          clearInterval(interval);
        }
      }, 40);
    }
  };

  // Navigation handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (view.type !== 'home') {
      setView({ type: 'home' });
      window.scrollTo(0, 0);
      setTimeout(() => scrollToSection(targetId), 30);
    } else {
      scrollToSection(targetId);
    }
  };

  // When user wants to order a product, navigate to Contact Us with product pre-filled
  const handleContactForProduct = (product: Product) => {
    const productName = lang === 'th' && product.nameTh ? product.nameTh : product.name;
    setInquiryProduct(productName);
    setView({ type: 'home' });
    setTimeout(() => {
      scrollToSection('contact');
    }, 80);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#1B4D3E] selection:text-white">

      {/* Sticky Global Navigation */}
      <Navbar
        onNavClick={handleNavClick}
        lang={lang}
        onToggleLang={toggleLanguage}
        onSelectLang={(l) => setLang(l)}
        onOpenAi={() => setIsAiOpen(true)}
        isSubPage={view.type !== 'home'}
        currentView={view.type}
      />

      <main>
        {view.type === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreProducts={() => scrollToSection('products')}
              onExplorePlants={() => scrollToSection('plants')}
              onWatchVideo={() => scrollToSection('video')}
              lang={lang}
            />

            {/* 2. About Section */}
            <About lang={lang} />

            {/* 3. Plant Sites (Sai Noi, Nakorn Pathom, Ratchaburi) */}
            <PlantSites lang={lang} />

            {/* 4. Core Services (Recycled Pulp, Plastics/Upcycling, RDF) */}
            <Services
              lang={lang}
              onConsultService={(serviceName) => {
                setInquiryProduct(serviceName);
                scrollToSection('contact');
              }}
            />

            {/* 5. The Incubation Network & Cohort Partners */}
            <IncubationNetwork lang={lang} />

            {/* 6. Upcycle Eco Store (Chair Top, Brick, Smart Board, Block, Tile, Roof, Wood) */}
            <ProductGrid
              onProductClick={(p) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'product', product: p });
              }}
              lang={lang}
            />

            {/* 7. Featured Video / Media (SME กล้าเปลี่ยน EP 37) */}
            <VideoSection lang={lang} />

            {/* 8. Press & Newsroom */}
            <Journal
              onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
              }}
              lang={lang}
            />

            {/* 9. Contact & Quotation Form */}
            <Contact 
              lang={lang} 
              prefilledProduct={inquiryProduct}
              onClearPrefilledProduct={() => setInquiryProduct(null)}
            />
          </>
        )}

        {/* Product Detail View (View Only + Contact to Order) */}
        {view.type === 'product' && (
          <ProductDetail
            product={view.product}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
            onContactOrder={handleContactForProduct}
            lang={lang}
          />
        )}

        {/* Journal Article Detail View */}
        {view.type === 'journal' && (
          <JournalDetail
            article={view.article}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('press'), 50);
            }}
            lang={lang}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handleNavClick} lang={lang} />

      {/* AI Circular Advisor Concierge */}
      <Assistant
        isOpenExternal={isAiOpen}
        onCloseExternal={() => setIsAiOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
