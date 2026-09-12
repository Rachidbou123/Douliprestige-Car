import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS } from '../data/config';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const MobileActionBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#EAE5D9] flex justify-between items-stretch z-40 md:hidden h-[60px] pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <a 
        href={`tel:${BUSINESS.phone}`} 
        className="flex-1 flex flex-col justify-center items-center text-[#1A1A1A] hover:bg-[#F5F2EB] active:bg-[#EAE5D9] transition-colors border-r rtl:border-l rtl:border-r-0 border-[#EAE5D9]"
      >
        <Phone size={20} strokeWidth={2.5} />
        <span className="text-[9px] font-bold uppercase mt-1 tracking-wider">{t.actions.callShort}</span>
      </a>
      
      <a 
        href={BUSINESS.whatsappBaseUrl} 
        className="flex-1 flex flex-col justify-center items-center bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1da851] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)] z-10"
      >
        <MessageCircle size={22} strokeWidth={2.5} />
        <span className="text-[9px] font-bold uppercase mt-1 tracking-wider">WhatsApp</span>
      </a>
      
      <a 
        href="#fleet" 
        className="flex-1 flex flex-col justify-center items-center text-[#1A1A1A] hover:bg-[#F5F2EB] active:bg-[#EAE5D9] transition-colors border-l rtl:border-r rtl:border-l-0 border-[#EAE5D9]"
      >
        <Calendar size={20} strokeWidth={2.5} />
        <span className="text-[9px] font-bold uppercase mt-1 tracking-wider">{t.actions.book}</span>
      </a>
    </div>
  );
};
