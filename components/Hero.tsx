import React from 'react';
import Button from './ui/Button';
import { ArrowRight, LayoutTemplate, ChevronDown, MousePointer2, Clock } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 md:pt-32 pb-12 md:pb-20 w-full overflow-hidden z-10 group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Spotlight Background - Desktop Only */}
      <motion.div
        className="hidden md:block pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px, 
              rgba(87, 31, 125, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Animated Gradient Orbs - Desktop Only */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Content Wrapper - Contained */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex-1 flex flex-col items-center justify-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 border border-gray-200 backdrop-blur-md mb-8 hover:border-green-vibrant/50 transition-all cursor-default shadow-lg shadow-gray-200/50 hover:shadow-green-vibrant/20"
        >
          <motion.span 
            className="relative flex h-2 w-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-vibrant opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-vibrant"></span>
          </motion.span>
          <span className="text-xs md:text-sm font-medium text-gray-600">Accepting new clients • <span className="text-gray-900 font-bold">Live in &lt; 7 Days</span></span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 max-w-5xl px-4"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="block text-gray-900 drop-shadow-sm"
          >
            A Premium
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple to-gray-900 animate-gradient-x pb-4 cursor-default drop-shadow-sm"
          >
            Digital Presence.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="block text-xl md:text-3xl font-semibold text-gray-600 mt-4"
          >
            Without The Agency Price Tag.
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 md:mb-10 leading-relaxed px-4"
        >
          We engineer high-performance websites for ambitious small businesses. Fully managed, <span className="text-gray-900 font-semibold">live in under a week</span>, and designed to convert followers into customers. All for a simple monthly flat fee.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto relative z-30 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} onClick={() => onNavigate('services')}>
              View Our Plans
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="outline" icon={<LayoutTemplate className="w-4 h-4" />} onClick={() => onNavigate('work')}>
              See The Difference
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating UI Elements (Decorative) - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 hidden xl:block pointer-events-none"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div 
            className="w-64 h-auto border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm rotate-[-6deg] p-4 shadow-2xl shadow-gray-200/50 pointer-events-auto"
            whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="space-y-3">
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                  <div className="flex gap-2 pt-2">
                      <div className="w-8 h-8 rounded-full bg-purple/20 border border-purple/30 flex items-center justify-center">
                          <MousePointer2 className="w-4 h-4 text-purple" />
                      </div>
                      <div className="flex-1 space-y-2">
                          <div className="w-full h-2 bg-gray-200 rounded"></div>
                          <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                      </div>
                  </div>
              </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute top-1/3 right-0 hidden xl:block pointer-events-none"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div 
            className="w-48 h-48 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm rotate-[12deg] flex items-center justify-center p-4 shadow-2xl shadow-gray-200/50 group pointer-events-auto"
            whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple mx-auto mb-2" />
                <div className="text-4xl font-bold text-gray-900 group-hover:text-purple transition-colors">
                  &lt; 7<span className="text-2xl"> Days</span>
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Turnaround</div>
              </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="pb-8 animate-bounce flex justify-center absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
      >
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </motion.div>

    </section>
  );
};

export default Hero;