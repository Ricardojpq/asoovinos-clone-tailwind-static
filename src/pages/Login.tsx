
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    // Validación email
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
      isValid = false;
    }

    // Validación password
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simular login (aquí iría la lógica real de autenticación)
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        name: 'Juan Pérez',
        email: formData.email,
        farm: 'Finca El Dorado'
      }));
      navigate('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-50 via-white to-bronze-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="hero-pattern absolute inset-0 opacity-30"></div>
      
      <div className="relative w-full max-w-md">
        {/* Logo y Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full shadow-2xl overflow-hidden bg-white p-2">
            <img 
              src="/lovable-uploads/9ae8c098-2ad8-49e2-aff0-a13a6f034fb3.png" 
              alt="ASOCABRA Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bienvenido a ASOCABRA
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ingresa a tu cuenta para continuar
          </p>
        </div>

        {/* Formulario */}
        <div className="card-base bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label flex items-center gap-2">
                <User size={16} className="text-golden-600" />
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="tu@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label flex items-center gap-2">
                <Lock size={16} className="text-golden-600" />
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input pr-12 ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-golden-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.password}</p>
              )}
            </div>

            {/* Recordar sesión */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-golden-600 focus:ring-golden-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Recordar sesión
                </span>
              </label>
              <a href="#" className="text-sm text-golden-600 hover:text-golden-700 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  Iniciar Sesión
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer del formulario */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              ¿No tienes cuenta?{' '}
              <a href="#" className="text-golden-600 hover:text-golden-700 font-semibold transition-colors">
                Contáctanos
              </a>
            </p>
          </div>
        </div>

        {/* Link de regreso */}
        <div className="text-center mt-6">
          <a 
            href="/" 
            className="text-gray-600 dark:text-gray-400 hover:text-golden-600 transition-colors flex items-center justify-center gap-2"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
