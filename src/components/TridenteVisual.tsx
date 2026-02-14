import React from 'react';
import { motion } from 'framer-motion';
import { Radar, GitMerge, Activity } from 'lucide-react';

const TridenteVisual: React.FC = () => {
  return (
    <div className="relative h-[400px] w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-accentViolet/30" style={{ zIndex: 0 }}>
        <line x1="50%" y1="20%" x2="50%" y2="50%" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="25%" y2="80%" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="75%" y2="80%" strokeWidth="2" />
        {/* Animated flow */}
        <motion.circle r="3" fill="#06b6d4">
          <animateMotion path="M 50% 20% L 50% 50% L 25% 80%" dur="3s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle r="3" fill="#8b5cf6">
          <animateMotion path="M 50% 20% L 50% 50% L 75% 80%" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </motion.circle>
      </svg>

      {/* NEXUS */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute top-[10%] bg-bgSecondary border border-accentCyan/50 p-4 rounded-xl flex flex-col items-center z-10 w-48"
      >
        <div className="w-10 h-10 rounded-full bg-accentCyan/20 flex items-center justify-center mb-2 text-accentCyan">
          <Radar size={20} />
        </div>
        <h3 className="font-display font-bold text-accentCyan">NEXUS</h3>
        <p className="text-[10px] text-textSecondary text-center">Scanner de Universo</p>
      </motion.div>

      {/* PHOENIX */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-[10%] left-[5%] md:left-[15%] bg-bgSecondary border border-accentViolet/50 p-4 rounded-xl flex flex-col items-center z-10 w-48"
      >
        <div className="w-10 h-10 rounded-full bg-accentViolet/20 flex items-center justify-center mb-2 text-accentViolet">
          <Activity size={20} />
        </div>
        <h3 className="font-display font-bold text-accentViolet">PHOENIX</h3>
        <p className="text-[10px] text-textSecondary text-center">Auto-calibración</p>
      </motion.div>

      {/* SYMBIOSIS */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-[10%] right-[5%] md:right-[15%] bg-bgSecondary border border-accentGold/50 p-4 rounded-xl flex flex-col items-center z-10 w-48"
      >
        <div className="w-10 h-10 rounded-full bg-accentGold/20 flex items-center justify-center mb-2 text-accentGold">
          <GitMerge size={20} />
        </div>
        <h3 className="font-display font-bold text-accentGold">SYMBIOSIS</h3>
        <p className="text-[10px] text-textSecondary text-center">Fusión Quant + Sentinel</p>
      </motion.div>
    </div>
  );
};

export default TridenteVisual;