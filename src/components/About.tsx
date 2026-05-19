import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Users } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Years Experience', value: '14' },
  { label: 'Team Experts', value: '45+' },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-stone-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative"
        >
          <div className="aspect-[4/5] relative z-10 overflow-hidden">
            <img 
              src="/src/assets/images/architectural_workspace_1779204555572.png"
              alt="Architectural Workspace"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-brand-gold/20 -z-0 hidden md:block" />
          <div className="absolute top-10 -left-10 w-32 h-32 bg-brand-gold/5 backdrop-blur-3xl -z-0" />
          
          <div className="absolute bottom-6 left-6 p-8 glass max-w-xs block">
             <p className="text-white text-sm italic font-light leading-relaxed">
               "Quality is not an act, it is a habit. We build with the soul of an architect and the precision of an engineer."
             </p>
             <div className="mt-4 h-[1px] w-12 bg-brand-gold" />
          </div>
        </motion.div>

        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-4"
          >
            Our Philosophy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Engineering <span className="text-brand-concrete">Trust</span> <br />
            Through Execution
          </motion.h2>
          
          <p className="text-stone-400 text-lg font-light leading-relaxed mb-12">
            At Cynosure Construction Limited, we believe that the foundation of any great structure is trust. 
            For over a decade, we have been at the forefront of modern architectural excellence in Nigeria, 
            delivering high-value residential and commercial estates with uncompromising quality.
          </p>

          <div className="grid grid-cols-2 gap-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-brand-gold pl-6"
              >
                <div className="text-4xl font-bold text-brand-white mb-1 font-display">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-concrete font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-brand-gold/30 rounded-full flex items-center justify-center">
                 <Shield size={18} className="text-brand-gold" />
              </div>
              <span className="text-white text-sm font-medium tracking-wide">Certified Quality Standards</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-brand-gold/30 rounded-full flex items-center justify-center">
                 <Target size={18} className="text-brand-gold" />
              </div>
              <span className="text-white text-sm font-medium tracking-wide">Client-Centric Execution</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Segment / Location Callout */}
      <div id="location" className="mt-32 max-w-7xl mx-auto px-6">
        <div className="glass p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="max-w-md">
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Our Headquarters</h4>
              <p className="text-stone-400 text-sm leading-loose">
                Plot 20, Scheme 1, Beachland Estate, <br />
                Beside Jubilee House opposite NNPC, <br />
                Arepo, Ogun State
              </p>
           </div>
           <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
              <div className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Operational Hours</div>
              <div className="text-xl font-display text-white">OPEN 24 HOURS</div>
              <button className="mt-4 px-8 py-3 bg-white text-brand-black text-[10px] uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors">
                View On Map
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
