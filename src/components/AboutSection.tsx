
import React from 'react';
import { Target, Heart, Shield, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Sobre la Asociación de Ovinos
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 1990, trabajamos incansablemente por el desarrollo y la promoción 
            de la ganadería ovina, uniendo esfuerzos para construir un sector más fuerte y sostenible.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen */}
          <div className="relative">
            {/* TODO: Reemplazar con imagen real de la asociación */}
            <img 
              src={`https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&w=800&q=80`}
              alt="Ganaderos de la asociación trabajando con ovejas" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-pastoral-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm">Años de Trayectoria</div>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Nuestra Historia y Compromiso
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              La Asociación de Ovinos nació de la visión compartida de un grupo de ganaderos 
              comprometidos con elevar los estándares de la industria ovina. Desde nuestros 
              inicios, hemos sido pioneros en la implementación de tecnologías avanzadas y 
              prácticas sostenibles.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Hoy, somos más que una asociación: somos una familia que trabaja unidos para 
              garantizar el bienestar animal, la calidad de nuestros productos y el cuidado 
              del medio ambiente, mientras apoyamos a cada uno de nuestros miembros en su 
              crecimiento profesional.
            </p>

            <div className="bg-pastoral-50 border-l-4 border-pastoral-600 p-6 rounded-r-lg">
              <p className="text-pastoral-800 font-semibold italic">
                "Nuestro compromiso es ser el puente entre la tradición ganadera y 
                la innovación, creando un futuro próspero para el sector ovino."
              </p>
              <p className="text-pastoral-600 mt-2">- Junta Directiva</p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-pastoral-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastoral-700 transition-colors">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Excelencia</h4>
            <p className="text-gray-600">
              Buscamos la máxima calidad en todos nuestros procesos y servicios.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-pastoral-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastoral-700 transition-colors">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Compromiso</h4>
            <p className="text-gray-600">
              Dedicación total al bienestar animal y al desarrollo del sector.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-pastoral-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastoral-700 transition-colors">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Confianza</h4>
            <p className="text-gray-600">
              Construimos relaciones sólidas basadas en transparencia y honestidad.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-pastoral-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastoral-700 transition-colors">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovación</h4>
            <p className="text-gray-600">
              Adoptamos nuevas tecnologías para mejorar continuamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
