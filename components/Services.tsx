import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Crown, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  subPrice?: string;
  icon: React.ReactNode;
  features: string[];
  delay: number;
  highlight?: boolean;
  ctaText?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, subPrice, icon, features, delay, highlight, ctaText = "Get Started", onClick }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: highlight ? -8 : -5, scale: 1.02 }}
    className={`group relative p-1 rounded-3xl transition-all duration-500 h-full flex flex-col ${
      highlight 
        ? "bg-gradient-to-br from-purple/90 to-purple shadow-2xl shadow-purple/20 transform md:-translate-y-6 z-10" 
        : "bg-gradient-to-br from-white/5 to-white/0 hover:from-purple/50 hover:to-purple/20"
    }`}
  >
    {/* Glow Effect */}
    <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${highlight ? 'bg-purple/40 opacity-50' : 'bg-purple/20'}`}></div>
    
    <div className="relative h-full bg-gray-900 rounded-[22px] p-6 md:p-8 flex flex-col overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-colors shadow-lg">
      
      {highlight && (
        <div className="absolute top-4 right-4 bg-green-vibrant/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-vibrant/30">
          Best Value
        </div>
      )}

      <motion.div 
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          highlight 
            ? "bg-gradient-to-br from-white to-slate-200 text-green-vibrant shadow-lg shadow-white/10" 
            : "bg-gray-800 border border-gray-700 text-gray-300 group-hover:bg-green-vibrant group-hover:text-white group-hover:border-green-vibrant/30"
        }`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 md:mb-6 leading-relaxed min-h-[40px]">
        {description}
      </p>
      
      <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-800">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">{price}</span>
          <span className="text-gray-400 font-medium text-sm md:text-base">/mo</span>
        </div>
        {subPrice && (
          <div className="mt-3 inline-flex px-3 py-1 rounded-lg bg-gray-800 text-xs font-medium text-gray-300 border border-gray-700">
            {subPrice}
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <motion.div 
            key={i} 
            className="flex items-start gap-3 text-sm text-gray-300 group/item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + (i * 0.05), duration: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${highlight ? 'text-green-vibrant' : 'text-gray-400 group-hover:text-green-vibrant'}`} />
            </motion.div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.button 
        onClick={onClick}
        className={`w-full py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 group/btn min-h-[48px] ${
          highlight 
            ? "bg-white text-green-vibrant hover:bg-slate-200 shadow-xl shadow-white/10" 
            : "bg-gray-800 border border-gray-700 hover:bg-green-vibrant text-white hover:text-white border-transparent"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {ctaText}
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </motion.span>
      </motion.button>
    </div>
  </motion.div>
);

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const plans = [
    {
      title: "Starter",
      description: "The Essential Presence. Perfect for 'set and forget' professional sites.",
      price: "$69",
      subPrice: "+ $299 Setup Fee",
      icon: <Shield className="w-7 h-7" />,
      features: [
        "5-Page Custom Website",
        "Ultra-Fast Hosting Included",
        "SSL Security & Domain",
        "Email Support (72hr)",
        "Updates: Pay-as-you-go"
      ],
      delay: 0,
      highlight: false
    },
    {
      title: "Professional",
      description: "The Growth Engine. Ideal for active businesses needing regular updates.",
      price: "$99",
      subPrice: "+ $299 Setup Fee",
      icon: <Zap className="w-7 h-7" />,
      features: [
        "Everything in Starter",
        "1 Hour of Updates / Month",
        "Priority Support (48hr)",
        "WhatsApp/IG Integration",
        "Performance Reports"
      ],
      delay: 0.1,
      highlight: true, 
      ctaText: "Choose Professional"
    },
    {
      title: "VIP",
      description: "The Market Leader. Maximum speed and priority for serious brands.",
      price: "$149",
      subPrice: "$0 Setup Fee (Waived)",
      icon: <Crown className="w-7 h-7" />,
      features: [
        "Everything in Professional",
        "Unlimited Content Edits",
        "Priority Direct Support (24hr)",
        "Priority Queue Status",
        "Monthly Strategy Call"
      ],
      delay: 0.2,
      highlight: false,
      ctaText: "Go VIP"
    }
  ];

  return (
    <section id="services" className="py-24 container mx-auto px-4 md:px-6 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-purple/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold uppercase tracking-wider mb-6"
        >
          Simple Pricing
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Enterprise Tech. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-vibrant drop-shadow-sm">Small Business Pricing.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Professional development as a subscription. Cancel anytime after 12 months.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <ServiceCard 
            key={i} 
            {...plan} 
            onClick={() => onNavigate('contact')}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block px-4 py-2 rounded-lg bg-green-vibrant/10 border border-green-vibrant/20 text-white font-bold text-sm mb-4">
           ⚡ Standard Turnaround: 5-7 Days
        </div>
        <p className="text-gray-300 text-sm">
          All plans include a standard $299 setup fee for design & architecture, unless waived by a VIP annual contract. <br className="hidden md:block" />
          Prices displayed in NZD + GST.
        </p>
      </div>
    </section>
  );
};

export default Services;