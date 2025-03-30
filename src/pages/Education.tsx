
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CalendarDays, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa: string;
  logoUrl: string;
  website?: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "University of Dhaka",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Management Information Systems (MIS)",
    duration: "October 2024 - Present",
    gpa: "Currently Enrolled",
    logoUrl: "/lovable-uploads/c06ecbd1-22b3-4019-af2b-ae2ef440642b.png",
    website: "https://www.du.ac.bd/"
  },
  {
    institution: "Dhaka City College",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Business Studies",
    duration: "2022 - 2024",
    gpa: "GPA 5.00",
    logoUrl: "/lovable-uploads/42b71d22-1c94-4735-b4a3-79455ee9891f.png",
    website: "https://www.dhakacitycollege.edu.bd/",
    achievements: [
      "Received Government Scholarship from Dhaka Education Board"
    ]
  },
  {
    institution: "Dhanmondi Govt. Boys' High School",
    degree: "Secondary School Certificate (SSC)",
    field: "Business Studies",
    duration: "2020 - 2022",
    gpa: "GPA 5.00",
    logoUrl: "/lovable-uploads/23156ebc-93dc-4fc9-929a-e2b4cfd7bca3.png",
    website: "https://dgbhs.edu.bd/"
  }
];

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-container">
        <h1 className="section-title">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span>Education</span>
        </h1>

        <div className="mt-10 space-y-12">
          {educationData.map((education, index) => (
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
                  <motion.div 
                    className="w-28 h-28 rounded-md overflow-hidden bg-white p-2 shadow-md"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 3,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <img 
                      src={education.logoUrl} 
                      alt={`${education.institution} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">{education.institution}</h3>
                      {education.website && (
                        <motion.a 
                          href={education.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 text-gray-500 hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-primary">{education.degree}</p>
                  <p className="text-gray-700 dark:text-gray-300">{education.field}</p>
                  <motion.div 
                    className="flex items-center mt-2"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Badge variant="secondary" className="font-medium">
                      GPA: <span className="text-primary ml-1">{education.gpa}</span>
                    </Badge>
                  </motion.div>
                  
                  {education.achievements && education.achievements.length > 0 && (
                    <motion.div 
                      className="mt-4 p-3 rounded-md bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
                      whileHover={{ 
                        borderColor: "rgba(var(--primary), 0.5)", 
                        backgroundColor: "rgba(var(--primary), 0.05)" 
                      }}
                    >
                      <h4 className="font-medium flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span>Achievements</span>
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {education.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start group"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-primary mr-2 group-hover:scale-110 transition-transform">•</span>
                            <span className="group-hover:text-primary transition-colors">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
