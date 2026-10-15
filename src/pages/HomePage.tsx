import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Hero } from '../components/Hero';
import { TrustTicker } from '../components/TrustTicker';
import { BrandMarquee } from '../components/BrandMarquee';
import { ServiceCatalog } from '../components/ServiceCatalog';
import { CostEstimator } from '../components/CostEstimator';
import { CoverageChecker } from '../components/CoverageChecker';
import { CustomerJourney } from '../components/CustomerJourney';
import { ReviewsSection } from '../components/ReviewsSection';
import { FaqSection } from '../components/FaqSection';
import { DubaiSeoContent } from '../components/DubaiSeoContent';
import { ContactLocationHub } from '../components/ContactLocationHub';

interface HomePageProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <>
      <SeoHead
        title="Home Appliances Repair Dubai | 30-Min Doorstep Service"
        description="Fast home appliances repair in Dubai. 30-60 min doorstep arrival, genuine OEM parts, 90-day warranty & free inspection with repair. Call or WhatsApp 24/7!"
        canonicalPath="/"
      />

      {/* Hero Section with Value Proposition and Interactive Diagnostic Widget */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* Metrics & Trust Ticker */}
      <TrustTicker />

      {/* Continuous Brand Compatibility Marquee */}
      <BrandMarquee />

      {/* Interactive Service Catalog with Tabs & Micro-Modals */}
      <ServiceCatalog onOpenBooking={onOpenBooking} />

      {/* Interactive Cost & Price Estimator */}
      <CostEstimator />

      {/* Live Dubai Coverage Area Checker */}
      <CoverageChecker />

      {/* 4-Step Transparent Customer Roadmap */}
      <CustomerJourney />

      {/* Verified Social Proof & Google Reviews */}
      <ReviewsSection />

      {/* High-Impact SEO FAQ Section */}
      <FaqSection />

      {/* Technical SEO Content & Dubai Climate Knowledge Base */}
      <DubaiSeoContent />

      {/* Location & Contact Hub with Google Map Integration */}
      <ContactLocationHub />
    </>
  );
};
