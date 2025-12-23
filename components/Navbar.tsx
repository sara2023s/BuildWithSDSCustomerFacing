import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else if (window.scrollY < 30) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setPage(page);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Plans', value: 'services' },
    { name: 'About', value: 'about' },
    { name: 'Portfolio', value: 'work' },
  ];

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled 
          ? 'top-6 w-[90%] md:w-[80%] max-w-5xl rounded-full bg-brand-navy/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgb(0,0,0,0.2)] py-3 px-6' 
          : 'top-0 w-full bg-transparent border-transparent py-6 px-4 md:px-8'
      }`}
    >
      <div className={`flex items-center justify-between ${!isScrolled ? 'container mx-auto' : 'w-full'}`}>
        
        {/* Logo */}
        <motion.button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 group outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div 
            className="p-2 rounded-lg transition-all duration-300"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/mylogo.png" 
              alt="buildwithsds logo" 
              className="w-10 h-10 object-contain rounded-full"
            />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-white">
            buildwith<span className="text-violet-400">sds</span>
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name} 
              onClick={() => handleNavClick(link.value)}
              className={`text-sm font-medium transition-colors relative group ${
                currentPage === link.value ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
              <motion.span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-purple ${
                  currentPage === link.value ? 'w-full' : 'w-0'
                }`}
                initial={false}
                animate={{ width: currentPage === link.value ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
                whileHover={{ width: '100%' }}
              ></motion.span>
            </motion.button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all hover:scale-105 ${
              isScrolled 
                ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20 hover:bg-violet-600' 
                : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-purple/30'
            }`}
          >
            Start Your Build
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 mx-auto w-full bg-brand-navy/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.value)}
                className={`text-left font-medium py-3 px-4 rounded-xl transition-colors ${
                  currentPage === link.value 
                    ? 'bg-brand-purple/20 text-brand-purple' 
                    : 'text-slate-300 hover:text-brand-purple hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-white/5 my-2"></div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-3 rounded-xl bg-brand-purple font-bold text-white shadow-lg shadow-brand-purple/20 active:scale-95 transition-transform"
            >
              Start Your Build
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;