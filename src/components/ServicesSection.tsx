
import React from 'react';
import { Stethoscope, GraduationCap, BarChart3, Handshake, Leaf, FileText, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Asistencia Veterinaria",
      description: "Servicios veterinarios especializados en ganado caprino con profesionales experimentados.",
      features: ["Consultas especializadas", "Planes de vacunación", "Emergencias veterinarias", "Medicina preventiva"]
    },
    {
      icon: GraduationCap,
      title: "Formación y Capacitación",
      description: "Programas educativos para mejorar las técnicas de manejo y cuidado del ganado caprino.",
      features: ["Cursos presenciales", "Talleres prácticos", "Seminarios especializados", "Certificaciones técnicas"]
    },
    {
      icon: BarChart3,
      title: "Asesoría Técnica",
      description: "Consultoría especializada para optimizar la productividad y rentabilidad de tu explotación caprina.",
      features: ["Análisis de rentabilidad", "Planes de mejora", "Optimización de procesos", "Seguimiento técnico"]
    },
    {
      icon: Handshake,
      title: "Comercialización",
      description: "Facilitamos la venta de productos caprinos conectando productores con compradores.",
      features: ["Red de distribución", "Negociación de precios", "Contratos seguros", "Logística especializada"]
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Programas para implementar prácticas ganaderas ambientalmente responsables.",
      features: ["Prácticas sostenibles", "Manejo ecológico", "Conservación de recursos", "Bienestar animal"]
    },
    {
      icon: FileText,
      title: "Gestión Administrativa",
      description: "Apoyo en trámites legales, registros y documentación requerida para la actividad.",
      features: ["Registro de animales", "Documentación legal", "Tramitación de permisos", "Asesoría administrativa"]
    }
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white dark:bg-gray-900 section-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros Servicios
          </h2>
          <div className="divider-golden mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ofrecemos un amplio rango de servicios especializados para apoyar a nuestros socios 
            en todas las etapas de su actividad ganadera caprina.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-base card-gradient group hover:scale-105 transition-all duration-300 animate-slide-up p-6 lg:p-8" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-golden-100 dark:bg-golden-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden-600 transition-all duration-300 shadow-lg">
                <service.icon className="text-golden-600 dark:text-golden-400 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-golden-700 dark:group-hover:text-golden-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-golden-600 dark:bg-golden-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="text-golden-600 dark:text-golden-400 font-semibold hover:text-golden-700 dark:hover:text-golden-300 transition-colors duration-200 flex items-center group-hover:translate-x-1">
                Conocer más 
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="gradient-hero dark:gradient-hero-dark rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Necesitas un Servicio Personalizado?
          </h3>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para desarrollar soluciones específicas 
            para las necesidades de tu explotación caprina.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-golden-700 hover:bg-golden-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Solicitar Consulta
            </button>
            <button className="btn-outline">
              Ver Tarifas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
