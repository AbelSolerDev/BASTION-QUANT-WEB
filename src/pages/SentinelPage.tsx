import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, HeartPulse, Zap, AlertTriangle, Eye, Activity, BarChart2, RefreshCw, Thermometer, Target, Droplets, DollarSign, CloudOff, Wifi, Search, Lock, Cpu, Globe } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

// --- SUB-COMPONENT: INFINITE TICKER ---
const Ticker = () => (
  <div className="w-full bg-accentDanger/10 border-y border-accentDanger/20 overflow-hidden py-2 backdrop-blur-md">
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="whitespace-nowrap flex gap-8 text-xs font-mono text-accentDanger/80 font-bold tracking-widest"
    >
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span>/// THREAT DETECTION ACTIVE</span>
          <span>:: LIQUIDATION CASCADE: 0%</span>
          <span>:: BTC HASH: STABLE</span>
          <span>:: WHALE ALERT: SECTOR 7</span>
          <span>:: SENTINEL v1.0 ONLINE</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

// --- SUB-COMPONENT: THE GIANT RADAR BACKGROUND ---
const SentinelRadar = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] pointer-events-none opacity-20 z-0">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="w-full h-full rounded-full border border-accentCyan/30 border-dashed relative"
    >
      <div className="absolute inset-4 rounded-full border border-accentDanger/20" />
      <div className="absolute inset-20 rounded-full border border-dashed border-white/10" />
      <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accentCyan/50 to-transparent -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-accentCyan/50 to-transparent -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0a0e1a_70%)]" />
  </div>
);

