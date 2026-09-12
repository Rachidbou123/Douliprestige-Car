import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS } from '../data/config';
import { MapPin, Phone, MessageCircle, Star } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-24 pb-24 md:pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-bold tracking-tight block mb-1">{BUSINESS.shortName.toUpperCase()}</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#8A8170] block mb-6">Cars Agadir</span>
            <p className="text-[#D0C8B8] max-w-sm font-medium mb-8 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="inline-flex items-center space-x-2 text-[#1A1A1A] bg-[#F5F2EB] px-4 py-2 rounded-sm">
               <Star size={16} className="text-yellow-500 fill-current" />
               <span className="font-bold">{BUSINESS.rating}</span>
               <span className="text-[10px] uppercase tracking-widest font-bold ltr:ml-2 rtl:mr-2 opacity-80">{BUSINESS.ratingCount}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#8A8170] mb-6">{t.footer.contactDirect}</h4>
            <ul className="space-y-5 text-[#D0C8B8] font-medium">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white transition-colors flex items-center group">
                  <span className="bg-white/10 p-2 rounded-sm group-hover:bg-white/20 transition-colors shrink-0">
                    <Phone size={16} />
                  </span>
                  <span className="ltr:ml-3 rtl:mr-3" dir="ltr">{BUSINESS.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={BUSINESS.whatsappBaseUrl} className="hover:text-[#25D366] transition-colors flex items-center group">
                  <span className="bg-white/10 p-2 rounded-sm group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] transition-colors shrink-0">
                    <MessageCircle size={16} />
                  </span>
                  <span className="ltr:ml-3 rtl:mr-3">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors block break-words mt-2 text-sm opacity-80">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#8A8170] mb-6">{t.footer.agency}</h4>
            <address className="not-italic text-[#D0C8B8] font-medium space-y-4">
              <p className="flex items-start">
                 <MapPin size={18} className="mt-1 shrink-0 text-[#8A8170]" />
                 <span className="ltr:ml-3 rtl:mr-3 leading-relaxed">{BUSINESS.address}</span>
              </p>
              <p className="ltr:pl-8 rtl:pr-8 opacity-80 text-sm">{BUSINESS.hours}</p>
              <p className="pt-2">
                <a 
                  href={BUSINESS.mapsLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:bg-white hover:text-[#1A1A1A] transition-colors text-sm font-bold inline-block border border-white/20 px-5 py-2.5 rounded-sm"
                >
                  {t.footer.map}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8A8170] font-medium">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. {t.footer.rights}</p>
          <div className="mt-4 md:mt-0 space-x-6 rtl:space-x-reverse">
            <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.conditions}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
