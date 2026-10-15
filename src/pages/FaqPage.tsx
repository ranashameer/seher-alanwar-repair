import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, ChevronDown, ChevronRight, Phone, MessageCircle, 
  ShieldCheck, Wrench, Sparkles, CheckCircle2 
} from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { BUSINESS_INFO } from '../data/business';
import { SeoHead } from '../components/SeoHead';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsAppUrl = generateWhatsAppLink({
    appliance: 'General FAQ Inquiry',
    symptom: 'Doorstep Service Question',
    urgency: 'General Inquiry',
  });

  const categories = ['All', 'Response & Arrival', 'Pricing & Fees', 'Warranty & Quality', 'Parts & Brands', 'Safety & Tips'];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQS_DATA 
    : FAQS_DATA.filter(f => f.category === activeCategory);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-obsidian-950 text-slate-100 min-h-screen">
      <SeoHead
        title="Appliance Repair FAQs Dubai | Expert Answers & Warranties"
        description="Got questions about home appliance repair in Dubai? Learn about arrival times, 90-day warranties, inspection fee waivers, OEM parts & emergency dispatch."
        canonicalPath="/faq"
        schema={schemaData}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-cyanTech-300 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">FAQs</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Dubai Knowledge Base</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Frequently Asked Questions – Dubai Appliance Repair
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Everything you need to know about our doorstep response times, diagnostic fee waivers, 90-day warranties, and genuine spare parts across Dubai.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenFaqIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-electric-600 text-white shadow-electric-glow'
                  : 'bg-obsidian-900 border border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-14">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-obsidian-900/90 border-electric-500/40 shadow-lg'
                    : 'bg-obsidian-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-bold flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyanTech-300' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="bg-gradient-to-r from-electric-950 via-obsidian-900 to-obsidian-900 border border-electric-500/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2 font-sans">
            Still Have Questions About Your Appliance?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Our Dubai master technicians are available on WhatsApp to answer questions, diagnose symptoms from error code photos, or dispatch a service van.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-obsidian-950 bg-whatsapp hover:bg-whatsapp-hover shadow-whatsapp-glow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
              <span>Ask Our Technicians on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.telLink}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-electric-400" />
              <span>Call Emergency Line: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};
