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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-6"
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
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-purple"
                whileHover={{ scale: 1.02 }}
              >
                Social Media.
              </motion.span>
            </motion.h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
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
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-navy rounded-3xl blur-2xl opacity-20 transform -rotate-3"></div>
            <div className="relative bg-brand-navy_light border border-white/10 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">The SDS Difference</h3>
              
              <div className="space-y-8">
                {differences.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-purple/50 group-hover:bg-brand-purple/10 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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