import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background overflow-hidden";
    
    // Size variants
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // Style variants
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-600 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] border border-primary-500/50",
      secondary: "bg-white text-background hover:bg-gray-100",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_30px_rgba(0,245,255,0.2)] hover:border-accent-400/50",
      ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, sizes[size], variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/0 via-accent-400/30 to-accent-400/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
