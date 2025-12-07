'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { ListScreen } from '@/components/screens/ListScreen';
import { ExecutionScreen } from '@/components/screens/ExecutionScreen';
import { Sidebar } from '@/components/ui/Sidebar';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/contexts/AppContext';
import { Exercise } from '@/data/exercises';

export default function Home() {
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

  return (
    <div className="font-sans text-slate-900 bg-slate-50 antialiased selection:bg-blue-100 h-screen w-full overflow-hidden">
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
            className="h-full overflow-y-auto"
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
            className="h-full overflow-y-auto"
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
          <div className="flex flex-col gap-4">
            <div className={`p-4 rounded-xl ${selectedExercise.theme.accentColor} border ${selectedExercise.theme.borderColor}`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${selectedExercise.theme.textColor}`}>
                  Foco
                </span>
                <span className="text-xs font-bold bg-white px-2 py-1 rounded text-slate-500">
                  {selectedExercise.seriesCount} Séries
                </span>
              </div>
              <p className="font-medium text-slate-700">{selectedExercise.description}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-500 uppercase">Sequência</h4>
              <ul className="space-y-2 relative border-l-2 border-slate-100 ml-2 pl-4">
                {selectedExercise.steps.map((step, idx) => (
                  <li key={idx} className="text-sm flex justify-between items-center">
                    <span className={step.type === 'rest' ? 'text-slate-400 italic' : 'text-slate-700 font-medium'}>
                      {step.description}
                    </span>
                    <span className="text-slate-400 text-xs font-mono bg-slate-100 px-1 rounded self-start">
                      {step.duration}s
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={startExercise}
              className="w-full py-4 rounded-xl font-bold text-lg shadow-lg mt-2 transition-transform active:scale-95 text-slate-800 bg-green-200 hover:bg-green-300"
            >
              Começar Treino
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

