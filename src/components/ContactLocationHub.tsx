import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  Building,
  PlusCircle,
  Sparkles,
  Download
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { downloadCalendarEvent } from '../utils/calendar';

export const ContactLocationHub: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: 'Washing Machine',
    area: 'International City',
    issue: '',
    hasSecond: false,
    secondAppliance: 'Refrigerator',
    secondIssue: '',
    urgency: 'Immediate (30-60 Min)'
  });

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS_INFO.gps.lat},${BUSINESS_INFO.gps.lng}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    let combinedAppliance = formData.appliance;
    let combinedIssue = formData.issue || 'Doorstep Diagnostic Requested';

    if (formData.hasSecond) {
      combinedAppliance += ` + ${formData.secondAppliance} (Bundle 20% Off Labor)`;
      combinedIssue += ` | 2nd Item: ${formData.secondIssue || 'General check'}`;
    }

    const waUrl = generateWhatsAppLink({
      appliance: combinedAppliance,
      symptom: combinedIssue,
      area: formData.area,
      customMessage: `Client Name: ${formData.name} | Phone: ${formData.phone}`,
      urgency: formData.urgency as any,
    });

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 700);
  };

  const handleDownloadCalendar = () => {
    downloadCalendarEvent({
      title: `Seher Alanwar Repair: ${formData.appliance} in ${formData.area}`,
      description: `Doorstep technician dispatch in ${formData.area}. Contact: ${BUSINESS_INFO.phoneDisplay}`,
      location: `${formData.area}, Dubai, UAE`,
    });
  };

  return (
    <section id="contact" className="py-20 bg-obsidian-900/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Dubai Head Office & Emergency Fleet Hub</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Visit Our Service Center or Request Doorstep Visit
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conveniently based in International City, Dubai, dispatching rapid technicians across the entire emirate of Dubai.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Location Details & Direct Triggers (5 Cols) */}
          <div className="lg:col-span-5 bg-obsidian-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-electric-600/20 border border-electric-500/30 flex items-center justify-center text-electric-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {BUSINESS_INFO.name}
                  </h3>
                  <span className="text-xs text-cyanTech-400 font-semibold">
                    Authorized Repair Workshop #10
                  </span>
                </div>
              </div>

              {/* Location Spec List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Physical Address
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      GPS: {BUSINESS_INFO.gps.lat}, {BUSINESS_INFO.gps.lng}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.operatingHours}
                    </p>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      Open 7 Days a Week including Friday & Public Holidays
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Emergency Hotline
                    </span>
                    <a
                      href={BUSINESS_INFO.telLink}
                      className="text-base font-black text-white hover:text-cyanTech-300 transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      Instant response with English, Arabic & Urdu support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Triggers */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-cyanTech-200" />
                <span>Navigate with Google Maps (Turn-by-Turn)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="py-2.5 px-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-obsidian-950 text-whatsapp" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form & Live Embedded Map (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Embedded Google Map Frame */}
            <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-obsidian-950">
              <iframe
                title="Seher Alanwar Trading Location Map"
                src={`https://maps.google.com/maps?q=${BUSINESS_INFO.gps.lat},${BUSINESS_INFO.gps.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-obsidian-950/90 backdrop-blur-md border border-white/10 text-xs font-bold text-white flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Shop 10, Building X4, International City, Dubai</span>
              </div>
            </div>

            {/* Quick Online Dispatch Form */}
            <div className="bg-obsidian-950 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl flex-1 text-left">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Request Fast Doorstep Technician
                  </h3>
                  <p className="text-xs text-slate-400">
                    Submit below for priority dispatch within 30-60 mins
                  </p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase tracking-wider">
                  Inspection Waived
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-lg font-black text-white mb-1">
                    Booking Request Prepared!
                  </h4>
                  <p className="text-xs text-slate-300 mb-6 max-w-sm mx-auto">
                    Choose an option below to proceed with your booking:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    <a
                      href={generateWhatsAppLink({
                        appliance: formData.appliance,
                        symptom: formData.issue,
                        area: formData.area,
                        customMessage: `Name: ${formData.name} - Phone: ${formData.phone}`,
                        urgency: formData.urgency as any,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Open WhatsApp</span>
                    </a>

                    <a
                      href={BUSINESS_INFO.telLink}
                      className="py-3 px-4 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Call Dispatch</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-cyanTech-400 hover:text-white underline underline-offset-4"
                    >
                      + Book Another Appliance / Submit New
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadCalendar}
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" /> Save .ICS
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Mohammed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian-850 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-obsidian-850 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Appliance
                      </label>
                      <select
                        value={formData.appliance}
                        onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                        className="w-full bg-obsidian-850 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                      >
                        <option value="Washing Machine">Washing Machine / Dryer</option>
                        <option value="Refrigerator">Refrigerator / Chiller</option>
                        <option value="Cooking Range">Cooking Range / Oven</option>
                        <option value="Dishwasher">Dishwasher</option>
                        <option value="Split AC">Split AC / Air Conditioner</option>
                        <option value="Microwave">Microwave / Small Appliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Dubai Area / Building
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Building X4, DSO, Mirdif"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full bg-obsidian-850 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Problem Description / Error Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Not cooling, water leaking, drum won't spin, gas igniter"
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full bg-obsidian-850 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>

                  {/* Add 2nd Appliance Toggle */}
                  <div className="pt-1">
                    {!formData.hasSecond ? (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, hasSecond: true })}
                        className="text-xs font-semibold text-cyanTech-400 hover:text-white flex items-center gap-1.5"
                      >
                        <PlusCircle className="w-4 h-4" />
                        <span>+ Add another appliance (20% Off 2nd Labor)</span>
                      </button>
                    ) : (
                      <div className="bg-obsidian-850 border border-electric-500/30 p-3 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-cyanTech-300 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            2nd Appliance (20% Bundle Discount)
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, hasSecond: false })}
                            className="text-xs text-red-400 hover:text-red-300"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <select
                            value={formData.secondAppliance}
                            onChange={(e) => setFormData({ ...formData, secondAppliance: e.target.value })}
                            className="bg-obsidian-800 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                          >
                            <option value="Refrigerator">Refrigerator</option>
                            <option value="Washing Machine">Washing Machine</option>
                            <option value="Cooking Range">Cooking Range</option>
                            <option value="Dishwasher">Dishwasher</option>
                            <option value="Split AC">Split AC</option>
                          </select>
                          <input
                            type="text"
                            placeholder="Issue with 2nd appliance"
                            value={formData.secondIssue}
                            onChange={(e) => setFormData({ ...formData, secondIssue: e.target.value })}
                            className="bg-obsidian-800 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-safety-600 to-safety-500 hover:from-safety-500 hover:to-safety-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-safety-glow flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Request Immediate Dispatch</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 pt-1 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-electric-400" />
                      90 Days Warranty
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      No Hidden Charges
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
