import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-8 bg-brand-navy border-t border-white/5 text-center md:text-left z-10 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-slate-500 text-sm">
            &copy; 2025 Build With SDS. All rights reserved.
          </div>
          <div className="text-slate-600 text-xs">
            <button 
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            {' | '}
            <button 
              onClick={() => handleLinkClick('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-brand-purple transition-colors p-2 hover:bg-brand-purple/10 rounded-full">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors p-2 hover:bg-violet-400/10 rounded-full">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;