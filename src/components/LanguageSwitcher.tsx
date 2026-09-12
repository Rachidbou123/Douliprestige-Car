import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import { Language } from '../i18n/translations';

export const LanguageSwitcher = ({ isScrolled, mobileMenuOpen }: { isScrolled: boolean, mobileMenuOpen: boolean }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buttonTextColor = (isScrolled || mobileMenuOpen) ? 'text-[#1A1A1A]' : 'text-white';

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 ${buttonTextColor} hover:opacity-80 transition-opacity p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] rounded-sm`}
        aria-label="Changer de langue"
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-sm shadow-lg border border-[#EAE5D9] overflow-hidden z-50">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    language === lang.code ? 'bg-[#F5F2EB] font-bold text-[#1A1A1A]' : 'text-[#4A4A4A] hover:bg-[#F5F2EB] hover:text-[#1A1A1A]'
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
