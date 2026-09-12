import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero, RentalRequestWidget } from './components/Hero';
import { Fleet } from './components/Fleet';
import { AirportSection } from './components/Airport';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

function AppContent() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white pb-[60px] md:pb-0 relative">
      <Header />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-6 relative z-30">
          <RentalRequestWidget />
        </div>

        <Fleet />
        <AirportSection />
        <Process />
        <Faq />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
