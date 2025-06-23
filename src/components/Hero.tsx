
import React from 'react';
import { ArrowRight, Users, Award, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Reemplazar con imagen real de ovejas en campo */}
        <div className="w-full h-full bg-gradient-to-r from-pastoral-800 to-pastoral-600">
          <img 
            src={`https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=1920&q=80`}
            alt="Rebaño de ovejas en campo verde" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-pastoral-900 bg-opacity-60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Impulsando la 
              <span className="text-pastoral-200"> Ganadería Ovina</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-pastoral-100 leading-relaxed">
              Más de 30 años promoviendo la excelencia en la crianza de ovinos, 
              conectando ganaderos y fomentando prácticas sostenibles.
            </p>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-pastoral-500 hover:bg-pastoral-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center group">
                Únete a la Asociación
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pastoral-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Conoce Más
              </button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pastoral-200">500+</div>
                <div className="text-sm text-pastoral-100">Socios Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pastoral-200">30</div>
                <div className="text-sm text-pastoral-100">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pastoral-200">15K+</div>
                <div className="text-sm text-pastoral-100">Cabezas de Ganado</div>
              </div>
            </div>
          </div>

          {/* Tarjetas de Características */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pastoral-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Comunidad Unida</h3>
              </div>
              <p className="text-gray-700">
                Una red de ganaderos comprometidos con el desarrollo del sector ovino.
              </p>
            </div>

            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pastoral-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Excelencia Ganadera</h3>
              </div>
              <p className="text-gray-700">
                Promovemos las mejores prácticas y estándares de calidad en la crianza.
              </p>
            </div>

            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pastoral-600 rounded-lg flex items-center justify-center mr-4">
                  <Leaf className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sostenibilidad</h3>
              </div>
              <p className="text-gray-700">
                Comprometidos con prácticas ambientalmente responsables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
