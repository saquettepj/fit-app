import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, Play, Pause, Dumbbell, SkipForward } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularTimer } from '@/components/ui/CircularTimer';
import { Button } from '@/components/ui/Button';
import { Exercise } from '@/data/exercises';
import { playBeep } from '@/utils/audio';

interface ExecutionScreenProps {
  exercise: Exercise;
  onBack: () => void;
  onComplete: (exercise: Exercise, levelKey: string, skipCount?: number) => void;
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
  const hasCompletedRef = useRef(false);
  
  // Estados para o botão de skip
  const [skipProgress, setSkipProgress] = useState(0);
  const [isSkipPressed, setIsSkipPressed] = useState(false);
  const skipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const skipIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [skipCount, setSkipCount] = useState(0); // Contador de skips do treino atual
  
  const currentStep = exercise.steps[currentStepIndex];
  const isResting = currentStep.type === 'rest';
  
  // Encontra o próximo exercício (action) para mostrar durante a pausa
  const getNextExerciseGif = () => {
    for (let i = currentStepIndex + 1; i < exercise.steps.length; i++) {
      if (exercise.steps[i].type === 'action') {
        return exercise.steps[i].gifUrl;
      }
    }
    // Se não encontrar próximo, retorna o GIF atual
    return currentStep.gifUrl;
  };
  
  const gifToShow = isResting ? getNextExerciseGif() : currentStep.gifUrl;

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStepComplete = useCallback(() => {
    const isLastStep = currentStepIndex === exercise.steps.length - 1;
    
    if (isLastStep) {
      if (currentSeries < exercise.seriesCount) {
        setCurrentSeries(p => p + 1);
        setCurrentStepIndex(0);
        setTimeLeft(exercise.steps[0].duration);
      } else {
        // Proteger contra múltiplas chamadas
        if (!hasCompletedRef.current && !isCompleted) {
          hasCompletedRef.current = true;
          setIsCompleted(true);
          setIsActive(false);
          onComplete(exercise, levelKey, skipCount);
        }
      }
    } else {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setTimeLeft(exercise.steps[nextIndex].duration);
    }
  }, [currentStepIndex, currentSeries, exercise, levelKey, onComplete, isCompleted, skipCount]);

  useEffect(() => {
    setIsActive(true);
    hasCompletedRef.current = false;
    setSkipCount(0); // Limpa o contador de skips quando um novo treino começa
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

  const handleSkipStart = () => {
    setIsSkipPressed(true);
    setSkipProgress(0);
    
    // Atualizar progresso a cada 50ms para animação suave (5 segundos = 100 * 50ms)
    skipIntervalRef.current = setInterval(() => {
      setSkipProgress(prev => {
        const newProgress = prev + (100 / 100); // 100% em 5 segundos = 100 * 50ms
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, 50);

    // Skip após 5 segundos
    skipTimerRef.current = setTimeout(() => {
      if (skipIntervalRef.current) {
        clearInterval(skipIntervalRef.current);
      }
      setSkipCount(prev => prev + 1); // Incrementa contador de skips
      handleStepComplete();
      setIsSkipPressed(false);
      setSkipProgress(0);
    }, 5000);
  };

  const handleSkipEnd = () => {
    setIsSkipPressed(false);
    setSkipProgress(0);
    if (skipTimerRef.current) {
      clearTimeout(skipTimerRef.current);
    }
    if (skipIntervalRef.current) {
      clearInterval(skipIntervalRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (skipTimerRef.current) {
        clearTimeout(skipTimerRef.current);
      }
      if (skipIntervalRef.current) {
        clearInterval(skipIntervalRef.current);
      }
    };
  }, []);

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
          Parabéns, você finalizou {exercise.seriesCount === 1 ? 'a série' : `todas as ${exercise.seriesCount} séries`}.
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
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <div className="p-3 flex items-center justify-between z-10 bg-white flex-shrink-0">
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

      <main className="flex-1 flex flex-col max-w-md mx-auto w-full relative overflow-hidden">
        <div className="px-4 flex flex-col items-center flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStepIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-2xl overflow-hidden shadow-xl mb-1 relative transition-all duration-500 flex items-center justify-center h-[140px]"
              style={{ backgroundColor: '#fcfcfc' }}
            >
              <img 
                src={gifToShow} 
                alt="Exercise Step" 
                className={`max-w-full max-h-full object-contain transition-all duration-300 ${isResting ? 'opacity-80' : ''}`}
                style={isResting ? { filter: 'blur(1px)' } : {}}
              />
            </motion.div>
          </AnimatePresence>
          
          <h2 className="text-lg font-bold text-slate-800 text-center mb-0.5 transition-all">
            {currentStep.description}
          </h2>
          <p className={`text-xs font-medium uppercase tracking-wider mb-0.5 ${isResting ? 'text-orange-500' : 'text-slate-400'}`}>
            {isResting ? 'Respire fundo' : 'Execute o movimento'}
          </p>
        </div>

        <div className="flex-shrink-0">
          <CircularTimer 
            duration={currentStep.duration} 
            timeLeft={timeLeft} 
            color={exercise.theme.timerColor}
            isResting={isResting}
          />
        </div>

        <div className="mt-auto p-3 w-full flex flex-col gap-2 bg-slate-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] flex-shrink-0">
          <div className="flex justify-center items-center gap-5">
            <button 
              onClick={togglePause}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${isActive ? 'bg-amber-100 text-amber-600' : 'bg-slate-800 text-white'}`}
            >
              {isActive ? (
                <Pause size={24} fill="currentColor" />
              ) : (
                <Play size={24} fill="currentColor" className="ml-1"/>
              )}
            </button>
            
            <button
              onTouchStart={handleSkipStart}
              onTouchEnd={handleSkipEnd}
              onTouchCancel={handleSkipEnd}
              onMouseDown={handleSkipStart}
              onMouseUp={handleSkipEnd}
              onMouseLeave={handleSkipEnd}
              className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 bg-white text-slate-700 overflow-hidden"
            >
              {/* Progressão circular amarela do centro para as bordas */}
              {isSkipPressed && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: skipProgress / 100,
                  }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                  style={{ 
                    transformOrigin: 'center',
                    backgroundColor: '#fef3c7', // amber-100 - mesma cor clara do fundo do botão de pause
                    opacity: 1,
                  }}
                />
              )}
              
              {/* Ícone */}
              <SkipForward 
                size={22} 
                className="relative z-10" 
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

