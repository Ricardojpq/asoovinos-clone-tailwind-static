
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pastoral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pastoral-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">AO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Asociación de Ovinos</h3>
                <p className="text-pastoral-200 text-sm">Ganadería Sostenible</p>
              </div>
            </div>
            <p className="text-pastoral-100 leading-relaxed mb-6">
              Promoviendo la excelencia en la ganadería ovina desde 1990. 
              Unidos por el desarrollo sostenible del sector.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pastoral-800 rounded-lg flex items-center justify-center hover:bg-pastoral-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pastoral-800 rounded-lg flex items-center justify-center hover:bg-pastoral-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pastoral-800 rounded-lg flex items-center justify-center hover:bg-pastoral-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pastoral-800 rounded-lg flex items-center justify-center hover:bg-pastoral-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-pastoral-100 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-pastoral-100 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="text-pastoral-100 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#noticias" className="text-pastoral-100 hover:text-white transition-colors">Noticias</a></li>
              <li><a href="#eventos" className="text-pastoral-100 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#contacto" className="text-pastoral-100 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-pastoral-100 hover:text-white transition-colors">Asistencia Veterinaria</a></li>
              <li><a href="#" className="text-pastoral-100 hover:text-white transition-colors">Formación</a></li>
              <li><a href="#" className="text-pastoral-100 hover:text-white transition-colors">Asesoría Técnica</a></li>
              <li><a href="#" className="text-pastoral-100 hover:text-white transition-colors">Comercialización</a></li>
              <li><a href="#" className="text-pastoral-100 hover:text-white transition-colors">Sostenibilidad</a></li>
              <li><a href="#" className="text-pastoral-100 hover:text-white transition-colors">Gestión Administrativa</a></li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-pastoral-300 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-pastoral-100">
                    Calle Ganaderos, 123<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-pastoral-300 flex-shrink-0" size={20} />
                <p className="text-pastoral-100">+34 987 123 456</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-pastoral-300 flex-shrink-0" size={20} />
                <p className="text-pastoral-100">info@asoovinos.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-pastoral-300 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-pastoral-100">
                    Lunes a Viernes<br />
                    9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-pastoral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-pastoral-200 text-sm">
              © 2024 Asociación de Ovinos. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-pastoral-200 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-pastoral-200 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-pastoral-200 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
