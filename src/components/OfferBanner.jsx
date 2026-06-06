import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OfferBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative py-10 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-0 w-72 h-72 rounded-full bg-primary/10 blur-[80px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-3 font-body">🔥 Offre Spéciale</p>
            <h3 className="font-heading font-black uppercase text-5xl md:text-6xl text-black leading-none mb-3">
              Écran + Batterie
            </h3>
            <p className="text-lg text-black/70 font-body">
              Les 2 réparations ensemble = prix réduit garanti ✅
            </p>
          </div>
          <div className="text-left md:text-right flex-shrink-0">
            <p className="text-base text-black/50 font-body">À partir de</p>
            <p className="text-black/50 text-xl font-body line-through">60€</p>
            <p className="font-heading font-black text-7xl text-black leading-none">35€</p>
            <p className="text-sm text-black/60 font-body">/ réparation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}