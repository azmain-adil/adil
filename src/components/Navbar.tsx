
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X, Users } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import VerifiedBadge from './VerifiedBadge';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Social', path: '#', isSocial: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
        {
          'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <NavLink 
            to="/"
            className="text-xl font-bold font-heading text-gray-900 dark:text-white hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <span className="inline-flex items-center">
              Azmain Adil
              <VerifiedBadge size={22} className="ml-1.5" />
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.isSocial ? (
              <HoverCard key={item.name}>
                <HoverCardTrigger asChild>
                  <button className="text-base font-medium transition-all hover-effect relative group text-gray-700 dark:text-gray-200">
                    <div className="flex items-center gap-1">
                      <Users size={18} />
                      <span>Social</span>
                    </div>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2">
                  <SocialLinks showLabels={true} className="flex-col space-y-2 space-x-0 items-start" />
                </HoverCardContent>
              </HoverCard>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => cn(
                  'text-base font-medium transition-all hover-effect relative group',
                  {
                    'text-primary dark:text-primary': isActive,
                    'text-gray-700 dark:text-gray-200': !isActive,
                  }
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            )
          ))}
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          
          <SocialLinks iconSize={18} className="ml-2" />
          
          <button 
            onClick={toggleTheme}
            className="theme-switch p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleTheme}
            className="theme-switch p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-slate-900 mt-4 py-4 px-6 rounded-lg shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              item.isSocial ? (
                <div key={item.name} className="p-2">
                  <h3 className="text-base font-medium text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-1">
                    <Users size={16} />
                    Social Links
                  </h3>
                  <SocialLinks showLabels={true} className="flex-col space-y-2 space-x-0 items-start" />
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => cn(
                    'text-base font-medium transition-all p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800',
                    {
                      'text-primary dark:text-primary bg-gray-100 dark:bg-gray-800': isActive,
                      'text-gray-700 dark:text-gray-200': !isActive,
                    }
                  )}
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
