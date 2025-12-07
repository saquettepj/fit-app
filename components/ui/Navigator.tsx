'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { ListScreen } from '@/components/screens/ListScreen';
import { ExecutionScreen } from '@/components/screens/ExecutionScreen';
import { Sidebar } from '@/components/ui/Sidebar';
import { Modal } from '@/components/ui/Modal';
import { useApp } from '@/contexts/AppContext';
import { Exercise } from '@/data/exercises';

export const Navigator: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    selectedLevel,
    setSelectedLevel,
    currentExerciseList,
    setCurrentExerciseList,
    selectedExercise,
    setSelectedExercise,
    isModalOpen,
    setIsModalOpen,
    isSidebarOpen,
    setIsSidebarOpen,
    history,
    addToHistory,
    removeFromHistory,
  } = useApp();

  const handleSelectLevel = (level: 'easy' | 'medium' | 'intense', exercises: Exercise[]) => {
    setSelectedLevel(level);
    setCurrentExerciseList(exercises);
    setCurrentView('list');
  };

  const handleSelectExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const startExercise = () => {
    setIsModalOpen(false);
    setCurrentView('execution');
  };

  const formatDuration = (seconds: number): string => {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds === 0) {
      return `${minutes} min`;
    }
    return `${minutes} min ${remainingSeconds}s`;
  };

  return (
    <div 
      className="font-sans text-slate-900 bg-slate-50 antialiased selection:bg-blue-100 w-full"
      style={{ height: '100dvh', maxHeight: '100dvh' }}
    >
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        history={history}
        onRemoveFromHistory={removeFromHistory}
      />

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.div 
            key="home" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="h-full overflow-hidden"
          >
            <HomeScreen 
              onSelectLevel={handleSelectLevel} 
              toggleSidebar={() => setIsSidebarOpen(true)} 
            />
          </motion.div>
        )}

        {currentView === 'list' && (
          <motion.div 
            key="list" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 20 }}
            className="h-full overflow-y-auto"
          >
            <ListScreen 
              level={selectedLevel!} 
              exercises={currentExerciseList} 
              onBack={() => setCurrentView('home')}
              onSelectExercise={handleSelectExercise}
            />
          </motion.div>
        )}

        {currentView === 'execution' && selectedExercise && (
          <motion.div 
            key="execution" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            className="h-full overflow-hidden"
          >
            <ExecutionScreen 
              exercise={selectedExercise} 
              levelKey={selectedLevel!}
              onBack={() => setCurrentView('list')} 
              onComplete={addToHistory}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {selectedExercise && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={selectedExercise.title}
        >
          <div className="flex flex-col" style={{ height: 'calc(99vh - 180px)' }}>
            {/* FOCO - Fixo no topo */}
            <div className={`p-4 rounded-xl ${selectedExercise.theme.accentColor} border ${selectedExercise.theme.borderColor} flex-shrink-0`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${selectedExercise.theme.textColor}`}>
                  Foco
                </span>
                <span className="text-xs font-bold bg-white px-2 py-1 rounded text-slate-500">
                  {selectedExercise.seriesCount} {selectedExercise.seriesCount === 1 ? 'Série' : 'Séries'}
                </span>
              </div>
              <p className="font-medium text-slate-700">{selectedExercise.description}</p>
            </div>
            
            {/* Botão Começar Treino - Logo abaixo do FOCO */}
            <button 
              onClick={startExercise}
              className="w-full py-4 rounded-xl font-bold text-lg shadow-lg mt-4 mb-4 transition-transform active:scale-95 text-slate-800 bg-green-200 hover:bg-green-300 flex-shrink-0"
            >
              Começar Treino
            </button>
            
            {/* Sequência - ÚNICA área rolável */}
            <div className="flex flex-col flex-1 min-h-0">
              <h4 className="text-sm font-bold text-slate-500 uppercase mb-3 flex-shrink-0">Sequência</h4>
              {/* Div rolável contendo os passos e descansos - altura mínima para ver 4 itens */}
              <div className="overflow-y-auto overflow-x-hidden pr-2" style={{ minHeight: '240px', maxHeight: '400px', paddingBottom: '2rem' }}>
                <ul className="space-y-2 relative border-l-2 border-slate-100 ml-2 pl-4" style={{ paddingBottom: '3rem', marginBottom: '1rem' }}>
                  {selectedExercise.steps.map((step, idx) => (
                    <li key={idx} className="text-sm flex justify-between items-center">
                      <span className={step.type === 'rest' ? 'text-slate-400 italic' : 'text-slate-700 font-medium'}>
                        {step.description}
                      </span>
                      <span className="text-slate-400 text-xs font-mono bg-slate-100 px-1 rounded self-start ml-2 flex-shrink-0">
                        {formatDuration(step.duration)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

