
import React, { useEffect, useRef, useState } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorScale, setCursorScale] = useState(1);
  const [cursorColor, setCursorColor] = useState('rgba(var(--primary), 0.3)');
  const [lastClickPosition, setLastClickPosition] = useState({ x: 0, y: 0 });

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

    // Create click ripple effect
    const handleClick = (e: MouseEvent) => {
      if (rippleRef.current) {
        setLastClickPosition({ x: e.clientX, y: e.clientY });
        rippleRef.current.style.left = `${e.clientX}px`;
        rippleRef.current.style.top = `${e.clientY}px`;
        rippleRef.current.style.animation = 'none';
        // Trigger reflow
        void rippleRef.current.offsetWidth;
        rippleRef.current.style.animation = 'ripple 0.8s ease-out';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);

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
          setCursorScale(2);
          setCursorColor('rgba(var(--primary), 0.2)');
          
          if (cursorRef.current) {
            cursorRef.current.style.mixBlendMode = 'normal';
          }

          // Add a subtle transform to the element
          (element as HTMLElement).style.transition = 'transform 0.3s ease';
          (element as HTMLElement).style.transform = 'translateY(-2px)';
        });

        element.addEventListener('mouseleave', () => {
          setCursorScale(1);
          setCursorColor('rgba(var(--primary), 0.3)');
          
          if (cursorRef.current) {
            cursorRef.current.style.mixBlendMode = 'difference';
          }

          // Reset transform
          (element as HTMLElement).style.transform = 'translateY(0)';
        });
      });

      // Special effect for headings
      headings.forEach((heading) => {
        heading.addEventListener('mouseenter', () => {
          setCursorScale(3);
          setCursorColor('rgba(var(--primary), 0.1)');
          
          // Add a text shadow to headings
          (heading as HTMLElement).style.transition = 'text-shadow 0.3s ease';
          (heading as HTMLElement).style.textShadow = '0 0 10px rgba(var(--primary), 0.4)';
        });

        heading.addEventListener('mouseleave', () => {
          setCursorScale(1);
          setCursorColor('rgba(var(--primary), 0.3)');
          
          // Reset text shadow
          (heading as HTMLElement).style.textShadow = 'none';
        });
      });

      // Special effect for images
      images.forEach((image) => {
        image.addEventListener('mouseenter', () => {
          setCursorScale(2.5);
          setCursorColor('rgba(var(--primary), 0.15)');
          
          // Add a subtle zoom effect to images
          (image as HTMLElement).style.transition = 'filter 0.3s ease, transform 0.3s ease';
          (image as HTMLElement).style.filter = 'brightness(1.05)';
          (image as HTMLElement).style.transform = 'scale(1.02)';
        });

        image.addEventListener('mouseleave', () => {
          setCursorScale(1);
          setCursorColor('rgba(var(--primary), 0.3)');
          
          // Reset filter and transform
          (image as HTMLElement).style.filter = 'brightness(1)';
          (image as HTMLElement).style.transform = 'scale(1)';
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
      document.removeEventListener('click', handleClick);
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
          mixBlendMode: 'difference',
          display: 'block'
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease',
          display: 'block'
        }}
      />
      <div
        ref={rippleRef}
        className="ripple-effect fixed pointer-events-none z-[9998]"
        style={{
          left: `${lastClickPosition.x}px`,
          top: `${lastClickPosition.y}px`,
        }}
      />
    </>
  );
};

export default CursorEffect;
