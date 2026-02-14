import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  CloudOff,
  Cpu,
  Eye,
  Globe,
  HeartPulse,
  Lock,
  RefreshCw,
  Search,
  ShieldCheck,
  Thermometer,
  Wifi,
  Zap,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

const Ticker = () => (
  <div className="w-full bg-accentDanger/10 border-y border-accentDanger/20 overflow-hidden py-2 backdrop-blur-md">
    <motion.div
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      className="whitespace-nowrap flex gap-8 text-xs font-mono text-accentDanger/80 font-bold tracking-widest"
    >
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span>/// THREAT DETECTION ACTIVE</span>
          <span>:: MARKET STRESS WATCH: ACTIVE</span>
          <span>:: POLICY OVERLAY: CONTROLLED</span>
          <span>:: DEGRADED MODE: READY</span>
          <span>:: SENTINEL PROGRAM: R&D TRACK</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const SentinelRadar = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] pointer-events-none opacity-20 z-0">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
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
    {
      id: '01',
      icon: HeartPulse,
      title: 'Vector de estado 1Hz',
      desc: 'Lectura continua del mercado con nivel de riesgo, confianza y vigencia temporal.',
    },
    {
      id: '02',
      icon: ShieldCheck,
      title: 'Contrato de autoridad',
      desc: 'SENTINEL emite contexto y recomendaciones. QUANT conserva ejecución y control operativo.',
    },
    {
      id: '03',
      icon: Globe,
      title: 'Contexto macro multi-señal',
      desc: 'Integra volatilidad, liquidaciones, funding, stablecoins e índices sintéticos.',
    },
    {
      id: '04',
      icon: Activity,
      title: 'Score compuesto',
      desc: 'Fusiona inteligencia micro y macro para modular exposición con disciplina.',
    },
    {
      id: '05',
      icon: RefreshCw,
      title: 'Degradación grácil',
      desc: 'Si la conexión cae, QUANT no se detiene: reduce peso macro y mantiene continuidad.',
    },
    {
      id: '06',
      icon: AlertTriangle,
      title: 'Jerarquía de decisiones',
      desc: 'Una policy table resuelve conflictos y garantiza una única acción operativa.',
    },
    {
      id: '07',
      icon: Wifi,
      title: 'Canal dual',
      desc: 'Sincronización periódica con refuerzo de eventos críticos para menor latencia de reacción.',
    },
    {
      id: '08',
      icon: Search,
      title: 'Evidencia y freshness',
      desc: 'Cada estado incluye evidencia, calidad de datos y ventana de validez temporal.',
    },
    {
      id: '09',
      icon: Lock,
      title: 'Separación de roles',
      desc: 'SENTINEL no ejecuta órdenes ni activa cierres. Es inteligencia de contexto, no motor de ejecución.',
    },
    {
      id: '10',
      icon: Eye,
      title: 'Modo anticipatorio',
      desc: 'Diseño definido para post-6.0: acciones preventivas con TTL y reversión controlada.',
    },
    {
      id: '11',
      icon: Zap,
      title: 'Convivencia con Safety',
      desc: 'SENTINEL modula decisiones. Los bloqueos de seguridad los gobiernan Kill Switch y Safe-to-Trade.',
    },
    {
      id: '12',
      icon: Cpu,
      title: 'Roadmap separado',
      desc: 'El microservicio real de SENTINEL se construye después de consolidar QUANT en producción.',
    },
  ];

  return (
    <div className="bg-bgPrimary min-h-screen relative overflow-hidden font-sans">
      <SentinelRadar />

      <div className="fixed top-24 right-4 z-40 hidden lg:block">
        <div className="flex flex-col gap-2 items-end">
          <div className="text-[10px] font-mono text-accentDanger animate-pulse">SYSTEM MONITORING</div>
          <div className="h-32 w-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ height: ['20%', '60%', '30%', '80%', '40%'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-0 w-full bg-gradient-to-t from-accentCyan to-accentDanger"
            />
          </div>
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/5"
          >
            <ArrowLeft size={14} className="mr-2" />
            Retorno a Base
          </Link>

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
                  Inteligencia macro para proteger decisiones de trading.
                  <br />
                  <span className="text-accentCyan font-bold bg-accentCyan/10 px-1">
                    Contexto, evidencia y control de exposición.
                  </span>
                </p>
                <p className="text-textSecondary mt-6 text-sm font-mono border-t border-white/10 pt-4">
                  // SENTINEL EMITE CONTEXTO. QUANT EJECUTA.
                </p>
              </div>

              <div className="hidden md:block flex-1 h-32 rounded-lg border border-white/10 relative overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-mono text-xs text-accentDanger tracking-[0.4em] font-bold opacity-80 animate-pulse">
                    ARCHITECTURE MODE
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 max-w-4xl border border-accentCyan/25 bg-accentCyan/5 rounded-xl px-5 py-4">
              <p className="text-xs md:text-sm text-textSecondary font-mono">
                ESTADO REAL: SENTINEL ESTÁ INTEGRADO EN QUANT COMO CAPA MOCK Y DE MODULACIÓN.
                <span className="text-white">
                  {' '}
                  El microservicio independiente se activa post-6.0, tras estabilizar el core OMS/EMS en producción.
                </span>
              </p>
            </div>
          </div>

          <Ticker />

          <section className="mt-12 mb-20">
            <div className="grid md:grid-cols-3 gap-4">
              <GlassCard className="!bg-black/35 !border-accentCyan/20">
                <div className="text-xs font-mono text-accentCyan mb-2">ESTADO REAL</div>
                <h3 className="text-white font-bold mb-2">Integración operativa activa</h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  MockSentinel, score compuesto, degradación grácil y capa visual ya operan dentro de QUANT.
                </p>
              </GlassCard>
              <GlassCard className="!bg-black/35 !border-accentGold/20">
                <div className="text-xs font-mono text-accentGold mb-2">CONTRATO</div>
                <h3 className="text-white font-bold mb-2">Emitir no es ejecutar</h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  SENTINEL informa y recomienda. La ejecución, los cierres y la seguridad final pertenecen a QUANT.
                </p>
              </GlassCard>
              <GlassCard className="!bg-black/35 !border-accentViolet/20">
                <div className="text-xs font-mono text-accentViolet mb-2">PROYECCIÓN</div>
                <h3 className="text-white font-bold mb-2">Microservicio post-6.0</h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  La versión independiente se construye después de completar paper, canary y salida estable.
                </p>
              </GlassCard>
            </div>
          </section>

          <div className="mt-24 mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-mono text-white flex items-center gap-2">
                <Cpu className="text-accentDanger" /> MÓDULOS DE VIGILANCIA
              </h2>
              <span className="text-xs font-mono text-accentDanger animate-pulse">ROADMAP CONTROLLED</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {qualities.map((q) => (
                <GlassCard
                  key={q.id}
                  className="group !bg-black/40 !border-white/5 hover:!border-accentCyan/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 -mr-4 -mt-4 rotate-45 group-hover:bg-accentCyan/20 transition-colors" />

                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl font-display font-bold text-white/5 group-hover:text-accentCyan group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 select-none transform group-hover:scale-110 origin-left">
                      {q.id}
                    </div>
                    <q.icon size={20} className="text-textSecondary group-hover:text-accentCyan transition-colors" />
                  </div>

                  <h3 className="text-white font-bold mb-2 font-mono uppercase text-sm group-hover:text-accentCyan transition-colors">
                    {q.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed border-t border-white/5 pt-2">{q.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <section className="mb-32 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accentDanger/5 to-transparent blur-xl -z-10" />

            <div className="border border-white/10 bg-[#050505] rounded-2xl overflow-hidden relative">
              <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Lock size={16} className="text-accentDanger" />
                  <span className="font-mono text-sm font-bold text-white tracking-wider">DEGRADACIÓN OPERATIVA</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-accentDanger" />
                </div>
              </div>

              <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4 opacity-50">
                    <Wifi size={20} className="text-accentSuccess" />
                  </div>
                  <div className="text-xs font-mono text-accentSuccess mb-2">ESTADO: ÓPTIMO</div>
                  <h3 className="text-2xl font-bold text-white mb-4">ONLINE</h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Latencia</span> <span className="text-white">12ms</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Data Loss</span> <span className="text-white">0%</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Peso SENTINEL</span> <span className="text-accentSuccess font-bold">1.0</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-textSecondary bg-accentSuccess/5 p-2 rounded border border-accentSuccess/10">
                    Sinapsis completa con decisiones compuestas de máxima calidad.
                  </div>
                </div>

                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4 opacity-50">
                    <Activity size={20} className="text-accentGold" />
                  </div>
                  <div className="text-xs font-mono text-accentGold mb-2">ESTADO: COMPROMETIDO</div>
                  <h3 className="text-2xl font-bold text-white mb-4">DEGRADADO</h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Latencia</span> <span className="text-accentGold">&gt;200ms</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Cobertura</span> <span className="text-white">Parcial</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Peso SENTINEL</span> <span className="text-accentGold font-bold">0.5</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-textSecondary bg-accentGold/5 p-2 rounded border border-accentGold/10">
                    Continuidad operativa con enfoque más conservador y menor influencia macro.
                  </div>
                </div>

                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4 opacity-50">
                    <CloudOff size={20} className="text-accentDanger" />
                  </div>
                  <div className="text-xs font-mono text-accentDanger mb-2">ESTADO: CRÍTICO</div>
                  <h3 className="text-2xl font-bold text-white mb-4">OFFLINE</h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Latencia</span> <span className="text-accentDanger">TIMEOUT</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Heartbeat</span> <span className="text-accentDanger">FAILED</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Peso SENTINEL</span> <span className="text-accentDanger font-bold">0.0</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-textSecondary bg-accentDanger/5 p-2 rounded border border-accentDanger/10">
                    QUANT mantiene autonomía. Política configurable: continuidad plena o reducción preventiva.
                  </div>
                </div>
              </div>

              <div className="bg-accentDanger/10 p-3 text-center border-t border-accentDanger/20">
                <p className="text-xs font-mono text-accentDanger font-bold animate-pulse">
                  SENTINEL NUNCA EJECUTA ÓRDENES NI ACTIVA KILL SWITCH. SOLO INFORMA Y MODULA.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-mono text-accentDanger uppercase tracking-wider">Doctrina Operativa</p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">Cómo convivirán QUANT y SENTINEL</h3>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-textSecondary">
                  <span className="px-2 py-1 rounded border border-white/10 bg-white/5">Post-6.0</span>
                  <span className="px-2 py-1 rounded border border-white/10 bg-white/5">Safety First</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <GlassCard className="!bg-[#0b1324]/75 !border-accentDanger/25 !p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Thermometer size={16} className="text-accentDanger" />
                    <h4 className="text-white font-bold">Modo anticipatorio (post-6.0)</h4>
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    Diseño orientado a reducir exposición antes de eventos macro, con overlays temporales y reversión automática.
                  </p>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-textSecondary">Disparo</span>
                      <span className="text-accentDanger font-mono">Umbral macro + confianza</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-textSecondary">Duración</span>
                      <span className="text-white font-mono">TTL limitado</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-textSecondary">Salida</span>
                      <span className="text-accentCyan font-mono">Reversión controlada</span>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="!bg-[#0b1324]/75 !border-accentCyan/25 !p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={16} className="text-accentCyan" />
                    <h4 className="text-white font-bold">Principio de independencia</h4>
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    QUANT puede operar sin SENTINEL en modo autónomo. SENTINEL mejora la calidad de decisión, pero no sustituye el core.
                  </p>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-textSecondary">Autoridad final</span>
                      <span className="text-white font-mono">QUANT</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-textSecondary">Rol SENTINEL</span>
                      <span className="text-accentDanger font-mono">Contexto y recomendación</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-textSecondary">Fallback</span>
                      <span className="text-accentSuccess font-mono">Continuidad operativa</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </section>

          <div className="text-center opacity-35 font-mono text-xs mb-12">
            <p>SENTINEL PROGRAM: ARCHITECTURE REFERENCE ALIGNED</p>
            <p>STATUS: INTEGRATED MOCK + POST-6.0 INDEPENDENT SERVICE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentinelPage;
