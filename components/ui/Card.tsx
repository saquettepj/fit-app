import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock } from 'lucide-react';
import { Exercise } from '@/data/exercises';

interface CardProps {
  exercise: Exercise;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ exercise, onClick }) => {
  const formatTotalTime = (ex: Exercise) => {
    const singleSeriesDuration = ex.steps.reduce((acc, step) => acc + step.duration, 0);
    const totalSeconds = singleSeriesDuration * ex.seriesCount;
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    if (minutes > 0) {
      return `${minutes} min ${seconds > 0 ? `${seconds}s` : ''}`;
    }
    return `${seconds} seg`;
  };

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`rounded-2xl overflow-hidden shadow-sm border ${exercise.theme.borderColor} ${exercise.theme.cardBg} cursor-pointer relative`}
    >
      <div className="h-32 w-full overflow-hidden relative">
        <img src={exercise.coverImage} alt={exercise.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md">
          {exercise.seriesCount} Séries
        </div>
      </div>
      <div className="p-4">
        <h3 className={`font-bold text-lg mb-1 ${exercise.theme.textColor}`}>{exercise.title}</h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{exercise.description}</p>
        
        <div className="flex items-center gap-4 border-t border-black/5 pt-3">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Activity size={16} className={exercise.theme.textColor} />
            <span className="text-xs font-bold uppercase tracking-wide">
              {exercise.steps.length} Passos
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <Clock size={16} className={exercise.theme.textColor} />
            <span className="text-xs font-bold uppercase tracking-wide">
              {formatTotalTime(exercise)} Total
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

