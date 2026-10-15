import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldCheck, CheckCircle2, ChevronRight, Phone, 
  MessageCircle, Wrench, Sparkles, Star 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { BRANDS_DATA } from '../data/brands';
import { SeoHead } from '../components/SeoHead';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const BrandsPage: React.FC = () => {
  const whatsAppUrl = generateWhatsAppLink({
    appliance: 'Brand Specific Inquiry',
    symptom: 'OEM Replacement Parts & Service',
    urgency: 'General Inquiry',
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Appliance Brands Serviced in Dubai",
    "description": "Multi-brand appliance repair specialists stocking genuine OEM parts across Dubai, UAE.",
    "url": "https://ranashameer.github.io/seher-alanwar-repair/brands"
  };

  const brandDetails = [
    {
      name: 'Samsung',
      category: 'EcoBubble Washers, Inverter Twin-Cooling Refrigerators & Microwaves',
      commonIssues: ['4E / 5E drain error codes', 'Inverter compressor failure', 'Digital inverter motor vibration', 'Defrost sensor failure'],
      strengths: 'Full inventory of Samsung OEM drain pumps, drive belts, and inverter controller boards stocked in Dubai.'
    },
    {
      name: 'LG',
      category: 'DirectDrive Washers, InstaView Door-in-Door Fridges & Dishwashers',
      commonIssues: ['OE / IE water flow errors', 'DirectDrive hall sensor / stator faults', 'Linear compressor error codes', 'Smart Diagnosis calibration'],
      strengths: 'Original LG factory hall sensors, drain impellers, and compressor relays installed on-site with 90-day warranty.'
    },
    {
      name: 'Bosch & Siemens',
      category: 'Serie 4, 6, 8 Front-Load Washers & PerfectDry Dishwashers',
      commonIssues: ['E15 / E24 Aquastop anti-flood error', 'E18 drain pump blockage', 'EcoSilence drive motor errors', 'Flow-through heater calcification'],
      strengths: 'Specialized European diagnostic tools for high-precision Bosch & Siemens component testing and descaling.'
    },
    {
      name: 'Whirlpool & Ariston',
      category: 'Sixth Sense Washing Machines, Gas Cooking Ranges & Ovens',
      commonIssues: ['F02 / F06 error codes', 'Safety thermocouple gas shutoff', 'Oven heating element burnout', 'Drive belt snapping'],
      strengths: 'Direct UAE supplier access for genuine Ariston thermocouples, oven thermostats, and heavy-duty motor belts.'
    },
    {
      name: 'Miele',
      category: 'Luxury TwinDos Washers & Integrated Dishwashers',
      commonIssues: ['Waterproof safety system trips', 'TwinDos dispenser clogs', 'Circulation pump pressure drops', 'Electronic touch panel faults'],
      strengths: 'White-glove luxury repair standards using authentic Miele factory replacement parts.'
    },
    {
      name: 'Super General, Nikai & Daewoo',
      category: 'Heavy-Duty Chiller Fridges, Top-Load Washers & Split ACs',
      commonIssues: ['Freon gas leaks in high summer', 'Capacitor burnout', 'Top-load spin brake failure', 'Thermostat freeze-ups'],
      strengths: 'Rapid 30-min response and affordable OEM replacement parts for high-workload Dubai households.'
    }
  ];

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-obsidian-950 text-slate-100 min-h-screen">
      <SeoHead
        title="Appliance Brands We Repair in Dubai | OEM Parts & Service"
        description="Authorized repair specialists for Samsung, LG, Bosch, Siemens, Whirlpool, Ariston, Miele & Super General appliances across Dubai. 90-day warranty on genuine parts."
        canonicalPath="/brands"
        schema={schemaData}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-cyanTech-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">Brands Serviced</span>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>OEM Spare Parts Guaranteed</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Appliance Brands Serviced in Dubai – Genuine OEM Replacement Parts
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our certified Dubai technicians have extensive factory diagnostic experience across all major international household appliance manufacturers.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {brandDetails.map((b, idx) => (
            <div key={idx} className="bg-obsidian-900/80 border border-white/10 rounded-2xl p-6 hover:border-cyanTech-400/40 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                <h2 className="text-xl font-black text-white font-sans">{b.name}</h2>
                <span className="px-2.5 py-0.5 rounded-md bg-electric-600/20 text-cyanTech-300 text-[10px] font-bold uppercase tracking-wider border border-electric-500/30">
                  OEM Certified
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300 mb-4">{b.category}</p>

              <div className="bg-obsidian-850 rounded-xl p-3 mb-4 border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Frequently Diagnosed & Repaired:
                </span>
                <ul className="space-y-1">
                  {b.commonIssues.map((issue, iIdx) => (
                    <li key={iIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-cyanTech-400 shrink-0" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Parts & Support:</strong> {b.strengths}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-electric-950 via-obsidian-900 to-obsidian-900 border border-electric-500/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-black text-white mb-2 font-sans">
            Have a Specific Appliance Brand Model?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Share a photo of your machine’s rating sticker or model number on WhatsApp for instant spare part availability and arrival ETA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
              <span>Inquire on WhatsApp (OEM Parts)</span>
            </a>

            <a
              href={BUSINESS_INFO.telLink}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-electric-400" />
              <span>Call Technician: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};
