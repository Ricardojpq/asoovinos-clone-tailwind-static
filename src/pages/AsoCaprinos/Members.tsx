import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Users, Plus, Search, Phone, Mail, MapPin } from 'lucide-react';

const Members = () => {
  const members = [
    {
      id: 'SOC-001',
      name: 'María García',
      email: 'maria.garcia@email.com',
      phone: '+58 424 111 2222',
      farm: 'Finca Los Robles',
      location: 'Guasdualito',
      joinDate: '2020-01-15',
      status: 'Activo',
      animals: 45,
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'SOC-002',
      name: 'Carlos Rodríguez',
      email: 'c.rodriguez@email.com',
      phone: '+58 424 333 4444',
      farm: 'Ganadería El Sol',
      location: 'Araure',
      joinDate: '2019-08-22',
      status: 'Activo',
      animals: 78,
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'SOC-003',
      name: 'Ana Morales',
      email: 'ana.morales@email.com',
      phone: '+58 424 555 6666',
      farm: 'Finca La Esperanza',
      location: 'Barinas',
      joinDate: '2021-03-10',
      status: 'Activo',
      animals: 32,
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'SOC-004',
      name: 'Pedro Jiménez',
      email: 'pedro.jimenez@email.com',
      phone: '+58 424 777 8888',
      farm: 'Los Llanos Verdes',
      location: 'Apure',
      joinDate: '2018-11-05',
      status: 'Inactivo',
      animals: 12,
      statusColor: 'text-gray-600 bg-gray-100 dark:bg-gray-700'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Socios
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Directorio de socios de ASOCABRA
            </p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={18} />
            Nuevo Socio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">34</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Socios</div>
          </div>
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-green-600">31</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Activos</div>
          </div>
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Nuevos (mes)</div>
          </div>
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-golden-600">1,247</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Animales</div>
          </div>
        </div>

        {/* Search */}
        <div className="card-base bg-white dark:bg-gray-800 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar socios por nombre, finca o ubicación..."
                className="form-input pl-10"
              />
            </div>
            <select className="form-input sm:w-48">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Inactivo</option>
              <option>Pendiente</option>
            </select>
            <select className="form-input sm:w-48">
              <option>Todas las ubicaciones</option>
              <option>Guasdualito</option>
              <option>Araure</option>
              <option>Barinas</option>
              <option>Apure</option>
            </select>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid gap-6">
          {members.map((member) => (
            <div key={member.id} className="card-base bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-golden-600 to-bronze-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.id} • {member.farm}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${member.statusColor}`}>
                  {member.status}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {member.email}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {member.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {member.location}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {member.animals} animales
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Miembro desde {new Date(member.joinDate).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="btn btn-secondary btn-sm">
                    Ver Perfil
                  </button>
                  <button className="btn btn-info btn-sm">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mostrando 1-4 de 34 socios
          </p>
          <div className="flex space-x-2">
            <button className="btn btn-muted btn-sm">Anterior</button>
            <button className="btn btn-primary btn-sm">1</button>
            <button className="btn btn-muted btn-sm">2</button>
            <button className="btn btn-muted btn-sm">3</button>
            <button className="btn btn-muted btn-sm">Siguiente</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Members;
