
import React from 'react';
import PublicLayout from '@/components/PublicLayout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import FairsSection from '@/components/FairsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <PublicLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FairsSection />
      <ContactSection />
    </PublicLayout>
  );
};

export default Index;
