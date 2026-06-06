import React from 'react';
import { Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-lg mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <Wrench className="w-3.5 h-3.5 text-black" />
          </div>
          <span className="font-heading font-black uppercase text-sm text-white">FixPhone60</span>
        </div>
        <p className="text-xs text-white/30 font-body">
          © {new Date().getFullYear()} FixPhone60
        </p>
      </div>
    </footer>
  );
}