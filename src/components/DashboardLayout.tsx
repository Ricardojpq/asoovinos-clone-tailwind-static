import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Award, 
  Users, 
  PawPrint, 
  User, 
  LogOut,
  ChevronRight,
  Home,
  ChevronLeft
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Datos del usuario (en una app real vendría del estado global o API)
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Certificados', path: '/dashboard/certificates', icon: Award },
    { name: 'Animales', path: '/dashboard/animals', icon: PawPrint },
    { name: 'Socios', path: '/dashboard/members', icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/dashboard/profile');
    setProfileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className={`px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-golden-50 to-bronze-50 dark:from-golden-900/20 dark:to-bronze-900/20`}>
            <div className="flex items-center justify-between">
              <div className={`flex items-center ${sidebarCollapsed ? 'lg:justify-center' : 'space-x-3'}`}>
                <img 
                  src="/lovable-uploads/9ae8c098-2ad8-49e2-aff0-a13a6f034fb3.png" 
                  alt="ASOCABRA" 
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                {!sidebarCollapsed && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      ASOCABRA
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Sistema de Gestión
                    </p>
                  </div>
                )}
              </div>
              
              {/* Botón toggle al lado del logo */}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden lg:flex p-2 rounded-md text-gray-500 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors"
                title={sidebarCollapsed ? "Expandir sidebar" : "Contraer sidebar"}
              >
                {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                  isActive(item.path)
                    ? 'bg-golden-100 text-golden-800 dark:bg-golden-900/30 dark:text-golden-300 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                } ${sidebarCollapsed ? 'lg:justify-center lg:px-2' : 'space-x-3'}`}
                title={sidebarCollapsed ? item.name : ''}
              >
                <item.icon size={20} />
                {(!sidebarCollapsed || sidebarOpen) && (
                  <>
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.path) && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </>
                )}
              </button>
            ))}
          </nav>

          {/* Footer del Sidebar */}
          {(!sidebarCollapsed || sidebarOpen) && (
            <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  v1.0.0
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  © 2024 ASOCABRA
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Navbar Principal */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              {/* Botón para expandir sidebar cuando está colapsado en desktop */}
              {sidebarCollapsed && (
                <button
                  onClick={() => setSidebarCollapsed(false)}
                  className="hidden lg:flex p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Expandir sidebar"
                >
                  <Menu size={20} />
                </button>
              )}
              
              {/* Logo - Solo visible en mobile cuando sidebar está cerrado */}
              <div className="flex items-center space-x-3 lg:hidden">
                <img 
                  src="/lovable-uploads/9ae8c098-2ad8-49e2-aff0-a13a6f034fb3.png" 
                  alt="ASOCABRA" 
                  className="w-12 h-12 object-contain"
                />
                <div className="block sm:block">
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                    ASOCABRA
                  </h1>
                </div>
              </div>
            </div>

            {/* Right Section - Navigation & Controls */}
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {menuItems.slice(1).map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-golden-100 text-golden-800 dark:bg-golden-900/30 dark:text-golden-300'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="w-10 h-10 bg-gradient-to-br from-golden-600 to-bronze-600 rounded-full flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  {(user.name || 'U').charAt(0).toUpperCase()}
                </button>

                {/* Profile Dropdown */}
                {profileMenuOpen && (
                  <div className="absolute right-0 top-12 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={handleProfileClick}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <User size={16} />
                      Mi Perfil
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Toolbar con información de usuario/finca */}
        <div className="bg-gradient-to-r from-golden-50 to-bronze-50 dark:from-golden-900/20 dark:to-bronze-900/20 border-b border-golden-200/30 dark:border-golden-700/30 px-6 py-2">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                {user.farm || 'Finca El Dorado'}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Ganadero: {user.name || 'Juan Pérez'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 ASOCABRA - Sistema de Gestión Ganadera
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Desarrollado con ❤️ para la ganadería venezolana
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
