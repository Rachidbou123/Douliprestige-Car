import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS } from '../data/config';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const Faq = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#F5F2EB]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#1A1A1A]">
            {t.faq.title}
          </h2>
        </div>
        
        <div className="space-y-4">
          {t.faq.questions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white border transition-colors duration-300 rounded-sm ${isOpen ? 'border-[#1A1A1A]' : 'border-[#EAE5D9]'}`}
              >
                <button
                  className="w-full text-left rtl:text-right px-6 py-6 md:px-8 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1A1A1A]"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-bold text-[#1A1A1A] ltr:pr-8 rtl:pl-8 leading-tight">{faq.q}</h3>
                  <ChevronDown 
                    className={`shrink-0 text-[#1A1A1A] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-[#4A4A4A] font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center p-10 bg-white border border-[#EAE5D9] rounded-sm shadow-sm">
          <h4 className="font-bold text-xl text-[#1A1A1A] mb-3">{t.faq.moreTitle}</h4>
          <p className="text-[#666666] mb-6 font-medium">{t.faq.moreDesc}</p>
          <a 
            href={BUSINESS.whatsappBaseUrl} 
            className="inline-flex items-center justify-center font-bold text-[#1A1A1A] hover:text-[#25D366] transition-colors group"
          >
            <MessageCircle size={20} className="ltr:mr-2 rtl:ml-2 group-hover:scale-110 transition-transform" /> 
            <span className="underline underline-offset-4 decoration-2 decoration-[#EAE5D9] group-hover:decoration-[#25D366] transition-colors">{t.faq.chatNow}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
