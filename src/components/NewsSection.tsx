
import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const NewsSection = () => {
  // TODO: Estas noticias deberían venir de una API
  const news = [
    {
      id: 1,
      title: "Nueva Normativa Europea de Bienestar Animal en Explotaciones Ovinas",
      excerpt: "La Unión Europea aprueba nuevas medidas para mejorar las condiciones de vida del ganado ovino, entrando en vigor el próximo año.",
      date: "2024-03-15",
      author: "Dr. María González",
      category: "Normativa",
      image: "photo-1452378174528-3090a4bba7b2",
      featured: true
    },
    {
      id: 2,
      title: "Congreso Nacional de Ganadería Ovina 2024",
      excerpt: "Del 15 al 17 de abril se celebrará en Madrid el mayor evento del sector ovino con la participación de expertos internacionales.",
      date: "2024-03-10",
      author: "Comité Organizador",
      category: "Eventos",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      id: 3,
      title: "Innovaciones en Alimentación Ovina: Nuevos Suplementos Naturales",
      excerpt: "Investigadores desarrollan nuevos suplementos alimenticios basados en plantas locales que mejoran la salud y productividad del ganado.",
      date: "2024-03-08",
      author: "Prof. Carlos Ruiz",
      category: "Innovación",
      image: "photo-1466442929976-97f336a657be"
    },
    {
      id: 4,
      title: "Programa de Ayudas para Jóvenes Ganaderos 2024",
      excerpt: "El gobierno anuncia nuevas subvenciones destinadas a facilitar el relevo generacional en el sector ganadero ovino.",
      date: "2024-03-05",
      author: "Ministerio de Agricultura",
      category: "Ayudas",
      image: "photo-1465379944081-7f47de8d74ac"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="noticias" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Últimas Noticias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Mantente al día con las últimas novedades del sector ovino, 
              normativas, eventos y avances tecnológicos.
            </p>
          </div>
          <button className="hidden lg:flex items-center text-pastoral-600 hover:text-pastoral-700 font-semibold">
            Ver todas las noticias
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        {/* Grid de Noticias */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Noticia Principal */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${news[0].image}?auto=format&fit=crop&w=800&q=80`}
                  alt={news[0].title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pastoral-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {news[0].category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-pastoral-600 cursor-pointer transition-colors">
                  {news[0].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {news[0].excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(news[0].date)}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {news[0].author}
                    </div>
                  </div>
                  <button className="text-pastoral-600 hover:text-pastoral-700 font-semibold">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Noticias Secundarias */}
          <div className="space-y-6">
            {news.slice(1).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <img 
                    src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=200&q=80`}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-pastoral-600 bg-pastoral-50 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-2 mb-2 hover:text-pastoral-600 cursor-pointer transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-pastoral-600 to-pastoral-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Suscríbete a Nuestro Boletín
          </h3>
          <p className="text-pastoral-100 mb-6 max-w-2xl mx-auto">
            Recibe las últimas noticias del sector ovino, eventos importantes y 
            oportunidades directamente en tu correo electrónico.
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pastoral-300"
            />
            <button className="bg-white text-pastoral-600 hover:bg-pastoral-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Suscribirse
            </button>
          </div>

          <p className="text-xs text-pastoral-200 mt-4">
            * No compartimos tu información. Puedes darte de baja en cualquier momento.
          </p>
        </div>

        {/* Mobile: Ver todas button */}
        <div className="lg:hidden text-center mt-8">
          <button className="btn-primary flex items-center mx-auto">
            Ver todas las noticias
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
