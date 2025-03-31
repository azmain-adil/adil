
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Enhanced page transition settings
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smoother exit
      }
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home pageVariants={pageVariants} />} />
        <Route path="/experience" element={<Experience pageVariants={pageVariants} />} />
        <Route path="/education" element={<Education pageVariants={pageVariants} />} />
        <Route path="/contact" element={<Contact pageVariants={pageVariants} />} />
        <Route path="*" element={<NotFound pageVariants={pageVariants} />} />
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
