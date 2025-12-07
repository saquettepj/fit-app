import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative"
          onClick={e => e.stopPropagation()}
        >
          {title && (
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-800">{title}</h3>
              <button 
                onClick={onClose} 
                className="p-1 rounded-full hover:bg-slate-200 text-slate-500"
              >
                <X size={20} />
              </button>
            </div>
          )}
          <div className="p-6 max-h-[100vh] flex flex-col overflow-hidden">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

