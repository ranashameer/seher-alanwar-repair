import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Info
} from 'lucide-react';
import { APPLIANCES } from '../data/appliances';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const CostEstimator: React.FC = () => {
  const [selectedApplianceId, setSelectedApplianceId] = useState<string>('washing-machine');
  const [severityLevel, setSeverityLevel] = useState<'minor' | 'standard' | 'major'>('standard');
  const [includeParts, setIncludeParts] = useState<boolean>(true);

  const appliance = APPLIANCES.find(a => a.id === selectedApplianceId) || APPLIANCES[0];

  // Dynamic pricing calculation based on severity & appliance base price
  let laborCost = appliance.basePriceAED;
  let estimatedTime = appliance.estRepairTimeMin;
  let severityLabel = 'Standard Component Fix';
  let severityDesc = 'Water pump, belt, sensor, igniter, thermostat, or heating element replacement.';

  if (severityLevel === 'minor') {
    laborCost = Math.round(appliance.basePriceAED * 0.85);
    estimatedTime = 30;
    severityLabel = 'Minor Adjustment & Tune-Up';
    severityDesc = 'Clogged filter clearance, door seal realign, gas jet cleaning, or minor wiring check.';
  } else if (severityLevel === 'major') {
    laborCost = Math.round(appliance.basePriceAED * 1.5);
    estimatedTime = 65;
    severityLabel = 'Major Overhaul & Board Repair';
    severityDesc = 'Compressor replacement, main PCB motherboard repair, drum bearing overhaul, or full system recharge.';
  }

  const partsEstLow = includeParts ? (severityLevel === 'minor' ? 30 : severityLevel === 'standard' ? 60 : 120) : 0;
  const partsEstHigh = includeParts ? (severityLevel === 'minor' ? 60 : severityLevel === 'standard' ? 140 : 250) : 0;

  const totalMin = laborCost + partsEstLow;
  const totalMax = laborCost + partsEstHigh;

  const whatsAppQuoteUrl = generateWhatsAppLink({
    appliance: appliance.name,
    symptom: `Estimated ${severityLabel} (AED ${totalMin}-${totalMax})`,
    urgency: 'Immediate (30-60 Min)',
  });

  return (
    <section id="estimator" className="py-12 sm:py-20 bg-obsidian-950 relative overflow-hidden scroll-mt-24 sm:scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyanTech-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>100% Upfront Dubai Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 sm:mb-4 font-sans">
            Transparent Repair Cost Estimator
          </h2>
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            No surprise invoices. Calculate realistic Dubai market pricing bracket instantly based on appliance type and issue severity.
          </p>
        </div>

        {/* Estimator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-obsidian-900/90 border border-white/10 rounded-2xl p-4 sm:p-8 backdrop-blur-xl shadow-xl">
            
            {/* Step 1: Appliance Select */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  1. Select Appliance
                </label>
                <span className="text-[10px] font-bold text-cyanTech-400 uppercase tracking-wider">
                  {appliance.name}
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5 sm:gap-2.5">
                {APPLIANCES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedApplianceId(item.id)}
                    className={`p-2 sm:p-3 rounded-xl border text-center sm:text-left transition-all ${
                      selectedApplianceId === item.id
                        ? 'bg-electric-600/30 border-electric-400 text-white shadow-electric-glow scale-[1.02]'
                        : 'bg-obsidian-800/80 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="text-base sm:text-lg mb-0.5 sm:mb-1">
                      {item.id === 'washing-machine' && '🧺'}
                      {item.id === 'refrigerator' && '❄️'}
                      {item.id === 'cooking-range' && '🔥'}
                      {item.id === 'dishwasher' && '🍽️'}
                      {item.id === 'split-ac' && '💨'}
                      {item.id === 'microwave' && '⚡'}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold block leading-tight">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Severity Selector */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  2. Problem Severity Level
                </label>
                <span className="text-[11px] sm:text-xs font-bold text-cyanTech-300">
                  {severityLabel}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                {[
                  { id: 'minor', label: 'Minor / Quick Fix', badge: 'Fastest' },
                  { id: 'standard', label: 'Standard / Pump', badge: 'Common' },
                  { id: 'major', label: 'Major / Motor', badge: 'Complex' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSeverityLevel(s.id as any)}
                    className={`p-2 sm:p-3 rounded-xl border text-center transition-all ${
                      severityLevel === s.id
                        ? 'bg-cyanTech-500/25 border-cyanTech-400 text-white font-bold shadow-sm scale-[1.02]'
                        : 'bg-obsidian-800/80 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-cyanTech-300 mb-0.5 sm:mb-1 inline-block">
                      {s.badge}
                    </span>
                    <span className="text-[11px] sm:text-xs block font-semibold leading-tight">{s.label}</span>
                  </button>
                ))}
              </div>

              <p className="text-[10px] sm:text-xs text-slate-400 italic bg-obsidian-800/50 p-2 sm:p-2.5 rounded-lg border border-white/5">
                Scope: {severityDesc}
              </p>
            </div>

            {/* Step 3: Genuine Parts Included Toggle */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-white block">Include Genuine Spare Parts</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400">OEM components with 90 days warranty</span>
              </div>
              <button
                type="button"
                onClick={() => setIncludeParts(!includeParts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none shrink-0 ${
                  includeParts ? 'bg-electric-600' : 'bg-obsidian-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    includeParts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* MOBILE ONLY INSTANT LIVE RESULT BAR */}
            <div className="mt-4 pt-3.5 border-t border-white/10 lg:hidden bg-gradient-to-r from-electric-950/90 via-obsidian-850 to-obsidian-900 p-3.5 rounded-2xl border border-electric-500/30 shadow-lg">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Calculated Quote ({appliance.name})
                  </span>
                  <div className="text-xl font-black text-white font-sans flex items-baseline gap-1.5">
                    <span className="text-cyanTech-400">AED {totalMin} – {totalMax}</span>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      Free Inspection
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-300 block">
                    ⏱️ {estimatedTime}m fix
                  </span>
                  <span className="text-[9px] text-amber-400 font-bold">
                    🛡️ 90-Day Warranty
                  </span>
                </div>
              </div>

              <motion.a
                whileTap={{ scale: 0.97 }}
                href={whatsAppQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
                <span>Lock Quote on WhatsApp (AED {totalMin}-{totalMax})</span>
              </motion.a>
            </div>

          </div>

          {/* Pricing Breakdown Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-obsidian-900 via-obsidian-900 to-obsidian-950 border border-electric-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Transparent Quote Breakdown
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Dubai Standard
              </span>
            </div>

            {/* Price Line Items */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-400" />
                  Diagnostic & Inspection Fee:
                </span>
                <div className="text-right">
                  <span className="line-through text-slate-500 mr-1.5">AED 90</span>
                  <span className="text-emerald-400 font-bold">FREE (Waived)</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-400" />
                  Labor & Precision Repair:
                </span>
                <span className="font-bold text-white">AED {laborCost}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-400" />
                  Estimated OEM Parts:
                </span>
                <span className="font-bold text-white">
                  {includeParts ? `AED ${partsEstLow} – ${partsEstHigh}` : 'Not selected'}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyanTech-400" />
                  Estimated Repair Time:
                </span>
                <span className="font-bold text-cyanTech-300">{estimatedTime}–60 Minutes</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Official Warranty Certificate:
                </span>
                <span className="font-bold text-amber-400">90 Days Full Guarantee</span>
              </div>
            </div>

            {/* 2D Animated Severity Indicator Gauge */}
            <div className="mb-5 bg-obsidian-850 p-3 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                <span>Repair Complexity Gauge</span>
                <span className="text-cyanTech-300">
                  {severityLevel === 'minor' ? 'Level 1: Quick Fix' : severityLevel === 'standard' ? 'Level 2: Standard' : 'Level 3: Major Overhaul'}
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/10 relative">
                <motion.div
                  animate={{
                    width: severityLevel === 'minor' ? '33%' : severityLevel === 'standard' ? '66%' : '100%',
                    backgroundColor: severityLevel === 'minor' ? '#06B6D4' : severityLevel === 'standard' ? '#3B82F6' : '#EA580C'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full rounded-full shadow-sm"
                />
              </div>
            </div>

            {/* Total Estimated Bracket */}
            <div className="bg-obsidian-800/90 border border-white/10 rounded-2xl p-4 mb-6 shadow-inner">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Estimated Total Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white font-sans">
                    AED {totalMin} – {totalMax}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 font-bold block">
                    Zero Hidden Costs
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Pay only when fixed
                  </span>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 1 }}
              href={whatsAppQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2.5 transition-all border-b-4 border-emerald-700 active:border-b-0"
            >
              <MessageCircle className="w-5 h-5 fill-obsidian-950 text-whatsapp" />
              <span>Lock In This Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <p className="text-[11px] text-slate-400 text-center mt-3">
              ⚡ Technicians standing by in International City, DSO, Mirdif & across Dubai communities.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
