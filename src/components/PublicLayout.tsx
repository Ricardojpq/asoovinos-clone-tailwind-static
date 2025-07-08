
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
