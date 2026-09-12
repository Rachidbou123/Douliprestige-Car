import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t.process.step1Title, desc: t.process.step1Desc },
    { number: "02", title: t.process.step2Title, desc: t.process.step2Desc },
    { number: "03", title: t.process.step3Title, desc: t.process.step3Desc },
    { number: "04", title: t.process.step4Title, desc: t.process.step4Desc }
  ];

  return (
    <section id="process" className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="block text-[11px] uppercase tracking-widest font-bold mb-3 text-[#D0C8B8]">
            {t.process.subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white">
            {t.process.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 border border-white/10 hover:border-white/30 transition-colors bg-white/5 rounded-sm">
              <div className="font-serif text-5xl text-white/10 font-bold mb-6 select-none">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[#D0C8B8] font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
