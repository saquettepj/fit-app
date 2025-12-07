import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, SkipForward } from 'lucide-react';

interface HistoryItem {
  id: number;
  title: string;
  level: 'easy' | 'medium' | 'intense';
  timestamp: Date | string;
  skipCount?: number; // Número de vezes que o exercício foi skipado
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onRemoveFromHistory: (id: number) => void;
}

interface HistoryItemCardProps {
  item: HistoryItem;
  onRemove: (id: number) => void;
}

const HistoryItemCard: React.FC<HistoryItemCardProps> = ({ item, onRemove }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsPressed(true);
    setProgress(0);
    
    // Atualizar progresso a cada 50ms para animação suave
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / 60); // 100% em 3 segundos = 60 * 50ms
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, 50);

    // Deletar após 3 segundos
    timerRef.current = setTimeout(() => {
      onRemove(item.id);
      setIsPressed(false);
      setProgress(0);
    }, 3000);
  };

  const handleEnd = () => {
    setIsPressed(false);
    setProgress(0);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative p-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1 overflow-hidden"
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      {/* Barra de progresso vermelha */}
      {isPressed && (
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-0 bg-red-500 opacity-80 z-0"
          style={{ transition: 'width 0.05s linear' }}
        />
      )}
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <span className="font-bold text-slate-700 text-sm leading-tight">
            {item.title}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
            item.level === 'easy' ? 'bg-green-100 text-green-700' :
            item.level === 'medium' ? 'bg-orange-100 text-orange-700' :
            'bg-red-100 text-red-700'
          }`}>
            {item.level === 'easy' ? 'Leve' : item.level === 'medium' ? 'Médio' : 'Hard'}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
          <Calendar size={12} />
          <span>
            {new Date(item.timestamp).toLocaleDateString('pt-BR')} • {new Date(item.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        {item.skipCount !== undefined && item.skipCount > 0 && (
          <div className="flex items-center gap-1 text-xs text-amber-600 mt-1">
            <SkipForward size={12} />
            <span className="font-medium">
              {item.skipCount} {item.skipCount === 1 ? 'pulado' : 'pulados'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, history, onRemoveFromHistory }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-800 italic">
                FIT<span className="text-blue-600">GO</span>
              </h2>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-slate-100 rounded-full"
              >
                <X size={20}/>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Últimos Treinos
              </h3>
              
              {history.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-sm">
                  <Clock className="mx-auto mb-2 opacity-50" />
                  Nenhum treino realizado ainda.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {history.map((item) => (
                    <HistoryItemCard 
                      key={item.id}
                      item={item}
                      onRemove={onRemoveFromHistory}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 mt-auto border-t border-slate-100 bg-slate-50">
              <div className="text-xs text-center text-slate-400">
                Versão 1.1.0 • FitGo App
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

