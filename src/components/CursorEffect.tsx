
import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorColor, setCursorColor] = useState('rgba(147, 112, 219, 0.6)'); // Purple color with transparency

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    // Add hover effect for interactive elements with more specific behaviors
    const addHoverEffectToElements = () => {
      // Interactive elements with hover effects
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .hover-effect, .education-logo, .hover-card, .underline-animation'
      );

      const headings = document.querySelectorAll('h1, h2, h3');
      const images = document.querySelectorAll('img');

      // General interactive elements
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          setCursorColor('rgba(147, 112, 219, 0.3)'); // Lighter purple on hover
          
          if (cursorRef.current) {
            cursorRef.current.style.mixBlendMode = 'normal';
            cursorRef.current.style.backdropFilter = 'blur(3px)';
          }

          // Add a subtle transform to the element
          (element as HTMLElement).style.transition = 'transform 0.3s ease';
          (element as HTMLElement).style.transform = 'translateY(-2px)';
        });

        element.addEventListener('mouseleave', () => {
          setCursorColor('rgba(147, 112, 219, 0.6)');
          
          if (cursorRef.current) {
            cursorRef.current.style.mixBlendMode = 'difference';
            cursorRef.current.style.backdropFilter = 'blur(2px)';
          }

          // Reset transform
          (element as HTMLElement).style.transform = 'translateY(0)';
        });
      });

      // Special effect for headings and images
      [...headings, ...images].forEach((element) => {
        element.addEventListener('mouseenter', () => {
          setCursorColor('rgba(147, 112, 219, 0.2)');
        });

        element.addEventListener('mouseleave', () => {
          setCursorColor('rgba(147, 112, 219, 0.6)');
        });
      });
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup and check for new elements every second (for dynamic content)
    addHoverEffectToElements();
    const intervalId = setInterval(addHoverEffectToElements, 1000);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{ 
        opacity: cursorVisible ? 1 : 0,
        transform: 'translate(-50%, -50%)',
        backgroundColor: cursorColor,
        transition: 'opacity 0.2s ease, background-color 0.3s ease',
        mixBlendMode: 'difference',
        width: 'auto',
        height: 'auto',
        borderRadius: '0',
        boxShadow: '0 0 15px rgba(147, 112, 219, 0.8)',
        background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.3), rgba(180, 160, 230, 0.2))',
        backdropFilter: 'blur(2px)',
        padding: '8px',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 75% 90%, 50% 100%, 25% 90%, 0% 100%)'
      }}
    />
  );
};

export default CursorEffect;
