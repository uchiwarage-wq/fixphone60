import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Rajdhani : police techy & bold, en accord avec le logo */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        .brand-name {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #ffffff 0%, #ffc800 60%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.2rem;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-lg mx-auto flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <img src="/Logo1.png" alt="FixPhone60" className="h-8 w-auto" />
            <span className="brand-name">FixPhone60</span>
          </div>
          <button onClick={() => setMenuOpen(true)} className="text-white md:hidden">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm text-white/70 hover:text-primary transition-colors font-body">Services</a>
            <a href="#commander" className="bg-primary text-black text-sm font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform font-body">Commander</a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {['Services', "Garanties", 'Commander'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-heading text-5xl font-black uppercase text-white hover:text-primary transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
