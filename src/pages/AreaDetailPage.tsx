import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2, 
  Wrench, ChevronRight, MapPin, Building, Star, Navigation
} from 'lucide-react';
import { AREAS_SEO_DATA } from '../data/seoPagesData';
import { BUSINESS_INFO } from '../data/business';
import { SeoHead } from '../components/SeoHead';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface AreaDetailPageProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const AreaDetailPage: React.FC<AreaDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? AREAS_SEO_DATA[slug] : undefined;

  if (!area) {
    return <Navigate to="/" replace />;
  }

  const whatsAppUrl = generateWhatsAppLink({
    appliance: 'Emergency Appliance Repair',
    symptom: `Doorstep Visit in ${area.name}`,
    urgency: 'Immediate (30-60 Min)',
  });

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": `Seher Alanwar Appliances Repair - ${area.name} Hub`,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop 10, Building X4, International City",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": area.name
      },
      "priceRange": "AED 90 - AED 450"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ranashameer.github.io/seher-alanwar-repair/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Areas Covered",
          "item": "https://ranashameer.github.io/seher-alanwar-repair/#coverage"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": area.name,
          "item": `https://ranashameer.github.io/seher-alanwar-repair/areas/${area.slug}`
        }
      ]
    }
  ];

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-obsidian-950 text-slate-100 min-h-screen">
      <SeoHead
        title={area.metaTitle}
        description={area.metaDescription}
        canonicalPath={`/areas/${area.slug}`}
        schema={schemaData}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-cyanTech-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/#coverage" className="hover:text-cyanTech-300 transition-colors">Coverage Areas</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">{area.name}</span>
        </nav>

        {/* Local Area Hero Banner */}
        <div className="bg-obsidian-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyanTech-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyanTech-500/15 border border-cyanTech-400/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-cyanTech-400" />
              <span>🟢 Priority Dispatch Zone: {area.name}, Dubai</span>
            </div>

            {/* Localized Primary H1 */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-sans">
              {area.h1}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {area.zoneHighlights} Our licensed technicians carry original OEM spare parts in mobile vans to repair washing machines, refrigerators, cookers, ovens, and dishwashers on the spot.
            </p>

            {/* Local Trust Matrix */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-6">
              <div className="bg-obsidian-850 border border-white/5 rounded-xl p-3 text-center">
                <Clock className="w-4 h-4 text-cyanTech-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Arrival</span>
                <span className="text-xs sm:text-sm font-black text-white">{area.etaMin}–35 Mins</span>
              </div>

              <div className="bg-obsidian-850 border border-white/5 rounded-xl p-3 text-center">
                <Navigation className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Active Fleet</span>
                <span className="text-xs sm:text-sm font-black text-emerald-300">{area.activeTechs} Vans in Sector</span>
              </div>

              <div className="bg-obsidian-850 border border-white/5 rounded-xl p-3 text-center">
                <ShieldCheck className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Warranty</span>
                <span className="text-xs sm:text-sm font-black text-white">90 Days Formal</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
                <span>Request {area.name} Technician (WhatsApp)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_INFO.telLink}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-electric-400" />
                <span>Direct Hotline: {BUSINESS_INFO.phoneDisplay}</span>
              </motion.a>
            </div>

            <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inspection fee is 100% waived if you approve the doorstep repair quote.</span>
            </div>

          </div>
        </div>

        {/* Section 1: Residential Community Breakdown */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-obsidian-900/70 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Building className="w-5 h-5 text-electric-400" />
              <h2 className="text-lg font-bold text-white">Housing Types Serviced in {area.name}</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {area.housingTypes} Our technicians carry equipment suitable for service elevators, building security passes, and independent villa grounds.
            </p>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Key Community Landmarks:</span>
            <div className="flex flex-wrap gap-2 text-xs">
              {area.landmarks.map(lm => (
                <span key={lm} className="px-2.5 py-1 rounded-md bg-obsidian-800 border border-white/5 text-slate-300">
                  📍 {lm}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-obsidian-900/70 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <Wrench className="w-5 h-5 text-cyanTech-400" />
              <h2 className="text-lg font-bold text-white">Most Requested Repairs in {area.name}</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyanTech-400 shrink-0" />
                <span><strong>Washing Machine Spin & Drainage Repair:</strong> 30-min doorstep arrival.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyanTech-400 shrink-0" />
                <span><strong>Refrigerator Emergency Cooling & Freon Gas:</strong> Prevent food spoilage.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyanTech-400 shrink-0" />
                <span><strong>Cooking Range Spark Igniters & Thermocouples:</strong> Safe gas calibration.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyanTech-400 shrink-0" />
                <span><strong>Dishwasher Leak & Heating Element Descaling:</strong> Complete wash calibration.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Appliance Links */}
        <section className="mb-12 bg-obsidian-900/50 border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Select Your Appliance for Dedicated Guides in {area.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {[
              { name: 'Washing Machine Repair', href: '/services/washing-machine-repair-dubai', icon: '🧺' },
              { name: 'Refrigerator Repair', href: '/services/refrigerator-repair-dubai', icon: '❄️' },
              { name: 'Dishwasher Repair', href: '/services/dishwasher-repair-dubai', icon: '🍽️' },
              { name: 'Cooking Range Repair', href: '/services/cooking-range-repair-dubai', icon: '🔥' },
            ].map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="p-3.5 rounded-xl bg-obsidian-850 hover:bg-electric-600/20 border border-white/5 hover:border-electric-500/40 transition-all flex items-center gap-2.5"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-bold text-white">{item.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: Other Nearby Dubai Districts */}
        <section className="mb-12">
          <h2 className="text-base font-bold text-slate-300 mb-3">Other Dubai Residential Districts We Serve:</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {Object.values(AREAS_SEO_DATA).map(a => (
              <Link
                key={a.slug}
                to={`/areas/${a.slug}`}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  a.slug === area.slug
                    ? 'bg-cyanTech-500/20 text-cyanTech-300 border-cyanTech-400/50 font-bold'
                    : 'bg-obsidian-900 text-slate-300 border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {a.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Booking Trigger Card */}
        <div className="bg-gradient-to-r from-electric-950 via-obsidian-900 to-obsidian-900 border border-electric-500/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-black text-white mb-2 font-sans">
            Need Doorstep Appliance Repair in {area.name}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Our mobile service unit is currently stationed in your sector. Get an instant quote and fast technician dispatch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
              <span>WhatsApp Dispatch (ETA: {area.etaMin}m)</span>
            </a>

            <button
              onClick={() => onOpenBooking(`Repair in ${area.name}`)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-electric-600 hover:bg-electric-500 shadow-electric-glow flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Doorstep Visit</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
