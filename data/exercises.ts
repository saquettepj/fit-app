// Importa GIFs centralizados do arquivo JSON
import { GIFS, EXERCISE_GIFS } from './gifs';

export interface ExerciseStep {
  type: "action" | "rest";
  duration: number;
  description: string;
  gifUrl: string;
}

export interface ExerciseTheme {
  cardBg: string;
  textColor: string;
  borderColor: string;
  accentColor: string;
  timerColor: string;
  buttonColor: string;
  levelLabel: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  seriesCount: number;
  theme: ExerciseTheme;
  steps: ExerciseStep[];
}

export const easyExercises: Exercise[] = [
  {
    id: 'e1',
    title: "Treino Leve - Template",
    description: "Template de exercício leve para teste do sistema.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    seriesCount: 2,
    theme: {
      cardBg: "bg-green-50",
      textColor: "text-green-900",
      borderColor: "border-green-200",
      accentColor: "bg-green-100",
      timerColor: "#22c55e",
      buttonColor: "bg-green-600 hover:bg-green-700",
      levelLabel: "Leve"
    },
    steps: [
      { type: "action", duration: 10, description: "Exercício 1", gifUrl: GIFS.stretch },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 10, description: "Exercício 2", gifUrl: GIFS.yoga }
    ]
  }
];

export const mediumExercises: Exercise[] = [
  {
    id: 'm1',
    title: "Treino Médio - Template",
    description: "Template de exercício médio para teste do sistema.",
    coverImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    seriesCount: 3,
    theme: {
      cardBg: "bg-orange-50",
      textColor: "text-orange-900",
      borderColor: "border-orange-200",
      accentColor: "bg-orange-100",
      timerColor: "#f97316",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      levelLabel: "Médio"
    },
    steps: [
      { type: "action", duration: 20, description: "Exercício 1", gifUrl: GIFS.cardio },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Exercício 2", gifUrl: GIFS.squat }
    ]
  }
];

export const intenseExercises: Exercise[] = [
  {
    id: 'i1',
    title: "Treino Intenso - Template",
    description: "Template de exercício intenso para teste do sistema.",
    coverImage: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80",
    seriesCount: 4,
    theme: {
      cardBg: "bg-red-50",
      textColor: "text-red-900",
      borderColor: "border-red-200",
      accentColor: "bg-red-100",
      timerColor: "#dc2626",
      buttonColor: "bg-red-600 hover:bg-red-700",
      levelLabel: "Intenso"
    },
    steps: [
      { type: "action", duration: 15, description: "Exercício 1", gifUrl: GIFS.burpee },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 15, description: "Exercício 2", gifUrl: GIFS.climber }
    ]
  },
  {
    id: 'i2',
    title: "Superior",
    description: "Treino completo para membros superiores com aquecimento e exercícios de força.",
    coverImage: "/Superior.png",
    seriesCount: 1,
    theme: {
      cardBg: "bg-red-50",
      textColor: "text-red-900",
      borderColor: "border-red-200",
      accentColor: "bg-red-100",
      timerColor: "#dc2626",
      buttonColor: "bg-red-600 hover:bg-red-700",
      levelLabel: "Intenso"
    },
    steps: [
      // Aquecimento
      { type: "action", duration: 120, description: "Polichinelos", gifUrl: EXERCISE_GIFS.polichinelos },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 180, description: "Mobilidade de ombros + braços", gifUrl: EXERCISE_GIFS.mobilidadeOmbros },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 180, description: "Corda leve", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      
      // Exercícios de força
      { type: "action", duration: 40, description: "Flexão (normal ou joelhos) - 12-15 rep", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada com pesos - 15 rep", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps no banco ou chão - 12-15 rep", gifUrl: EXERCISE_GIFS.tricepsBanco },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Desenvolvimento de ombros - 12-15 rep", gifUrl: EXERCISE_GIFS.desenvolvimentoOmbros },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Rosca bíceps - 15 rep", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Elevação lateral - 15 rep", gifUrl: EXERCISE_GIFS.elevacaoLateral },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Flexão com toque no peito - 30-40s", gifUrl: EXERCISE_GIFS.pranchaToqueOmbro },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      
      // Circuito de corda (9 ciclos de 30s ação + 30s descanso)
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 60, description: "Pausa final", gifUrl: GIFS.rest }
    ]
  }
];

export const exercisesByLevel = {
  easy: easyExercises,
  medium: mediumExercises,
  intense: intenseExercises,
};

