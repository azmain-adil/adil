
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import VerifiedBadge from '@/components/VerifiedBadge';
import Skills from '@/components/Skills';
import TechNews from '@/components/TechNews';

// Add pageVariants prop
interface HomeProps {
  pageVariants?: {
    initial: any;
    animate: any;
    exit: any;
  };
}

const Home: React.FC<HomeProps> = ({ pageVariants }) => {
  const universeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createStars = () => {
      if (!universeRef.current) return;
      
      // Clear any existing stars
      while (universeRef.current.firstChild) {
        universeRef.current.removeChild(universeRef.current.firstChild);
      }
      
      // Create new stars
      for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white/30 blur-sm';
        
        // Random size
        const size = Math.random() * 20 + 5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random opacity
        star.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        
        universeRef.current.appendChild(star);
      }
    };
    
    createStars();
    
    // Recreate stars on window resize
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!universeRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      universeRef.current.style.transform = `translate(${moveX * 30}px, ${moveY * 30}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Use provided pageVariants or default ones
  const defaultVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }
  };
  
  const variants = pageVariants || defaultVariants;
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="min-h-screen relative pt-20 overflow-hidden"
    >
      <div ref={universeRef} className="blurred-universe"></div>
      
      {/* Hero Section */}
      <div className="section-container flex flex-col min-h-[calc(100vh-80px)] justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center md:text-left mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 flex items-center justify-center md:justify-start flex-wrap gap-2">
            Azmain Adil
            <VerifiedBadge size={36} className="ml-2" />
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0"
          >
            BBA Student at University of Dhaka, specializing in Management Information Systems.
            Passionate about digital marketing and human resource development.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start mt-8"
        >
          <RouterLink 
            to="/experience"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Experience
          </RouterLink>
          <RouterLink 
            to="/education" 
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Education
          </RouterLink>
          <RouterLink 
            to="/contact"
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Contact
          </RouterLink>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center text-center"
        >
          <a 
            href="#scroll-down"
            className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <span className="text-sm">Scroll down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* About Section */}
      <div id="scroll-down" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="hover-effect p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300">
              I am a BBA student at the University of Dhaka, specializing in Management Information Systems. My academic journey has been focused on understanding the intersection of business management and information technology, preparing me for a career in digital marketing and business technology.
            </p>
            <p className="hover-effect p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300">
              With experience in marketing education and human resources management, I have developed a strong foundation in communication, team leadership, and strategic thinking. I am passionate about leveraging technology to solve business problems and create effective marketing strategies.
            </p>
            <p className="hover-effect p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300">
              Outside of my academic pursuits, I enjoy staying updated on the latest digital marketing trends and technologies. I am dedicated to continuous learning and professional growth.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>
      </div>

      {/* Tech News Section */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TechNews />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
