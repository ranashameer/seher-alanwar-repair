import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareCode, Truck, Wrench, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const CustomerJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquareCode,
      title: 'WhatsApp / Online Diagnostic',
      desc: 'Send a photo, error code, or brief description of the issue. Our master diagnostic technician in Dubai gives you an instant preliminary cost and time estimate.',
      tag: '5-Minute Triage',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      num: '02',
      icon: Truck,
      title: '30–60 Min Doorstep Arrival',
      desc: 'A certified, uniformed technician arrives directly at your Dubai residence with a fully equipped mobile inventory of OEM parts and test equipment.',
      tag: 'Fast GPS Routing',
      color: 'from-cyan-500 to-emerald-500'
    },
    {
      num: '03',
      icon: Wrench,
      title: 'Precision On-Site Repair',
      desc: 'Thorough inspection and fault detection. Inspection fee is 100% waived once repair is approved. Work is executed cleanly in front of you.',
      tag: 'Original OEM Parts',
      color: 'from-emerald-500 to-orange-500'
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: '90-Day UAE Warranty & Receipt',
      desc: 'Complete operating cycle test before final sign-off. Receive an official digital & printed invoice with up to 90 days guarantee on parts and labor.',
      tag: '100% Peace of Mind',
      color: 'from-orange-500 to-amber-400'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-obsidian-950 relative overflow-hidden scroll-mt-20">
      
      {/* 2D Background Decorative Shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-electric-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyanTech-400 animate-ping" />
            <span>2D Animated Customer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            How We Fix Your Appliance in 4 Easy Steps
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From the moment you contact us to the final warranty sign-off, experience a seamless, rapid process built for Dubai emergency home services.
          </p>

          {/* 2D Animated Dispatch Van Track Line */}
          <div className="relative mt-10 mb-4 max-w-2xl mx-auto hidden md:block">
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative">
              <div className="h-full w-full bg-gradient-to-r from-electric-600 via-cyanTech-400 to-emerald-400" />
            </div>

            {/* Cruising 2D Van Animation */}
            <motion.div
              animate={{ x: ['0%', '92%', '0%'] }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              className="absolute -top-3 left-0 flex items-center gap-1.5 bg-obsidian-900 border border-emerald-400/50 px-2 py-0.5 rounded-full shadow-lg"
            >
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[9px] font-black text-white whitespace-nowrap">Dubai Mobile Van</span>
            </motion.div>
          </div>
        </div>

        {/* Steps Grid with 2D Spring Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="relative rounded-3xl bg-obsidian-900/90 border-2 border-white/10 hover:border-electric-500/50 p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
                {/* Step Number & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black text-electric-500/30 group-hover:text-cyanTech-400 font-sans transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:bg-electric-600/20 group-hover:text-cyanTech-300 transition-colors">
                      {step.tag}
                    </span>
                  </div>

                  {/* 2D Icon with bouncy hover */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} p-[2px] mb-5 shadow-md group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="w-full h-full bg-obsidian-900 rounded-[14px] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-cyanTech-300 transition-colors font-sans leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-cyanTech-400 transition-colors">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Step {idx + 1} of 4
                  </span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyanTech-400 transition-transform group-hover:translate-x-1.5" />}
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
