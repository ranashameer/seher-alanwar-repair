import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  PlusCircle, 
  Trash2, 
  Sparkles, 
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { APPLIANCES } from '../data/appliances';
import { DUBAI_AREAS } from '../data/areas';
import { BUSINESS_INFO } from '../data/business';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { downloadCalendarEvent, generateGoogleCalendarUrl } from '../utils/calendar';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [appliance, setAppliance] = useState(preselectedService || 'Washing Machine');
  const [area, setArea] = useState('International City');
  const [customAddress, setCustomAddress] = useState('');
  const [issue, setIssue] = useState('');
  const [preferredTime, setPreferredTime] = useState('Urgent (30-60 mins)');
  
  // Multi-appliance / Additional option state
  const [hasSecondAppliance, setHasSecondAppliance] = useState(false);
  const [secondAppliance, setSecondAppliance] = useState('Refrigerator');
  const [secondIssue, setSecondIssue] = useState('');
  
  // Service add-on checkboxes
  const [addOnPriority, setAddOnPriority] = useState(true);
  const [addOnDescaling, setAddOnDescaling] = useState(false);
  const [addOnVatInvoice, setAddOnVatInvoice] = useState(true);

  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedWhatsAppUrl, setLastSubmittedWhatsAppUrl] = useState('');

  if (!isOpen) return null;

  const resetFormForAnotherBooking = () => {
    setIsSuccess(false);
    setAppliance('Washing Machine');
    setIssue('');
    setHasSecondAppliance(false);
    setSecondIssue('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let combinedAppliance = appliance;
    let combinedIssue = issue || 'Doorstep Diagnostic & Repair';

    if (hasSecondAppliance) {
      combinedAppliance += ` + ${secondAppliance} (Multi-Appliance Bundle)`;
      combinedIssue += ` | 2nd Appliance (${secondAppliance}): ${secondIssue || 'General Diagnostic'}`;
    }

    const addOns = [];
    if (addOnPriority) addOns.push('Priority Express Dispatch');
    if (addOnDescaling) addOns.push('Deep Descaling & Coil Clean');
    if (addOnVatInvoice) addOns.push('Official Tax Invoice & 90-Day Warranty');

    const customMessage = `Name: ${name} | Phone: ${phone} | Time: ${preferredTime}${
      addOns.length > 0 ? ` | Add-ons: ${addOns.join(', ')}` : ''
    }`;

    const waUrl = generateWhatsAppLink({
      appliance: combinedAppliance,
      symptom: combinedIssue,
      area: `${area} ${customAddress ? `(${customAddress})` : ''}`,
      customMessage,
      urgency: 'Immediate (30-60 Min)',
    });

    setLastSubmittedWhatsAppUrl(waUrl);
    setIsSuccess(true);

    // Prompt WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  const handleDownloadCalendar = () => {
    downloadCalendarEvent({
      title: `Seher Alanwar Repair: ${appliance} ${hasSecondAppliance ? `& ${secondAppliance}` : ''}`,
      description: `Technician visiting for doorstep repair in ${area}. Contact: ${BUSINESS_INFO.phoneDisplay}`,
      location: `${area}, Dubai, UAE`,
    });
  };

  const googleCalUrl = generateGoogleCalendarUrl({
    title: `Seher Alanwar Repair: ${appliance} in ${area}`,
    description: `Doorstep appliance service appointment in ${area}. Phone: ${BUSINESS_INFO.phoneDisplay}`,
    location: `${area}, Dubai, UAE`,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="relative w-full max-w-lg bg-obsidian-900 border border-white/15 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
      >
        {/* Close Button (Large 44px tap area) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-obsidian-800 text-slate-400 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10 pr-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-safety-600 to-amber-500 flex items-center justify-center text-white shadow-md shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-white leading-tight">
              Book Doorstep Technician
            </h3>
            <p className="text-xs text-slate-400">
              30–60 Minutes Arrival Across Dubai • 90-Day Warranty
            </p>
          </div>
        </div>

        {/* SUCCESS / CONFIRMATION VIEW (Enhanced with multiple options!) */}
        {isSuccess ? (
          <div className="py-4 text-center my-auto overflow-y-auto pr-1">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2 font-sans">
              Dispatch Request Created!
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-sm mx-auto leading-relaxed">
              Your appointment for <strong className="text-white">{appliance}</strong> in <strong className="text-cyanTech-300">{area}</strong> is logged. Choose your next action below:
            </p>

            {/* ACTION OPTIONS GROUP */}
            <div className="space-y-2.5 mb-6 text-left">
              {/* Option 1: Live WhatsApp Dispatch (Primary) */}
              <a
                href={lastSubmittedWhatsAppUrl || generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between shadow-whatsapp-glow transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 fill-obsidian-950 text-whatsapp" />
                  <span>Open Live WhatsApp Dispatch</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </a>

              {/* Option 2: Direct Call */}
              <a
                href={BUSINESS_INFO.telLink}
                className="w-full py-3 px-4 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Emergency Dispatch ({BUSINESS_INFO.phoneDisplay})</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">Immediate</span>
              </a>

              {/* Option 3: Book Another Appliance / Add Another Appointment */}
              <button
                type="button"
                onClick={resetFormForAnotherBooking}
                className="w-full py-3 px-4 rounded-xl bg-electric-600/20 hover:bg-electric-600/30 border border-electric-500/40 text-cyanTech-300 font-bold text-xs uppercase tracking-wide flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <PlusCircle className="w-4 h-4 text-cyanTech-400" />
                  <span>Book Another Appliance / Add Appointment</span>
                </div>
                <span className="text-[10px] bg-electric-600/40 px-2 py-0.5 rounded text-white font-semibold">
                  + Add More
                </span>
              </button>

              {/* Option 4: Add to Calendar (.ics download or Google Calendar) */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="py-2.5 px-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/5 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>Download .ICS</span>
                </button>

                <a
                  href={googleCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-white/5 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Google Calendar</span>
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* BOOKING FORM VIEW */
          <form onSubmit={handleSubmit} className="space-y-3.5 overflow-y-auto pr-1 flex-1 text-left">
            
            {/* Banner: Inspection fee waiver */}
            <div className="bg-electric-950/40 border border-electric-500/20 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-semibold text-cyanTech-300">
                <Clock className="w-3.5 h-3.5" /> 30-60 Min Doorstep Arrival
              </span>
              <span className="text-emerald-400 font-bold text-[11px]">
                AED 90 Inspection Waived on Repair
              </span>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al Mansoori"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-obsidian-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Phone (WhatsApp Active)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 55 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-obsidian-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                />
              </div>
            </div>

            {/* Primary Appliance & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Select Appliance
                </label>
                <select
                  value={appliance}
                  onChange={(e) => setAppliance(e.target.value)}
                  className="w-full bg-obsidian-800 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                >
                  {APPLIANCES.map((a) => (
                    <option key={a.id} value={a.name}>
                      {a.name}
                    </option>
                  ))}
                  <option value="Other Electrical Appliance">Other Electrical Item</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Dubai Neighborhood
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-obsidian-800 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                >
                  {DUBAI_AREAS.map((a) => (
                    <option key={a.id} value={a.name.split('(')[0].trim()}>
                      {a.name.split('(')[0].trim()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Building / Cluster / Flat No */}
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Building, Cluster or Villa No. (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Building X4, Flat 204 or Villa 12"
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                className="w-full bg-obsidian-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
              />
            </div>

            {/* Specific Problem */}
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Primary Issue / Error Code
              </label>
              <input
                type="text"
                placeholder="e.g. Not spinning, warm fridge, gas smell, tripped fuse"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full bg-obsidian-800 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
              />
            </div>

            {/* --- ADD ANOTHER APPLIANCE OPTION (User Request!) --- */}
            <div className="pt-2">
              {!hasSecondAppliance ? (
                <button
                  type="button"
                  onClick={() => setHasSecondAppliance(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-electric-950/60 border border-dashed border-electric-500/40 hover:border-electric-500 hover:bg-electric-900/40 text-cyanTech-300 text-xs font-bold flex items-center justify-center gap-2 transition-all group"
                >
                  <PlusCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>+ Add Another Appliance (Save 20% on 2nd Labor)</span>
                </button>
              ) : (
                <div className="rounded-xl bg-obsidian-850 border border-electric-500/40 p-3.5 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyanTech-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      2nd Appliance (20% Bundle Discount Applied)
                    </span>
                    <button
                      type="button"
                      onClick={() => setHasSecondAppliance(false)}
                      className="text-slate-400 hover:text-red-400 p-1"
                      title="Remove 2nd Appliance"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <select
                      value={secondAppliance}
                      onChange={(e) => setSecondAppliance(e.target.value)}
                      className="w-full bg-obsidian-800 border border-white/10 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                    >
                      {APPLIANCES.map((a) => (
                        <option key={a.id} value={a.name}>
                          {a.name}
                        </option>
                      ))}
                      <option value="Microwave">Microwave</option>
                      <option value="Split AC">Split AC</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Issue with 2nd appliance"
                      value={secondIssue}
                      onChange={(e) => setSecondIssue(e.target.value)}
                      className="w-full bg-obsidian-800 border border-white/10 rounded-lg px-2.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Preferred Timing */}
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Preferred Technician Arrival
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Urgent (30-60 mins)', 'Today Evening', 'Tomorrow Morning', 'Schedule Later'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setPreferredTime(t)}
                    className={`py-2 px-2.5 rounded-lg border text-center font-semibold transition-all ${
                      preferredTime === t
                        ? 'bg-electric-600/30 border-electric-500 text-white font-bold'
                        : 'bg-obsidian-800 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-on Checklist */}
            <div className="space-y-1.5 pt-1 border-t border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Included Features & Add-ons:
              </span>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={addOnPriority}
                  onChange={(e) => setAddOnPriority(e.target.checked)}
                  className="rounded text-electric-600 bg-obsidian-800 border-white/20 focus:ring-electric-500"
                />
                <span>Priority GPS dispatch to closest mobile van unit</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={addOnDescaling}
                  onChange={(e) => setAddOnDescaling(e.target.checked)}
                  className="rounded text-electric-600 bg-obsidian-800 border-white/20 focus:ring-electric-500"
                />
                <span>Include UAE hard-water descaling / chemical coil wash</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={addOnVatInvoice}
                  onChange={(e) => setAddOnVatInvoice(e.target.checked)}
                  className="rounded text-electric-600 bg-obsidian-800 border-white/20 focus:ring-electric-500"
                />
                <span>Formal 90-Day Written Warranty Certificate & Tax Invoice</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-safety-600 to-safety-500 hover:from-safety-500 hover:to-safety-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-safety-glow flex items-center justify-center gap-2 mt-4 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm & Dispatch on WhatsApp</span>
            </button>

            {/* Bottom trust footer */}
            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 90-Day Parts Warranty
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-electric-400" /> Direct: {BUSINESS_INFO.phoneDisplay}
              </span>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
