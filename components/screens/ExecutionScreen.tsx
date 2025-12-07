import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, Play, Pause, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularTimer } from '@/components/ui/CircularTimer';
import { Button } from '@/components/ui/Button';
import { Exercise } from '@/data/exercises';
import { playBeep } from '@/utils/audio';

interface ExecutionScreenProps {
  exercise: Exercise;
  onBack: () => void;
  onComplete: (exercise: Exercise, levelKey: string) => void;
  levelKey: string;
}

export const ExecutionScreen: React.FC<ExecutionScreenProps> = ({ 
  exercise, 
  onBack, 
  onComplete, 
  levelKey 
}) => {
  const [currentSeries, setCurrentSeries] = useState(1);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercise.steps[0].duration);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const currentStep = exercise.steps[currentStepIndex];
  const isResting = currentStep.type === 'rest';

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStepComplete = useCallback(() => {
    const isLastStep = currentStepIndex === exercise.steps.length - 1;
    
    if (isLastStep) {
      if (currentSeries < exercise.seriesCount) {
        setCurrentSeries(p => p + 1);
        setCurrentStepIndex(0);
        setTimeLeft(exercise.steps[0].duration);
      } else {
        setIsCompleted(true);
        setIsActive(false);
        onComplete(exercise, levelKey);
      }
    } else {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setTimeLeft(exercise.steps[nextIndex].duration);
    }
  }, [currentStepIndex, currentSeries, exercise, levelKey, onComplete]);

  useEffect(() => {
    setIsActive(true);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      handleStepComplete();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, handleStepComplete]);

  useEffect(() => {
    if (!isResting && timeLeft <= 5 && timeLeft > 0 && isActive) {
      playBeep('normal');
    }
    if (timeLeft === 0 && isActive) {
      playBeep('finish'); 
    }
  }, [timeLeft, isResting, isActive]);

  const togglePause = () => setIsActive(!isActive);

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-green-500/50 shadow-lg"
        >
          <Dumbbell size={40} className="text-white" />
        </motion.div>
        <h2 className="text-3xl font-black mb-2">Treino Concluído!</h2>
        <p className="text-slate-400 mb-8">
          Parabéns, você finalizou todas as {exercise.seriesCount} séries.
        </p>
        <Button 
          variant="outline"
          onClick={onBack} 
          className="w-full"
        >
          Voltar para Lista
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-4 flex items-center justify-between sticky top-0 z-10 bg-white/80 backdrop-blur-md">
        <button 
          onClick={onBack} 
          className="p-2 hover:bg-slate-100 rounded-full text-slate-600"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600">
          SÉRIE {currentSeries} / {exercise.seriesCount}
        </div>
      </div>

      <main className="flex-1 flex flex-col max-w-md mx-auto w-full relative">
        <div className="px-6 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStepIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full aspect-video rounded-3xl overflow-hidden shadow-xl mb-4 relative transition-all duration-500 ${isResting ? 'grayscale opacity-80' : ''}`}
            >
              <img 
                src={currentStep.gifUrl} 
                alt="Exercise Step" 
                className="w-full h-full object-cover" 
              />
              
              {isResting && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                  <span className="text-white font-black text-2xl tracking-widest uppercase drop-shadow-md">
                    Descanso
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-1 transition-all">
            {currentStep.description}
          </h2>
          <p className={`text-sm font-medium uppercase tracking-wider mb-2 ${isResting ? 'text-orange-500' : 'text-slate-400'}`}>
            {isResting ? 'Respire fundo' : 'Execute o movimento'}
          </p>
        </div>

        <CircularTimer 
          duration={currentStep.duration} 
          timeLeft={timeLeft} 
          color={exercise.theme.timerColor}
          isResting={isResting}
        />

        <div className="mt-auto p-6 w-full flex flex-col gap-4 bg-slate-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          <div className="flex justify-center items-center gap-6">
            <button 
              onClick={togglePause}
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${isActive ? 'bg-amber-100 text-amber-600' : 'bg-slate-800 text-white'}`}
            >
              {isActive ? (
                <Pause size={32} fill="currentColor" />
              ) : (
                <Play size={32} fill="currentColor" className="ml-1"/>
              )}
            </button>
          </div>
          <p className="text-center text-xs text-slate-400 font-medium">
            {isActive ? 'Toque para pausar' : 'Toque para continuar'}
          </p>
        </div>
      </main>
    </div>
  );
};

