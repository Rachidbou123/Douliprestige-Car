import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS } from '../data/config';
import { FLEET } from '../data/fleet';
import { Button } from './Button';
import { MapPin } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-40 md:pt-48 md:pb-56 overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000" 
          alt="Route au Maroc" 
          className="w-full h-full object-cover object-center opacity-40"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-[#F5F2EB]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6">
          <MapPin size={14} className="text-white" />
          <span className="text-white text-xs font-semibold tracking-wider uppercase ltr:ml-2 rtl:mr-2">
            {t.hero.location}
          </span>
        </div>
        
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t.hero.title }}
        />
        
        <p className="text-[#F5F2EB]/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export const RentalRequestWidget = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    pickup: t.request.pickupAirport,
    pickupDate: '',
    returnDate: '',
    vehicle: FLEET[0].name,
    phone: ''
  });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pickupDate || !formData.returnDate || !formData.phone) return;
    
    // Prevent impossible dates
    if (new Date(formData.returnDate) < new Date(formData.pickupDate)) {
      alert(language === 'fr' 
        ? "La date de retour ne peut pas être avant la date de prise en charge." 
        : language === 'en' 
          ? "The return date cannot be before the pick-up date."
          : "لا يمكن أن يكون تاريخ العودة قبل تاريخ الاستلام."
      );
      return;
    }
    
    setFormState('submitting');
    
    const formattedDates = `${formData.pickupDate} au ${formData.returnDate}`;
    
    let message = t.request.messageTemplate
      .replace('{pickup}', formData.pickup)
      .replace('{dates}', formattedDates)
      .replace('{vehicle}', formData.vehicle)
      .replace('{phone}', formData.phone);
      
    const encodedMessage = encodeURIComponent(message);
    
    setTimeout(() => {
      setFormState('success');
      window.open(`${BUSINESS.whatsappBaseUrl}?text=${encodedMessage}`, '_blank');
      setTimeout(() => setFormState('idle'), 3000);
    }, 800);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-5xl mx-auto -mt-24 relative z-20 border border-[#EAE5D9]">
      <div className="mb-6 flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        <span className="text-sm font-medium text-[#4A4A4A] ltr:ml-2 rtl:mr-2">{t.request.title}</span>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5 items-end">
        
        <div className="col-span-1 lg:col-span-1">
          <label htmlFor="pickup" className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8170] mb-2">{t.request.pickup}</label>
          <select 
            id="pickup"
            className="w-full border-b-2 border-[#EAE5D9] pb-2 pt-1 bg-transparent text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] transition-colors"
            value={formData.pickup}
            onChange={(e) => setFormData({...formData, pickup: e.target.value})}
            required
          >
            <option value={t.request.pickupAirport}>{t.request.pickupAirport}</option>
            <option value={t.request.pickupAgency}>{t.request.pickupAgency}</option>
            <option value={t.request.pickupHotel}>{t.request.pickupHotel}</option>
          </select>
        </div>
        
        <div className="col-span-1 lg:col-span-1">
          <label htmlFor="pickupDate" className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8170] mb-2">
            {language === 'fr' ? 'Départ' : language === 'en' ? 'Pick-up' : 'المغادرة'}
          </label>
          <input 
            type="date" 
            id="pickupDate"
            min={today}
            className="w-full border-b-2 border-[#EAE5D9] pb-2 pt-1 bg-transparent text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] transition-colors"
            value={formData.pickupDate}
            onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
            required
          />
        </div>

        <div className="col-span-1 lg:col-span-1">
          <label htmlFor="returnDate" className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8170] mb-2">
            {language === 'fr' ? 'Retour' : language === 'en' ? 'Return' : 'العودة'}
          </label>
          <input 
            type="date" 
            id="returnDate"
            min={formData.pickupDate || today}
            className="w-full border-b-2 border-[#EAE5D9] pb-2 pt-1 bg-transparent text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] transition-colors"
            value={formData.returnDate}
            onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
            required
          />
        </div>

        <div className="col-span-1 lg:col-span-1">
          <label htmlFor="vehicle" className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8170] mb-2">{t.request.vehicle}</label>
          <select 
            id="vehicle"
            className="w-full border-b-2 border-[#EAE5D9] pb-2 pt-1 bg-transparent text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] transition-colors"
            value={formData.vehicle}
            onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
            required
          >
            {FLEET.map(v => <option key={v.id} value={v.name}>{v.name}</option>)}
            <option value="Non décidé">{t.request.noVehicle}</option>
          </select>
        </div>

        <div className="col-span-1 lg:col-span-1">
          <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8170] mb-2">{t.request.phone}</label>
          <input 
            type="tel" 
            id="phone"
            dir="ltr"
            placeholder="+212 6..."
            className="w-full border-b-2 border-[#EAE5D9] pb-2 pt-1 bg-transparent text-[#1A1A1A] font-medium focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder-[#BDB6A8]"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>
        
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full h-12 text-sm"
            disabled={formState === 'submitting'}
          >
            {formState === 'submitting' ? t.request.submitting : t.request.submit}
          </Button>
        </div>
      </form>
    </div>
  );
};
