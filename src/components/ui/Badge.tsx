import React from 'react';
import { FeatureStatus } from '../../types';

interface BadgeProps {
  status: FeatureStatus;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const getStyles = () => {
    switch (status) {
      case 'CONSTRUIDO':
        return 'bg-accentSuccess/10 text-accentSuccess border-accentSuccess/20';
      case 'EN DESARROLLO':
        return 'bg-accentGold/10 text-accentGold border-accentGold/20';
      case 'ROADMAP':
        return 'bg-accentViolet/10 text-accentViolet border-accentViolet/20';
      case 'FUTURO':
        return 'bg-accentCyan/10 text-accentCyan border-accentCyan/20';
      default:
        return 'bg-gray-800 text-gray-400';
    }
  };

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border uppercase tracking-wider ${getStyles()}`}>
      {status}
    </span>
  );
};

export default Badge;