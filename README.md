# FitGo - App de Exercícios

Aplicativo de exercícios com timer circular desenvolvido em Next.js, focado em mobile.

## 🚀 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Gerenciamento de Estado**: React Context API
- **Animações**: Framer Motion

## 🎯 Funcionalidades

### 1. Tela Inicial (Níveis)
- Exibe 3 botões grandes: "Leve", "Mediano", "Intenso"
- Ao clicar, define qual array de exercícios será carregado
- Navega para a lista de cards

### 2. Tela de Lista (Cards)
- Botão "Voltar" no topo esquerdo
- Renderiza cards baseados no array selecionado
- Design do card com imagem, título, descrição e badge de séries
- Cores do card vêm do objeto JSON (bg-green-50 para leve, bg-red-50 para intenso)
- Clicar no card abre o Modal com detalhes e botão "Começar"

### 3. Tela de Execução (Timer)
- Exibe progresso: Imagem/GIF + Timer Circular
- **Lógica do Timer:**
  - Timer Verde (Passo): Contagem regressiva da ação
  - Timer Laranja (Pausa): Contagem regressiva do descanso
  - **Áudio:** Nos últimos 5 segundos do Timer Verde (apenas), tocar um "bip" por segundo
- Botões de Pausa/Play e Voltar

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 📱 Foco Mobile

O aplicativo foi desenvolvido com foco em dispositivos móveis, utilizando:
- Design responsivo com Tailwind CSS
- Touch-friendly (botões grandes, áreas de toque adequadas)
- Viewport configurado para mobile
- Animações suaves com Framer Motion

## 🎨 Componentes

### Button
Componente de botão com variantes:
- `primary`: Botão principal
- `outline`: Botão com borda
- `ghost`: Botão transparente
- `levelEasy`: Botão para nível leve
- `levelMedium`: Botão para nível médio
- `levelHard`: Botão para nível intenso

### Card
Card genérico para exibir exercícios com:
- Imagem de capa
- Título e descrição
- Badge de séries
- Informações de passos e tempo total

### CircularTimer
Timer circular animado com SVG:
- Animação suave com Framer Motion
- Cores dinâmicas (verde para ação, laranja para descanso)
- Exibição de tempo restante

### Modal
Modal com animação de entrada:
- Overlay com backdrop blur
- Animação de escala e fade
- Fechamento ao clicar fora

### Sidebar
Menu lateral com histórico:
- Lista dos últimos 5 treinos realizados
- Informações de data e hora
- Badge de nível do treino

## 📝 Adicionar Novos Exercícios

Para adicionar novos exercícios, edite o arquivo `data/exercises.ts`:

```typescript
export const easyExercises: Exercise[] = [
  {
    id: 'e3',
    title: "Novo Exercício",
    description: "Descrição do exercício",
    coverImage: "URL_DA_IMAGEM",
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
      { type: "action", duration: 10, description: "Ação", gifUrl: GIFS.stretch },
      { type: "rest", duration: 5, description: "Descanso", gifUrl: GIFS.rest }
    ]
  }
];
```

## 🎯 Clean Code

O projeto segue princípios de clean code:
- **Separação de responsabilidades**: Componentes, telas, dados e utilitários separados
- **Reutilização**: Componentes UI reutilizáveis
- **TypeScript**: Tipagem forte para melhor manutenibilidade
- **Estrutura modular**: Fácil adicionar novos cards e componentes

## 📄 Licença

Este projeto é privado.

