import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const differences = [
    {
      title: "0.1s Load Speeds",
      desc: "We build on the edge network. Your site loads instantly, everywhere."
    },
    {
      title: "Zero Maintenance",
      desc: "We handle the hosting, the domains, and the security updates."
    },
    {
      title: "Design That Sells",
      desc: "Minimalist, clean, and focused on getting you paid."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-green-vibrant/20 text-green-vibrant text-xs font-bold uppercase tracking-wider mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
              Own Your Platform
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Stop Renting Space on <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-vibrant drop-shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                Social Media.
              </motion.span>
            </motion.h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Instagram and Facebook are borrowed land.</strong> Algorithms change. Accounts get blocked.
              </p>
              <p>
                Build With SDS gives your brand a permanent, professional home. We don't use clunky drag-and-drop templates that break in six months. We code high-performance digital assets that elevate your brand image instantly.
              </p>
              <p>
                Whether you are selling services, products, or building a personal brand, we provide the technical foundation you need to scale. <strong className="text-white">Best of all? We go live in under a week.</strong>
              </p>
            </div>
          </motion.div>

          {/* Right: The SDS Difference */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-purple/10 rounded-3xl blur-2xl opacity-20 transform -rotate-3"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">The SDS Difference</h3>
              
              <div className="space-y-8">
                {differences.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4 group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-green-vibrant/50 group-hover:bg-green-vibrant/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-vibrant" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-vibrant transition-colors">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;