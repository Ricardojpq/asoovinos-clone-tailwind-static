
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar con información de contacto */}
      <div className="bg-pastoral-900 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+34 987 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@asoovinos.com</span>
              </div>
            </div>
            <div className="text-earth-100">
              Horario: Lunes a Viernes 9:00 - 18:00
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pastoral-600 rounded-lg flex items-center justify-center mr-3">
                {/* TODO: Reemplazar con logo real */}
                <span className="text-white font-bold text-xl">AO</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Asociación de Ovinos</h1>
                <p className="text-sm text-gray-600">Ganadería Sostenible</p>
              </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#nosotros" className="nav-link">Nosotros</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#noticias" className="nav-link">Noticias</a>
              <a href="#eventos" className="nav-link">Eventos</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </nav>

            {/* Botón CTA Desktop */}
            <div className="hidden lg:block">
              <button className="btn-primary">
                Hazte Socio
              </button>
            </div>

            {/* Botón Menu Mobile */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-pastoral-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#inicio" className="block px-3 py-2 nav-link">Inicio</a>
              <a href="#nosotros" className="block px-3 py-2 nav-link">Nosotros</a>
              <a href="#servicios" className="block px-3 py-2 nav-link">Servicios</a>
              <a href="#noticias" className="block px-3 py-2 nav-link">Noticias</a>
              <a href="#eventos" className="block px-3 py-2 nav-link">Eventos</a>
              <a href="#contacto" className="block px-3 py-2 nav-link">Contacto</a>
              <div className="px-3 py-2">
                <button className="w-full btn-primary">
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
