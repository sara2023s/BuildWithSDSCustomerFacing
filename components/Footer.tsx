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
    <footer className="py-6 md:py-8 bg-brand-navy border-t border-white/5 text-center md:text-left z-10 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-slate-500 text-sm">
            &copy; 2025 Build With SDS. All rights reserved.
          </div>
          <div className="text-slate-600 text-xs">
            <button 
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-white transition-colors py-1 px-2 min-h-[32px]"
            >
              Privacy Policy
            </button>
            {' | '}
            <button 
              onClick={() => handleLinkClick('terms')}
              className="hover:text-white transition-colors py-1 px-2 min-h-[32px]"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/5 rounded-full" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-brand-purple transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-brand-purple/10 rounded-full" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-violet-400/10 rounded-full" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;