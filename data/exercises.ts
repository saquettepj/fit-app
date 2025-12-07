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
    title: "Superior",
    description: "Treino completo para membros superiores com aquecimento e exercícios de força.",
    coverImage: "/superior.png",
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
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 180, description: "Mobilidade de ombros + braços", gifUrl: EXERCISE_GIFS.mobilidadeOmbros },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 180, description: "Corda leve", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      
      // Exercícios de Membros Superiores - 4 séries
      // Série 1
      { type: "action", duration: 40, description: "Flexão (normal ou joelhos)", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada com pesos", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps no banco ou chão", gifUrl: EXERCISE_GIFS.tricepsBanco },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Desenvolvimento de ombros", gifUrl: EXERCISE_GIFS.desenvolvimentoOmbros },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Rosca bíceps", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Elevação lateral", gifUrl: EXERCISE_GIFS.elevacaoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Flexão com toque no peito", gifUrl: EXERCISE_GIFS.pranchaToqueOmbro },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 2
      { type: "action", duration: 40, description: "Flexão (normal ou joelhos)", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada com pesos", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps no banco ou chão", gifUrl: EXERCISE_GIFS.tricepsBanco },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Desenvolvimento de ombros", gifUrl: EXERCISE_GIFS.desenvolvimentoOmbros },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Rosca bíceps", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Elevação lateral", gifUrl: EXERCISE_GIFS.elevacaoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Flexão com toque no peito", gifUrl: EXERCISE_GIFS.pranchaToqueOmbro },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 3
      { type: "action", duration: 40, description: "Flexão (normal ou joelhos)", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada com pesos", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps no banco ou chão", gifUrl: EXERCISE_GIFS.tricepsBanco },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Desenvolvimento de ombros", gifUrl: EXERCISE_GIFS.desenvolvimentoOmbros },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Rosca bíceps", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Elevação lateral", gifUrl: EXERCISE_GIFS.elevacaoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Flexão com toque no peito", gifUrl: EXERCISE_GIFS.pranchaToqueOmbro },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 4
      { type: "action", duration: 40, description: "Flexão (normal ou joelhos)", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada com pesos", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps no banco ou chão", gifUrl: EXERCISE_GIFS.tricepsBanco },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Desenvolvimento de ombros", gifUrl: EXERCISE_GIFS.desenvolvimentoOmbros },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Rosca bíceps", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Elevação lateral", gifUrl: EXERCISE_GIFS.elevacaoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 35, description: "Flexão com toque no peito", gifUrl: EXERCISE_GIFS.pranchaToqueOmbro },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Circuito de corda (9 ciclos de 30s ação + 30s descanso)
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda }
    ]
  },
  {
    id: 'i2',
    title: "Pernas e Cardio",
    description: "Treino completo para membros inferiores com aquecimento, exercícios de força e circuito de cardio.",
    coverImage: "/pernas-e-cardio.png",
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
      { type: "action", duration: 300, description: "Corrida leve no lugar", gifUrl: EXERCISE_GIFS.corridaEstacionaria },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 120, description: "Mobilidade de quadril e joelhos", gifUrl: EXERCISE_GIFS.mobilidadeQuadril },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      
      // Exercícios de Pernas - 4 séries
      // Série 1
      { type: "action", duration: 45, description: "Agachamento", gifUrl: EXERCISE_GIFS.agachamento },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Afundo alternado", gifUrl: EXERCISE_GIFS.afundoAlternado },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Elevação lateral de perna - 15 cada", gifUrl: EXERCISE_GIFS.elevacaoLateralPerna },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Donkey kicks - 15 cada", gifUrl: EXERCISE_GIFS.donkeyKicks },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteo", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 2
      { type: "action", duration: 45, description: "Agachamento", gifUrl: EXERCISE_GIFS.agachamento },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Afundo alternado", gifUrl: EXERCISE_GIFS.afundoAlternado },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Elevação lateral de perna - 15 cada", gifUrl: EXERCISE_GIFS.elevacaoLateralPerna },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Donkey kicks - 15 cada", gifUrl: EXERCISE_GIFS.donkeyKicks },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteo", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 3
      { type: "action", duration: 45, description: "Agachamento", gifUrl: EXERCISE_GIFS.agachamento },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Afundo alternado", gifUrl: EXERCISE_GIFS.afundoAlternado },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Elevação lateral de perna - 15 cada", gifUrl: EXERCISE_GIFS.elevacaoLateralPerna },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Donkey kicks - 15 cada", gifUrl: EXERCISE_GIFS.donkeyKicks },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteo", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 4
      { type: "action", duration: 45, description: "Agachamento", gifUrl: EXERCISE_GIFS.agachamento },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Afundo alternado", gifUrl: EXERCISE_GIFS.afundoAlternado },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Elevação lateral de perna - 15 cada", gifUrl: EXERCISE_GIFS.elevacaoLateralPerna },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Donkey kicks - 15 cada", gifUrl: EXERCISE_GIFS.donkeyKicks },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteo", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Circuito 3x - 45s ON / 15s OFF
      // Ciclo 1
      { type: "action", duration: 45, description: "Saltos laterais", gifUrl: GIFS.burpee },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Corrida estacionária", gifUrl: EXERCISE_GIFS.corridaEstacionaria },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Skaters", gifUrl: EXERCISE_GIFS.skaters },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      
      // Ciclo 2
      { type: "action", duration: 45, description: "Saltos laterais", gifUrl: GIFS.burpee },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Corrida estacionária", gifUrl: EXERCISE_GIFS.corridaEstacionaria },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Skaters", gifUrl: EXERCISE_GIFS.skaters },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      
      // Ciclo 3
      { type: "action", duration: 45, description: "Saltos laterais", gifUrl: GIFS.burpee },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Corrida estacionária", gifUrl: EXERCISE_GIFS.corridaEstacionaria },
      { type: "rest", duration: 15, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Skaters", gifUrl: EXERCISE_GIFS.skaters }
    ]
  },
  {
    id: 'i3',
    title: "Dança e Core",
    description: "Treino completo com dança e exercícios de core para fortalecimento abdominal.",
    coverImage: "/danca-e-core.png",
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
      // Dança - 30 min
      { type: "action", duration: 1800, description: "Dança", gifUrl: GIFS.danca },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      
      // Core - 3 séries
      // Série 1
      { type: "action", duration: 40, description: "Abdominal supra", gifUrl: EXERCISE_GIFS.abdominalSupra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Bicicleta", gifUrl: EXERCISE_GIFS.abdominalBicicleta },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 60, description: "Prancha", gifUrl: EXERCISE_GIFS.prancha },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Prancha lateral", gifUrl: EXERCISE_GIFS.pranchaLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Abdominal infra", gifUrl: EXERCISE_GIFS.abdominalInfra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Russian twist", gifUrl: EXERCISE_GIFS.russianTwist },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Série 2
      { type: "action", duration: 40, description: "Abdominal supra", gifUrl: EXERCISE_GIFS.abdominalSupra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Bicicleta", gifUrl: EXERCISE_GIFS.abdominalBicicleta },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 60, description: "Prancha", gifUrl: EXERCISE_GIFS.prancha },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Prancha lateral", gifUrl: EXERCISE_GIFS.pranchaLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Abdominal infra", gifUrl: EXERCISE_GIFS.abdominalInfra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Russian twist", gifUrl: EXERCISE_GIFS.russianTwist },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Série 3
      { type: "action", duration: 40, description: "Abdominal supra", gifUrl: EXERCISE_GIFS.abdominalSupra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Bicicleta", gifUrl: EXERCISE_GIFS.abdominalBicicleta },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 60, description: "Prancha", gifUrl: EXERCISE_GIFS.prancha },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Prancha lateral", gifUrl: EXERCISE_GIFS.pranchaLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Abdominal infra", gifUrl: EXERCISE_GIFS.abdominalInfra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Russian twist", gifUrl: EXERCISE_GIFS.russianTwist },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },

      // Série 4
      { type: "action", duration: 40, description: "Abdominal supra", gifUrl: EXERCISE_GIFS.abdominalSupra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Bicicleta", gifUrl: EXERCISE_GIFS.abdominalBicicleta },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 60, description: "Prancha", gifUrl: EXERCISE_GIFS.prancha },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 30, description: "Prancha lateral", gifUrl: EXERCISE_GIFS.pranchaLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Abdominal infra", gifUrl: EXERCISE_GIFS.abdominalInfra },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Russian twist", gifUrl: EXERCISE_GIFS.russianTwist },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Finalização
      { type: "action", duration: 240, description: "Caminhada no lugar", gifUrl: GIFS.cardio },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 240, description: "Alongamento geral", gifUrl: GIFS.stretch }
    ]
  },
  {
    id: 'i4',
    title: "Superior e Cardio",
    description: "Treino completo para membros superiores com aquecimento, exercícios de força e circuito HIIT.",
    coverImage: "/superior-e-cardio.png",
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
      { type: "action", duration: 180, description: "3 min corda leve", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 300, description: "5 min mobilidade e ativação", gifUrl: EXERCISE_GIFS.mobilidadeOmbros },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      
      // 4 séries de exercícios de força
      // Série 1
      { type: "action", duration: 40, description: "Rosca bíceps com peso", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps kickback", gifUrl: EXERCISE_GIFS.tricepsKickback },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Elevação frontal + lateral", gifUrl: EXERCISE_GIFS.elevacaoFrontal },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Flexão de braço", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 60, description: "Descanso entre séries", gifUrl: GIFS.rest },
      
      // Série 2
      { type: "action", duration: 40, description: "Rosca bíceps com peso", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps kickback", gifUrl: EXERCISE_GIFS.tricepsKickback },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Elevação frontal + lateral", gifUrl: EXERCISE_GIFS.elevacaoFrontal },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Flexão de braço", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 60, description: "Descanso entre séries", gifUrl: GIFS.rest },
      
      // Série 3
      { type: "action", duration: 40, description: "Rosca bíceps com peso", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps kickback", gifUrl: EXERCISE_GIFS.tricepsKickback },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Elevação frontal + lateral", gifUrl: EXERCISE_GIFS.elevacaoFrontal },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Flexão de braço", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 60, description: "Descanso entre séries", gifUrl: GIFS.rest },
      
      // Série 4
      { type: "action", duration: 40, description: "Rosca bíceps com peso", gifUrl: EXERCISE_GIFS.roscaBiceps },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Tríceps kickback", gifUrl: EXERCISE_GIFS.tricepsKickback },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Elevação frontal + lateral", gifUrl: EXERCISE_GIFS.elevacaoFrontal },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Remada curvada", gifUrl: EXERCISE_GIFS.remadaCurvada },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 40, description: "Flexão de braço", gifUrl: EXERCISE_GIFS.flexao },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      
      // HIIT - Ciclo 2x - 20s ON / 10s OFF
      // Ciclo 1
      { type: "action", duration: 20, description: "Burpee sem salto", gifUrl: EXERCISE_GIFS.burpee },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Mountain climber", gifUrl: GIFS.climber },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Jumping jacks", gifUrl: EXERCISE_GIFS.polichinelos },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      
      // Ciclo 2
      { type: "action", duration: 20, description: "Burpee sem salto", gifUrl: EXERCISE_GIFS.burpee },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Pular corda", gifUrl: EXERCISE_GIFS.pularCorda },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Mountain climber", gifUrl: GIFS.climber },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 20, description: "Jumping jacks", gifUrl: EXERCISE_GIFS.polichinelos }
    ]
  },
  {
    id: 'i5',
    title: "Pernas e Cardio (Versão 2)",
    description: "Treino completo para membros inferiores com aquecimento, exercícios de força e dança moderada.",
    coverImage: "/pernas-e-cardio-2.png",
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
      { type: "action", duration: 120, description: "Movimentos de quadril", gifUrl: EXERCISE_GIFS.mobilidadeQuadril },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 300, description: "Corrida leve no lugar", gifUrl: EXERCISE_GIFS.corridaEstacionaria },
      { type: "rest", duration: 10, description: "Descanso", gifUrl: GIFS.rest },
      
      // 4 séries de exercícios de força
      // Série 1
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Avanço lateral", gifUrl: EXERCISE_GIFS.afundoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Stiff", gifUrl: EXERCISE_GIFS.stiff },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteos com 2s de contração", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Elevação posterior de perna", gifUrl: EXERCISE_GIFS.elevacaoPosterior },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Série 2
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Avanço lateral", gifUrl: EXERCISE_GIFS.afundoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Stiff", gifUrl: EXERCISE_GIFS.stiff },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteos com 2s de contração", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Elevação posterior de perna", gifUrl: EXERCISE_GIFS.elevacaoPosterior },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Série 3
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Avanço lateral", gifUrl: EXERCISE_GIFS.afundoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Stiff", gifUrl: EXERCISE_GIFS.stiff },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteos com 2s de contração", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Elevação posterior de perna", gifUrl: EXERCISE_GIFS.elevacaoPosterior },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Série 4
      { type: "action", duration: 45, description: "Agachamento sumô", gifUrl: EXERCISE_GIFS.agachamentoSumo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Avanço lateral", gifUrl: EXERCISE_GIFS.afundoLateral },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Stiff", gifUrl: EXERCISE_GIFS.stiff },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 50, description: "Ponte de glúteos com 2s de contração", gifUrl: EXERCISE_GIFS.ponteGluteo },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest },
      { type: "action", duration: 45, description: "Elevação posterior de perna", gifUrl: EXERCISE_GIFS.elevacaoPosterior },
      { type: "rest", duration: 60, description: "Descanso", gifUrl: GIFS.rest },
      
      // Finalização
      { type: "action", duration: 900, description: "Dança moderada", gifUrl: GIFS.danca }
    ]
  }
];

export const exercisesByLevel = {
  easy: easyExercises,
  medium: mediumExercises,
  intense: intenseExercises,
};

