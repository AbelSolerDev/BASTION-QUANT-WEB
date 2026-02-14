import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "BASTION QUANT v3.3 initialized...",
    "Connecting to secure gateway...",
    "Authenticating... OK",
  ]);

  useEffect(() => {
    const sequence = [
      { text: "Mode: LIVE | Kill: ARMED", delay: 1000 },
      { text: "Equity: $142,503.21 (+4.2%)", delay: 2000 },
      { text: "Active Strategies: 4", delay: 2500 },
      { text: "SENTINEL: 92/100 (Safe)", delay: 3500 },
      { text: "> Waiting for command...", delay: 4500 }
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    sequence.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, text]);
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-black rounded-lg overflow-hidden border border-gray-800 shadow-2xl font-mono text-sm">
      <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-500 text-xs">bastion_cli — ssh</span>
      </div>
      <div className="p-4 h-64 overflow-y-auto text-green-500">
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-1"
          >
            <span className="text-gray-500 mr-2">$</span>
            {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-green-500 inline-block align-middle"
        />
      </div>
    </div>
  );
};

export default Terminal;