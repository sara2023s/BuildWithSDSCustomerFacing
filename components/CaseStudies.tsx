import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Github } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  image: string;
  colSpan: number;
}

const projects: CaseStudy[] = [
  {
    id: 1,
    client: "The Artisan Builder",
    category: "Construction Portfolio",
    challenge: "Low quote requests from old site.",
    solution: "+40% increase in mobile quote requests.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    colSpan: 2,
  },
  {
    id: 2,
    client: "Urban Coffee Co.",
    category: "Hospitality",
    challenge: "Menu was a PDF that no one read.",
    solution: "Instant-load menu & IG integration.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
    colSpan: 1,
  },
  {
    id: 3,
    client: "E-Comm Boutique",
    category: "Retail",
    challenge: "Slow checkout losing sales.",
    solution: "Distraction-free product showcase.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    colSpan: 1,
  },
  {
    id: 4,
    client: "Elite Landscaping",
    category: "Service Business",
    challenge: "Hard to book appointments.",
    solution: "1-Click Booking & Portfolio Gallery.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2669&auto=format&fit=crop",
    colSpan: 2, 
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2"
           >
             Built for <span className="text-white">Modern Brands</span>
           </motion.h2>
           <p className="text-slate-400">Real results for local businesses.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative group rounded-3xl overflow-hidden border border-white/5 bg-brand-navy_light ${
              project.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.client} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-violet-300 border border-brand-purple/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.client}</h3>
                <p className="text-slate-300 text-xs md:text-sm mb-4 md:mb-6">
                  <span className="font-semibold text-white">Result:</span> {project.solution}
                </p>
                
                <button className="w-full py-3 rounded-xl bg-white text-brand-navy font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-100 hover:bg-violet-50 hover:scale-[1.02] min-h-[48px] text-sm md:text-base">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;