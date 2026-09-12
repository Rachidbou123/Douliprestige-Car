import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS } from '../data/config';
import { Menu, X } from 'lucide-react';
import { MessageCircle, Phone } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.fleet, href: '#fleet' },
    { name: t.nav.airport, href: '#airport' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex flex-col group z-50 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] rounded-sm p-1">
          <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-[#1A1A1A]' : 'text-white'}`}>
            {BUSINESS.shortName.toUpperCase()}
          </span>
          <span className={`text-[0.65rem] uppercase tracking-widest font-medium transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-[#8A8170]' : 'text-white/80'}`}>
            Cars Agadir
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          <ul className="flex space-x-6 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors focus:outline-none focus:underline ${isScrolled ? 'text-[#4A4A4A] hover:text-[#1A1A1A]' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse border-l rtl:border-r rtl:border-l-0 border-[#EAE5D9] ltr:pl-4 rtl:pr-4">
            <LanguageSwitcher isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} />
            <Button 
              variant={isScrolled ? 'whatsapp' : 'secondary'} 
              href={BUSINESS.whatsappBaseUrl}
              className="!py-2 !px-4 text-sm font-semibold shadow-sm"
              icon={<MessageCircle size={16} />}
            >
              WhatsApp
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle & Language */}
        <div className="flex items-center space-x-2 lg:hidden z-50">
          <LanguageSwitcher isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} />
          
          <button 
            className={`p-2 -mr-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] rounded-sm ${isScrolled || mobileMenuOpen ? 'text-[#1A1A1A]' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#F5F2EB] z-40 flex flex-col pt-24 pb-8 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex-grow overflow-y-auto px-6 flex flex-col justify-center">
            <ul className="flex flex-col space-y-6 text-center w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full border-b border-[#EAE5D9] pb-4">
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="font-serif text-2xl text-[#1A1A1A] hover:text-[#8A8170] transition-colors focus:outline-none focus:underline block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 w-full flex flex-col space-y-4">
               <Button 
                 href={BUSINESS.whatsappBaseUrl} 
                 variant="whatsapp" 
                 className="w-full text-lg shadow-md" 
                 icon={<MessageCircle size={20} />}
               >
                 {t.actions.whatsapp}
               </Button>
               <Button 
                 href={`tel:${BUSINESS.phone}`} 
                 variant="outline" 
                 className="w-full text-lg" 
                 icon={<Phone size={20} />}
               >
                 {t.actions.call}
               </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
