import React from 'react';
import { motion } from 'framer-motion';

const HolographicCore: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
      
      {/* --- CORE GLOW BACKDROP --- */}
      <div className="absolute w-[300px] h-[300px] bg-accentCyan/20 rounded-full blur-[80px] animate-pulse-slow" />

      {/* --- ORBITAL RINGS --- */}
      
      {/* Ring 1: NEXUS (Outer, Cyan, Slow Rotate) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] rounded-full border border-accentCyan/30 border-dashed"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accentCyan rounded-full shadow-[0_0_10px_#06b6d4]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-accentCyan/50 rounded-full" />
      </motion.div>

      {/* Ring 2: PHOENIX (Middle, Violet, Reverse Rotate) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] rounded-full border border-accentViolet/40"
        style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
      >
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-accentViolet rounded-full shadow-[0_0_10px_#8b5cf6]" />
      </motion.div>

      {/* Ring 3: SYMBIOSIS (Inner, Gold, Fast Rotate) */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity } 
        }}
        className="absolute w-[180px] h-[180px] rounded-full border-2 border-accentGold/20 border-t-accentGold/80"
      />

      {/* --- CENTRAL REACTOR --- */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Inner Core */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 bg-gradient-to-br from-accentCyan to-accentViolet rounded-full blur-md opacity-50 absolute"
        />
        <div className="w-20 h-20 bg-bgPrimary rounded-full border border-white/20 flex items-center justify-center relative z-20 backdrop-blur-sm">
          <span className="font-mono text-xs text-white font-bold animate-pulse">BASTION</span>
        </div>
      </div>

      {/* --- HUD ELEMENTS (Floating Data) --- */}
      
      {/* Top HUD */}
      <div className="absolute top-[10%] text-center">
        <div className="text-[10px] font-mono text-accentCyan tracking-[0.2em] mb-1">SYSTEM STATUS</div>
        <div className="text-xs font-bold text-white bg-accentCyan/10 px-2 py-1 rounded border border-accentCyan/20">OPTIMAL</div>
      </div>

      {/* Left HUD (NEXUS DATA) */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 text-right hidden md:block"
      >
        <h4 className="text-accentCyan font-display font-bold text-lg">NEXUS</h4>
        <div className="text-[10px] font-mono text-textSecondary">Scanning...</div>
        <div className="h-[1px] w-12 bg-accentCyan/50 ml-auto my-1" />
        <div className="font-mono text-xs text-white">128 PAIRS</div>
      </motion.div>

      {/* Right HUD (PHOENIX DATA) */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 text-left hidden md:block"
      >
        <h4 className="text-accentViolet font-display font-bold text-lg">PHOENIX</h4>
        <div className="text-[10px] font-mono text-textSecondary">Calibrating...</div>
        <div className="h-[1px] w-12 bg-accentViolet/50 mr-auto my-1" />
        <div className="font-mono text-xs text-white">99.8% CONF</div>
      </motion.div>

       {/* Bottom HUD (SYMBIOSIS DATA) */}
       <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute bottom-[10%] text-center hidden md:block"
      >
        <div className="flex items-center gap-2 justify-center mb-1">
            <div className="w-2 h-2 bg-accentGold rounded-full animate-bounce" />
            <h4 className="text-accentGold font-display font-bold text-sm">SYMBIOSIS LINK</h4>
        </div>
        <div className="font-mono text-[10px] text-textSecondary bg-black/40 px-3 py-1 rounded border border-white/10">
            LATENCY: 12ms | RISK: LOW
        </div>
      </motion.div>

    </div>
  );
};

export default HolographicCore;