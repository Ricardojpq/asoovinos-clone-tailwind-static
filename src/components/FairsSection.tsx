
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Eye } from 'lucide-react';
import ConsultModal from './ConsultModal';

const FairsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fairs = [
    {
      id: 1,
      name: "Feria Nacional Caprina 2024",
      date: "15-17 Marzo 2024",
      location: "Valencia, Venezuela",
      description: "La feria más importante de caprinos en Venezuela. Exposición de ejemplares, concursos de belleza, conferencias técnicas y rueda de negocios.",
      participants: "200+ expositores",
      image: "https://images.unsplash.com/photo-1516467508483-a0ba0ac1f2ba?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Expo Cabra Llanera",
      date: "8-10 Mayo 2024",
      location: "Barinas, Venezuela",
      description: "Feria regional dedicada a la cabra criolla venezolana. Incluye evaluaciones zootécnicas, seminarios y actividades culturales.",
      participants: "150+ expositores",
      image: "https://images.unsplash.com/photo-1581024324202-8e1f7fb5d81d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Feria Ganadera del Zulia",
      date: "20-22 Julio 2024",
      location: "Maracaibo, Venezuela",
      description: "Evento que reúne a los mejores criadores de la región zuliana. Concursos, subastas y actividades comerciales.",
      participants: "180+ expositores",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="ferias" className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ferias y Eventos
          </h2>
          <div className="divider-golden mb-6"></div>
          <p className="text-responsive-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce las próximas ferias y eventos donde podrás encontrar los mejores ejemplares caprinos de Venezuela
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {fairs.map((fair, index) => (
            <div 
              key={fair.id}
              className="card-base card-gradient hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={fair.image} 
                  alt={fair.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 gradient-overlay"></div>
                <div className="absolute top-4 right-4">
                  <span className="badge-golden">
                    {fair.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {fair.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 icon-golden" />
                    <span className="text-sm">{fair.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 icon-golden" />
                    <span className="text-sm">{fair.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-2 icon-golden" />
                    <span className="text-sm">{fair.participants}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {fair.description}
                </p>

                <div className="flex gap-3">
                  <button className="btn-secondary flex-1 text-sm flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary flex-1 text-sm"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de información adicional */}
        <div className="mt-16 card-base card-gradient p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Quieres participar en nuestras ferias?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Como miembro de ASOCABRA, tienes acceso preferencial a todas nuestras ferias y eventos. 
            Obtén información detallada sobre requisitos, inscripciones y beneficios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Información de Inscripción
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>

      {/* SHADCN UI USADO AQUÍ: Modal Dialog */}
      <ConsultModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default FairsSection;
