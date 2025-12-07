import React from 'react';
import { ChevronLeft, Activity, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Exercise } from '@/data/exercises';

interface ListScreenProps {
  level: 'easy' | 'medium' | 'intense';
  exercises: Exercise[];
  onBack: () => void;
  onSelectExercise: (exercise: Exercise) => void;
}

export const ListScreen: React.FC<ListScreenProps> = ({ 
  level, 
  exercises, 
  onBack, 
  onSelectExercise 
}) => {
  const headerColors = {
    easy: "text-green-600",
    medium: "text-orange-600",
    intense: "text-red-600"
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
      <header className="p-4 flex items-center bg-white shadow-sm sticky top-0 z-10 flex-shrink-0">
        <button 
          onClick={onBack} 
          className="p-2 hover:bg-slate-100 rounded-full text-slate-600 mr-2"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className={`text-xl font-bold capitalize ${headerColors[level]}`}>
          {level === 'easy' ? 'Iniciante' : level === 'medium' ? 'Intermediário' : 'Avançado'}
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 max-w-md mx-auto w-full">
        <div className="flex flex-col gap-4">
          {exercises.map((exercise) => (
            <Card 
              key={exercise.id} 
              exercise={exercise} 
              onClick={() => onSelectExercise(exercise)} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

