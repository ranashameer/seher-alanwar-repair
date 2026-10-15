import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2, 
  Wrench, ChevronRight, AlertCircle, ArrowRight, MapPin, 
  Sparkles, Star, Tag, Award
} from 'lucide-react';
import { SERVICES_SEO_DATA } from '../data/seoPagesData';
import { BUSINESS_INFO } from '../data/business';
import { SeoHead } from '../components/SeoHead';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ServiceDetailPageProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES_SEO_DATA[slug] : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const whatsAppUrl = generateWhatsAppLink({
    appliance: service.applianceName,
    symptom: 'Doorstep Repair & Inspection',
    urgency: 'Immediate (30-60 Min)',
  });

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.h1,
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": BUSINESS_INFO.name,
        "telephone": BUSINESS_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop 10, Building X4, International City",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai"
      },
      "offers": {
        "@type": "Offer",
        "price": service.startingPrice.toString(),
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "description": "Diagnostic fee waived 100% when repair is completed."
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
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
          "name": "Services",
          "item": "https://ranashameer.github.io/seher-alanwar-repair/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.applianceName,
          "item": `https://ranashameer.github.io/seher-alanwar-repair/services/${service.slug}`
        }
      ]
    }
  ];

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-obsidian-950 text-slate-100 min-h-screen">
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        schema={schemaData}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-cyanTech-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/#services" className="hover:text-cyanTech-300 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">{service.applianceName}</span>
        </nav>

        {/* Hero Header Section */}
        <div className="bg-obsidian-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/15 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyanTech-400" />
                <span>🇦🇪 Exclusively Serving Dubai & All Residential Districts</span>
              </div>

              {/* Exact Primary H1 */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-sans">
                {service.h1}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Fast, professional on-site diagnostics and repairs across all Dubai communities. Uniformed technicians arrive in fully equipped mobile service vans stocked with authentic OEM replacement parts.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-6">
                <div className="bg-obsidian-800/80 border border-white/5 rounded-xl p-2.5 sm:p-3 text-center">
                  <Clock className="w-4 h-4 text-cyanTech-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Arrival</span>
                  <span className="text-xs sm:text-sm font-black text-white">{service.avgTimeMin}–60 Mins</span>
                </div>

                <div className="bg-obsidian-800/80 border border-white/5 rounded-xl p-2.5 sm:p-3 text-center">
                  <ShieldCheck className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Warranty</span>
                  <span className="text-xs sm:text-sm font-black text-white">{service.warranty}</span>
                </div>

                <div className="bg-obsidian-800/80 border border-white/5 rounded-xl p-2.5 sm:p-3 text-center">
                  <Tag className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Starting At</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-300">AED {service.startingPrice}</span>
                </div>
              </div>

              {/* High-Impact Dual CTAs */}
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
                  <span>WhatsApp Technician Now (30m ETA)</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={BUSINESS_INFO.telLink}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-electric-400" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </motion.a>
              </div>

              <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AED 90 Diagnostic & Inspection Fee is <strong>100% Waived</strong> upon repair approval.</span>
              </div>
            </div>

            {/* Right Media Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src={service.image}
                  alt={service.altText}
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-obsidian-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-electric-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Technicians</span>
                      <span className="text-xs font-bold text-white">Certified Dubai Specialists</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>4.9 / 5 Rating</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 1: Common Faults & Symptoms */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 font-sans">
              Common {service.applianceName} Faults We Fix in Dubai
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Immediate on-site repair using specialized diagnostic testing and original OEM manufacturer spare parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {service.commonFaults.map((fault, index) => (
              <div key={index} className="bg-obsidian-900/80 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-electric-500/40 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-electric-600/20 border border-electric-500/30 flex items-center justify-center text-electric-400 shrink-0 font-bold text-xs">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {fault.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {fault.description}
                    </p>
                  </div>
                </div>

                <div className="bg-obsidian-850 rounded-xl p-3 mb-3 border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Recognizable Symptoms:
                  </span>
                  <ul className="space-y-1">
                    {fault.symptoms.map((sym, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyanTech-400 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-400 italic">
                  <strong>Fix Approach:</strong> {fault.fixApproach}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Dubai Climate & Water Hardness Impact */}
        <section className="mb-14 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-electric-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyanTech-500/20 border border-cyanTech-400/30 flex items-center justify-center text-cyanTech-300 shrink-0 mt-1">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                How Dubai's Climate & Tap Water Affect Your {service.applianceName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {service.dubaiClimateFactors}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Compatibility Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 font-sans">
              Compatible Brands & Models Serviced
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              We carry original factory spare parts for all major Dubai household brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
            {service.brandCompatibility.map((brand, idx) => (
              <div key={idx} className="bg-obsidian-900/60 border border-white/5 rounded-xl p-3 text-center hover:border-cyanTech-400/40 transition-colors">
                <span className="text-xs font-bold text-white block">{brand}</span>
                <span className="text-[10px] text-slate-400">OEM Parts</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Transparent Pricing Table */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 font-sans">
              {service.applianceName} Repair Pricing Guide (Dubai)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Clear price brackets with zero surprise fees. You only pay if you approve the written quote.
            </p>
          </div>

          <div className="overflow-x-auto bg-obsidian-900/80 border border-white/10 rounded-2xl shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-obsidian-850 text-slate-300 uppercase font-bold text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Service Scope</th>
                  <th className="py-3 px-4">Estimated Range</th>
                  <th className="py-3 px-4">Warranty</th>
                  <th className="py-3 px-4">Est. Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {service.pricingTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">{row.serviceType}</td>
                    <td className="py-3 px-4 font-bold text-cyanTech-400">{row.estimatedRangeAED}</td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">{row.warrantyCoverage}</td>
                    <td className="py-3 px-4 text-slate-400">{row.turnaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Step-by-Step Customer Journey */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 font-sans">
              Our 4-Step Doorstep Repair Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.stepByStepProcess.map((step, idx) => (
              <div key={idx} className="bg-obsidian-900/60 border border-white/10 rounded-2xl p-5 relative">
                <span className="text-3xl font-black text-electric-500/30 block mb-2 font-sans">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: FAQs with FAQPage Schema */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 font-sans">
              Frequently Asked Questions: {service.applianceName} Repair
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {service.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-obsidian-900/80 border border-white/10 rounded-xl p-5">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Quick Area Links */}
        <section className="mb-14 bg-obsidian-900/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyanTech-400" />
            <span>Priority Dubai Neighborhoods Covered for {service.applianceName} Repair</span>
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { name: 'International City', href: '/areas/international-city' },
              { name: 'Dubai Silicon Oasis', href: '/areas/dubai-silicon-oasis' },
              { name: 'Mirdif', href: '/areas/mirdif' },
              { name: 'Al Warqa', href: '/areas/al-warqa' },
              { name: 'Business Bay', href: '/areas/business-bay' },
              { name: 'Downtown Dubai', href: '/areas/downtown-dubai' },
              { name: 'Dubai Marina & JBR', href: '/areas/dubai-marina' },
              { name: 'JVC', href: '/areas/jvc' },
            ].map(area => (
              <Link
                key={area.name}
                to={area.href}
                className="px-3 py-1.5 rounded-lg bg-obsidian-800 border border-white/5 text-slate-300 hover:text-white hover:border-cyanTech-400/40 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Booking Trigger Card */}
        <div className="bg-gradient-to-r from-electric-950 via-obsidian-900 to-obsidian-900 border border-electric-500/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-black text-white mb-2 font-sans">
            Ready to Fix Your {service.applianceName}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Get an instant price quote and have a certified Dubai technician arrive at your doorstep in 30 to 60 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
              <span>Book via WhatsApp Live (30m ETA)</span>
            </a>

            <button
              onClick={() => onOpenBooking(service.applianceName)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-electric-600 hover:bg-electric-500 shadow-electric-glow flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Schedule Doorstep Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
