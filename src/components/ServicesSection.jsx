import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SERVICES = [
  { icon: '📱', title: "Remplacement de l'Écran", desc: "Dalle OLED/LCD premium. Rendu d'origine garanti.", num: '01' },
  { icon: '🔋', title: "Restauration de la Batterie", desc: "Cellule haute capacité. Autonomie retrouvée.", num: '02' },
  { icon: '🔲', title: "Réparation Vitre Arrière", desc: "Finition d'usine. Intégrité esthétique parfaite.", num: '03' },
  { icon: '⚙️', title: "Pièces Internes", desc: "Connecteurs, haut-parleurs, boutons. Tout est possible.", num: '04' },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-primary/60 hover:bg-[#1f1f1f] transition-all duration-400 cursor-pointer hover:-translate-y-2 hover:shadow-[0_12px_50px_rgba(255,200,0,0.15)]"
    >
      {/* Num */}
      <span className="absolute top-4 right-5 font-heading font-black text-6xl text-white/5 group-hover:text-primary/15 transition-colors select-none">
        {service.num}
      </span>

      <div className="text-4xl mb-6">{service.icon}</div>
      <h3 className="font-heading font-black uppercase text-2xl text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
        {service.title}
      </h3>
      <p className="text-base text-white/50 font-body leading-relaxed mb-8">{service.desc}</p>

      <a
        href="#commander"
        className="group/btn inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 font-body"
      >
        Commander
        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="services" ref={ref} className="relative py-20 overflow-hidden">
      {/* Parallax bg accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-primary/70 mb-3 font-body">Nos Prestations</p>
          <h2 className="font-heading font-black uppercase text-6xl md:text-7xl text-white leading-none">Services</h2>
          <p className="text-white/40 font-body text-lg mt-4 max-w-xl">Chaque réparation est réalisée avec précision, en utilisant uniquement des pièces de qualité certifiée.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}