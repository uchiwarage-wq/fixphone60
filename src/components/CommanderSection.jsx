import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

export default function CommanderSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const handleUrgence = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&to=urgence.fixphone60@gmail.com&su=Urgence%20Réparation&body=Bonjour,%20j%27ai%20besoin%20d%27une%20réparation%20urgente.',
      '_blank'
    );
  };

  return (
    <section id="commander" ref={ref} className="relative py-20 overflow-hidden">
      {/* Parallax glows */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/12 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,200,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,200,0,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-primary/70 mb-5 font-body">Prêt à réparer ?</p>
          <h2 className="font-heading font-black uppercase text-6xl md:text-8xl text-white mb-4 leading-none">
            Confiez-nous<br />
            <span className="text-primary">votre appareil</span>
          </h2>
          <p className="text-white/50 font-body text-xl mb-12 max-w-lg mx-auto leading-relaxed">
            Contactez-nous dès maintenant pour un devis gratuit et rapide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={handleUrgence}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-black font-heading font-black uppercase text-2xl px-12 py-6 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,200,0,0.5)]"
            >
              <Mail className="w-5 h-5" />
              <span>Urgence</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-2xl" />
            </button>

            <a
              href="https://wa.me/33603848138"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1a1a1a] border border-white/15 text-white font-heading font-black uppercase text-2xl px-12 py-6 rounded-2xl hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(255,200,0,0.15)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <a
            href="mailto:contact.fixphone60@gmail.com"
            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm font-body"
          >
            <Mail className="w-4 h-4" />
            contact.fixphone60@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
