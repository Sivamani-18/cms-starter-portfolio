'use clien';
import React, { useEffect } from 'react';
import LightMode from '../../assets/image/light-mode.svg';
import DarkMode from '../../assets/image/dark-mode.svg';
import { useTheme } from '@/utils/ThemeUtils';

type ThemeToggleProps = {
  onThemeChange: (theme: string, loading: boolean) => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    onThemeChange(theme || 'light', false);
  }, [theme, onThemeChange]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </button>
  );
};

export default ThemeToggle;
