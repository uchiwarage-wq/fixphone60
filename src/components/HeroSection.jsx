import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SERVICES_QUICK = [
  { icon: '📱', label: 'Écran' },
  { icon: '🔋', label: 'Batterie' },
  { icon: '🔲', label: 'Vitre Arrière' },
  { icon: '⚙️', label: 'Pièces Internes' },
];

export default function HeroSection() {
  const ref = useRef(null);
  const [showPhone, setShowPhone] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Parallax animated background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#141414]" />
        {/* Yellow glow blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,200,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,200,0,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-sm font-bold tracking-[0.4em] uppercase text-white/50 mb-8 font-body"
        >
          Réparation Téléphone · Dans tout l'Oise
        </motion.p>

        {/* Big headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black uppercase leading-[0.88] text-[clamp(3.5rem,14vw,7rem)] text-white mb-1"
        >
          Remise à neuf
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-heading font-black uppercase text-[clamp(3.5rem,14vw,7rem)] text-primary block leading-[0.88]">Express,</span>
          <span className="font-heading font-black uppercase text-[clamp(3.5rem,14vw,7rem)] text-white block leading-[0.88] mb-10">Qualité Pro.</span>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/40 font-body text-lg mb-10 max-w-md leading-relaxed"
        >
          Votre smartphone remis à neuf en express avec des pièces certifiées.<br />
          Résultat garanti, devis gratuit, intervention le jour même.
        </motion.p>

        {/* Service pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {SERVICES_QUICK.map((s) => (
            <a
              key={s.label}
              href="#services"
              className="group flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-base font-bold text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hover:scale-105 font-body"
            >
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#commander"
            className="group relative inline-flex items-center gap-3 bg-primary text-black font-heading font-black uppercase text-xl px-10 py-5 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,200,0,0.5)]"
          >
            <span className="relative z-10">Commander maintenant</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <button
            onClick={() => setShowPhone(true)}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-base font-body border border-white/15 px-6 py-5 rounded-2xl hover:border-white/40"
          >
            📞 Appeler directement
          </button>
        </motion.div>
      </motion.div>

      {/* Phone modal */}
      {showPhone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowPhone(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1a1a1a] border border-white/10 rounded-3xl px-16 py-12 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Appelez-nous</p>
            <a
              href="tel:+33603848138"
              className="text-primary font-heading font-black text-5xl tracking-wide"
            >
              06 03 84 81 38
            </a>
            <p className="text-white/30 text-sm mt-6">Cliquez n'importe où pour fermer</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
