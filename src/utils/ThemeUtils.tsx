'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<string | null>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      if (storedTheme) {
        setTheme(prefersDarkScheme.matches ? 'dark' : storedTheme);
      } else if (prefersDarkScheme.matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    updateTheme();

    prefersDarkScheme.addEventListener('change', updateTheme);

    return () => {
      prefersDarkScheme.removeEventListener('change', updateTheme);
    };
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
