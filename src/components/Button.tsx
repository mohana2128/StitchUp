import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg shadow-teal-500/50 hover:shadow-xl hover:shadow-teal-500/60 hover:scale-105',
    secondary: 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105',
    outline: 'border-2 border-teal-400 text-teal-600 hover:bg-teal-50 hover:scale-105',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:scale-105'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
    </motion.button>
  );
}
