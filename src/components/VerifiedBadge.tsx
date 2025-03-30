
import React from 'react';
import { BadgeCheck } from 'lucide-react';

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
      <BadgeCheck 
        size={size} 
        className="text-[#1DA1F2] fill-[#1DA1F2]"
        strokeWidth={2}
      />
    </span>
  );
};

export default VerifiedBadge;
