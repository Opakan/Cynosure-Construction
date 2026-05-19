import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Layers, ShieldCheck } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Residential',
    desc: 'Luxury homes designed for modern comfort and aesthetic prestige.',
    icon: Home,
    delay: 0.1
  },
  {
    number: '02',
    title: 'Commercial',
    desc: 'High-rise office complexes and dynamic retail environments.',
    icon: Building2,
    delay: 0.2
  },
  {
    number: '03',
    title: 'Supervision',
    desc: 'Expert oversight ensuring precision at every stage of execution.',
    icon: ShieldCheck,
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: service.delay, duration: 0.8 }}
            className="group p-12 border-r border-white/5 hover:bg-brand-gray transition-all cursor-pointer flex flex-col gap-6"
          >
            <div className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">
              {service.number}. {service.title}
            </div>
            
            <p className="text-brand-concrete text-[13px] leading-relaxed font-light">
              {service.desc}
            </p>

            <div className="mt-8 flex items-center justify-between">
               <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <ArrowIcon />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
