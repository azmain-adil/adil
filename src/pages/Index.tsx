
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after a short delay
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="blurred-universe"></div>
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Azmain Adil's Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-6">Redirecting to home page...</p>
        <motion.div
          className="flex items-center justify-center gap-2 text-primary"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>Taking you there</span>
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
