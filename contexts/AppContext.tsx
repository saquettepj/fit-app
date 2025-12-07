'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Exercise } from '@/data/exercises';

type View = 'home' | 'list' | 'execution';
type Level = 'easy' | 'medium' | 'intense';

interface HistoryItem {
  id: number;
  title: string;
  level: Level;
  timestamp: Date;
}

interface AppContextType {
  currentView: View;
  setCurrentView: (view: View) => void;
  selectedLevel: Level | null;
  setSelectedLevel: (level: Level | null) => void;
  currentExerciseList: Exercise[];
  setCurrentExerciseList: (exercises: Exercise[]) => void;
  selectedExercise: Exercise | null;
  setSelectedExercise: (exercise: Exercise | null) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  history: HistoryItem[];
  addToHistory: (exercise: Exercise, level: Level) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentExerciseList, setCurrentExerciseList] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addToHistory = (exercise: Exercise, level: Level) => {
    const newItem: HistoryItem = {
      id: Date.now(),
      title: exercise.title,
      level: level,
      timestamp: new Date()
    };
    setHistory(prev => [newItem, ...prev].slice(0, 5));
  };

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

