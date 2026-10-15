import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomDeck } from './components/MobileBottomDeck';
import { LiveActivityToast } from './components/LiveActivityToast';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AreaDetailPage } from './pages/AreaDetailPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BrandsPage } from './pages/BrandsPage';

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

  const getBasename = () => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/seher-alanwar-repair')) {
      return '/seher-alanwar-repair';
    }
    return '/';
  };

  return (
    <BrowserRouter basename={getBasename()}>
      <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-electric-600 selection:text-white pb-20 sm:pb-0 overflow-x-hidden">
        {/* Sticky Glassmorphic Navbar with Router Links */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Content Area with Routing */}
        <main className="flex-1">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />

            {/* Dedicated Service Landing Pages */}
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />

            {/* Dedicated Local Dubai Area Hubs */}
            <Route path="/areas/:slug" element={<AreaDetailPage onOpenBooking={handleOpenBooking} />} />

            {/* Transparent Dubai Pricing Guide */}
            <Route path="/pricing" element={<PricingPage onOpenBooking={handleOpenBooking} />} />

            {/* Comprehensive Technical FAQ Knowledge Base */}
            <Route path="/faq" element={<FaqPage />} />

            {/* Brand Compatibility Matrix */}
            <Route path="/brands" element={<BrandsPage />} />

            {/* Contact, Directions & Workshop Hub */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-All Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Comprehensive Footer with Deep Internal Anchor Links */}
        <Footer />

        {/* Mobile Floating Action Deck (Natural Thumb Zone) */}
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
    </BrowserRouter>
  );
};

export default App;
