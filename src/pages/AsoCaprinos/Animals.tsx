import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { PawPrint, Plus, Search, Filter } from 'lucide-react';

const Animals = () => {
  const animals = [
    {
      id: 'CB-2024-001',
      name: 'Luna',
      breed: 'Anglo Nubian',
      gender: 'Hembra',
      birthDate: '2022-03-15',
      status: 'Activo',
      weight: '45 kg',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CB-2024-002',
      name: 'Rodrigo',
      breed: 'Boer',
      gender: 'Macho',
      birthDate: '2021-08-22',
      status: 'Activo',
      weight: '68 kg',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CB-2023-125',
      name: 'Bella',
      breed: 'Criolla',
      gender: 'Hembra',
      birthDate: '2020-11-10',
      status: 'Reproductora',
      weight: '42 kg',
      statusColor: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30'
    },
    {
      id: 'CB-2023-089',
      name: 'Zeus',
      breed: 'Anglo Nubian',
      gender: 'Macho',
      birthDate: '2019-06-05',
      status: 'Reproductor',
      weight: '75 kg',
      statusColor: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30'
    }
  ];

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    return age;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Animales
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Registro completo de tu ganado caprino
            </p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={18} />
            Registrar Animal
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">248</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
          </div>
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-green-600">124</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hembras</div>
          </div>
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-blue-600">89</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Machos</div>
          </div>
          <div className="card-base bg-white dark:bg-gray-800 p-4">
            <div className="text-2xl font-bold text-purple-600">35</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Crías</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card-base bg-white dark:bg-gray-800 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por ID, nombre o raza..."
                className="form-input pl-10"
              />
            </div>
            <select className="form-input sm:w-48">
              <option>Todas las razas</option>
              <option>Anglo Nubian</option>
              <option>Boer</option>
              <option>Criolla</option>
              <option>Saanen</option>
            </select>
            <select className="form-input sm:w-48">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Reproductora</option>
              <option>Reproductor</option>
              <option>Vendido</option>
            </select>
            <button className="btn btn-secondary flex items-center gap-2">
              <Filter size={18} />
              Filtros
            </button>
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div key={animal.id} className="card-base bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-golden-100 dark:bg-golden-900/30 rounded-lg flex items-center justify-center">
                    <PawPrint className="text-golden-600 dark:text-golden-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {animal.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {animal.id}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${animal.statusColor}`}>
                  {animal.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Raza:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {animal.breed}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Género:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {animal.gender}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Edad:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {calculateAge(animal.birthDate)} años
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Peso:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {animal.weight}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <button className="btn btn-secondary btn-sm flex-1">
                    Ver Detalles
                  </button>
                  <button className="btn btn-info btn-sm flex-1">
                    Historial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mostrando 1-12 de 248 animales
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

export default Animals;
