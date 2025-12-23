import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ExternalLink, Code2, Rocket, Globe, Zap, ArrowRight } from 'lucide-react';

const AboutPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 container mx-auto px-4 md:px-6 min-h-screen flex flex-col items-center">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-purple text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
          <Code2 className="w-3 h-3" />
          Who We Are
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
          More than just <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple drop-shadow-sm">Code & Pixels.</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed px-4">
          We are a boutique digital agency focused on one thing: building high-performance web assets that generate revenue. No bloat, no jargon, just results.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-24 w-full max-w-6xl">
        
        {/* Left: Stats/Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden shadow-sm"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-purple/10 blur-[80px] rounded-full pointer-events-none"></div>
           
           <h3 className="text-2xl font-bold text-gray-900 mb-6">The Founder's Vision</h3>
           <p className="text-gray-600 mb-6 leading-relaxed">
             I started BuildWithSDS to bridge the gap between "cheap DIY website builders" and "overpriced agencies". 
           </p>
           <p className="text-gray-600 mb-8 leading-relaxed">
             Most small businesses don't need a $20k website. They need speed, reliability, and a design that converts. Using modern tech stacks like Next.js and Tailwind, we deliver enterprise-grade quality at a fraction of the cost.
           </p>

           <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://buildwithsds.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
              >
                View Founder Portfolio <ExternalLink className="w-4 h-4" />
              </a>
           </div>
        </motion.div>

        {/* Right: Feature Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-purple/30 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Global Standards</h4>
            <p className="text-xs text-gray-500">We adhere to the strict web standards used by top tech companies.</p>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-purple/30 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Lighting Fast</h4>
            <p className="text-xs text-gray-500">Sub-second load times ensure you never lose a customer to lag.</p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-purple/30 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Clean Code</h4>
            <p className="text-xs text-gray-500">No bloated builders. Just pure, efficient, hand-crafted code.</p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-purple/30 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center mb-4">
              <Rocket className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Scalable</h4>
            <p className="text-xs text-gray-500">Ready to handle traffic spikes as your business grows.</p>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl mx-auto text-center relative"
      >
        <div className="relative bg-gradient-to-r from-purple/10 to-purple/5 border border-purple/20 rounded-3xl p-6 md:p-8 lg:p-12 backdrop-blur-sm bg-white/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-purple/3 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to work with us?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Let's turn your vision into a high-performance reality. Book a discovery call today.</p>
            <Button variant="secondary" onClick={() => onNavigate('contact')}>
              Start Your Project
            </Button>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutPage;