
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="blurred-universe"></div>
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Azmain Adil's Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-6">An immersive journey through my digital universe</p>
        <motion.button
          onClick={handleExplore}
          className="flex items-center justify-center gap-2 text-primary bg-primary/10 hover:bg-primary/20 px-6 py-3 rounded-full transition-all"
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
