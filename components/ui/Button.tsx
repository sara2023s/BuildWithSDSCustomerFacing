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
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base min-h-[48px] touch-manipulation";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-vibrant to-green-bright text-white shadow-lg shadow-green-vibrant/25 hover:shadow-green-vibrant/40 hover:scale-[1.02] border border-transparent",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 shadow-lg shadow-black/50 hover:scale-[1.02] border border-gray-700",
    outline: "bg-gray-900 backdrop-blur-md border border-gray-700 text-gray-300 hover:text-white hover:border-green-vibrant/50 hover:bg-gray-800",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800"
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