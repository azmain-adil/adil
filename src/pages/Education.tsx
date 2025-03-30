
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CalendarDays } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa: string;
  logoUrl: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    institution: "University of Dhaka",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Management Information Systems (MIS)",
    duration: "October 2024 - Present",
    gpa: "Currently Enrolled",
    logoUrl: "/du-logo.png",
  },
  {
    institution: "Dhaka City College",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Business Studies",
    duration: "2022 - 2024",
    gpa: "GPA 5.00",
    logoUrl: "/dcc-logo.png",
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
    logoUrl: "/dgbhs-logo.png",
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
              className="relative hover-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-24 h-24 rounded-md overflow-hidden bg-white p-2 shadow-md">
                    <img 
                      src={education.logoUrl} 
                      alt={`${education.institution} logo`}
                      className="w-full h-full object-contain education-logo"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{education.institution}</h3>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-primary">{education.degree}</p>
                  <p className="text-gray-700 dark:text-gray-300">{education.field}</p>
                  <p className="flex items-center mt-2 font-medium">
                    <span className="mr-2">GPA:</span> 
                    <span className="text-primary">{education.gpa}</span>
                  </p>
                  
                  {education.achievements && education.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span>Achievements</span>
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {education.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
