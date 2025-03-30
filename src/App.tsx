
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload the logo images for education institutions and organizations
    const imagesToPreload = [
      '/du-logo.png',
      '/dcc-logo.png',
      '/dgbhs-logo.png',
      '/ducc-logo.png',
      '/chorcha-logo.png',
      '/ucc-logo.png'
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
        <AnimatePresence>
          {loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
          ) : (
            <>
              <BrowserRouter>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
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
