
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío del formulario mediante API
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <div className="divider-golden mb-6"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para apoyarte. Ponte en contacto con nosotros para cualquier consulta 
            sobre nuestros servicios o para unirte a nuestra asociación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="card card-gradient">
              <div className="card-content">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <MessageSquare className="icon-golden mr-3" size={28} />
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden-100 rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-golden-900/30">
                      <Phone className="icon-golden" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Teléfonos</h4>
                      <p className="text-muted-foreground">+58 424 123 4567</p>
                      <p className="text-muted-foreground">+58 426 765 4321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden-100 rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-golden-900/30">
                      <Mail className="icon-golden" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Correo Electrónico</h4>
                      <p className="text-muted-foreground">info@asocabra.org.ve</p>
                      <p className="text-muted-foreground">presidencia@asocabra.org.ve</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden-100 rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-golden-900/30">
                      <MapPin className="icon-golden" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Ubicación</h4>
                      <p className="text-muted-foreground">
                        Caracas, Venezuela<br />
                        {/* TODO: Dirección exacta cuando esté disponible */}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golden-100 rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-golden-900/30">
                      <Clock className="icon-golden" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Horario de Atención</h4>
                      <p className="text-muted-foreground">Lunes a Viernes: 8:00 - 17:00</p>
                      <p className="text-muted-foreground">Sábados: 8:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="card overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-golden-100 to-bronze-100 flex items-center justify-center dark:from-golden-900/20 dark:to-bronze-900/20">
                <div className="text-center">
                  <MapPin className="icon-golden mx-auto mb-2" size={48} />
                  <p className="text-muted-foreground">Mapa de ubicación</p>
                  <p className="text-sm text-muted-foreground">
                    {/* TODO: Integrar mapa real cuando esté disponible la dirección */}
                    Caracas, Venezuela
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="animate-fade-in">
            <div className="card card-gradient">
              <div className="card-content">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Send className="icon-golden mr-3" size={28} />
                  Envíanos un Mensaje
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 icon-golden" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border border-border rounded-xl bg-background/50 focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 icon-golden" size={18} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border border-border rounded-xl bg-background/50 focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                          placeholder="+58 424 123 4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 icon-golden" size={18} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border border-border rounded-xl bg-background/50 focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="membresia">Información sobre membresía</option>
                      <option value="servicios">Consulta sobre servicios</option>
                      <option value="asesoria">Asesoría técnica</option>
                      <option value="eventos">Eventos y capacitaciones</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
