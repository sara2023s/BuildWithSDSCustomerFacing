import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-brand-purple text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:scale-[1.02] border border-transparent",
    secondary: "bg-white text-brand-navy hover:bg-slate-200 shadow-lg shadow-white/10 hover:scale-[1.02]",
    outline: "bg-brand-navy/50 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white hover:border-brand-purple/50 hover:bg-brand-navy_light",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <motion.span 
          className="text-current"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;