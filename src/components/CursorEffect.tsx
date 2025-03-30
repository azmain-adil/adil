
import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
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
        'a, button, input, textarea, [role="button"], .hover-effect'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorRef.current.style.opacity = '0.2';
          }
        });

        element.addEventListener('mouseleave', () => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorRef.current.style.opacity = '0.3';
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
    <div 
      ref={cursorRef}
      className="cursor-effect"
      style={{ 
        opacity: cursorVisible ? 0.3 : 0,
        transition: 'transform 0.15s ease, opacity 0.2s ease',
      }}
    />
  );
};

export default CursorEffect;
