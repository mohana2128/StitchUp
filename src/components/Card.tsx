import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = false, glass = false }: CardProps) {
  const baseStyles = 'rounded-3xl p-6 transition-all duration-300';
  const glassStyles = glass
    ? 'bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl'
    : 'bg-white shadow-lg';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-105 cursor-pointer' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(baseStyles, glassStyles, hoverStyles, className)}
    >
      {children}
    </motion.div>
  );
}
