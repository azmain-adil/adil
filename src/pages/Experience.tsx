
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

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
    logoUrl: "/ducc-logo.png",
    website: "https://www.facebook.com/ducareers/"
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
    logoUrl: "/ucc-logo.png",
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
    logoUrl: "/chorcha-logo.png"
  }
];

const Experience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-container">
        <h1 className="section-title">
          <Briefcase className="w-8 h-8 text-primary" />
          <span>Professional Experience</span>
        </h1>

        <div className="mt-10 space-y-12">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative hover-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-24 h-24 rounded-md overflow-hidden bg-white p-2 shadow-md transform transition-transform hover:scale-110">
                    <img 
                      src={experience.logoUrl} 
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <div className="flex items-center">
                        <p className="text-lg font-medium text-primary">{experience.company}</p>
                        {experience.website && (
                          <a 
                            href={experience.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 text-gray-500 hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.location}
                  </p>
                  
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-primary mr-2 group-hover:scale-110 transition-transform">•</span>
                        <span className="group-hover:text-primary transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
