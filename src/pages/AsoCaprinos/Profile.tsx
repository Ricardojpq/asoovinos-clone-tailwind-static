
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { User, Mail, Phone, MapPin, Building, Save, Edit } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+58 424 123 4567',
    farm: 'Finca El Dorado',
    address: 'Sector El Valle, Municipio Guasdualito',
    identification: 'V-12.345.678',
    memberSince: '2020-03-15'
  });

  const handleSave = () => {
    // Aquí iría la lógica para guardar los datos
    localStorage.setItem('user', JSON.stringify({
      name: formData.name,
      email: formData.email,
      farm: formData.farm
    }));
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Mi Perfil
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gestiona tu información personal y de la finca
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-primary flex items-center gap-2"
          >
            <Edit size={18} />
            {isEditing ? 'Cancelar' : 'Editar'}
          </button>
        </div>

        {/* Profile Card */}
        <div className="card-base bg-white dark:bg-gray-800 p-8">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-golden-600 to-bronze-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {formData.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {formData.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {formData.farm}
              </p>
              <p className="text-sm text-golden-600 dark:text-golden-400">
                Miembro desde {new Date(formData.memberSince).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="form-label flex items-center gap-2">
                <User size={16} className="text-golden-600" />
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="form-input disabled:bg-gray-50 dark:disabled:bg-gray-700"
              />
            </div>

            <div className="form-group">
              <label className="form-label flex items-center gap-2">
                <Mail size={16} className="text-golden-600" />
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="form-input disabled:bg-gray-50 dark:disabled:bg-gray-700"
              />
            </div>

            <div className="form-group">
              <label className="form-label flex items-center gap-2">
                <Phone size={16} className="text-golden-600" />
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="form-input disabled:bg-gray-50 dark:disabled:bg-gray-700"
              />
            </div>

            <div className="form-group">
              <label className="form-label flex items-center gap-2">
                <Building size={16} className="text-golden-600" />
                Nombre de la Finca
              </label>
              <input
                type="text"
                name="farm"
                value={formData.farm}
                onChange={handleChange}
                disabled={!isEditing}
                className="form-input disabled:bg-gray-50 dark:disabled:bg-gray-700"
              />
            </div>

            <div className="form-group md:col-span-2">
              <label className="form-label flex items-center gap-2">
                <MapPin size={16} className="text-golden-600" />
                Dirección
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="form-input disabled:bg-gray-50 dark:disabled:bg-gray-700"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Cédula de Identidad
              </label>
              <input
                type="text"
                name="identification"
                value={formData.identification}
                onChange={handleChange}
                disabled={!isEditing}
                className="form-input disabled:bg-gray-50 dark:disabled:bg-gray-700"
              />
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setIsEditing(false)}
                className="btn btn-muted"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="btn btn-success flex items-center gap-2"
              >
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
