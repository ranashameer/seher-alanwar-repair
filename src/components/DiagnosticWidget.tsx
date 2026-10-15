import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  AlertTriangle,
  MessageCircle,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { APPLIANCES, SYMPTOM_OPTIONS } from '../data/appliances';
import { DUBAI_AREAS } from '../data/areas';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const DiagnosticWidget: React.FC = () => {
  const [selectedApplianceId, setSelectedApplianceId] = useState<string>('washing-machine');
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>('wm-spin');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('international-city');
  const [customArea, setCustomArea] = useState<string>('');

  const currentAppliance = APPLIANCES.find(a => a.id === selectedApplianceId) || APPLIANCES[0];
  const symptoms = SYMPTOM_OPTIONS[selectedApplianceId] || SYMPTOM_OPTIONS['washing-machine'];
  const currentSymptom = symptoms.find(s => s.id === selectedSymptomId) || symptoms[0];
  const currentArea = DUBAI_AREAS.find(a => a.id === selectedAreaId);

  const activeAreaName = customArea.trim() ? customArea.trim() : (currentArea?.name.split('(')[0].trim() || 'Dubai');

  const whatsAppUrl = generateWhatsAppLink({
    appliance: currentAppliance.name,
    symptom: currentSymptom?.label || 'General Diagnostics Needed',
    area: activeAreaName,
    urgency: 'Immediate (30-60 Min)',
  });

  const handleApplianceChange = (id: string) => {
    setSelectedApplianceId(id);
    const newSymptoms = SYMPTOM_OPTIONS[id];
    if (newSymptoms && newSymptoms.length > 0) {
      setSelectedSymptomId(newSymptoms[0].id);
    }
  };

  return (
    <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-electric-500/40 via-white/10 to-electric-500/10 shadow-2xl shadow-electric-600/10">
      <div className="bg-obsidian-900/95 backdrop-blur-xl rounded-[15px] p-5 sm:p-6 border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-electric-600/30 border border-electric-500/40 flex items-center justify-center text-cyanTech-400">
              <Zap className="w-4 h-4 fill-cyanTech-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                Instant Diagnostic & Quote
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Live availability check across all Dubai clusters
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Live Dispatch
          </span>
        </div>

        {/* STEP 1: Select Appliance */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-electric-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
              Select Broken Appliance
            </label>
            <span className="text-[11px] text-electric-400 font-semibold">
              {currentAppliance.name}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {APPLIANCES.map((appliance) => {
              const isSelected = appliance.id === selectedApplianceId;
              return (
                <motion.button
                  key={appliance.id}
                  type="button"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleApplianceChange(appliance.id)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 transition-all text-center group ${
                    isSelected
                      ? 'bg-electric-600/30 border-electric-400 text-white shadow-electric-glow scale-[1.04]'
                      : 'bg-obsidian-800/80 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl mb-1 group-hover:scale-125 transition-transform duration-200">
                    {appliance.id === 'washing-machine' && '🧺'}
                    {appliance.id === 'refrigerator' && '❄️'}
                    {appliance.id === 'cooking-range' && '🔥'}
                    {appliance.id === 'dishwasher' && '🍽️'}
                    {appliance.id === 'split-ac' && '💨'}
                    {appliance.id === 'microwave' && '⚡'}
                  </span>
                  <span className="text-[10px] font-bold leading-tight line-clamp-1">
                    {appliance.name.split(' ')[0]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Select Symptom / Problem */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-electric-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
              What is the problem?
            </label>
            {currentSymptom?.severity === 'emergency' && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                <ShieldAlert className="w-3 h-3" /> Urgent
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
            {symptoms.map((symptom) => {
              const isSelected = symptom.id === selectedSymptomId;
              return (
                <button
                  key={symptom.id}
                  type="button"
                  onClick={() => setSelectedSymptomId(symptom.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-cyanTech-500/20 border-cyanTech-400 text-cyanTech-300 font-bold shadow-sm'
                      : 'bg-obsidian-800/60 border-white/5 text-slate-300 hover:text-white hover:bg-obsidian-700/60'
                  }`}
                >
                  <CheckCircle2 className={`w-3 h-3 ${isSelected ? 'text-cyanTech-400 opacity-100' : 'opacity-0'}`} />
                  <span>{symptom.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 3: Select Dubai Area */}
        <div className="mb-5">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
            <span className="w-4 h-4 rounded-full bg-electric-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
            Your Dubai Location
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <select
              value={selectedAreaId}
              onChange={(e) => {
                setSelectedAreaId(e.target.value);
                setCustomArea('');
              }}
              className="w-full bg-obsidian-800/90 border border-white/10 rounded-xl px-3 py-2.5 text-sm sm:text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
            >
              {DUBAI_AREAS.map((area) => (
                <option key={area.id} value={area.id} className="bg-obsidian-900 text-slate-100">
                  {area.name} (est. {area.estArrivalMin}m)
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Or enter Building / Cluster / Villa"
              value={customArea}
              onChange={(e) => setCustomArea(e.target.value)}
              className="w-full bg-obsidian-800/90 border border-white/10 rounded-xl px-3 py-2.5 text-sm sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
            />
          </div>

          {/* Rapid selection chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] text-slate-400">
            <span className="text-[10px] uppercase font-bold text-slate-500">Popular:</span>
            {['international-city', 'silicon-oasis', 'mirdif', 'al-warqa'].map((id) => {
              const a = DUBAI_AREAS.find(item => item.id === id);
              if (!a) return null;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setSelectedAreaId(id);
                    setCustomArea('');
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap transition-colors ${
                    selectedAreaId === id && !customArea
                      ? 'bg-electric-500/30 text-electric-300 border border-electric-500/50'
                      : 'bg-obsidian-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {a.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Real-time Triage Summary Banner */}
        <div className="bg-electric-950/40 border border-electric-500/20 rounded-xl p-3 mb-5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyanTech-400 shrink-0" />
            <div>
              <span className="text-slate-400 block text-[10px]">Estimated Arrival</span>
              <span className="font-extrabold text-white text-xs">
                {currentArea?.estArrivalMin || 35}–50 Minutes
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-white/10" />

          <div>
            <span className="text-slate-400 block text-[10px]">Est. Repair Range</span>
            <span className="font-extrabold text-cyanTech-300 text-xs">
              {currentSymptom?.estCostRange || 'AED 90 - 220'}
            </span>
          </div>

          <div className="h-6 w-px bg-white/10" />

          <div className="text-right">
            <span className="text-slate-400 block text-[10px]">Inspection</span>
            <span className="font-extrabold text-emerald-400 text-xs">
              Waived on Repair
            </span>
          </div>
        </div>

        {/* Dynamic WhatsApp CTA Button */}
        <motion.a
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96, y: 1 }}
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2.5 transition-all group border-b-4 border-emerald-700 active:border-b-0"
        >
          <MessageCircle className="w-5 h-5 fill-obsidian-950 text-whatsapp" />
          <span>Get Instant Price & Technician on WhatsApp</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Micro-guarantee footer */}
        <div className="flex flex-wrap items-center justify-around sm:justify-between gap-1.5 mt-3 pt-2 text-[10px] text-slate-400 font-medium border-t border-white/5">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> No upfront charge
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 90-Day Formal Warranty
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> OEM Parts Only
          </span>
        </div>

      </div>
    </div>
  );
};
