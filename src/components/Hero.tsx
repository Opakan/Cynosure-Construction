import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_architecture_golden_hour_1779204498948.png"
          alt="Cinematic Architecture"
          className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-brand-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          <div className="mb-6 overflow-hidden">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block text-brand-gold text-[12px] uppercase tracking-[0.4em] font-semibold mb-2 opacity-80"
            >
              Excellence in Execution
            </motion.span>
            <div className="h-px w-24 bg-brand-gold" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tight mb-8">
            Building <span className="font-semibold italic text-brand-gold">Excellence</span> <br />
            With Precision
          </h1>
          
          <p className="max-w-lg text-brand-concrete text-lg font-light leading-relaxed mb-12">
            Modern construction solutions designed for quality living. 
            We transform architectural visions into structural masterpieces through engineering precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-brand-gold text-brand-black font-bold text-xs uppercase tracking-widest transition-all hover:bg-brand-white"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-brand-white/30 text-brand-white font-bold text-xs uppercase tracking-widest hover:border-brand-gold transition-all"
            >
              Request Consultation
            </motion.a>
          </div>
        </motion.div>

        <div className="hidden md:block md:col-span-5 relative">
           <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent z-10"></div>
           <div className="relative aspect-[4/5] bg-brand-gray border border-brand-gold/10 transform rotate-6 shadow-2xl flex flex-col justify-end p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                 <img src="/src/assets/images/modern_luxury_home_1779204534107.png" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="relative z-20 border-l-2 border-brand-gold pl-6 mb-8">
                 <div className="text-6xl font-bold text-brand-white mb-2">128+</div>
                 <div className="text-[10px] uppercase tracking-[0.2em] text-brand-concrete">Premium Projects Completed</div>
              </div>
              <div className="relative z-20 text-[10px] uppercase tracking-[0.5em] text-brand-gold opacity-40">
                Architectural_Archive_v4.0
              </div>
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-brand-gold" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
