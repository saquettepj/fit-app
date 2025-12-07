// URLs de exemplo para GIFs
export const GIFS = {
  stretch: "https://media.giphy.com/media/l41lMJVy7bB5z1pJu/giphy.gif",
  rest: "https://media.giphy.com/media/1xVbRXWj8k2OA/giphy.gif",
  yoga: "https://media.giphy.com/media/3o7TKKt3UqV2G0G0Wk/giphy.gif",
  cardio: "https://media.giphy.com/media/3o7qDQ42tqK6q2d2lq/giphy.gif",
  squat: "https://media.giphy.com/media/1iLzHqmJqbZTfwGc/giphy.gif",
  burpee: "https://media.giphy.com/media/l2Je0oOcT3cj0j5qM/giphy.gif",
  climber: "https://media.giphy.com/media/l0HlPtbGpcnqa0fja/giphy.gif"
};

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
    coverImage: "https://images.unsplash.com/photo-1583500178067-9c25f4c8510a?w=600&q=80",
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
      { type: "action", duration: 120, description: "Polichinelos", gifUrl: GIFS.cardio },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 180, description: "Mobilidade de ombros + braços", gifUrl: GIFS.stretch },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 180, description: "Corda leve", gifUrl: GIFS.cardio },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      
      // Exercícios de força
      { type: "action", duration: 40, description: "Flexão (normal ou joelhos) - 12-15 rep", gifUrl: GIFS.burpee },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada com pesos - 15 rep", gifUrl: GIFS.stretch },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps no banco ou chão - 12-15 rep", gifUrl: GIFS.burpee },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Desenvolvimento de ombros - 12-15 rep", gifUrl: GIFS.stretch },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Rosca bíceps - 15 rep", gifUrl: GIFS.stretch },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Elevação lateral - 15 rep", gifUrl: GIFS.stretch },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Prancha com toque no ombro - 30-40s", gifUrl: GIFS.climber },
      { type: "rest", duration: 3, description: "Pausa", gifUrl: GIFS.rest },
      
      // Circuito de corda (9 ciclos de 30s ação + 30s descanso)
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 30, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: GIFS.cardio },
      { type: "rest", duration: 60, description: "Pausa final", gifUrl: GIFS.rest }
    ]
  }
];

export const exercisesByLevel = {
  easy: easyExercises,
  medium: mediumExercises,
  intense: intenseExercises,
};

