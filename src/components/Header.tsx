
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar con información de contacto */}
      <div className="bg-golden-900 text-white py-2 hidden lg:block dark:bg-golden-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+58 424 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@asocabra.org.ve</span>
              </div>
            </div>
            <div className="text-golden-100">
              Horario: Lunes a Viernes 8:00 - 17:00
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-golden-200/20 dark:bg-gray-900/95 dark:border-golden-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/eb1413db-4a62-446e-a4c4-4d098a4ecf6a.png" 
                  alt="ASOCABRA Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">ASOCABRA</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Venezuela</p>
              </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#nosotros" className="nav-link">Nosotros</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#ferias" className="nav-link">Ferias</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </nav>

            {/* Controles Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <button className="btn btn-primary">
                Hazte Socio
              </button>
            </div>

            {/* Botón Menu Mobile */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-md text-gray-900 hover:text-golden-600 hover:bg-golden-50/50 dark:text-white dark:hover:bg-golden-900/20"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-golden-200/20 dark:bg-gray-900/95 dark:border-golden-700/20">
            <div className="px-4 py-2 space-y-1">
              <a href="#inicio" className="block px-3 py-2 nav-link">Inicio</a>
              <a href="#nosotros" className="block px-3 py-2 nav-link">Nosotros</a>
              <a href="#servicios" className="block px-3 py-2 nav-link">Servicios</a>
              <a href="#ferias" className="block px-3 py-2 nav-link">Ferias</a>
              <a href="#contacto" className="block px-3 py-2 nav-link">Contacto</a>
              <div className="px-3 py-2">
                <button className="w-full btn btn-primary">
                  Hazte Socio
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
