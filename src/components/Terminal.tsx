import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "BASTION QUANT mobile channel initialized...",
    "Establishing direct HTTPS link...",
    "Device authentication... OK",
  ]);

  useEffect(() => {
    const sequence = [
      { text: "Mode: LIVE | Kill: ARMED", delay: 1000 },
      { text: "Device: Android private APK (whitelisted)", delay: 1800 },
      { text: "Push channel: ACTIVE | Critical alerts ON", delay: 2600 },
      { text: "PIN challenge: READY (TTL 120s)", delay: 3400 },
      { text: "> Waiting for remote command...", delay: 4400 }
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
        <span className="ml-2 text-gray-500 text-xs">bastion_mobile — secure channel</span>
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
