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
  const baseStyle = "px-6 py-3 rounded-xl font-bold shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 w-full md:max-w-md md:mx-auto";
  const variants = {
    primary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    ghost: "bg-transparent shadow-none text-slate-600 hover:bg-slate-100",
    levelEasy: "bg-green-100 text-green-800 border-2 border-green-200 hover:bg-green-200",
    levelMedium: "bg-orange-100 text-orange-800 border-2 border-orange-200 hover:bg-orange-200",
    levelHard: "bg-red-100 text-red-800 border-2 border-red-200 hover:bg-red-200",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

