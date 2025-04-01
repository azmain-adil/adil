
import React from 'react';
import { motion } from 'framer-motion';
import VerifiedBadge from './VerifiedBadge';

interface SkillProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const Skills: React.FC = () => {
  const skills: SkillProps[] = [
    { name: 'Digital marketing', level: 'advanced' },
    { name: 'Microsoft Excel', level: 'advanced' },
    { name: 'Microsoft Word', level: 'expert' },
    { name: 'Microsoft PowerPoint', level: 'advanced' },
    { name: 'Canva', level: 'expert' },
    { name: 'AI content creation', level: 'intermediate' },
    { name: 'WordPress website building', level: 'intermediate' },
    { name: 'Leadership', level: 'advanced' },
    { name: 'Problem solving', level: 'advanced' },
    { name: 'Critical thinking', level: 'advanced' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <h2 className="section-title">Skills</h2>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={item}>
            <div className="flex items-center px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-md hover:border-primary dark:hover:border-primary transition-all duration-300 group">
              <VerifiedBadge className="text-primary h-5 w-5 group-hover:text-primary group-hover:scale-110 transition-all duration-300 mr-2" />
              <span className="font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
