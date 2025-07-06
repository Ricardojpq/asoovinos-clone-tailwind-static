
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Certificate, Users, PawPrint, TrendingUp, Calendar, Bell } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Certificados Activos',
      value: '12',
      change: '+2 este mes',
      icon: Certificate,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Total Animales',
      value: '248',
      change: '+15 este mes',
      icon: PawPrint,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Socios Activos',
      value: '34',
      change: '+3 este mes',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Rendimiento',
      value: '94%',
      change: '+5% este mes',
      icon: TrendingUp,
      color: 'text-golden-600 dark:text-golden-400'
    }
  ];

  const recentActivities = [
    {
      title: 'Nuevo certificado emitido',
      description: 'Certificado sanitario para lote #125',
      time: 'Hace 2 horas',
      type: 'certificate'
    },
    {
      title: 'Animal registrado',
      description: 'Cabra hembra - ID: CB-2024-001',
      time: 'Hace 4 horas',
      type: 'animal'
    },
    {
      title: 'Nuevo socio',
      description: 'María García se unió a la asociación',
      time: 'Hace 1 día',
      type: 'member'
    },
    {
      title: 'Inspección programada',
      description: 'Visita técnica el 15/01/2025',
      time: 'Hace 2 días',
      type: 'inspection'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-golden-600 to-bronze-600 rounded-2xl p-6 text-white">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">
            Panel de Control
          </h1>
          <p className="text-golden-100">
            Gestiona tu actividad ganadera desde un solo lugar
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-base bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {stat.title}
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Actividad Reciente */}
          <div className="lg:col-span-2 card-base bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Actividad Reciente
              </h2>
              <button className="text-golden-600 hover:text-golden-700 text-sm font-medium">
                Ver todo
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-10 h-10 bg-golden-100 dark:bg-golden-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    {activity.type === 'certificate' && <Certificate size={16} className="text-golden-600" />}
                    {activity.type === 'animal' && <PawPrint size={16} className="text-golden-600" />}
                    {activity.type === 'member' && <Users size={16} className="text-golden-600" />}
                    {activity.type === 'inspection' && <Calendar size={16} className="text-golden-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel de Notificaciones */}
          <div className="card-base bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Notificaciones
              </h2>
              <Bell className="text-gray-400" size={20} />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                  Inspección Pendiente
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Programada para el 15 de enero
                </p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                  Certificado por Vencer
                </h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  Vence en 30 días
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <h3 className="text-sm font-semibold text-green-800 dark:text-green-300">
                  Pago Aprobado
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Cuota mensual procesada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
