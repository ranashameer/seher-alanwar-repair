import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Search, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { DUBAI_AREAS } from '../data/areas';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { DubaiRadar2D } from './DubaiRadar2D';

export const CoverageChecker: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(DUBAI_AREAS[0]);

  const filteredAreas = DUBAI_AREAS.filter(area =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.zone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const whatsAppDispatchUrl = generateWhatsAppLink({
    area: selectedArea.name.split('(')[0].trim(),
    symptom: 'Urgent Technician Dispatch to Location',
    urgency: 'Immediate (30-60 Min)',
  });

  return (
    <section id="coverage" className="py-20 bg-obsidian-900/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Dubai Live Fleet Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Check Doorstep Arrival In Your Dubai Area
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            We operate strategically stationed mobile repair units across Dubai, guaranteeing arrival within 30 to 60 minutes directly at your villa or apartment.
          </p>
        </div>

        {/* 2D LIVE RADAR SCREEN */}
        <div className="max-w-5xl mx-auto mb-10">
          <DubaiRadar2D />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search bar and Rapid Pills */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl mb-8">
            <div className="relative mb-4">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your Dubai community (e.g. International City, Silicon Oasis, Mirdif, Al Warqa...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-obsidian-800 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-electric-500 font-medium"
              />
            </div>

            {/* Quick-Pick Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] font-bold uppercase text-slate-400 whitespace-nowrap">
                Quick Select:
              </span>
              {DUBAI_AREAS.slice(0, 7).map((area) => (
                <button
                  key={area.id}
                  onClick={() => {
                    setSelectedArea(area);
                    setSearchQuery('');
                  }}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-semibold transition-all ${
                    selectedArea.id === area.id
                      ? 'bg-electric-600 text-white shadow-electric-glow'
                      : 'bg-obsidian-800 text-slate-300 hover:text-white hover:bg-obsidian-750'
                  }`}
                >
                  {area.name.split('(')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Live Status Badge Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArea.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-emerald-500/30 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                {/* Status Indicator */}
                <div className="space-y-3 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Technicians Active & Available Now in Dubai</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                    {selectedArea.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Clock className="w-4 h-4 text-cyanTech-400" />
                      <span>Estimated Arrival: <strong className="text-white">{selectedArea.estArrivalMin}–{selectedArea.estArrivalMin + 15} Mins</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 font-semibold">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-emerald-400">{selectedArea.activeTechnicians} Units</strong> on Standby</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-semibold">
                      <Navigation className="w-4 h-4 text-electric-400" />
                      <span>Zone: {selectedArea.zone}</span>
                    </div>
                  </div>
                </div>

                {/* Instant Dispatch Action */}
                <div className="sm:text-right shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={whatsAppDispatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-whatsapp-glow transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-obsidian-950 text-whatsapp" />
                    <span>Dispatch Technician Here</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <span className="block text-[11px] text-slate-400 mt-2">
                    Priority GPS route assignment via WhatsApp
                  </span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Area Grid List */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {filteredAreas.slice(0, 8).map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedArea.id === area.id
                    ? 'bg-electric-600/20 border-electric-500 text-white'
                    : 'bg-obsidian-850/80 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-obsidian-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-emerald-400">
                    🟢 {area.activeTechnicians} on duty
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    ~{area.estArrivalMin}m
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-200 line-clamp-1">
                  {area.name.split('(')[0].trim()}
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
