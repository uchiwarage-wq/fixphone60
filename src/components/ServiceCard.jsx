import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ index, title, subtitle, image, onCommander }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col min-w-[300px] md:min-w-[380px] flex-1"
    >
      {/* Number */}
      <span className="font-display text-7xl md:text-8xl italic text-border/40 leading-none select-none">
        {num}
      </span>

      {/* Image container */}
      <div className="relative mt-4 aspect-[4/3] overflow-hidden bg-card rounded-sm">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'scale-105 opacity-80' : 'scale-100 opacity-50'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Hairline */}
      <div className="w-full h-[0.5px] bg-border/30 mt-6" />

      {/* Content */}
      <div className="mt-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl md:text-3xl italic text-foreground leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 mt-auto">
          <button
            onClick={onCommander}
            className="group/btn inline-flex items-center gap-3 border border-primary/30 px-6 py-3 text-xs tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
          >
            Commander
            <span className="inline-block w-4 h-[0.5px] bg-current group-hover/btn:w-8 transition-all duration-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}