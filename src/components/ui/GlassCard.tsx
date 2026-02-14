import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, hoverEffect = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        glass-panel rounded-xl p-6 relative overflow-hidden transition-all duration-300
        ${hoverEffect ? 'hover:border-accentCyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;