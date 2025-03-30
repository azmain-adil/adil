
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const contactInfo = {
  name: "Azmain Adil",
  email: "azmainadil23@gmail.com",
  phone: "+8801731504405",
  location: "Dhaka, Bangladesh",
  socialLinks: [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/azmain___adil",
      color: "#E1306C"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://bd.linkedin.com/in/azmain-adil",
      color: "#0077B5"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/azmain.adil.23",
      color: "#1877F2"
    }
  ]
};

const Contact: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data
    // to a server or email service
    alert("Message sent! (This is a demo only, no actual message was sent)");
    
    // Clear the form
    if (nameRef.current) nameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="section-container">
        <h1 className="section-title">Contact Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
              <div className="flex space-x-4">
                {contactInfo.socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover-effect"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: social.color,
                        color: '#ffffff'
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center"
              >
                <span className="mr-2">Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
