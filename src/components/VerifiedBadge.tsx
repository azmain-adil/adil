
import React from 'react';

interface VerifiedBadgeProps {
  size?: number;
  className?: string;
}

const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ 
  size = 22,
  className = ""
}) => {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size}
        viewBox="0 0 24 24"
        className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
      >
        <path 
          fill="currentColor" 
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.9 8.3-6.5 6.5c-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-3.2-3.2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.5 2.5 5.8-5.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
        />
      </svg>
    </span>
  );
};

export default VerifiedBadge;
