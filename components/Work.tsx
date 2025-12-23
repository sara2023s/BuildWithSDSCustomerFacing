import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import { ArrowUpRight, Github, ExternalLink, Filter } from 'lucide-react';
import Button from './ui/Button';

interface Project {
  id: number;
  title: string;
  category: 'Construction' | 'Hospitality' | 'Retail' | 'Service';
  description: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Artisan Builder",
    category: "Construction",
    description: "A high-end portfolio for a custom home builder. Focused on large imagery and trust-building case studies.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    tags: ["Portfolio", "Lead Gen", "SEO"],
    featured: true
  },
  {
    id: 2,
    title: "Urban Coffee Co.",
    category: "Hospitality",
    description: "Mobile-first menu and location finder. Integrated with Instagram for daily specials updates.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
    tags: ["Menu", "Social Sync", "Maps"],
    featured: true
  },
  {
    id: 3,
    title: "E-Comm Boutique",
    category: "Retail",
    description: "Clean, distraction-free product showcase designed to maximize cart value.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    tags: ["Shopify", "Stripe", "Gallery"],
    featured: false
  },
  {
    id: 4,
    title: "Elite Landscaping",
    category: "Service",
    description: "Automated booking system for lawn care and landscaping quotes.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2669&auto=format&fit=crop",
    tags: ["Booking", "Forms", "Local SEO"],
    featured: true
  },
  {
    id: 5,
    title: "City Law Firm",
    category: "Service",
    description: "Professional, authoritative presence for a local legal team.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop",
    tags: ["Corporate", "Blog", "Contact"],
    featured: false
  },
  {
    id: 6,
    title: "Pure Yoga Studio",
    category: "Service",
    description: "Class schedule integration and membership sign-ups.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2670&auto=format&fit=crop",
    tags: ["Scheduling", "Membership", "Video"],
    featured: false
  }
];

const categories = ['All', 'Construction', 'Hospitality', 'Retail', 'Service'];

interface WorkProps {
  onNavigate: (page: string) => void;
}

const Work: React.FC<WorkProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 container mx-auto px-4 md:px-6 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4">
            <Filter className="w-3 h-3" />
            Our Work
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Client <span className="text-slate-500">Showcase</span></h1>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-wrap gap-2 justify-center md:justify-start"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                filter === cat 
                  ? 'bg-white text-brand-navy shadow-lg shadow-white/10' 
                  : 'bg-brand-navy_light border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`${project.featured ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <SpotlightCard className="h-full group cursor-pointer">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 relative">
                   <div className="flex justify-between items-start mb-4">
                     <div>
                       <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">{project.title}</h3>
                       <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(t => (
                            <span key={t} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                              {t}
                            </span>
                          ))}
                       </div>
                     </div>
                     <div className="p-3 rounded-full bg-white/5 text-slate-300 group-hover:bg-brand-purple group-hover:text-white transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                   </div>
                   
                   <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     {project.description}
                   </p>

                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <button className="text-xs font-bold text-white flex items-center gap-1 hover:text-brand-purple transition-colors">
                        VIEW SITE <ExternalLink className="w-3 h-3" />
                      </button>
                   </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20 text-center">
        <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-brand-navy_light to-transparent border border-white/5 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
          <p className="text-slate-400 mb-8">We treat every project as a portfolio piece. Let's build something award-winning together.</p>
          <Button variant="primary" onClick={() => onNavigate('contact')}>
            Start Your Build
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Work;