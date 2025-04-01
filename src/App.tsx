
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Improved page transition animations with smoother and more modern feel
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 10
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    filter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Improved child elements animations
const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// AnimatedRoutes component for consistent page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-wrapper"
          >
            <Home />
          </motion.div>
        } />
        <Route path="/index" element={
          <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-wrapper"
          >
            <Index />
          </motion.div>
        } />
        <Route path="/experience" element={
          <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-wrapper"
          >
            <Experience />
          </motion.div>
        } />
        <Route path="/education" element={
          <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-wrapper"
          >
            <Education />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-wrapper"
          >
            <Contact />
          </motion.div>
        } />
        <Route path="*" element={
          <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-wrapper"
          >
            <NotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload the logo images for education institutions and organizations
    const imagesToPreload = [
      '/lovable-uploads/c06ecbd1-22b3-4019-af2b-ae2ef440642b.png', // DU
      '/lovable-uploads/23156ebc-93dc-4fc9-929a-e2b4cfd7bca3.png', // SSC
      '/lovable-uploads/42b71d22-1c94-4735-b4a3-79455ee9891f.png', // HSC
      '/lovable-uploads/775c8700-df6b-4746-ab9b-800f665fa35a.png', // DUCC
      '/lovable-uploads/26ec99ce-cd69-43eb-864a-a7e19cbe1bd5.png', // CHORCHA
      '/lovable-uploads/ec06f525-c208-499c-9f33-509fad6c7949.png'  // UCC
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
          ) : (
            <>
              <BrowserRouter>
                <Navbar />
                <main className="page-wrapper">
                  <AnimatedRoutes />
                </main>
                <Footer />
              </BrowserRouter>
              <CursorEffect />
            </>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
