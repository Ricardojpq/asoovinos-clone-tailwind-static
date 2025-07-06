
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Certificate, 
  Users, 
  PawPrint, 
  User, 
  LogOut,
  ChevronRight,
  Home
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Datos del usuario (en una app real vendría del estado global o API)
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Certificados', path: '/dashboard/certificates', icon: Certificate },
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Toolbar Superior */}
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
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/9ae8c098-2ad8-49e2-aff0-a13a6f034fb3.png" 
                alt="ASOCABRA" 
                className="w-8 h-8 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  ASOCABRA
                </h1>
              </div>
            </div>
          </div>

          {/* Center Section - User Info */}
          <div className="flex-1 text-center px-4">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-golden-50 to-bronze-50 dark:from-golden-900/20 dark:to-bronze-900/20 px-4 py-2 rounded-lg">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {user.farm || 'Finca El Dorado'}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {user.name || 'Usuario'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation & Profile */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.slice(1).map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-golden-100 text-golden-800 dark:bg-golden-900/30 dark:text-golden-300'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

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
                <div className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
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

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-16 lg:pt-4">
            {/* Sidebar Header - Solo visible en mobile */}
            <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 lg:hidden">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/9ae8c098-2ad8-49e2-aff0-a13a6f034fb3.png" 
                  alt="ASOCABRA" 
                  className="w-8 h-8 object-contain"
                />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  ASOCABRA
                </h2>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-golden-100 text-golden-800 dark:bg-golden-900/30 dark:text-golden-300 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                  {isActive(item.path) && (
                    <ChevronRight size={16} className="ml-auto" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay para mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
