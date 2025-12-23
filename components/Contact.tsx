import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Send, Calendar, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We will be in touch shortly.`);
  };

  return (
    <section id="contact" className="py-16 md:py-24 container mx-auto px-4 md:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/10 via-brand-navy/5 to-transparent pointer-events-none blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <MessageSquare className="w-3 h-3 text-brand-purple" />
            Start Your Build
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to upgrade <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-purple">your business?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md">
            We are currently accepting new clients for this month. Secure your slot and get online fast.
          </p>

          <div className="space-y-6">
            <a href="mailto:hello@buildwithsds.com" className="flex items-center gap-3 md:gap-4 group cursor-pointer p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-all min-h-[60px]">
              <div className="p-2.5 md:p-3 rounded-lg bg-brand-navy_light border border-white/5 text-brand-purple group-hover:border-brand-purple/50 transition-colors shadow-lg shadow-black/20 flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs md:text-sm text-slate-500">Email Us</p>
                <p className="text-white font-medium text-base md:text-lg group-hover:text-brand-purple transition-colors break-words">hello@buildwithsds.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-all">
               <div className="p-3 rounded-lg bg-brand-navy_light border border-white/5 text-brand-purple group-hover:border-brand-purple/50 transition-colors shadow-lg shadow-black/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Service Area</p>
                <p className="text-white font-medium text-lg">Based in New Zealand, Serving Brands Globally.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy_light/40 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative"
        >
          {/* Form Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-purple to-brand-navy rounded-3xl opacity-20 blur-sm -z-10"></div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-brand-navy/50 border border-slate-700/50 rounded-xl px-4 py-3.5 md:py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-600 text-base min-h-[48px]"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-brand-navy/50 border border-slate-700/50 rounded-xl px-4 py-3.5 md:py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-600 text-base min-h-[48px]"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-brand-navy/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all placeholder:text-slate-600 resize-none"
                placeholder="I need a website for my cafe..."
                required
              />
            </div>

            <Button type="submit" variant="primary" className="w-full" icon={<Send className="w-4 h-4" />}>
              Get My Quote
            </Button>
            
            <p className="text-xs text-center text-slate-500 mt-4">
              By sending this form, you agree to our privacy policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;