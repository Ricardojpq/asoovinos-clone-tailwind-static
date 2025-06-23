
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <NewsSection />
        {/* TODO: Aquí se pueden añadir más secciones como:
            - EventsSection (para mostrar próximos eventos)
            - TestimonialsSection (testimonios de socios)
            - PartnersSection (empresas colaboradoras)
            - ContactSection (formulario de contacto)
            - MembersSection (área privada para socios)
        */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
