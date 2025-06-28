
import React from 'react';
import { ArrowRight, Users, Award, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-pattern">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full gradient-hero dark:gradient-hero-dark">
          <img 
            src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&w=1920&q=80"
            alt="Ganado caprino en campo venezolano" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
        </div>
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-golden-100 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Desde 2012 🇻🇪
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fortaleciendo la
              <span className="block text-golden-200 animate-glow"> Caprinocultura</span>
              <span className="block">Venezolana</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Promovemos el desarrollo sostenible de la ganadería caprina en Venezuela, 
              conectando productores y fomentando la excelencia técnica.
            </p>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-golden-600 hover:bg-golden-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-golden-lg hover:shadow-2xl transform hover:scale-105">
                Únete a ASOCABRA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-outline">
                Conoce Más
              </button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="text-3xl font-bold text-golden-200 group-hover:text-golden-100 transition-colors">200+</div>
                <div className="text-sm text-white/80">Socios Activos</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-golden-200 group-hover:text-golden-100 transition-colors">12</div>
                <div className="text-sm text-white/80">Años de Trayectoria</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-golden-200 group-hover:text-golden-100 transition-colors">5K+</div>
                <div className="text-sm text-white/80">Cabezas de Ganado</div>
              </div>
            </div>
          </div>

          {/* Tarjetas de Características */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-golden-lg transition-all duration-300 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golden-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Comunidad Unida</h3>
              </div>
              <p className="text-gray-700">
                Una red sólida de productores caprinos comprometidos con el crecimiento del sector.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-golden-lg transition-all duration-300 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golden-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Excelencia Ganadera</h3>
              </div>
              <p className="text-gray-700">
                Promovemos las mejores prácticas y estándares de calidad en la crianza caprina.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-golden-lg transition-all duration-300 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golden-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Leaf className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sostenibilidad</h3>
              </div>
              <p className="text-gray-700">
                Comprometidos con prácticas ambientalmente responsables y sostenibles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-golden-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
