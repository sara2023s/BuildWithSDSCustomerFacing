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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else if (window.scrollY < 30) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setPage(page);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', value: 'home' },
    { name: 'Plans', value: 'services' },
    { name: 'About', value: 'about' },
    { name: 'Portfolio', value: 'work' },
  ];

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled 
          ? 'top-4 md:top-6 w-[95%] sm:w-[90%] md:w-[80%] max-w-5xl rounded-full bg-gray-900/80 backdrop-blur-xl border border-gray-800 shadow-[0_8px_32px_rgb(0,0,0,0.5)] py-2.5 md:py-3 px-4 md:px-6' 
          : 'top-0 w-full bg-transparent border-transparent py-4 md:py-6 px-4 md:px-8'
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
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
              loading="eager"
              width="40"
              height="40"
            />
          </motion.div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
            buildwith<span className="text-green-vibrant">sds</span>
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name} 
              onClick={() => handleNavClick(link.value)}
              className={`text-sm font-medium transition-colors relative group ${
                currentPage === link.value ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
              <motion.span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-green-vibrant ${
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
            className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all hover:scale-105 bg-white text-green-vibrant hover:bg-slate-200 shadow-xl shadow-white/10"
          >
            Start Your Build
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-white active:scale-95 transition-transform"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="absolute top-full left-0 right-0 mt-4 mx-auto w-full bg-gray-900/95 backdrop-blur-2xl border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.value)}
                className={`text-left font-medium py-3 px-4 rounded-xl transition-colors ${
                  currentPage === link.value 
                    ? 'bg-green-vibrant/20 text-green-vibrant' 
                    : 'text-gray-300 hover:text-green-vibrant hover:bg-gray-800'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-white/5 my-2"></div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-3 rounded-xl bg-white text-green-vibrant hover:bg-slate-200 shadow-xl shadow-white/10 font-bold active:scale-95 transition-transform"
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