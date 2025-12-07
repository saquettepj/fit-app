import React from 'react';
import { motion } from 'framer-motion';

interface CircularTimerProps {
  duration: number;
  timeLeft: number;
  color: string;
  isResting: boolean;
}

export const CircularTimer: React.FC<CircularTimerProps> = ({ 
  duration, 
  timeLeft, 
  color, 
  isResting 
}) => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / duration;
  const dashOffset = circumference * (1 - progress);

  const formatTime = (seconds: number) => {
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }
    return seconds.toString();
  };

  return (
    <div className="relative flex items-center justify-center w-64 h-64 mx-auto my-6">
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="transparent"
          className="text-slate-100"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={isResting ? "#f97316" : "#22c55e"} 
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 0.5, ease: "linear" }}
          strokeLinecap="round"
        />
      </svg>
      
      <div className="absolute flex flex-col items-center">
        <span className={`text-6xl font-black tabular-nums tracking-tighter ${isResting ? 'text-orange-500' : 'text-slate-800'}`}>
          {formatTime(timeLeft)}
        </span>
        <span className={`text-sm font-semibold uppercase tracking-widest mt-1 ${isResting ? 'text-orange-400' : 'text-slate-400'}`}>
          {isResting ? 'Descanso' : 'Segundos'}
        </span>
      </div>
    </div>
  );
};

