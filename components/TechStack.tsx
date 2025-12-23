import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  "POWERING MODERN BUSINESS",
  "LIVE IN 5-7 DAYS",
  "MOBILE-FIRST ARCHITECTURE",
  "GOOGLE SEO OPTIMIZED",
  "BANK-LEVEL SECURITY",
  "100% FULLY MANAGED"
];

const TechStack: React.FC = () => {
  return (
    <section className="py-8 border-y border-gray-200 bg-gray-50/50 backdrop-blur-sm overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-12 sm:gap-20 flex-shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ willChange: 'transform' }}
        >
          {/* Double list for seamless loop */}
          {[...benefits, ...benefits, ...benefits, ...benefits].map((text, index) => (
            <div key={index} className="flex items-center gap-4 text-gray-600 hover:text-purple transition-colors cursor-default group whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-purple/50"></span>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-mono tracking-widest">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;