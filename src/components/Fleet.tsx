import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Vehicle, FLEET } from '../data/fleet';
import { BUSINESS } from '../data/config';
import { Button } from './Button';
import { Settings, Fuel, Users, MessageCircle } from 'lucide-react';

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  const handleRequest = () => {
    const msg = t.fleet.messageTemplate.replace('{vehicle}', vehicle.name);
    window.open(`${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <article className="group bg-white border border-[#EAE5D9] rounded-sm overflow-hidden hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-[#1A1A1A] focus-within:border-transparent">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F2EB] p-6 flex items-center justify-center">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className={`w-full object-contain transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] border border-[#EAE5D9] shadow-sm">
          {vehicle.category}
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-5">
          <div className="ltr:pr-4 rtl:pl-4">
            <h3 className="font-serif text-2xl text-[#1A1A1A] leading-tight mb-1">{vehicle.name}</h3>
          </div>
          <div className="text-right rtl:text-left flex-shrink-0">
            {vehicle.pricePerDay ? (
              <>
                <span className="block text-xl font-bold text-[#1A1A1A]">{vehicle.pricePerDay} DH</span>
                <span className="text-[10px] text-[#8A8170] uppercase font-bold tracking-wider">{t.fleet.perDay}</span>
              </>
            ) : (
              <span className="block text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">{t.fleet.consult}</span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-8 pt-5 border-t border-[#EAE5D9] flex-grow">
          <div className="flex items-center text-sm text-[#4A4A4A] font-medium">
            <Settings size={16} className="text-[#8A8170]" />
            <span className="ltr:ml-2 rtl:mr-2">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center text-sm text-[#4A4A4A] font-medium">
            <Fuel size={16} className="text-[#8A8170]" />
            <span className="ltr:ml-2 rtl:mr-2">{vehicle.fuel}</span>
          </div>
          <div className="flex items-center text-sm text-[#4A4A4A] font-medium">
            <Users size={16} className="text-[#8A8170]" />
            <span className="ltr:ml-2 rtl:mr-2">{vehicle.seats} {t.fleet.seats}</span>
          </div>
        </div>
        
        <Button 
          onClick={handleRequest}
          variant="outline" 
          className="w-full mt-auto"
        >
          {t.fleet.request}
        </Button>
      </div>
    </article>
  );
};

export const Fleet = () => {
  const { t } = useLanguage();

  return (
    <section id="fleet" className="py-24 bg-[#F5F2EB]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-12 md:mb-16 text-center">
          <span className="block text-[11px] uppercase tracking-widest font-bold mb-3 text-[#8A8170]">
            {t.fleet.subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#1A1A1A]">
            {t.fleet.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[#666666] mb-8 max-w-xl mx-auto text-lg font-medium">
            {t.fleet.otherModels}
          </p>
          <Button 
            href={BUSINESS.whatsappBaseUrl} 
            variant="primary" 
            icon={<MessageCircle size={18} />}
            className="shadow-md"
          >
            {t.fleet.checkAvailability}
          </Button>
        </div>
      </div>
    </section>
  );
};
