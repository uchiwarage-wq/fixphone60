import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PILLARS = [
  { icon: '⚡', title: 'Réparation rapide', desc: 'Résultat le jour même dans la majorité des cas.' },
  { icon: '🛡️', title: 'Garantie incluse', desc: 'Chaque intervention est couverte par notre garantie qualité.' },
  { icon: '💬', title: 'Devis gratuit', desc: 'Estimation rapide, sans engagement, sans surprise.' },
];

export default function TrustSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="garanties" ref={ref} className="relative py-16 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-primary/70 mb-3 font-body">Pourquoi nous choisir</p>
          <h2 className="font-heading font-black uppercase text-6xl md:text-7xl text-white leading-none">Garanties</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,200,0,0.12)] transition-all duration-300"
            >
              <div className="text-5xl mb-5">{p.icon}</div>
              <p className="font-heading font-black uppercase text-2xl text-white mb-3 group-hover:text-primary transition-colors">{p.title}</p>
              <p className="text-base text-white/40 font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}