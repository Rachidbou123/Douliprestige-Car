import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS } from '../data/config';
import { Button } from './Button';
import { MapPin, CheckCircle2 } from 'lucide-react';

export const AirportSection = () => {
  const { t } = useLanguage();

  return (
    <section id="airport" className="py-24 bg-white border-t border-[#EAE5D9]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="mb-10 text-left rtl:text-right">
              <span className="block text-[11px] uppercase tracking-widest font-bold mb-3 text-[#8A8170]">
                {t.airport.subtitle}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#1A1A1A] leading-tight">
                {t.airport.title}
              </h2>
            </div>
            
            <div className="space-y-8 text-[#4A4A4A] text-lg font-medium leading-relaxed">
              <p>{t.airport.desc}</p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#1A1A1A] mt-1 shrink-0 ltr:mr-4 rtl:ml-4" size={20} />
                  <span dangerouslySetInnerHTML={{ __html: t.airport.point1.replace(/^([^:]+:)/, '<strong>$1</strong>') }} />
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#1A1A1A] mt-1 shrink-0 ltr:mr-4 rtl:ml-4" size={20} />
                  <span dangerouslySetInnerHTML={{ __html: t.airport.point2.replace(/^([^:]+:)/, '<strong>$1</strong>') }} />
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#1A1A1A] mt-1 shrink-0 ltr:mr-4 rtl:ml-4" size={20} />
                  <span dangerouslySetInnerHTML={{ __html: t.airport.point3.replace(/^([^:]+:)/, '<strong>$1</strong>') }} />
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <Button href={BUSINESS.whatsappBaseUrl} variant="primary" className="shadow-md">
                {t.airport.cta}
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] bg-[#F5F2EB] p-3 relative border border-[#EAE5D9] shadow-lg">
               <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200" 
                  alt={t.airport.mapAirport} 
                  className="w-full h-full object-cover filter grayscale opacity-90 rounded-sm"
                  loading="lazy"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-5 shadow-2xl flex items-center space-x-4 rtl:space-x-reverse rounded-sm border border-[#EAE5D9]">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A] text-lg leading-tight">{t.airport.mapAirport}</div>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-[#8A8170] mt-1">{t.airport.mapCity}</div>
                  </div>
                </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#EAE5D9_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
