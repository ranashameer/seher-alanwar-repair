import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, Phone, MessageCircle, Clock, ShieldCheck, 
  CheckCircle2, AlertCircle, Wrench, ChevronRight, HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { SeoHead } from '../components/SeoHead';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface PricingPageProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking }) => {
  const whatsAppUrl = generateWhatsAppLink({
    appliance: 'Cost Estimate Inquiry',
    symptom: 'Request Transparent Price Quote',
    urgency: 'General Inquiry',
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Appliance Repair Cost Guide Dubai",
    "description": "Transparent home appliance repair costs and diagnostic fee guidelines in Dubai, UAE.",
    "url": "https://ranashameer.github.io/seher-alanwar-repair/pricing",
    "mainEntity": {
      "@type": "PriceSpecification",
      "priceCurrency": "AED",
      "minPrice": "90",
      "maxPrice": "450"
    }
  };

  const pricingCategories = [
    {
      appliance: 'Washing Machine & Dryer Repair',
      startingPrice: 'AED 120',
      avgCost: 'AED 140 – 280',
      items: [
        { fault: 'Diagnostic & Electrical Safety Check', price: 'AED 90 (Waived on Repair)', note: 'Free when repair is done' },
        { fault: 'Drain Pump Clearing & Filter Debris Removal', price: 'AED 120 – 160', note: 'Includes full pump flush' },
        { fault: 'Drive Belt Replacement & Tensioning', price: 'AED 140 – 220', note: 'Genuine OEM belt with 90-day warranty' },
        { fault: 'Water Inlet Valve / Pressure Switch Sensor', price: 'AED 180 – 260', note: 'Original factory replacement' },
        { fault: 'Drain Pump Assembly Replacement', price: 'AED 190 – 280', note: 'Heavy-duty magnetic pump' },
        { fault: 'Main PCB Motherboard Inverter Repair', price: 'AED 240 – 380', note: 'Component-level fix & calibration' },
        { fault: 'Drum Bearing & Waterproof Gasket Overhaul', price: 'AED 350 – 520', note: 'Complete mechanical rebuild' }
      ]
    },
    {
      appliance: 'Refrigerator & Chiller Repair',
      startingPrice: 'AED 140',
      avgCost: 'AED 160 – 350',
      items: [
        { fault: 'Diagnostic & Thermal Laser Inspection', price: 'AED 90 (Waived on Repair)', note: 'Free when repair is done' },
        { fault: 'Defrost Drain Unclogging & Odor Removal', price: 'AED 120 – 160', note: 'High pressure line clearing' },
        { fault: 'Compressor Starter Relay & Run Capacitor', price: 'AED 160 – 240', note: 'Resolves clicking / no cooling' },
        { fault: 'Defrost Heater Element & Bimetal Sensor', price: 'AED 190 – 290', note: 'Eliminates ice buildup' },
        { fault: 'Freon R134a / R600a Gas Refill & Leak Fix', price: 'AED 220 – 350', note: 'System vacuum & pressure test' },
        { fault: 'Inverter Compressor Electronic Control Board', price: 'AED 280 – 480', note: 'Original manufacturer PCB' },
        { fault: 'Compressor Replacement (Labor & Brazing)', price: 'AED 380 – 650', note: '90-day formal warranty' }
      ]
    },
    {
      appliance: 'Dishwasher Repair & Descaling',
      startingPrice: 'AED 120',
      avgCost: 'AED 140 – 290',
      items: [
        { fault: 'Diagnostic Inspection & Leak Check', price: 'AED 90 (Waived on Repair)', note: 'Free when repair is done' },
        { fault: 'Drain Pump Clearing & Sump Filter Service', price: 'AED 120 – 160', note: 'Clears E15, E24, OE errors' },
        { fault: 'Door Perimeter Silicone Seal Replacement', price: 'AED 140 – 220', note: 'Stops door water leaks' },
        { fault: 'Aquastop Anti-Flood Inlet Valve Replacement', price: 'AED 180 – 280', note: 'OEM safety water stop' },
        { fault: 'Flow-Through Heating Element & Thermistor', price: 'AED 240 – 360', note: 'Restores hot water wash' },
        { fault: 'Circulation Wash Pump Motor Overhaul', price: 'AED 290 – 450', note: 'Full pressure test cycle' }
      ]
    },
    {
      appliance: 'Cooking Range, Stove & Oven Repair',
      startingPrice: 'AED 130',
      avgCost: 'AED 140 – 320',
      items: [
        { fault: 'Gas Safety & Sniffer Leak Inspection', price: 'AED 90 (Waived on Repair)', note: 'Free when repair is done' },
        { fault: 'Burner Jet Cleaning & Flame Tuning', price: 'AED 120 – 160', note: 'Calibrated blue flame' },
        { fault: 'Safety Thermocouple Replacement', price: 'AED 140 – 220', note: 'Fixes flame dying on knob release' },
        { fault: 'Spark Igniter Module & Microswitch Harness', price: 'AED 160 – 250', note: 'Stops non-stop clicking' },
        { fault: 'Oven Heating Element (Top or Bottom)', price: 'AED 220 – 350', note: 'Restores baking heat' },
        { fault: 'Oven Thermostat & Selector Switch Fix', price: 'AED 240 – 380', note: 'Accurate temperature control' }
      ]
    }
  ];

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-obsidian-950 text-slate-100 min-h-screen">
      <SeoHead
        title="Appliance Repair Cost Dubai | Upfront Transparent Pricing"
        description="Transparent appliance repair costs in Dubai. AED 90 inspection fee waived on repair approval. Clear price brackets for washers, fridges & cookers with 90-day warranty."
        canonicalPath="/pricing"
        schema={schemaData}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-cyanTech-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">Pricing & Cost Guide</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Dubai Upfront Pricing Guarantee</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Appliance Repair Cost Guide in Dubai – 100% Upfront Pricing
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            No surprise invoices or hidden labor fees. We provide clear, itemized price brackets before any work begins, backed by an official written 90-day warranty.
          </p>
        </div>

        {/* The Diagnostic Waiver Banner */}
        <div className="bg-gradient-to-r from-emerald-950/70 via-obsidian-900 to-obsidian-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                How Our AED 90 Diagnostic Fee Works (100% Waived)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When our technician arrives at your doorstep, they perform an exhaustive diagnostic and electrical safety check (AED 90). If you proceed with the repair, <strong>this AED 90 fee is completely waived</strong>! You only pay for the agreed repair and authentic parts.
              </p>
            </div>
          </div>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
            <span>Check My Appliance Cost</span>
          </a>
        </div>

        {/* Pricing Category Tables */}
        <div className="space-y-10 mb-14">
          {pricingCategories.map((cat, idx) => (
            <div key={idx} className="bg-obsidian-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-obsidian-850 p-4 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-white">{cat.appliance}</h2>
                  <span className="text-xs text-slate-400">Typical Dubai repair bracket: {cat.avgCost}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-semibold">Starting at:</span>
                  <span className="text-base sm:text-lg font-black text-cyanTech-300">{cat.startingPrice}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-bold bg-obsidian-900/60 border-b border-white/5">
                    <tr>
                      <th className="py-2.5 px-4">Problem / Component Scope</th>
                      <th className="py-2.5 px-4">Dubai Estimated Price</th>
                      <th className="py-2.5 px-4">Inclusions & Warranty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200">
                    {cat.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-semibold text-white">{item.fault}</td>
                        <td className="py-3 px-4 font-bold text-cyanTech-400 whitespace-nowrap">{item.price}</td>
                        <td className="py-3 px-4 text-slate-300 text-xs">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Repair vs Replace Framework */}
        <section className="mb-14 bg-obsidian-900/50 border border-white/10 rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 font-sans">
              Repair or Replace? A Transparent Dubai Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              We never recommend repairing a machine if buying a new one makes more financial sense. Use our 50% rule:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="bg-obsidian-850 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base mb-3">
                <CheckCircle2 className="w-5 h-5" />
                <span>When You Should REPAIR (90% of Cases)</span>
              </div>
              <ul className="space-y-2.5 text-slate-300">
                <li>• Appliance is under 8 years old.</li>
                <li>• Estimated repair cost is under 50% of the price of a brand-new comparable model.</li>
                <li>• Major structural components (like the washer outer tub or fridge cabinet) are sound.</li>
                <li>• Common consumable failures: pumps, belts, relays, sensors, capacitors, and heating elements.</li>
              </ul>
            </div>

            <div className="bg-obsidian-850 border border-safety-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-safety-400 font-bold text-base mb-3">
                <AlertCircle className="w-5 h-5" />
                <span>When You Should REPLACE</span>
              </div>
              <ul className="space-y-2.5 text-slate-300">
                <li>• Appliance is older than 10–12 years with recurrent major failures.</li>
                <li>• Multiple major systems failed simultaneously (e.g., seized compressor + burnt main board).</li>
                <li>• Severe internal rust or chassis degradation.</li>
                <li>• Repair estimate exceeds 50%–60% of replacement cost.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-electric-950 via-obsidian-900 to-obsidian-900 border border-electric-500/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-black text-white mb-2 font-sans">
            Need an Exact Quote for Your Appliance?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Send us your appliance brand, model, and the issue. Our master technicians will provide an honest, accurate price estimate within 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
              <span>Get Instant WhatsApp Quote</span>
            </a>

            <a
              href={BUSINESS_INFO.telLink}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-electric-400" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};
