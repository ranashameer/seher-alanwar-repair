import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, MapPin, ExternalLink, CheckCircle2, MessageCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';
import { BUSINESS_INFO } from '../data/business';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  return (
    <section id="reviews" className="py-20 bg-obsidian-900/60 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 font-sans">
              Rated 4.9/5 by 150+ Dubai Residents
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Read authentic feedback from homeowners and tenants across International City, Silicon Oasis, Mirdif, and all Dubai communities.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="flex items-center gap-4 bg-obsidian-850 border border-white/10 rounded-2xl p-4 shrink-0 shadow-lg">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-white/10">
              <span className="text-3xl font-black text-white font-sans">4.9</span>
              <div className="flex text-amber-400 gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Google Verified
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>150+ Verified Reviews</span>
              </div>
              <p className="text-[11px] text-slate-400">
                100% Genuine Dubai Customer Experiences
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-cyanTech-300 hover:text-white transition-colors"
              >
                <span>View Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-electric-500/30 transition-all hover:shadow-card-hover"
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-electric-600 to-cyanTech-500 text-white font-black text-xs flex items-center justify-center shadow-sm">
                      {review.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {review.author}
                      </h4>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-electric-400" />
                        {review.area}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-500 font-medium">
                    {review.reviewDate}
                  </span>
                </div>

                {/* Stars and Appliance Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-electric-600/20 text-electric-300 border border-electric-500/30">
                    {review.appliance}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Repair Job
                </span>
                <span className="text-slate-500 font-medium">Dubai, UAE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