const SentinelPage: React.FC = () => {
  const qualities = [
    { id: "01", icon: HeartPulse, title: "Motor Cardíaco 1Hz", desc: "No parpadea. Procesa el mercado cada 1000ms. Si BTC estornuda, SENTINEL cierra las compuertas antes de que llegue la infección." },
    { id: "02", icon: Zap, title: "WebSocket Omnicanal", desc: "Inyección directa de datos. 15+ pares simultáneos. No es polling, es streaming de alta presión." },
    { id: "03", icon: AlertTriangle, title: "DEFCON Dinámico", desc: "Semáforo de riesgo (0-100). Calcula la probabilidad de ruina en tiempo real y obliga a QUANT a obedecer." },
    { id: "04", icon: Activity, title: "Flash Crash Veto", desc: "Caída > X% en 3min = KILL SWITCH AUTOMÁTICO. Protege el capital mientras los bots retail son liquidados." },
    { id: "05", icon: Droplets, title: "Anti-Sangrado", desc: "Detecta la muerte lenta. Si el portfolio gotea pips constantemente, SENTINEL corta la hemorragia reduciendo el sizing." },
    { id: "06", icon: Globe, title: "Visión Global (Total2/3)", desc: "¿Es solo BTC o es todo el mercado? Analiza índices sintéticos para distinguir pánico real de ruido aislado." },
    { id: "07", icon: RefreshCw, title: "Detector de Rotación", desc: "Si BTC cae pero ALTS suben, no es venta, es rotación. SENTINEL ordena rebalanceo, no cierre." },
    { id: "08", icon: DollarSign, title: "Stablecoin Dominance", desc: "El índice del miedo. Si USDT domina, SENTINEL huele el pánico antes de que se refleje en el precio." },
    { id: "09", icon: Target, title: "Liquidation Hunter", desc: "¿$10M liquidados en 1 minuto? Bandera Roja. SENTINEL prohíbe abrir longs en medio de una cascada." },
    { id: "10", icon: Thermometer, title: "Funding Rate Heat", desc: "Detecta euforia insostenible. Si el funding arde, SENTINEL prepara la salida antes del desplome." },
    { id: "11", icon: Eye, title: "Precognición (News)", desc: "Se adelanta a la volatilidad programada (FOMC, CPI). Aprieta los stops un 40% antes de que hable Powell." },
    { id: "12", icon: ShieldCheck, title: "Simbiosis Neural", desc: "No es un módulo aparte. Es el sistema nervioso que conecta con el cerebro de QUANT." }
  ];

  return (
    <div className="bg-bgPrimary min-h-screen relative overflow-hidden font-sans">
      <SentinelRadar />

      {/* FIXED HUD ELEMENTS */}
      <div className="fixed top-24 right-4 z-40 hidden lg:block">
         <div className="flex flex-col gap-2 items-end">
            <div className="text-[10px] font-mono text-accentDanger animate-pulse">SYSTEM MONITORING</div>
            <div className="h-32 w-1 bg-white/10 rounded-full overflow-hidden relative">
               <motion.div 
                 animate={{ height: ["20%", "60%", "30%", "80%", "40%"] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute bottom-0 w-full bg-gradient-to-t from-accentCyan to-accentDanger"
               />
            </div>
         </div>
      </div>

      <div className="pt-24 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/5">
            <ArrowLeft size={14} className="mr-2" />
            Retorno a Base
          </Link>

          {/* HERO SECTION - DISRUPTIVE */}
          <div className="mb-24 relative">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               className="border-l-2 border-accentDanger pl-6 ml-2 md:ml-0"
             >
                <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-4 text-white">
                  SENTINEL
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentDanger via-accentViolet to-white opacity-80">
                    OVERWATCH
                  </span>
                </h1>
             </motion.div>
             
             <div className="flex flex-col md:flex-row gap-8 mt-12 items-start">
                <div className="max-w-xl">
                   <p className="text-xl md:text-2xl text-textPrimary font-light leading-relaxed">
                     La IA no solo debe saber cómo ganar. <br/>
                     <span className="text-accentCyan font-bold bg-accentCyan/10 px-1">Debe saber cuándo huir.</span>
                   </p>
                   <p className="text-textSecondary mt-6 text-sm font-mono border-t border-white/10 pt-4">
                     // MICRO-ESTRUCTURA + MACRO-ANÁLISIS = SUPERVIVENCIA
                   </p>
                </div>
                
                {/* Visual Glitch decoration - FIXED VISIBILITY */}
                <div className="hidden md:block flex-1 h-32 rounded-lg border border-white/10 relative overflow-hidden bg-black/40">
                   {/* Background Noise Layer */}
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                   
                   {/* Text Layer - Isolated from opacity */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-mono text-xs text-accentDanger tracking-[0.5em] font-bold opacity-80 animate-pulse">
                         NO SIGNAL DETECTED
                      </p>
                   </div>
                </div>
             </div>
          </div>

          <Ticker />

          {/* GRID DE MÓDULOS - TACTICAL DESIGN */}
          <div className="mt-24 mb-24">
             <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-mono text-white flex items-center gap-2">
                   <Cpu className="text-accentDanger" /> MÓDULOS DE VIGILANCIA
                </h2>
                <span className="text-xs font-mono text-accentDanger animate-pulse">● LIVE FEED</span>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {qualities.map((q, i) => (
                   <GlassCard key={i} className="group !bg-black/40 !border-white/5 hover:!border-accentCyan/30 transition-all duration-300 relative overflow-hidden">
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 -mr-4 -mt-4 rotate-45 group-hover:bg-accentCyan/20 transition-colors" />
                      
                      <div className="flex justify-between items-start mb-4">
                         {/* UPDATE: GLOWING NUMBER EFFECT */}
                         <div className="text-5xl font-display font-bold text-white/5 group-hover:text-accentCyan group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 select-none transform group-hover:scale-110 origin-left">
                            {q.id}
                         </div>
                         <q.icon size={20} className="text-textSecondary group-hover:text-accentCyan transition-colors" />
                      </div>
                      
                      <h3 className="text-white font-bold mb-2 font-mono uppercase text-sm group-hover:text-accentCyan transition-colors">
                         {q.title}
                      </h3>
                      <p className="text-xs text-textSecondary leading-relaxed border-t border-white/5 pt-2">
                         {q.desc}
                      </p>
                   </GlassCard>
                ))}
             </div>
          </div>

          {/* DEGRADATION PROTOCOL - SCI-FI HUD LOOK */}
          <section className="mb-32 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-accentDanger/5 to-transparent blur-xl -z-10" />
             
             <div className="border border-white/10 bg-[#050505] rounded-2xl overflow-hidden relative">
                {/* Header visual */}
                <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                   <div className="flex gap-2 items-center">
                      <Lock size={16} className="text-accentDanger" />
                      <span className="font-mono text-sm font-bold text-white tracking-wider">PROTOCOLOS DE DEGRADACIÓN</span>
                   </div>
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-accentDanger" />
                   </div>
                </div>

                <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                   {/* LEVEL 1 */}
                   <div className="p-8 relative group hover:bg-white/5 transition-colors">
                      <div className="absolute top-4 right-4 opacity-50"><Wifi size={20} className="text-accentSuccess"/></div>
                      <div className="text-xs font-mono text-accentSuccess mb-2">ESTADO: ÓPTIMO</div>
                      <h3 className="text-2xl font-bold text-white mb-4">ONLINE</h3>
                      <ul className="space-y-2 text-sm text-textSecondary">
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Latencia</span> <span className="text-white">12ms</span></li>
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Data Loss</span> <span className="text-white">0%</span></li>
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Sizing</span> <span className="text-accentSuccess font-bold">100%</span></li>
                      </ul>
                      <div className="mt-4 text-xs text-textSecondary bg-accentSuccess/5 p-2 rounded border border-accentSuccess/10">
                         Sentinel y Quant en perfecta sincronía.
                      </div>
                   </div>

                   {/* LEVEL 2 */}
                   <div className="p-8 relative group hover:bg-white/5 transition-colors">
                      <div className="absolute top-4 right-4 opacity-50"><Activity size={20} className="text-accentGold"/></div>
                      <div className="text-xs font-mono text-accentGold mb-2">ESTADO: COMPROMETIDO</div>
                      <h3 className="text-2xl font-bold text-white mb-4">DEGRADADO</h3>
                      <ul className="space-y-2 text-sm text-textSecondary">
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Latencia</span> <span className="text-accentGold">&gt;200ms</span></li>
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>WebSockets</span> <span className="text-white">Intermitente</span></li>
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Sizing</span> <span className="text-accentGold font-bold">80%</span></li>
                      </ul>
                      <div className="mt-4 text-xs text-textSecondary bg-accentGold/5 p-2 rounded border border-accentGold/10">
                         Usa caché local. Reduce riesgo preventivamente.
                      </div>
                   </div>

                   {/* LEVEL 3 */}
                   <div className="p-8 relative group hover:bg-white/5 transition-colors">
                      <div className="absolute top-4 right-4 opacity-50"><CloudOff size={20} className="text-accentDanger"/></div>
                      <div className="text-xs font-mono text-accentDanger mb-2">ESTADO: CRÍTICO</div>
                      <h3 className="text-2xl font-bold text-white mb-4">OFFLINE</h3>
                      <ul className="space-y-2 text-sm text-textSecondary">
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Latencia</span> <span className="text-accentDanger">TIMEOUT</span></li>
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Heartbeat</span> <span className="text-accentDanger">FAILED</span></li>
                         <li className="flex justify-between border-b border-white/5 pb-1"><span>Sizing</span> <span className="text-accentDanger font-bold">60%</span></li>
                      </ul>
                      <div className="mt-4 text-xs text-textSecondary bg-accentDanger/5 p-2 rounded border border-accentDanger/10">
                         Aislamiento total. Quant opera "a ciegas" con lógica conservadora.
                      </div>
                   </div>
                </div>
                
                <div className="bg-accentDanger/10 p-3 text-center border-t border-accentDanger/20">
                   <p className="text-xs font-mono text-accentDanger font-bold animate-pulse">
                      ¡ADVERTENCIA! PROTOCOLO DE AISLAMIENTO NO ANULABLE MANUALMENTE
                   </p>
                </div>
             </div>
          </section>

          {/* FOOTER NOTE - CRYPTIC */}
          <div className="text-center opacity-30 font-mono text-xs mb-12">
             <p>SYSTEM ID: SENTINEL-X-99</p>
             <p>ENCRYPTION: QUANTUM-RESISTANT</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SentinelPage;
