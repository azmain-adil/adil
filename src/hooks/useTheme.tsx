
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') as Theme;
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add a transition class before changing theme
    root.classList.add('color-transition');
    
    // Remove the previous theme and add the new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Store the theme preference in localStorage
    localStorage.setItem('theme', theme);
    
    // Clean up the transition class after the transition is complete
    const transitionTimeout = setTimeout(() => {
      root.classList.remove('color-transition');
    }, 300);
    
    return () => clearTimeout(transitionTimeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
