import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Wrench, Star, ShieldCheck, X } from 'lucide-react';

interface ActivityItem {
  id: number;
  type: 'dispatch' | 'repair' | 'review';
  text: string;
  subtext: string;
  timeAgo: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    type: 'dispatch',
    text: 'Mobile Technician Dispatched',
    subtext: 'Refrigerator cooling repair in International City, Dubai',
    timeAgo: '3 mins ago'
  },
  {
    id: 2,
    type: 'repair',
    text: 'Repair Completed & Certified',
    subtext: 'Bosch washing machine pump replaced in Dubai Silicon Oasis',
    timeAgo: '9 mins ago'
  },
  {
    id: 3,
    type: 'review',
    text: '5-Star Google Review Received',
    subtext: '“Fixed Siemens fridge within 45 mins. Lifesaver!” - Elena R.',
    timeAgo: '14 mins ago'
  },
  {
    id: 4,
    type: 'dispatch',
    text: 'Urgent Technician Assigned',
    subtext: 'Cooking range gas igniter issue in Mirdif Uptown',
    timeAgo: '6 mins ago'
  },
  {
    id: 5,
    type: 'repair',
    text: '90-Day Warranty Certificate Issued',
    subtext: 'LG double-door compressor service in Al Warqa',
    timeAgo: '18 mins ago'
  }
];

export const LiveActivityToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 800);
    }, 7500);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const current = ACTIVITIES[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-30 hidden lg:block max-w-sm">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-3.5 bg-obsidian-900/95 border border-white/10 shadow-2xl backdrop-blur-xl flex items-start gap-3 relative group"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Dismiss toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Icon */}
            <div className="w-9 h-9 rounded-xl bg-electric-600/20 border border-electric-500/30 flex items-center justify-center shrink-0">
              {current.type === 'dispatch' && <Zap className="w-4 h-4 text-cyanTech-400 fill-cyanTech-400/20" />}
              {current.type === 'repair' && <Wrench className="w-4 h-4 text-emerald-400" />}
              {current.type === 'review' && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
            </div>

            <div className="flex-1 pr-3">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {current.text}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {current.timeAgo}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                {current.subtext}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
