
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import SocialLinks from '@/components/SocialLinks';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to your backend or email service
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:azmainadil23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors underline-animation">
                    azmainadil23@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+8801731504405" className="text-muted-foreground hover:text-primary transition-colors underline-animation">
                    +880 1731 504405
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Connect with me</h3>
              <SocialLinks iconSize={24} showLabels={true} className="flex-wrap gap-y-3" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-transparent transition-all duration-300" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-transparent transition-all duration-300" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-transparent transition-all duration-300" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-transparent transition-all duration-300 resize-none" 
                    required
                  ></textarea>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-6 hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
