import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Flame, 
  Snowflake, 
  Wind, 
  Wrench,
  Zap,
  Clock
} from 'lucide-react';

export const ApplianceVisualizer2D: React.FC = () => {
  const [activeAppliance, setActiveAppliance] = useState<'washer' | 'fridge' | 'stove' | 'ac'>('washer');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const triggerScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1800);
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-obsidian-900 via-obsidian-850 to-obsidian-900 border-2 border-electric-500/40 p-5 sm:p-6 shadow-2xl overflow-hidden group">
      
      {/* 2D Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-cyanTech-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-electric-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Floating 2D Badge Sticker */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-600/30 border border-electric-400/50 text-[11px] font-extrabold text-cyanTech-300 shadow-md backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Live 2D Interactive Simulator</span>
      </motion.div>

      {/* Header Controls */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-electric-600/30 border border-electric-500/40 flex items-center justify-center text-electric-400">
            <Wrench className="w-4 h-4 animate-bounce" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-white font-sans tracking-tight">
              2D Appliance Triage & Diagnostic Hub
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">
              Click an appliance below to view internal mechanics & test simulation
            </span>
          </div>
        </div>

        {/* 2D Selector Chips */}
        <div className="grid grid-cols-4 gap-1.5 mt-3">
          {[
            { id: 'washer', label: 'Washer', icon: '🧺' },
            { id: 'fridge', label: 'Fridge', icon: '❄️' },
            { id: 'stove', label: 'Stove/Oven', icon: '🔥' },
            { id: 'ac', label: 'Split AC', icon: '💨' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveAppliance(item.id as any);
                setScanComplete(false);
              }}
              className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 border ${
                activeAppliance === item.id
                  ? 'bg-electric-600 text-white border-electric-400 shadow-electric-glow scale-[1.03]'
                  : 'bg-obsidian-800 text-slate-400 hover:text-white border-white/5 hover:bg-obsidian-750'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-[11px]">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2D ANIMATED STAGE */}
      <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-obsidian-950/90 border border-white/10 p-4 flex items-center justify-center overflow-hidden">
        
        {/* Background Grid Lines for 2D schematic look */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Scanner Laser Sweep Line Animation */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ top: '0%' }}
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyanTech-400 to-transparent shadow-[0_0_15px_#22D3EE] z-30 pointer-events-none"
            >
              <div className="w-2 h-2 rounded-full bg-white mx-auto shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. ANIMATED 2D WASHING MACHINE */}
        {activeAppliance === 'washer' && (
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center relative z-10"
          >
            {/* 2D Washing Machine Body */}
            <div className="w-44 h-48 sm:w-52 sm:h-56 rounded-2xl bg-slate-800 border-4 border-slate-700 shadow-2xl relative p-3 flex flex-col justify-between">
              
              {/* Top Control Panel */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-electric-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                {/* 2D Digital Timer LED */}
                <div className="px-2 py-0.5 rounded bg-black border border-emerald-500/40 font-mono text-[10px] font-bold text-emerald-400">
                  {isScanning ? 'DIAG 99' : '00:35 RPM'}
                </div>
              </div>

              {/* Center Porthole Door */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 border-4 border-slate-600 mx-auto flex items-center justify-center overflow-hidden shadow-inner">
                {/* Door Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyanTech-500/20 via-transparent to-white/10 pointer-events-none z-20 rounded-full" />

                {/* Rotating Drum */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: isScanning ? 0.8 : 2.5, ease: "linear" }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-cyanTech-400/60 flex items-center justify-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-electric-700/30 flex items-center justify-center">
                    <span className="text-2xl animate-spin">🌀</span>
                  </div>

                  {/* Water Droplets bouncing */}
                  <motion.span
                    animate={{ y: [-4, 4, -4], x: [2, -2, 2] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute top-2 right-4 text-xs"
                  >
                    💧
                  </motion.span>
                  <motion.span
                    animate={{ y: [4, -4, 4], x: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="absolute bottom-2 left-4 text-xs"
                  >
                    🫧
                  </motion.span>
                </motion.div>
              </div>

              {/* Bottom Kickplate & Drain Filter */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-700 text-[9px] text-slate-400">
                <span className="font-bold">OEM INVERTER MOTOR</span>
                <span className="w-4 h-4 rounded-full bg-slate-700 border border-slate-500 flex items-center justify-center text-[7px] text-slate-300 font-bold">
                  ✓
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. ANIMATED 2D REFRIGERATOR */}
        {activeAppliance === 'fridge' && (
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center relative z-10"
          >
            {/* 2D Refrigerator Double Door Body */}
            <div className="w-40 h-52 sm:w-48 sm:h-60 rounded-2xl bg-slate-800 border-4 border-slate-700 shadow-2xl relative p-2.5 flex flex-col justify-between">
              
              {/* Freezer Upper Door */}
              <div className="h-16 rounded-xl bg-slate-900 border-2 border-slate-700 p-2 flex items-center justify-between relative overflow-hidden">
                <div className="flex items-center gap-1">
                  <Snowflake className="w-4 h-4 text-cyanTech-400 animate-spin" />
                  <span className="text-[10px] font-mono text-cyanTech-300 font-bold">-18°C</span>
                </div>
                <div className="h-full w-1 rounded-full bg-slate-600" />
                {/* Frost waves */}
                <motion.div 
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-cyanTech-400/10 pointer-events-none" 
                />
              </div>

              {/* Main Lower Chiller Door */}
              <div className="h-28 sm:h-32 rounded-xl bg-slate-900 border-2 border-slate-700 p-2 flex flex-col justify-between relative overflow-hidden mt-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">+3°C OPTIMAL</span>
                  <div className="h-4 w-1 rounded-full bg-slate-600" />
                </div>

                {/* Chilled airflow ripples */}
                <div className="flex justify-around items-center py-2">
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-cyanTech-400 text-sm">❄️</motion.span>
                  <motion.span animate={{ y: [5, 0, 5] }} transition={{ repeat: Infinity, duration: 1.8 }} className="text-cyanTech-400 text-base">💨</motion.span>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="text-cyanTech-400 text-sm">❄️</motion.span>
                </div>

                <div className="text-[9px] text-slate-400 text-center font-bold">
                  FREON R600A COMPRESSOR
                </div>
              </div>

              {/* Compressor status light */}
              <div className="flex items-center justify-between px-1 pt-1 text-[8px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Eco Inverter
                </span>
                <span>Zero Frost</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. ANIMATED 2D COOKING RANGE / STOVE */}
        {activeAppliance === 'stove' && (
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center relative z-10"
          >
            {/* 2D Cooking Range Body */}
            <div className="w-44 h-52 sm:w-52 sm:h-56 rounded-2xl bg-slate-800 border-4 border-slate-700 shadow-2xl relative p-2.5 flex flex-col justify-between">
              
              {/* Top Gas Burners Stage */}
              <div className="h-16 rounded-xl bg-slate-900 border-2 border-slate-700 p-2 flex items-center justify-around">
                {[1, 2, 3].map((b) => (
                  <div key={b} className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-600 bg-slate-800 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ repeat: Infinity, duration: 0.6 + b * 0.2 }}
                        className="text-amber-400"
                      >
                        <Flame className="w-4 h-4 fill-amber-400 text-safety-500" />
                      </motion.div>
                    </div>
                    <span className="text-[7px] text-slate-400 mt-0.5">BURNER {b}</span>
                  </div>
                ))}
              </div>

              {/* Control Knobs Strip */}
              <div className="flex items-center justify-around py-1.5 bg-slate-850 rounded-lg my-1">
                {[1, 2, 3, 4].map((k) => (
                  <div key={k} className="w-4 h-4 rounded-full bg-slate-700 border border-slate-500 flex items-center justify-center">
                    <div className="w-0.5 h-2 bg-safety-500 rounded-full" />
                  </div>
                ))}
              </div>

              {/* Oven Glass Door */}
              <div className="h-20 sm:h-24 rounded-xl bg-slate-900 border-2 border-slate-700 p-2 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-safety-500/10 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between text-[9px] text-amber-400 font-mono font-bold">
                  <span>OVEN 220°C</span>
                  <span className="text-emerald-400">SAFETY OK</span>
                </div>
                <div className="h-1 w-full bg-safety-500/30 rounded-full animate-pulse" />
                <span className="text-[8px] text-slate-400 text-center">DUBAI CIVIL DEFENSE COMPLIANT</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 4. ANIMATED 2D SPLIT AC */}
        {activeAppliance === 'ac' && (
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center relative z-10 w-full"
          >
            {/* 2D Split AC Indoor Unit */}
            <div className="w-56 sm:w-64 h-24 rounded-2xl bg-slate-800 border-4 border-slate-700 shadow-2xl relative p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-300 tracking-wider">DUBAI TURBO COOL</span>
                <div className="px-2 py-0.5 rounded bg-black font-mono text-xs font-black text-cyanTech-400 border border-cyanTech-500/40">
                  18°C
                </div>
              </div>

              {/* AC Vent louvers with animated breeze */}
              <div className="h-6 w-full rounded-lg bg-slate-900 border border-slate-700 relative overflow-hidden flex items-center justify-around px-2">
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-1 w-full bg-cyanTech-400/50 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-[8px] text-slate-400">
                <span className="text-emerald-400 font-bold">● R410A Charged</span>
                <span>Jet Wash Cleaned</span>
              </div>
            </div>

            {/* Floating Cold Air Gusts */}
            <div className="flex items-center gap-6 mt-3">
              <motion.span animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2 }} className="text-cyanTech-400 text-lg">❄️</motion.span>
              <motion.span animate={{ y: [8, 0, 8], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-cyanTech-300 text-xl font-bold">💨</motion.span>
              <motion.span animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.3 }} className="text-cyanTech-400 text-lg">❄️</motion.span>
            </div>
          </motion.div>
        )}

      </div>

      {/* Interactive Scan Action & Report */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-left">
          {scanComplete ? (
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Diagnostic Pass: Genuine parts in stock in Dubai van</span>
            </div>
          ) : isScanning ? (
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyanTech-300 animate-pulse">
              <Zap className="w-4 h-4" />
              <span>Scanning electronic PCB, sensors & motor in Dubai...</span>
            </div>
          ) : (
            <div className="text-[11px] text-slate-400 font-medium">
              Ready for simulation. Tap button to run 2D live diagnostic.
            </div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={triggerScan}
          disabled={isScanning}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-electric-600 to-cyanTech-500 hover:from-electric-500 hover:to-cyanTech-400 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-electric-glow transition-all disabled:opacity-50"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isScanning ? 'Diagnosing...' : 'Test 2D Diagnostic'}</span>
        </motion.button>
      </div>

    </div>
  );
};
