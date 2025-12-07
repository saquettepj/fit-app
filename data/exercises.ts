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
    title: "Alongamento Matinal",
    description: "Prepare o corpo para o dia com movimentos suaves.",
    coverImage: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=600&q=80",
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
      { type: "action", duration: 10, description: "Esticar braços acima", gifUrl: GIFS.stretch },
      { type: "rest", duration: 5, description: "Relaxe os ombros", gifUrl: GIFS.rest },
      { type: "action", duration: 10, description: "Tocar os pés", gifUrl: GIFS.stretch }
    ]
  },
  {
    id: 'e2',
    title: "Yoga Básico",
    description: "Posições fundamentais para equilíbrio.",
    coverImage: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80",
    seriesCount: 1,
    theme: {
      cardBg: "bg-teal-50",
      textColor: "text-teal-900",
      borderColor: "border-teal-200",
      accentColor: "bg-teal-100",
      timerColor: "#14b8a6",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      levelLabel: "Leve"
    },
    steps: [
      { type: "action", duration: 15, description: "Posição da Criança", gifUrl: GIFS.yoga },
      { type: "rest", duration: 5, description: "Respire", gifUrl: GIFS.rest },
      { type: "action", duration: 15, description: "Cachorro olhando p/ baixo", gifUrl: GIFS.yoga }
    ]
  }
];

export const mediumExercises: Exercise[] = [
  {
    id: 'm1',
    title: "Cardio Queima",
    description: "Aumente a frequência cardíaca rapidamente.",
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
      { type: "action", duration: 20, description: "Polichinelos", gifUrl: GIFS.cardio },
      { type: "rest", duration: 10, description: "Respire fundo", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Agachamento", gifUrl: GIFS.squat }
    ]
  }
];

export const intenseExercises: Exercise[] = [
  {
    id: 'i1',
    title: "HIIT Destruidor",
    description: "Alta intensidade para queima total de gordura.",
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
      { type: "action", duration: 15, description: "Burpees", gifUrl: GIFS.burpee },
      { type: "rest", duration: 5, description: "Recuperação rápida", gifUrl: GIFS.rest },
      { type: "action", duration: 15, description: "Mountain Climbers", gifUrl: GIFS.climber }
    ]
  }
];

export const exercisesByLevel = {
  easy: easyExercises,
  medium: mediumExercises,
  intense: intenseExercises,
};

