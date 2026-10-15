import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Wrench, 
  Clock, 
  Sparkles, 
  CheckCircle,
  MapPin,
  Calendar,
  Zap,
  Truck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { DiagnosticWidget } from './DiagnosticWidget';
import { ApplianceVisualizer2D } from './ApplianceVisualizer2D';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [heroMode, setHeroMode] = useState<'triage' | '2d-visualizer'>('triage');

  const defaultWhatsApp = generateWhatsAppLink({
    urgency: 'Immediate (30-60 Min)',
  });

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* 2D Floating Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-electric-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyanTech-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating 2D Decorative Animated Stickers */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-28 left-6 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-obsidian-900/90 border-2 border-emerald-500/50 shadow-2d-sticker backdrop-blur-md z-20 pointer-events-none"
      >
        <span className="text-base">🇦🇪</span>
        <span className="text-[11px] font-black text-emerald-400 uppercase tracking-wider">
          Exclusively Dubai, UAE
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 left-12 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-obsidian-900/90 border-2 border-cyanTech-400/50 shadow-2d-sticker backdrop-blur-md z-20 pointer-events-none"
      >
        <span className="text-base">⚡</span>
        <span className="text-[11px] font-black text-cyanTech-300 uppercase tracking-wider">
          30–60 Min Van Arrival
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: High-Converting Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Exclusive Dubai Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950/90 border-2 border-electric-500/40 text-cyanTech-300 text-xs font-black tracking-wider uppercase mb-5 shadow-md">
              <span className="text-base leading-none">🇦🇪</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>EXCLUSIVELY DUBAI: 30–60 MIN DOORSTEP SERVICE</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5 font-sans">
              Broken Appliance?{' '}
              <span className="text-gradient-electric block sm:inline">
                We Fix It Fast,
              </span>{' '}
              Right at Your Doorstep.
            </h1>

            {/* Dynamic Subheader - Exclusively Dubai Focused */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              Dubai’s premier emergency repair center serving all Dubai residential communities. Same-day diagnostics and on-site fixes for{' '}
              <strong className="text-white underline decoration-electric-500/50">washing machines</strong>,{' '}
              <strong className="text-white underline decoration-cyanTech-400/50">refrigerators</strong>,{' '}
              <strong className="text-white underline decoration-safety-500/50">cooking ranges & ovens</strong>,{' '}
              <strong className="text-white underline decoration-electric-500/50">dishwashers</strong>, and{' '}
              <strong className="text-white">split ACs</strong>. 
              Certified Dubai technicians arrive in fully-equipped mobile service vans with 100% genuine parts.
            </p>

            {/* Primary Action Buttons (WhatsApp + Call) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              {/* Primary WhatsApp CTA with 2D click effect */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96, y: 1 }}
                href={defaultWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-7 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-whatsapp-glow transition-all border-b-4 border-emerald-700 active:border-b-0"
              >
                <MessageCircle className="w-5 h-5 fill-obsidian-950 text-whatsapp" />
                <span>Instant WhatsApp Dispatch</span>
              </motion.a>

              {/* Direct Emergency Call Button */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96, y: 1 }}
                href={BUSINESS_INFO.telLink}
                className="h-14 px-6 rounded-2xl bg-obsidian-800 hover:bg-obsidian-750 border-2 border-white/15 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-md transition-all group border-b-4 border-slate-700 active:border-b-0"
              >
                <div className="w-8 h-8 rounded-xl bg-electric-600/30 flex items-center justify-center text-electric-400 group-hover:bg-electric-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block font-medium">Dubai 24/7 Hotline</span>
                  <span className="font-extrabold text-white text-xs sm:text-sm">{BUSINESS_INFO.phoneDisplay}</span>
                </div>
              </motion.a>

              {/* Secondary Book Appointment Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96, y: 1 }}
                onClick={onOpenBooking}
                className="hidden sm:flex h-14 px-5 rounded-2xl bg-obsidian-850 hover:bg-obsidian-800 border-2 border-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider items-center justify-center gap-2 transition-all border-b-4 border-slate-700 active:border-b-0"
              >
                <Calendar className="w-4 h-4 text-electric-400" />
                <span>Book Service</span>
              </motion.button>
            </div>

            {/* Triple Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-obsidian-900/80 border border-white/10 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-electric-500/15 border border-electric-500/30 flex items-center justify-center text-electric-400 shrink-0">
                  <Wrench className="w-4 h-4 animate-wiggle-2d" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Licensed Dubai</h4>
                  <p className="text-[11px] text-slate-400">Master Technicians</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-obsidian-900/80 border border-white/10 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">90-Day UAE Warranty</h4>
                  <p className="text-[11px] text-slate-400">On Parts & Workmanship</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-obsidian-900/80 border border-white/10 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white leading-tight">4.9 / 5 Rating</span>
                  </div>
                  <p className="text-[11px] text-slate-400">150+ Verified Reviews</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: 2D Interactive Tool Switcher (Triage Widget OR 2D Simulator) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            {/* 2D Mode Switcher Pills */}
            <div className="flex items-center justify-center p-1 rounded-2xl bg-obsidian-950 border border-white/10 mb-3 w-fit mx-auto shadow-md">
              <button
                onClick={() => setHeroMode('triage')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  heroMode === 'triage'
                    ? 'bg-electric-600 text-white shadow-electric-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Instant Diagnostic</span>
              </button>

              <button
                onClick={() => setHeroMode('2d-visualizer')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  heroMode === '2d-visualizer'
                    ? 'bg-cyanTech-500 text-obsidian-950 font-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>2D Simulator</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {heroMode === 'triage' ? (
                <motion.div
                  key="triage"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <DiagnosticWidget />
                </motion.div>
              ) : (
                <motion.div
                  key="2d-visualizer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <ApplianceVisualizer2D />
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
