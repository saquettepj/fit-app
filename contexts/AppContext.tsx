'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Exercise } from '@/data/exercises';

type View = 'home' | 'list' | 'execution';
type Level = 'easy' | 'medium' | 'intense';

interface HistoryItem {
  id: number;
  title: string;
  level: Level;
  timestamp: string; // Serializado como string para localStorage
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
  addToHistory: (exercise: Exercise, level: Level | string) => void;
  removeFromHistory: (id: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const HISTORY_STORAGE_KEY = 'fitgo_history';

// Função para carregar histórico do localStorage
const loadHistoryFromStorage = (): HistoryItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Remover duplicatas baseado no ID e manter apenas os 5 mais recentes
      const unique = parsed.filter((item: HistoryItem, index: number, self: HistoryItem[]) => 
        index === self.findIndex((t: HistoryItem) => t.id === item.id)
      );
      return unique.slice(0, 5);
    }
  } catch (error) {
    console.error('Erro ao carregar histórico do localStorage:', error);
  }
  return [];
};

// Função para salvar histórico no localStorage
const saveHistoryToStorage = (history: HistoryItem[]) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Erro ao salvar histórico no localStorage:', error);
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentExerciseList, setCurrentExerciseList] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Carregar histórico do localStorage ao montar o componente
  useEffect(() => {
    if (!isInitialized) {
      const loadedHistory = loadHistoryFromStorage();
      setHistory(loadedHistory);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Salvar histórico no localStorage sempre que ele mudar (apenas após inicialização)
  useEffect(() => {
    if (isInitialized) {
      saveHistoryToStorage(history);
    }
  }, [history, isInitialized]);

  const addToHistory = (exercise: Exercise, level: Level | string) => {
    setHistory(prev => {
      // Criar novo item
      const newItem: HistoryItem = {
        id: Date.now(),
        title: exercise.title,
        level: level as Level,
        timestamp: new Date().toISOString()
      };
      
      // Remover duplicatas baseado no ID (caso existam)
      const uniqueHistory = prev.filter(item => item.id !== newItem.id);
      
      // Adicionar novo item no início e manter apenas os 5 mais recentes
      const updated = [newItem, ...uniqueHistory].slice(0, 5);
      
      return updated;
    });
  };

  const removeFromHistory = (id: number) => {
    setHistory(prev => prev.filter(item => item.id !== id));
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
        removeFromHistory,
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

