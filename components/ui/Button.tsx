import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'levelEasy' | 'levelMedium' | 'levelHard';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  ...props 
}) => {
  const baseStyle = "px-6 py-3 rounded-xl font-bold shadow-md transition-all active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    ghost: "bg-transparent shadow-none text-slate-600 hover:bg-slate-100",
    levelEasy: "bg-green-100 text-green-800 border-2 border-green-200 hover:bg-green-200",
    levelMedium: "bg-orange-100 text-orange-800 border-2 border-orange-200 hover:bg-orange-200",
    levelHard: "bg-red-100 text-red-800 border-2 border-red-200 hover:bg-red-200",
  };

  // Se a className contém bg-white mas não tem cor de texto definida, adiciona text-slate-900
  const hasWhiteBg = className.includes('bg-white');
  const hasTextColor = /text-(slate|gray|black|white|green|red|orange|blue|yellow|purple|pink|indigo|cyan|teal|amber|emerald|lime|sky|violet|fuchsia|rose)-\d+/.test(className);
  const textColorFix = hasWhiteBg && !hasTextColor ? 'text-slate-900' : '';

  return (
    <button 
      className={`${baseStyle} ${variants[variant] || variants.primary} ${textColorFix} ${className}`} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

