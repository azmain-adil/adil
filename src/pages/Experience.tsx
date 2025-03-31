
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  logoUrl: string;
  website?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Executive at Human Resources",
    company: "Dhaka University Career Club (DUCC)",
    duration: "Feb 2025 - Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Leading HR initiatives and talent development programs for club members.",
      "Coordinating recruitment drives and member onboarding processes.",
      "Organizing career development workshops and training sessions."
    ],
    logoUrl: "/lovable-uploads/775c8700-df6b-4746-ab9b-800f665fa35a.png",
    website: "https://www.facebook.com/Ducareerclub"
  },
  {
    title: "Lecturer of Marketing",
    company: "University Coaching Care (UCC Group)",
    duration: "Sep 2024 - Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Instructing admission candidates on marketing principles and strategies.",
      "Developing comprehensive course materials for marketing curriculum.",
      "Providing guidance on entrance examination preparation.",
      "Conducting regular assessment tests to monitor student progress."
    ],
    logoUrl: "/lovable-uploads/ec06f525-c208-499c-9f33-509fad6c7949.png",
    website: "https://www.facebook.com/uccgroup/"
  },
  {
    title: "Proofreader",
    company: "Chorcha",
    duration: "Jul 2024 - Aug 2024",
    location: "Remote",
    description: [
      "Provided meticulous proofreading services for academic and professional content.",
      "Ensured grammatical accuracy and consistency in written materials.",
      "Collaborated with content creators to improve quality of publications."
    ],
    logoUrl: "/lovable-uploads/26ec99ce-cd69-43eb-864a-a7e19cbe1bd5.png",
    website: "https://www.facebook.com/chorcha.net"
  }
];

const Experience: React.FC = () => {
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // List animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-container">
        <h1 className="section-title">
          <Briefcase className="w-8 h-8 text-primary" />
          <span>Professional Experience</span>
        </h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="mt-10 space-y-12"
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative hover-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-500 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <motion.div 
                    className="w-24 h-24 rounded-md overflow-hidden bg-white p-2 shadow-md"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: -3,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <img 
                      src={experience.logoUrl} 
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <div className="flex items-center">
                        <p className="text-lg font-medium text-primary">{experience.company}</p>
                        {experience.website && (
                          <motion.a 
                            href={experience.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 text-gray-500 hover:text-primary transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Badge variant="outline" className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{experience.duration}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.location}
                  </p>
                  
                  <motion.ul 
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                    className="mt-4 space-y-2"
                  >
                    {experience.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start group"
                        variants={itemVariants}
                        custom={i}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-primary mr-2 group-hover:scale-110 transition-transform">•</span>
                        <span className="group-hover:text-primary transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
