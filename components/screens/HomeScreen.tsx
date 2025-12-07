import React from 'react';
import { Activity, Zap, Flame, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Exercise, easyExercises, mediumExercises, intenseExercises } from '@/data/exercises';

interface HomeScreenProps {
  onSelectLevel: (level: 'easy' | 'medium' | 'intense', exercises: Exercise[]) => void;
  toggleSidebar: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectLevel, toggleSidebar }) => {
  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
      <header className="p-4 flex justify-between items-center bg-white shadow-sm z-10 flex-shrink-0">
        <button 
          onClick={toggleSidebar} 
          className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-600"
        >
          <Menu size={24} />
        </button>
        <div className="w-8" /> 
      </header>

      <main className="flex-1 p-4 flex flex-col gap-3 justify-center max-w-md mx-auto w-full overflow-hidden">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-black text-slate-800 mb-1">Vamos treinar?</h2>
          <p className="text-sm text-slate-500">Selecione a intensidade ideal para o seu momento.</p>
        </div>

        <Button 
          variant="levelEasy" 
          onClick={() => onSelectLevel('easy', easyExercises)} 
          className="h-16 text-base"
        >
          <div className="flex flex-col items-center gap-1">
            <Activity className="text-green-600" size={20} />
            <span>Leve</span>
          </div>
        </Button>

        <Button 
          variant="levelMedium" 
          onClick={() => onSelectLevel('medium', mediumExercises)} 
          className="h-16 text-base"
        >
          <div className="flex flex-col items-center gap-1">
            <Zap className="text-orange-500" size={20} />
            <span>Mediano</span>
          </div>
        </Button>

        <Button 
          variant="levelHard" 
          onClick={() => onSelectLevel('intense', intenseExercises)} 
          className="h-16 text-base"
        >
          <div className="flex flex-col items-center gap-1">
            <Flame className="text-red-600" size={20} />
            <span>Intenso</span>
          </div>
        </Button>
      </main>
    </div>
  );
};

