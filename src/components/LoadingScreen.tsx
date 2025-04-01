
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const welcomeMessages = [
  { lang: 'English', text: 'Hello' },
  { lang: 'Spanish', text: 'Hola' },
  { lang: 'French', text: 'Bonjour' },
  { lang: 'German', text: 'Guten Tag' },
  { lang: 'Italian', text: 'Ciao' },
  { lang: 'Portuguese', text: 'Olá' },
  { lang: 'Russian', text: 'Привет' },
  { lang: 'Japanese', text: 'こんにちは' },
  { lang: 'Chinese', text: '你好' },
  { lang: 'Korean', text: '안녕하세요' },
  { lang: 'Arabic', text: 'مرحبا' },
  { lang: 'Hindi', text: 'नमस्ते' },
  { lang: 'Bengali', text: 'স্বাগতম' },
  { lang: 'Thai', text: 'สวัสดี' },
  { lang: 'Turkish', text: 'Merhaba' },
  { lang: 'Vietnamese', text: 'Xin chào' },
  { lang: 'Dutch', text: 'Hallo' },
  { lang: 'Polish', text: 'Cześć' },
  { lang: 'Greek', text: 'Γεια σας' },
  { lang: 'Swedish', text: 'Hej' }
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const loadingTimer = useRef<NodeJS.Timeout | null>(null);
  const messageInterval = useRef<NodeJS.Timeout | null>(null);
  const [showSwipeUp, setShowSwipeUp] = useState(false);

  useEffect(() => {
    // Add blurred background effect
    const createBlurredBackground = () => {
      const blurredBackground = document.createElement('div');
      blurredBackground.className = 'blurred-background absolute inset-0';
      blurredBackground.style.background = 'radial-gradient(circle at center, rgba(147, 112, 219, 0.2), rgba(20, 20, 40, 0.9))';
      blurredBackground.style.filter = 'blur(80px)';
      blurredBackground.style.zIndex = '-1';
      document.body.appendChild(blurredBackground);
      
      return blurredBackground;
    };
    
    const blurredBg = createBlurredBackground();

    // Change welcome message every 0.8 seconds (Apple-like speed)
    messageInterval.current = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const next = (prev + 1) % welcomeMessages.length;
        return next;
      });
    }, 800);

    // Show swipe up after some messages have been displayed
    setTimeout(() => {
      setShowSwipeUp(true);
    }, 4000);

    // Set a timeout for automatic completion (in case user doesn't swipe)
    loadingTimer.current = setTimeout(() => {
      setLoadingComplete(true);
      setTimeout(() => {
        if (blurredBg.parentNode) {
          blurredBg.parentNode.removeChild(blurredBg);
        }
        onComplete();
      }, 1000);
    }, 10000);

    // Setup swipe detection
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      
      // If swiped up more than 50px
      if (diffY > 50 && showSwipeUp) {
        setLoadingComplete(true);
        setTimeout(() => {
          if (blurredBg.parentNode) {
            blurredBg.parentNode.removeChild(blurredBg);
          }
          onComplete();
        }, 800);
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (messageInterval.current) clearInterval(messageInterval.current);
      if (loadingTimer.current) clearTimeout(loadingTimer.current);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      if (blurredBg.parentNode) {
        blurredBg.parentNode.removeChild(blurredBg);
      }
    };
  }, [onComplete, showSwipeUp]);

  const currentMessage = welcomeMessages[currentMessageIndex];

  // Handle manual click on chevron up to skip loading
  const handleSkip = () => {
    setLoadingComplete(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            key={currentMessage.text}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center z-10"
          >
            <h1 className="text-white text-6xl md:text-8xl font-heading font-light mb-0">
              {currentMessage.text}
            </h1>
          </motion.div>
          
          <AnimatePresence>
            {showSwipeUp && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-20 flex flex-col items-center"
              >
                <p className="text-gray-400 text-sm mb-3">Swipe up to continue</p>
                <button 
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/30 backdrop-blur-sm animate-bounce"
                >
                  <ChevronUp size={24} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
