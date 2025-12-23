import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Hammer, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "01. The Brief",
    description: "Choose your plan and send us your details (Logo, Photos, Services). No long meetings required.",
    color: "text-green-vibrant"
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "02. The Build",
    description: "We construct your site using our high-performance code framework. Done in days, not months.",
    color: "text-green-vibrant"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "03. The Launch",
    description: "We connect your domain, secure your data, and push your site live. Total time: Under 7 days.",
    color: "text-green-vibrant"
  }
];

const Process: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-green-vibrant text-xs font-bold uppercase tracking-wider mb-4">
            <ArrowRight className="w-3 h-3" />
            Simple Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            From DM to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-vibrant drop-shadow-sm">Done</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            We've stripped away the complexity. Get online without the headache.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative max-w-5xl mx-auto"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative z-10 group"
            >
              <div className="bg-gray-900 border border-gray-700 p-6 md:p-8 rounded-3xl h-full hover:border-green-vibrant/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-vibrant/10 shadow-sm">
                <div className={`w-14 h-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 shadow-inner ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;