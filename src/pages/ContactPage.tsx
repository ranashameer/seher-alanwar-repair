import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, MessageCircle, Clock, ShieldCheck, 
  ChevronRight, Building, Navigation, Send 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { SeoHead } from '../components/SeoHead';
import { ContactLocationHub } from '../components/ContactLocationHub';

export const ContactPage: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BUSINESS_INFO.name,
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop 10, Building X4, International City",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.gps.lat,
      "longitude": BUSINESS_INFO.gps.lng
    },
    "openingHours": "Mo-Su 08:00-23:00"
  };

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-obsidian-950 text-slate-100 min-h-screen">
      <SeoHead
        title="Contact Seher Alanwar Repair Dubai | 24/7 Hotline & Workshop"
        description="Contact Dubai's trusted appliance repair experts. Workshop: Shop 10, Building X4, International City. Call +971 55 630 2344 or chat on WhatsApp for 30-min dispatch."
        canonicalPath="/contact"
        schema={schemaData}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-cyanTech-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">Contact & Location Hub</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Dubai Head Workshop & Dispatch Fleet</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Contact Our Dubai Repair Center & Mobile Dispatch
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Need urgent doorstep service or want to drop off an appliance at our workshop? Reach out directly via phone or WhatsApp for immediate assistance.
          </p>
        </div>

        {/* Embedded Interactive Contact & Map Hub */}
        <ContactLocationHub />

      </div>
    </article>
  );
};
