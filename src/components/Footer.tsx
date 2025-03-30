
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: "https://www.facebook.com/azmain.adil.23", 
      label: "Facebook",
      hoverColor: "hover:text-[#1877F2]"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/azmain___adil", 
      label: "Instagram",
      hoverColor: "hover:text-[#E4405F]"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://bd.linkedin.com/in/azmain-adil", 
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]"
    }
  ];
  
  return (
    <footer className="w-full py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-heading">Azmain Adil</h3>
            <div className="mt-2 flex flex-col md:flex-row gap-2 md:gap-4 text-gray-600 dark:text-gray-400">
              <a 
                href="mailto:azmainadil23@gmail.com" 
                className="flex items-center gap-1.5 hover-effect hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>azmainadil23@gmail.com</span>
              </a>
              <a 
                href="tel:+8801731504405" 
                className="flex items-center gap-1.5 hover-effect hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>01731504405</span>
              </a>
            </div>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 ${link.hoverColor} transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {currentYear} Azmain Adil. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link to="/education" className="hover:text-primary transition-colors">Education</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
