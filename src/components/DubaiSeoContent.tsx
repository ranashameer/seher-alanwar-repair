import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Flame, 
  Droplets, 
  Sun, 
  Zap, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const DubaiSeoContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'climate' | 'clusters' | 'brands'>('climate');

  return (
    <article id="seo-guide" className="py-20 bg-obsidian-950 border-t border-white/10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Dubai Technical Knowledge Base & SEO Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Dubai Appliance Repair & Maintenance Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Essential technical insights for Dubai tenants and villa owners on combating climate stress, hard water scaling, and securing genuine 90-day warrantied doorstep repairs.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('climate')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'climate'
                  ? 'bg-electric-600 text-white shadow-electric-glow'
                  : 'bg-obsidian-850 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Why Appliances Fail in Dubai
            </button>
            <button
              onClick={() => setActiveTab('clusters')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'clusters'
                  ? 'bg-electric-600 text-white shadow-electric-glow'
                  : 'bg-obsidian-850 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Dubai Neighborhood Hubs
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'brands'
                  ? 'bg-electric-600 text-white shadow-electric-glow'
                  : 'bg-obsidian-850 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Brand Troubleshooting Index
            </button>
          </div>
        </div>

        {/* TAB 1: CLIMATE STRESSORS IN DUBAI */}
        {activeTab === 'climate' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Extreme Summer Heat (45°C–50°C+)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  In Dubai’s intense summer climate, refrigerators, deep freezers, and split AC units run constantly. Compressor relay switches overheat, refrigerant gas pressures fluctuate, and run capacitors fail, causing sudden cooling loss.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 border-t border-white/5 pt-3">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanTech-400" />
                    Freon R134a/R600a leak detection & recharge
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanTech-400" />
                    Condenser coil chemical flushes
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyanTech-500/10 border border-cyanTech-500/20 text-cyanTech-400 flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  UAE Hard Water & Limescale Build-Up
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Municipal desalinated water in the UAE contains dissolved minerals that cause rapid calcium buildup inside washing machine heating coils, dishwasher spray arms, and drainage pumps, leading to standing water and burned heater elements.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 border-t border-white/5 pt-3">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanTech-400" />
                    Drain pump impeller clearing & replacement
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanTech-400" />
                    Electro-mechanical inlet solenoid valve renewal
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Airborne Sand & Electronic Board Surges
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Fine desert dust penetrates kitchen vents and motor housings, insulating motherboards and triggering PCB errors. We specialize in micro-soldering and inverter control board repairs instead of forcing whole-unit replacements.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 border-t border-white/5 pt-3">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanTech-400" />
                    On-site PCB diagnostics & capacitor replacement
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanTech-400" />
                    Motor carbon brush & suspension rebuilds
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: NEIGHBORHOOD SERVICE HUBS */}
        {activeTab === 'clusters' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                title: 'International City Hub',
                desc: 'Our primary workshop is located in Shop 10, Building X4, International City, Dubai. 15-25 min doorstep response across all residential buildings and sectors in International City.',
                tag: '15-25 Mins (Direct Hub)'
              },
              {
                title: 'Dubai Silicon Oasis (DSO)',
                desc: 'Continuous van standby near Cedre & Semmer Villas and high-rise apartment towers along Dubai-Al Ain Road. Washing machine and fridge cooling specialists.',
                tag: '25-30 Mins Arrival'
              },
              {
                title: 'Mirdif & Uptown Mirdif',
                desc: 'Full residential repair coverage for villas and apartments in Mirdif, Shorooq, Ghoroob, and Golden Gate. Expert cooking range gas safety calibration.',
                tag: '30 Mins Arrival'
              },
              {
                title: 'Al Warqa 1, 2, 3 & 4',
                desc: 'Same-day technician visits for multi-brand laundry and refrigeration units in Al Warqa communities. Zero call-out delay.',
                tag: '25 Mins Arrival'
              },
              {
                title: 'Business Bay & Downtown',
                desc: 'Built-in kitchen appliances repair for luxury apartments in Downtown Dubai, Business Bay towers, and DIFC with genuine OEM parts.',
                tag: '35-40 Mins Arrival'
              },
              {
                title: 'Nad Al Sheba & Meydan',
                desc: 'Comprehensive appliance maintenance for villa compounds across Nad Al Sheba 1-4 and Meydan Avenue residences.',
                tag: '30 Mins Arrival'
              },
              {
                title: 'JVC & Al Barsha',
                desc: 'Fast doorstep diagnostics across Jumeirah Village Circle, Jumeirah Village Triangle, and Al Barsha 1, 2 & 3.',
                tag: '40 Mins Arrival'
              },
              {
                title: 'Dubai Academic City',
                desc: 'Dedicated rapid response for residential dormitories, staff housing, and villa complexes in Dubai International Academic City.',
                tag: '25-30 Mins Arrival'
              }
            ].map((hub, idx) => (
              <div
                key={idx}
                className="bg-obsidian-900 border border-white/10 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 mb-2 inline-block">
                    {hub.tag}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {hub.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* TAB 3: BRAND TROUBLESHOOTING INDEX */}
        {activeTab === 'brands' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                brand: 'Samsung Appliances Repair Dubai',
                features: 'EcoBubble, QuickDrive & Digital Inverter',
                issues: 'Error codes 4E/4C (water supply), 5E/5C (drain pump), dE (door lock), inverter board power surge repairs.',
                genuineParts: 'Original Samsung solenoids, circulation pumps & PCBs'
              },
              {
                brand: 'LG Electronics Repair Dubai',
                features: 'Direct Drive & Inverter Linear Refrigerators',
                issues: 'Error codes OE (drainage failure), IE (water inlet), LE (motor overload), continuous clicking relay compressor fixes.',
                genuineParts: 'Factory LG Linear compressors & Hall sensors'
              },
              {
                brand: 'Bosch & Siemens Service Dubai',
                features: 'Series 4, 6, 8 & iQ300/500/700 Smart Diagnostics',
                issues: 'Error codes E18 (pump filter), E24/E25 (dishwasher drainage), E15 (aquastop triggered), heating element descaling.',
                genuineParts: 'Certified OEM carbon brushes, heater tubes & pumps'
              },
              {
                brand: 'Whirlpool & Ariston Repair Dubai',
                features: '6th Sense Technology & Cooking Ranges',
                issues: 'Spark ignition failures, thermo-coupler flame cut-offs, oven thermostat calibration, door glass rebuilds.',
                genuineParts: 'Authentic valves, switches & heating elements'
              },
              {
                brand: 'Beko & Super General Repair Dubai',
                features: 'ProSmart Inverter & Everyday Dubai Household Units',
                issues: 'Freon gas leaks, evaporator fan motor replacement, washing machine spin balance springs and belts.',
                genuineParts: 'Certified local UAE distributor spares'
              },
              {
                brand: 'Miele & Electrolux Built-In Dubai',
                features: 'Premium Built-In Kitchen & Laundry Systems',
                issues: 'Waterproof system alarms, high-pressure circulation pump blockages, electronic touch panel repairs.',
                genuineParts: 'Official factory OEM replacement parts'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {item.brand}
                  </h4>
                  <span className="text-xs text-cyanTech-300 font-semibold block mb-3">
                    {item.features}
                  </span>
                  <div className="text-xs text-slate-300 space-y-2 mb-4">
                    <p><strong>Common Fixes:</strong> {item.issues}</p>
                    <p className="text-emerald-400 font-medium">
                      ✓ {item.genuineParts}
                    </p>
                  </div>
                </div>

                <a
                  href={generateWhatsAppLink({
                    appliance: item.brand,
                    symptom: 'Brand Specific Diagnostic & Quote'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-electric-400 hover:text-cyanTech-300 inline-flex items-center gap-1"
                >
                  <span>Request {item.brand.split(' ')[0]} Specialist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </motion.div>
        )}

        {/* SEO Quality Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-obsidian-900/60 border border-white/5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <span className="text-sm font-bold text-white block">
                UAE Consumer Protection & Licensing Standards
              </span>
              <p className="text-xs text-slate-400">
                All repairs comply with Dubai Municipality safety regulations. Upfront written quotation provided prior to any replacement. <strong>AED 90 diagnostic inspection fee is 100% waived</strong> upon repair authorization.
              </p>
            </div>
          </div>
          <a
            href={generateWhatsAppLink({ customMessage: 'Need quick consultation on appliance issue.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap"
          >
            Consult Master Technician
          </a>
        </div>

      </div>
    </article>
  );
};
