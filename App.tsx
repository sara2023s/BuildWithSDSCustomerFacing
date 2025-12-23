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
    <div className="relative min-h-screen bg-brand-navy text-foreground overflow-hidden selection:bg-brand-purple/30 selection:text-white">
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: 'url(/bg.png)' }}
      ></div>
      
      {/* Tech Grid Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
        }}
      ></div>
      
      {/* Sophisticated Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Reduced Purple Glows - More Subtle */}
        <motion.div 
          className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-brand-purple rounded-full blur-[100px] opacity-12"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[100px] opacity-12"
          animate={{
            x: [0, -40, 0],
            y: [0, 70, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        ></motion.div>
        
        {/* Subtle Blue Accent Glows for Depth */}
        <motion.div 
          className="absolute -bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full blur-[100px] opacity-8"
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        ></motion.div>
        
        {/* Subtle White Light Accents */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] opacity-5"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        {/* Subtle Mesh Gradient for Texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(109, 40, 217, 0.08) 0px, transparent 60%),
              radial-gradient(at 80% 70%, rgba(59, 130, 246, 0.06) 0px, transparent 60%),
              radial-gradient(at 50% 50%, rgba(255, 255, 255, 0.03) 0px, transparent 60%),
              radial-gradient(at 30% 80%, rgba(109, 40, 217, 0.05) 0px, transparent 60%)
            `
          }}
        ></div>
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col gap-0 min-h-screen">
        <Navbar currentPage={currentPage} setPage={setCurrentPage} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
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