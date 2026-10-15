import React from 'react';
import { Wrench, Phone, MessageCircle, MapPin, ShieldCheck, Zap, ArrowUp, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS_INFO.gps.lat},${BUSINESS_INFO.gps.lng}`;

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-28 sm:pb-16 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-700 via-electric-600 to-cyanTech-400 p-[1.5px] shadow-electric-glow shrink-0">
                <div className="w-full h-full bg-obsidian-900 rounded-[10px] flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-electric-400" />
                </div>
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-white tracking-tight block font-sans">
                  SEHER ALANWAR
                </span>
                <span className="text-[11px] text-cyanTech-400 font-semibold block">
                  Electric Household Appliances Repair Dubai
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dubai’s specialized electric household appliances repairing & maintenance center. Certified doorstep service within 30–60 minutes across all Dubai communities with genuine factory parts and up to 90 days warranty.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={BUSINESS_INFO.telLink}
                className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-white hover:text-cyanTech-400 transition-colors"
                aria-label="Direct Phone Line"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="WhatsApp Dispatch"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-electric-400 hover:text-white transition-colors"
                aria-label="Google Maps Turn-by-Turn Directions"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Repair Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyanTech-300 transition-colors">
                  Washing Machine Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyanTech-300 transition-colors">
                  Refrigerator & Chiller Fix
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyanTech-300 transition-colors">
                  Cooking Range & Oven Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyanTech-300 transition-colors">
                  Dishwasher Troubleshooting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyanTech-300 transition-colors">
                  Split AC Cleaning & Gas Refill
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyanTech-300 transition-colors">
                  Microwave & Small Appliances
                </a>
              </li>
            </ul>
          </div>

          {/* Dubai Coverage Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Priority Dubai Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#coverage" className="hover:text-cyanTech-300 transition-colors">
                  International City, Dubai
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-cyanTech-300 transition-colors">
                  Dubai Silicon Oasis (DSO)
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-cyanTech-300 transition-colors">
                  Mirdif & Uptown Mirdif
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-cyanTech-300 transition-colors">
                  Al Warqa 1, 2, 3 & 4
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-cyanTech-300 transition-colors">
                  Business Bay & Downtown
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-cyanTech-300 transition-colors">
                  Nad Al Sheba & Academic City
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Diagnostics & Location
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#estimator" className="hover:text-cyanTech-300 transition-colors">
                  Cost Estimator Calculator
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyanTech-300 transition-colors">
                  4-Step Customer Process
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyanTech-300 transition-colors">
                  Verified Google Reviews (4.9★)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyanTech-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#seo-guide" className="hover:text-cyanTech-300 transition-colors">
                  Dubai Technical Guide & SEO
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyanTech-300 transition-colors">
                  Shop 10 Workshop & Map
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Diagnostic AED 90 waived on approved repair • 90-Day Parts Warranty
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 hover:text-white border border-white/10"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
