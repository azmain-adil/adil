
import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [cursorColor, setCursorColor] = useState('rgba(var(--primary), 0.3)');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        
        // Small delay for the dot cursor for a trailing effect
        setTimeout(() => {
          if (cursorDotRef.current) {
            cursorDotRef.current.style.left = `${e.clientX}px`;
            cursorDotRef.current.style.top = `${e.clientY}px`;
          }
        }, 80);
      }
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effect for interactive elements
    const addHoverEffectToElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .hover-effect, .education-logo'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          setCursorScale(2);
          setCursorColor('rgba(var(--primary), 0.2)');
          
          if (cursorRef.current) {
            cursorRef.current.style.mixBlendMode = 'normal';
          }
        });

        element.addEventListener('mouseleave', () => {
          setCursorScale(1);
          setCursorColor('rgba(var(--primary), 0.3)');
          
          if (cursorRef.current) {
            cursorRef.current.style.mixBlendMode = 'difference';
          }
        });
      });
    };

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
      <div 
        ref={cursorRef}
        className="cursor-effect"
        style={{ 
          opacity: cursorVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          backgroundColor: cursorColor,
          transition: 'transform 0.15s ease, opacity 0.2s ease, background-color 0.3s ease',
          mixBlendMode: 'difference'
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
};

export default CursorEffect;
