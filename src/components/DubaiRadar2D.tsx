import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radar, 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Navigation,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { DUBAI_AREAS } from '../data/areas';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const DubaiRadar2D: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState(DUBAI_AREAS[0]);

  const liveUnits = [
    { id: 1, unit: 'Mobile Van Unit #1', area: 'International City', eta: '15-20 min', status: 'Standby at Workshop' },
    { id: 2, unit: 'Mobile Van Unit #2', area: 'Dubai Silicon Oasis (DSO)', eta: '25 min', status: 'Active on Route' },
    { id: 3, unit: 'Mobile Van Unit #3', area: 'Mirdif & Uptown', eta: '30 min', status: 'Ready for Dispatch' },
    { id: 4, unit: 'Mobile Van Unit #4', area: 'Al Warqa', eta: '25 min', status: 'Standby' },
  ];

  return (
    <div className="rounded-3xl bg-obsidian-900 border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left">
      
      {/* 2D Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>2D Live Dubai Fleet Radar</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
            Live Doorstep Dispatch Monitor
          </h3>
          <p className="text-xs text-slate-400">
            Real-time technician positions servicing residential apartments & villas exclusively across Dubai
          </p>
        </div>

        {/* 2D Moving Van Mini-Animation */}
        <div className="flex items-center gap-3 bg-obsidian-950/80 px-4 py-2.5 rounded-2xl border border-white/10 shrink-0">
          <motion.div
            animate={{ x: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-cyanTech-400 flex items-center justify-center text-obsidian-950 font-black shadow-md"
          >
            <Truck className="w-5 h-5" />
          </motion.div>
          <div>
            <span className="text-[10px] text-slate-400 block font-semibold">DUBAI RESPONSE</span>
            <span className="text-xs font-black text-emerald-400">30–60 MIN ARRIVAL</span>
          </div>
        </div>
      </div>

      {/* Grid: 2D Radar Screen (Left) + Active Units Feed (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-center">
        
        {/* 2D RADAR DISPLAY (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-obsidian-950 rounded-2xl border border-white/10 relative overflow-hidden">
          
          {/* Radar Circles */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-emerald-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.1)]">
            <div className="absolute w-44 h-44 rounded-full border border-emerald-500/25 border-dashed" />
            <div className="absolute w-28 h-28 rounded-full border border-emerald-500/35" />
            <div className="absolute w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Crosshairs */}
            <div className="absolute top-0 bottom-0 w-px bg-emerald-500/20" />
            <div className="absolute left-0 right-0 h-px bg-emerald-500/20" />

            {/* Rotating 2D Radar Sweep Line */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent pointer-events-none"
            />

            {/* Live Pulsing Neighborhood Blips */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="absolute top-10 left-12 flex items-center gap-1 bg-obsidian-900/90 px-1.5 py-0.5 rounded border border-emerald-400/50 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] font-bold text-white">Int'l City</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
              className="absolute bottom-12 right-10 flex items-center gap-1 bg-obsidian-900/90 px-1.5 py-0.5 rounded border border-cyanTech-400/50 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyanTech-400" />
              <span className="text-[9px] font-bold text-white">Silicon Oasis</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              className="absolute top-12 right-14 flex items-center gap-1 bg-obsidian-900/90 px-1.5 py-0.5 rounded border border-amber-400/50 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[9px] font-bold text-white">Mirdif</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, delay: 1.4 }}
              className="absolute bottom-16 left-12 flex items-center gap-1 bg-obsidian-900/90 px-1.5 py-0.5 rounded border border-electric-400/50 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
              <span className="text-[9px] font-bold text-white">Al Warqa</span>
            </motion.div>
          </div>

          <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> 4 Vans Active
            </span>
            <span>•</span>
            <span className="text-cyanTech-300">Exclusively Dubai Fleet</span>
          </div>
        </div>

        {/* ACTIVE UNITS LIST & RAPID DISPATCH (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Mobile Vans Active Right Now in Dubai:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {liveUnits.map((u) => (
              <div
                key={u.id}
                className="p-3.5 rounded-2xl bg-obsidian-950 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-emerald-400" />
                      {u.unit}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {u.eta}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-200 mb-1">
                    Sector: {u.area}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Status: <span className="text-cyanTech-300">{u.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Dispatch Action Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-obsidian-950 to-emerald-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
            <div className="text-left">
              <span className="text-xs font-bold text-white block">
                Need emergency technician dispatched to your Dubai home?
              </span>
              <span className="text-[11px] text-slate-400">
                Average doorstep arrival is 30–60 mins across all Dubai sectors.
              </span>
            </div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={generateWhatsAppLink({
                area: 'Dubai',
                symptom: 'Urgent Doorstep Dispatch via 2D Radar Monitor',
                urgency: 'Immediate (30-60 Min)',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-whatsapp-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Dispatch Closest Van</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>

      </div>

    </div>
  );
};
