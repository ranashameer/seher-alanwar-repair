import React from 'react';
import { motion } from 'framer-motion';
import { Home, Clock, ShieldCheck, CheckCheck } from 'lucide-react';

export const TrustTicker: React.FC = () => {
  const metrics = [
    {
      icon: Home,
      value: '12,500+',
      label: 'UAE Homes Serviced',
      subtext: 'Across Dubai residential clusters',
      color: 'text-electric-400',
      bgColor: 'bg-electric-500/10',
      borderColor: 'border-electric-500/20'
    },
    {
      icon: Clock,
      value: '45 Mins',
      label: 'Average Arrival Time',
      subtext: 'Rapid mobile van units on standby',
      color: 'text-cyanTech-400',
      bgColor: 'bg-cyanTech-500/10',
      borderColor: 'border-cyanTech-500/20'
    },
    {
      icon: ShieldCheck,
      value: '90 Days',
      label: 'Formal Warranty',
      subtext: 'On all replacement parts & labor',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20'
    },
    {
      icon: CheckCheck,
      value: '100%',
      label: 'Genuine Spare Parts',
      subtext: 'Direct OEM factory authorization',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60 border border-white/10 backdrop-blur-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.04 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`flex flex-col items-center text-center cursor-default transition-all ${idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : ''} ${idx % 2 === 1 ? 'pt-6 sm:pt-0' : ''} lg:px-4`}
              >
                <div className={`w-11 h-11 rounded-xl ${metric.bgColor} border ${metric.borderColor} flex items-center justify-center ${metric.color} mb-3 shadow-inner`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1 font-sans">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {metric.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
