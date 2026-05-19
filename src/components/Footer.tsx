import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center rotate-45">
                <span className="text-brand-black font-bold -rotate-45 text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold tracking-widest text-sm leading-tight text-xl">CYNOSURE</span>
                <span className="text-brand-gold font-display text-[10px] tracking-[0.3em] font-medium">CONSTRUCTION LIMITED</span>
              </div>
            </div>
            <p className="max-w-md text-stone-500 text-sm leading-loose font-light">
              Premium modern construction solutions specializing in high-performance residential and commercial developments. Excellence in every concrete detail.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-stone-500 text-sm hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-stone-500 text-sm hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#projects" className="text-stone-500 text-sm hover:text-brand-gold transition-colors">Projects</a></li>
              <li><a href="#about" className="text-stone-500 text-sm hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-stone-500 text-sm hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-stone-500 text-sm font-light">
                <span className="text-white block mb-1">Head Office:</span>
                Arepo, Ogun State, NG
              </li>
              <li className="text-stone-500 text-sm font-light">
                <span className="text-white block mb-1">Direct:</span>
                0813 968 8391
              </li>
              <li className="text-stone-500 text-sm font-light">
                <span className="text-white block mb-1">Email:</span>
                info@cynosure.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-[10px] uppercase tracking-widest">
            © 2026 Cynosure Construction Limited. All Rights Reserved.
          </p>
          <div className="flex gap-8 items-center">
            <div className="flex gap-3 items-center">
               <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
               <span className="text-[9px] text-brand-gold uppercase tracking-[0.2em] font-bold">Live Operations Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
