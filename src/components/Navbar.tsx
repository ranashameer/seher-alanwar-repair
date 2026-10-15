import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Phone, Calendar, Menu, X, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface NavbarProps {
  onOpenBooking: (appliance?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Dubai Coverage', href: '#coverage' },
    { label: 'Process', href: '#journey' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'SEO Guide', href: '#seo-guide' },
    { label: 'Location', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-2.5'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-electric-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-electric-700 via-electric-600 to-cyanTech-400 p-[1.5px] shadow-electric-glow shrink-0">
                <div className="w-full h-full bg-obsidian-900 rounded-[10px] flex items-center justify-center">
                  <div className="relative">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-electric-400 transition-transform group-hover:rotate-45 duration-300" />
                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyanTech-400 fill-cyanTech-400 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-lg font-black tracking-tight text-white font-sans">
                    SEHER ALANWAR
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span>🇦🇪</span> DUBAI ONLY
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium hidden xs:block">
                  Electric Household Appliances Repair & Maintenance
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-slate-300 hover:text-white hover:text-cyanTech-400 transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-500 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Right Cluster: Live Duty Badge, Emergency Hotline, CTA */}
            <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
              {/* Emergency Hotline Button with Pulsing Duty Beacon */}
              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-obsidian-800/80 hover:bg-obsidian-750 border border-white/10 text-slate-200 transition-all group"
                title="Call 24/7 Dubai Emergency Line"
              >
                <div className="relative flex items-center justify-center w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                    On Duty
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-cyanTech-300 transition-colors">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* High Contrast Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-safety-600/30 overflow-hidden group bg-gradient-to-r from-safety-600 to-safety-500 hover:from-safety-500 hover:to-safety-600 border border-orange-400/40"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Service</span>
              </motion.button>
            </div>

            {/* Mobile Actions: Phone + Menu */}
            <div className="flex items-center sm:hidden gap-2">
              <a
                href={BUSINESS_INFO.telLink}
                className="p-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-emerald-400"
                aria-label="Direct Phone Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-slate-200 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden bg-obsidian-950/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Fast Response Active: 30-60 min arrival</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Dubai, UAE</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-3 py-2.5 rounded-lg bg-obsidian-850 border border-white/5 text-xs font-bold text-slate-200 hover:text-white hover:bg-electric-600/20 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-safety-600 to-safety-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-safety-glow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Doorstep Service Now</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-electric-400" />
                  <span>Licensed UAE Technicians • 90-Day Warranty</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
