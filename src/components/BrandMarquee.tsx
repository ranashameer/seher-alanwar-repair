import React from 'react';
import { BRANDS_DATA } from '../data/brands';
import { ShieldCheck } from 'lucide-react';

export const BrandMarquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const brandsList = [...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <section className="py-12 bg-obsidian-950 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
          <ShieldCheck className="w-4 h-4 text-cyanTech-400" />
          <span>Multi-Brand Certified Service Center</span>
        </div>
        <h2 className="text-sm sm:text-base font-semibold text-slate-400">
          We stock genuine OEM factory spare parts for all major Dubai household brands:
        </h2>
      </div>

      {/* Marquee Wrapper with left/right fade gradients */}
      <div className="relative w-full overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-2">
          {brandsList.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 mx-3 sm:mx-4 px-4 sm:px-5 py-3 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-electric-500/40 hover:bg-obsidian-800 transition-all cursor-default shadow-sm shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-electric-500/60" />
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-base font-black tracking-wider text-slate-100 group-hover:text-white font-sans">
                  {brand.logoText}
                </span>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  {brand.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
