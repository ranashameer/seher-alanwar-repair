import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { BrandMarquee } from './components/BrandMarquee';
import { ServiceCatalog } from './components/ServiceCatalog';
import { CostEstimator } from './components/CostEstimator';
import { CoverageChecker } from './components/CoverageChecker';
import { CustomerJourney } from './components/CustomerJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { DubaiSeoContent } from './components/DubaiSeoContent';
import { ContactLocationHub } from './components/ContactLocationHub';
import { Footer } from './components/Footer';
import { MobileBottomDeck } from './components/MobileBottomDeck';
import { LiveActivityToast } from './components/LiveActivityToast';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-electric-600 selection:text-white pb-20 sm:pb-0 overflow-x-hidden">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Value Proposition and Interactive Diagnostic Widget */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Metrics & Trust Ticker */}
        <TrustTicker />

        {/* Continuous Brand Compatibility Marquee */}
        <BrandMarquee />

        {/* Interactive Service Catalog with Tabs & Micro-Modals */}
        <ServiceCatalog onOpenBooking={handleOpenBooking} />

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
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Floating Action Deck (Natural Thumb Zone: Call 45% + WhatsApp Live 55%) */}
      <MobileBottomDeck />

      {/* Social Proof Live Activity Toast Notification */}
      <LiveActivityToast />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={preselectedService}
      />
    </div>
  );
};

export default App;
