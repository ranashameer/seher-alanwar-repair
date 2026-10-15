import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const MobileBottomDeck: React.FC = () => {
  const whatsAppLink = generateWhatsAppLink({
    urgency: 'Immediate (30-60 Min)',
  });

  return (
    <aside
      aria-label="Emergency Contact Floating Action Deck"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-obsidian-950/95 backdrop-blur-2xl border-t border-white/10 px-3 pt-2.5 pb-3 safe-area-bottom shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Left Action: Direct Call Button (45% width) */}
        <motion.a
          whileTap={{ scale: 0.96 }}
          href={BUSINESS_INFO.telLink}
          className="w-[45%] h-12 flex items-center justify-center gap-2 rounded-xl bg-obsidian-800 active:bg-obsidian-700 border border-white/15 text-white font-bold text-xs uppercase tracking-wider shadow-md focus:outline-none focus:ring-2 focus:ring-electric-500"
          aria-label="Call emergency appliance technician"
        >
          <div className="w-7 h-7 rounded-lg bg-electric-600/30 flex items-center justify-center text-electric-400">
            <Phone className="w-4 h-4 fill-electric-400/20" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] text-slate-400 font-semibold">Immediate</span>
            <span className="text-xs font-bold text-white tracking-normal">Call Now</span>
          </div>
        </motion.a>

        {/* Right Action: WhatsApp Live 30m Arrival (55% width) */}
        <motion.a
          whileTap={{ scale: 0.96 }}
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[55%] h-12 flex items-center justify-center gap-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs uppercase tracking-wide shadow-whatsapp-glow relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="WhatsApp live technician dispatch with 30 minute arrival"
        >
          {/* Subtle animated shine effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Pulsing beacon indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-obsidian-950 opacity-50"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-obsidian-950"></span>
          </span>

          <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-obsidian-900/80">
              30m Arrival
            </span>
            <span className="text-xs font-black text-obsidian-950">WhatsApp Live</span>
          </div>
        </motion.a>
      </div>
    </aside>
  );
};
