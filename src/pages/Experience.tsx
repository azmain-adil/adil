
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
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
    ]
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
    ]
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
    ]
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
              className="relative hover-effect p-6 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <p className="text-lg font-medium text-primary">{experience.company}</p>
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
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
