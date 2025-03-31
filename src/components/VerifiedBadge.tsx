
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
        {/* Facebook style verified check mark */}
        <path 
          fill="currentColor" 
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.144 6.505l-5.558 5.558-2.731-2.731a.996.996 0 10-1.41 1.41l3.435 3.436a.996.996 0 001.41 0l6.263-6.263a.996.996 0 000-1.41.996.996 0 00-1.41 0z"
        />
      </svg>
    </span>
  );
};

export default VerifiedBadge;
