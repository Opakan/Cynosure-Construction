import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-4"
            >
              Start Your Project
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-light mb-12 tracking-tight leading-none text-brand-white"
            >
              Let's Build Your <br />
              <span className="font-semibold italic text-brand-gold">Legacy</span> Together
            </motion.h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border-l-2 border-brand-gold flex items-center justify-center">
                  <Phone size={20} className="text-brand-gold" />
                </div>
                <div>
                  <div className="text-brand-concrete text-[10px] uppercase tracking-widest mb-1 opacity-60">Direct Line</div>
                  <div className="text-2xl text-brand-white font-display">0813 968 8391</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border-l-2 border-brand-gold flex items-center justify-center">
                  <Mail size={20} className="text-brand-gold" />
                </div>
                <div>
                  <div className="text-brand-concrete text-[10px] uppercase tracking-widest mb-1 opacity-60">Send Email</div>
                  <div className="text-2xl text-brand-white font-display border-b border-brand-gold/30 pb-1">info@cynosure.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-stone-400 text-[10px] uppercase tracking-widest mb-1">Availability</div>
                  <div className="text-xl text-white font-display uppercase tracking-widest">24/7 SUPPORT AVAILABLE</div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-4">
              <button className="flex-1 px-6 py-4 bg-[#25D366] text-white flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-widest transition-transform hover:scale-105">
                <MessageSquare size={16} />
                WhatsApp Us
              </button>
              <button className="flex-1 px-6 py-4 bg-brand-gold text-brand-black flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-widest transition-transform hover:scale-105">
                <Phone size={16} />
                Call Agent
              </button>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass p-8 md:p-12"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-brand-gold transition-colors outline-none font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+234 ..."
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-brand-gold transition-colors outline-none font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Project Type</label>
                <select className="w-full bg-brand-black border border-white/10 py-3 px-4 text-stone-400 focus:border-brand-gold transition-colors outline-none font-light appearance-none">
                  <option>Residential Construction</option>
                  <option>Commercial Project</option>
                  <option>Renovation & Finishing</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border border-white/10 py-3 px-4 text-white focus:border-brand-gold transition-colors outline-none font-light resize-none"
                />
              </div>

              <button className="w-full py-5 bg-brand-gold text-brand-black font-bold text-[10px] uppercase tracking-widest hover:bg-brand-white transition-all">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
