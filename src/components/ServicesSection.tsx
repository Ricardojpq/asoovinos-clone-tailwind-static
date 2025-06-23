
import React from 'react';
import { Stethoscope, GraduationCap, BarChart3, Handshake, Leaf, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Asistencia Veterinaria",
      description: "Servicios veterinarios especializados en ganado ovino con profesionales experimentados.",
      features: ["Consultas especializadas", "Planes de vacunación", "Emergencias 24/7", "Medicina preventiva"]
    },
    {
      icon: GraduationCap,
      title: "Formación y Capacitación",
      description: "Programas educativos para mejorar las técnicas de manejo y cuidado del ganado.",
      features: ["Cursos presenciales", "Talleres prácticos", "Seminarios online", "Certificaciones"]
    },
    {
      icon: BarChart3,
      title: "Asesoría Técnica",
      description: "Consultoría especializada para optimizar la productividad y rentabilidad de tu explotación.",
      features: ["Análisis de rentabilidad", "Planes de mejora", "Optimización de procesos", "Seguimiento continuo"]
    },
    {
      icon: Handshake,
      title: "Comercialización",
      description: "Facilitamos la venta de productos ovinos conectando productores con compradores.",
      features: ["Red de distribución", "Negociación de precios", "Contratos seguros", "Logística especializada"]
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Programas para implementar prácticas ganaderas ambientalmente responsables.",
      features: ["Certificación ecológica", "Manejo sostenible", "Conservación del suelo", "Bienestar animal"]
    },
    {
      icon: FileText,
      title: "Gestión Administrativa",
      description: "Apoyo en trámites legales, subvenciones y documentación requerida para la actividad.",
      features: ["Tramitación de ayudas", "Documentación legal", "Registro genealógico", "Asesoría fiscal"]
    }
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un amplio rango de servicios especializados para apoyar a nuestros socios 
            en todas las etapas de su actividad ganadera.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              <div className="card-content">
                <div className="w-16 h-16 bg-pastoral-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pastoral-600 transition-colors duration-300">
                  <service.icon className="text-pastoral-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pastoral-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* TODO: Aquí se podría añadir un enlace a más detalles del servicio cuando se implemente el routing */}
                <button className="mt-6 text-pastoral-600 font-semibold hover:text-pastoral-700 transition-colors duration-200">
                  Conocer más →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pastoral-600 to-pastoral-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Necesitas un Servicio Personalizado?
          </h3>
          <p className="text-lg lg:text-xl text-pastoral-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para desarrollar soluciones específicas 
            para las necesidades de tu explotación ganadera.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pastoral-600 hover:bg-pastoral-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Solicitar Consulta
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pastoral-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Ver Tarifas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
