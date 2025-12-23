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
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    whileHover={{ y: highlight ? -8 : -5, scale: 1.02 }}
    className={`group relative p-1 rounded-3xl transition-all duration-500 h-full flex flex-col ${
      highlight 
        ? "bg-gradient-to-br from-brand-purple to-brand-navy shadow-2xl shadow-brand-purple/20 transform md:-translate-y-6 z-10" 
        : "bg-gradient-to-br from-white/5 to-white/0 hover:from-brand-purple/50 hover:to-brand-purple/20"
    }`}
  >
    {/* Glow Effect */}
    <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${highlight ? 'bg-brand-purple/40 opacity-50' : 'bg-brand-purple/20'}`}></div>
    
    <div className="relative h-full bg-brand-navy rounded-[22px] p-8 flex flex-col overflow-hidden border border-white/5 group-hover:border-transparent transition-colors">
      
      {highlight && (
        <div className="absolute top-4 right-4 bg-brand-purple/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-brand-purple/30">
          Best Value
        </div>
      )}

      <motion.div 
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          highlight 
            ? "bg-gradient-to-br from-white to-slate-200 text-brand-purple shadow-lg shadow-white/10" 
            : "bg-brand-navy_light border border-white/10 text-slate-300 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple/30"
        }`}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[40px]">
        {description}
      </p>
      
      <div className="mb-8 pb-8 border-b border-white/5">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{price}</span>
          <span className="text-slate-500 font-medium">/mo</span>
        </div>
        {subPrice && (
          <div className="mt-3 inline-flex px-3 py-1 rounded-lg bg-white/5 text-xs font-medium text-slate-400 border border-white/5">
            {subPrice}
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <motion.div 
            key={i} 
            className="flex items-start gap-3 text-sm text-slate-300 group/item"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + (i * 0.1), duration: 0.3 }}
            whileHover={{ x: 5 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${highlight ? 'text-brand-purple' : 'text-slate-600 group-hover:text-brand-purple'}`} />
            </motion.div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.button 
        onClick={onClick}
        className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
          highlight 
            ? "bg-white text-brand-purple hover:bg-slate-200 shadow-xl shadow-white/5" 
            : "bg-white/5 border border-white/10 hover:bg-white text-white hover:text-brand-navy border-transparent"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6"
        >
          Simple Pricing
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Enterprise Tech. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-purple">Small Business Pricing.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
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
        <div className="inline-block px-4 py-2 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-white font-bold text-sm mb-4">
           ⚡ Standard Turnaround: 5-7 Days
        </div>
        <p className="text-slate-500 text-sm">
          All plans include a standard $299 setup fee for design & architecture, unless waived by a VIP annual contract. <br className="hidden md:block" />
          Prices displayed in NZD + GST.
        </p>
      </div>
    </section>
  );
};

export default Services;