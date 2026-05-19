import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'The Eminence Estate',
    category: 'Luxury Residential',
    img: '/src/assets/images/modern_luxury_home_1779204534107.png',
    desc: 'A collection of 15 ultra-modern smart homes featuring sustainable energy solutions and premium architectural finishing.'
  },
  {
    title: 'Cynosure Business Plaza',
    category: 'Commercial Excellence',
    img: '/src/assets/images/luxury_commercial_building_1779204516114.png',
    desc: 'An iconic glass-facade commercial hub in the heart of the business district, designed for performance and prestige.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-gold text-xs uppercase tracking-[0.4em] font-semibold block mb-4 opacity-80"
        >
          Selected Works
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-light">Showcase of <span className="font-semibold italic text-brand-gold">Mastery</span></h2>
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            className="group relative h-[80vh] overflow-hidden flex items-center justify-center border-b border-white/5"
          >
            <div className="absolute inset-0 z-0">
              <motion.img 
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/20 transition-colors duration-700" />
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto px-12 flex flex-col justify-end h-full pb-20 md:pb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-gold" />
                  <span className="text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-4xl md:text-8xl font-light text-brand-white mb-6 tracking-tighter leading-none">
                  {project.title}
                </h3>
                <p className="max-w-xl text-stone-300 text-lg font-light leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {project.desc}
                </p>
                <button className="px-8 py-4 border border-white/40 text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                  Show Details
                </button>
              </motion.div>
            </div>

            {/* Cinematic light sweep effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               <div className="absolute -inset-x-full inset-y-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-1/2 group-hover:animate-sweep" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
