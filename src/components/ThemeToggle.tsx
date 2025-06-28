
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 border-golden-200 hover:bg-golden-50 dark:border-golden-700 dark:hover:bg-golden-900/20"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-golden-600 dark:text-golden-400" />
      ) : (
        <Moon className="h-4 w-4 text-golden-600" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
};

export default ThemeToggle;
