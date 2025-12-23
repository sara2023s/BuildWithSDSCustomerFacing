import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <TechStack />
            <About />
            <Services onNavigate={setCurrentPage} />
            <Process />
            <CaseStudies /> 
            <Testimonials />
            <Contact />
          </>
        );
      case 'work':
        return <Work onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={setCurrentPage} />;
      case 'terms':
        return <TermsOfService onNavigate={setCurrentPage} />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-purple/5 to-green-vibrant/5 text-foreground overflow-hidden selection:bg-green-vibrant/30 selection:text-purple-deep">
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: 'url(/bg.png)' }}
      ></div>
      
      {/* Tech Grid Pattern - Reduced on Mobile */}
      <div 
        className="hidden md:block fixed inset-0 z-0 pointer-events-none bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
        }}
      ></div>
      
      {/* Animated Background Blobs and Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Pulsing Purple Blobs - More Vibrant */}
        <motion.div 
          className="hidden md:block absolute top-0 -left-1/4 w-[600px] h-[600px] bg-purple rounded-full blur-[120px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="hidden md:block absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-purple rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 70, 0],
            scale: [1, 0.9, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        ></motion.div>
        
        {/* Pulsing Green Blobs - More Vibrant */}
        <motion.div 
          className="hidden md:block absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-green-vibrant rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        ></motion.div>
        <motion.div 
          className="hidden md:block absolute top-2/3 right-1/3 w-[400px] h-[400px] bg-green-bright rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        ></motion.div>
        
        {/* Additional Purple Blob - More Vibrant */}
        <motion.div 
          className="hidden md:block absolute bottom-0 left-1/2 w-[550px] h-[550px] bg-purple rounded-full blur-[110px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.18, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        ></motion.div>
        
        {/* Static simplified blobs for mobile - More Vibrant */}
        <div className="md:hidden absolute top-0 -left-1/4 w-[400px] h-[400px] bg-purple rounded-full blur-[80px] opacity-20"></div>
        <div className="md:hidden absolute top-1/3 -right-1/4 w-[300px] h-[300px] bg-purple rounded-full blur-[80px] opacity-18"></div>
        <div className="md:hidden absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-green-vibrant rounded-full blur-[80px] opacity-18"></div>
        
        {/* Enhanced Gradient Overlay - More Vibrant */}
        <div 
          className="absolute inset-0"
          style={{
              background: `
                radial-gradient(at 20% 30%, rgba(87, 31, 125, 0.15) 0px, transparent 60%),
                radial-gradient(at 80% 70%, rgba(80, 151, 36, 0.12) 0px, transparent 60%),
                radial-gradient(at 50% 50%, rgba(150, 215, 76, 0.1) 0px, transparent 60%),
                radial-gradient(at 30% 80%, rgba(87, 31, 125, 0.12) 0px, transparent 60%),
                radial-gradient(at 70% 20%, rgba(150, 215, 76, 0.08) 0px, transparent 60%)
              `
          }}
        ></div>
        
        {/* Base Gradient - More Vibrant */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-green-vibrant/10"
        ></div>
      </div>

      <div className="relative z-10 flex flex-col gap-0 min-h-screen">
        <Navbar currentPage={currentPage} setPage={setCurrentPage} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer onNavigate={setCurrentPage} />
      </div>
    </div>
  );
};

export default App;