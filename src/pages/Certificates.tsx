import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Award, Download, Eye, Plus, Search } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 'CERT-2024-001',
      type: 'Certificado Sanitario',
      animal: 'Cabra #CB-125',
      status: 'Activo',
      issueDate: '2024-01-10',
      expiryDate: '2024-12-10',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CERT-2024-002',
      type: 'Certificado de Vacunación',
      animal: 'Lote #45',
      status: 'Activo',
      issueDate: '2024-01-08',
      expiryDate: '2024-07-08',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CERT-2023-089',
      type: 'Certificado de Registro',
      animal: 'Cabra #CB-098',
      status: 'Por Vencer',
      issueDate: '2023-02-15',
      expiryDate: '2024-02-15',
      statusColor: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      id: 'CERT-2023-076',
      type: 'Certificado Sanitario',
      animal: 'Cabra #CB-067',
      status: 'Vencido',
      issueDate: '2023-01-20',
      expiryDate: '2024-01-20',
      statusColor: 'text-red-600 bg-red-100 dark:bg-red-900/30'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Certificados
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gestiona todos los certificados de tus animales
            </p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={18} />
            Nuevo Certificado
          </button>
        </div>

        {/* Search and Filters */}
        <div className="card-base bg-white dark:bg-gray-800 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar certificados..."
                className="form-input pl-10"
              />
            </div>
            <select className="form-input sm:w-48">
              <option>Todos los estados</option>
              <option>Activo</option>
              <option>Por Vencer</option>
              <option>Vencido</option>
            </select>
            <select className="form-input sm:w-48">
              <option>Todos los tipos</option>
              <option>Certificado Sanitario</option>
              <option>Certificado de Vacunación</option>
              <option>Certificado de Registro</option>
            </select>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="card-base bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-golden-100 dark:bg-golden-900/30 rounded-lg flex items-center justify-center">
                    <Award className="text-golden-600 dark:text-golden-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.type}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.id} • {cert.animal}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${cert.statusColor}`}>
                  {cert.status}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fecha de Emisión</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(cert.issueDate).toLocaleDateString('es-ES')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fecha de Vencimiento</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(cert.expiryDate).toLocaleDateString('es-ES')}
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="btn btn-secondary btn-sm flex items-center gap-2">
                  <Eye size={16} />
                  Ver
                </button>
                <button className="btn btn-info btn-sm flex items-center gap-2">
                  <Download size={16} />
                  Descargar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if no certificates */}
        {certificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              No hay certificados
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Comienza creando tu primer certificado.
            </p>
            <div className="mt-6">
              <button className="btn btn-primary">
                Crear Certificado
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Certificates;
