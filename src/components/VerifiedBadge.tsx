
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
        viewBox="0 0 512 512" 
        width={size} 
        height={size}
        className="text-[#1DA1F2]"
      >
        <path 
          fill="currentColor" 
          d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.42 34.58-31.27 46.33 51.4L320.19 143.5 355 175.25z"
        />
      </svg>
    </span>
  );
};

export default VerifiedBadge;
