
import React from 'react';
import { Target, Heart, Shield, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-earth-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre la Asociación de Caprinos
          </h2>
          <div className="divider-golden mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desde 2012, trabajamos incansablemente por el desarrollo y la promoción 
            de la ganadería caprina, uniendo esfuerzos para construir un sector más fuerte y sostenible.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&w=800&q=80"
              alt="Ganaderos de la asociación trabajando con cabras" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-golden-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm">Años de Trayectoria</div>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Historia y Compromiso
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              ASOCABRA nació de la visión compartida de un grupo de ganaderos 
              comprometidos con elevar los estándares de la industria caprina. Desde nuestros 
              inicios, hemos sido pioneros en la implementación de tecnologías avanzadas y 
              prácticas sostenibles.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Hoy, somos más que una asociación: somos una familia que trabaja unidos para 
              garantizar el bienestar animal, la calidad de nuestros productos y el cuidado 
              del medio ambiente, mientras apoyamos a cada uno de nuestros miembros en su 
              crecimiento profesional.
            </p>

            <div className="bg-golden-50 border-l-4 border-golden-600 p-6 rounded-r-lg dark:bg-golden-900/20 dark:border-golden-400">
              <p className="text-golden-800 dark:text-golden-300 font-semibold italic">
                "Nuestro compromiso es ser el puente entre la tradición ganadera y 
                la innovación, creando un futuro próspero para el sector caprino."
              </p>
              <p className="text-golden-600 dark:text-golden-400 mt-2">- Junta Directiva</p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-golden-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-golden-700 transition-colors shadow-lg">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excelencia</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Buscamos la máxima calidad en todos nuestros procesos y servicios.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-golden-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-golden-700 transition-colors shadow-lg">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Compromiso</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicación total al bienestar animal y al desarrollo del sector.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-golden-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-golden-700 transition-colors shadow-lg">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Confianza</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Construimos relaciones sólidas basadas en transparencia y honestidad.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-golden-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-golden-700 transition-colors shadow-lg">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovación</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Adoptamos nuevas tecnologías para mejorar continuamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
