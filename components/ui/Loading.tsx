import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ 
  className = '', 
  size = 'md',
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const spinner = (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <Loader2 className={`${sizeClasses[size]} text-slate-400`} />
      </motion.div>
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Componente específico para loading de imagens
interface ImageLoadingProps {
  className?: string;
  aspectRatio?: string;
}

export const ImageLoading: React.FC<ImageLoadingProps> = ({ 
  className = '',
  aspectRatio = 'aspect-video'
}) => {
  return (
    <div className={`${aspectRatio} ${className} bg-slate-100 rounded-2xl flex items-center justify-center`}>
      <Loading size="md" />
    </div>
  );
};
