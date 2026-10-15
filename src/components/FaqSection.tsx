import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { BUSINESS_INFO } from '../data/business';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-obsidian-950 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-950 border border-electric-500/30 text-cyanTech-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyanTech-400" />
            <span>Clear Answers Before We Arrive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Everything you need to know about our doorstep response times, inspection fee waiver policy, genuine parts warranty, and service coverage across Dubai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-obsidian-900/90 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-electric-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold text-electric-400 font-mono">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyanTech-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Have a specific appliance issue not listed here?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with our senior technician in Dubai on WhatsApp or Phone.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={generateWhatsAppLink({ customMessage: 'I have a question about appliance repair.' })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 text-whatsapp" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.telLink}
              className="px-4 py-2.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
