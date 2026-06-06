import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import OfferBanner from '../components/OfferBanner';
import TrustSection from '../components/TrustSection';
import CommanderSection from '../components/CommanderSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <OfferBanner />
      <TrustSection />
      <CommanderSection />
      <Footer />
    </div>
  );
}