import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface QuickFixButtonProps {
  onClick: () => void;
}

export default function QuickFixButton({ onClick }: QuickFixButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-2xl shadow-orange-500/50 flex items-center justify-center z-50 hover:shadow-orange-500/70 transition-shadow duration-300"
      aria-label="Quick Fix"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Zap className="text-white" size={28} fill="white" />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-full bg-orange-400"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}
