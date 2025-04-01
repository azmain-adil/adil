
import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorColor, setCursorColor] = useState('rgba(147, 112, 219, 0.6)'); // Purple color with transparency

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        // The larger circle follows with a slight delay (macOS style)
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        
        // The dot follows cursor exactly (macOS pointer dot)
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
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
          setCursorColor('rgba(147, 112, 219, 0.2)'); // Lighter purple on hover
          
          if (cursorRef.current) {
            cursorRef.current.style.width = '32px';
            cursorRef.current.style.height = '32px';
            cursorRef.current.style.mixBlendMode = 'normal';
          }
        });

        element.addEventListener('mouseleave', () => {
          setCursorColor('rgba(147, 112, 219, 0.6)');
          
          if (cursorRef.current) {
            cursorRef.current.style.width = '24px';
            cursorRef.current.style.height = '24px';
            cursorRef.current.style.mixBlendMode = 'difference';
          }
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
    <>
      {/* MacOS style outer cursor circle */}
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{ 
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: `1px solid ${cursorColor}`,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s, background-color 0.3s, border 0.3s',
          boxShadow: '0 0 10px rgba(147, 112, 219, 0.4)',
          background: 'radial-gradient(circle, rgba(147, 112, 219, 0.1), transparent)',
          backdropFilter: 'blur(1px)'
        }}
      />
      
      {/* MacOS style inner cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: cursorColor,
          transition: 'opacity 0.1s',
          boxShadow: '0 0 5px rgba(147, 112, 219, 0.8)'
        }}
      />
    </>
  );
};

export default CursorEffect;
