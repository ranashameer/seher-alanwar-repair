import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Info,
  X,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ServiceCatalogProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'All', label: 'All Appliances' },
    { id: 'Laundry', label: 'Laundry & Dryers' },
    { id: 'Refrigeration', label: 'Refrigerators & Chillers' },
    { id: 'Cooking', label: 'Cooking Ranges & Ovens' },
    { id: 'Dishwashers', label: 'Dishwashers' },
    { id: 'AC', label: 'Split ACs' },
  ];

  const filteredServices = activeTab === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-obsidian-900/60 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Doorstep Technical Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Expert Repair For Every Appliance
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Diagnosed with advanced electronic meters, fixed using 100% genuine factory parts, and backed by a written 90-day warranty across all Dubai neighborhoods.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-electric-600 text-white shadow-electric-glow scale-105'
                    : 'bg-obsidian-800/80 text-slate-400 hover:text-white hover:bg-obsidian-700/80 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const whatsAppQuoteUrl = generateWhatsAppLink({
              appliance: service.title,
              symptom: 'Immediate Inspection & Quote',
              urgency: 'Immediate (30-60 Min)',
            });

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl bg-obsidian-900/90 border border-white/10 hover:border-electric-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover"
              >
                {/* Top Badge & Image Thumbnail */}
                <div>
                  <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                    
                    {service.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-safety-600 text-white shadow-md">
                        {service.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-2 py-1 rounded-md bg-obsidian-900/90 backdrop-blur-md text-cyanTech-300 font-bold border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyanTech-400" /> {service.responseTime}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-emerald-950/90 backdrop-blur-md text-emerald-300 font-bold border border-emerald-500/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" /> {service.warrantyPeriod}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyanTech-300 transition-colors">
                    <Link to={`/services/${service.id === 'split-ac-service' ? 'split-ac-repair-dubai' : service.id + '-dubai'}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Common issues solved checklist */}
                  <div className="space-y-1.5 mb-5 border-t border-white/5 pt-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                      Frequently Solved:
                    </span>
                    {service.issuesSolved.slice(0, 3).map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Actions */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                        Service Starting At
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-white font-sans">
                          AED {service.pricingStartingAED}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">
                          (Inspection Waived on Repair)
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/services/${service.id === 'split-ac-service' ? 'split-ac-repair-dubai' : service.id + '-dubai'}`}
                      className="text-xs font-bold text-electric-400 hover:text-cyanTech-300 flex items-center gap-1 underline underline-offset-4"
                    >
                      <Info className="w-3.5 h-3.5" /> Full Guide
                    </Link>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <motion.a
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      href={whatsAppQuoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-colors shadow-sm border-b-2 border-emerald-700 active:border-b-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-obsidian-950 text-whatsapp" />
                      <span>WhatsApp</span>
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => onOpenBooking(service.title)}
                      className="py-3 px-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-colors shadow-sm border-b-2 border-electric-800 active:border-b-0"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Book Now</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Micro-Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-2xl bg-obsidian-900 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-obsidian-800 text-slate-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-electric-600/30 text-electric-300 border border-electric-500/40">
                  {selectedService.category} Service
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {selectedService.warrantyPeriod}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-4 overflow-y-auto pr-2 flex-1 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Complete Problem Coverage:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.issuesSolved.map((issue, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200 bg-obsidian-800/60 p-2.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-cyanTech-400 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Quality Guarantee:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200 bg-obsidian-800/60 p-2.5 rounded-lg border border-white/5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Transparent Rate</span>
                  <span className="text-xl font-black text-white">Starting AED {selectedService.pricingStartingAED}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={generateWhatsAppLink({
                      appliance: selectedService.title,
                      symptom: 'Immediate Booking Inquiry',
                      urgency: 'Immediate (30-60 Min)',
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    onClick={() => {
                      const t = selectedService.title;
                      setSelectedService(null);
                      onOpenBooking(t);
                    }}
                    className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Book Service</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
