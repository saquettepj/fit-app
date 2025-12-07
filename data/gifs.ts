import gifsData from './gifs.json';

// Exporta os GIFs organizados por categoria
export const GIFS = {
  // GIFs genéricos/reutilizáveis
  ...gifsData.generic,
  
  // GIFs específicos de exercícios
  exercises: gifsData.exercises
};

// Exporta também de forma direta para facilitar o acesso
export const EXERCISE_GIFS = gifsData.exercises;





