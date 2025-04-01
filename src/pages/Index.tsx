
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="blurred-universe"></div>
      
      <motion.div 
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-bold mb-4"
          variants={itemVariants}
        >
          Welcome to Azmain Adil's Portfolio
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-6"
          variants={itemVariants}
        >
          An immersive journey through my digital universe
        </motion.p>
        
        <motion.button
          onClick={handleExplore}
          className="flex items-center justify-center gap-2 text-primary bg-primary/10 hover:bg-primary/20 px-6 py-3 rounded-full transition-all"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Start Exploring</span>
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Index;
