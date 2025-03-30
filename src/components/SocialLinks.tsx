
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "",
  iconSize = 20, 
  showLabels = false 
}) => {
  const socialLinks = [
    { 
      icon: <Facebook size={iconSize} />, 
      label: "Facebook",
      href: "https://www.facebook.com/azmain.adil.23",
      color: "hover:text-[#1877F2] hover:border-[#1877F2]"
    },
    { 
      icon: <Instagram size={iconSize} />, 
      label: "Instagram",
      href: "https://www.instagram.com/azmain___adil",
      color: "hover:text-[#E4405F] hover:border-[#E4405F]"
    },
    { 
      icon: <Linkedin size={iconSize} />, 
      label: "LinkedIn",
      href: "https://bd.linkedin.com/in/azmain-adil",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]"
    }
  ];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center p-2.5 rounded-full border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-110 ${link.color}`}
          aria-label={link.label}
          whileHover={{ 
            y: -3,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {link.icon}
          {showLabels && <span className="ml-2">{link.label}</span>}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
