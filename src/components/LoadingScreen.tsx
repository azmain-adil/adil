
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const welcomeMessages = [
  { lang: 'English', text: 'Welcome' },
  { lang: 'Bengali', text: 'স্বাগতম' },
  { lang: 'Arabic', text: 'أهلا بك' },
  { lang: 'Spanish', text: 'Bienvenido' },
  { lang: 'Japanese', text: 'ようこそ' }
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Create stars in the background
    const starryNight = document.createElement('div');
    starryNight.className = 'starry-night';
    document.body.appendChild(starryNight);

    // Add stars
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      starryNight.appendChild(star);
    }

    // Add falling stars at intervals
    const createFallingStar = () => {
      const fallingStar = document.createElement('div');
      fallingStar.className = 'falling-star';
      fallingStar.style.top = `${Math.random() * 30}%`;
      fallingStar.style.left = `${Math.random() * 30}%`;
      fallingStar.style.animationDelay = `${Math.random()}s`;
      starryNight.appendChild(fallingStar);

      // Remove falling star after animation completes
      setTimeout(() => {
        if (fallingStar.parentNode) {
          fallingStar.parentNode.removeChild(fallingStar);
        }
      }, 3000);
    };

    const fallingStarInterval = setInterval(createFallingStar, 1000);

    // Change welcome message every 1.2 seconds
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const next = prev + 1;
        
        if (next >= welcomeMessages.length) {
          // Finish loading after showing all welcome messages
          clearInterval(messageInterval);
          setTimeout(() => {
            setLoadingComplete(true);
            
            // Clean up stars after loading completes
            setTimeout(() => {
              if (starryNight.parentNode) {
                starryNight.parentNode.removeChild(starryNight);
              }
              onComplete();
            }, 1000);
          }, 500);
          return prev;
        }
        
        return next;
      });
    }, 1200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(fallingStarInterval);
      if (starryNight.parentNode) {
        starryNight.parentNode.removeChild(starryNight);
      }
    };
  }, [onComplete]);

  const currentMessage = welcomeMessages[currentMessageIndex];

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a20] z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            key={currentMessage.text}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold mb-4">
              {currentMessage.text}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-mono">
              {currentMessage.lang}
            </p>
          </motion.div>
          
          <div className="mt-16 w-64">
            <div className="windows-loader"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
