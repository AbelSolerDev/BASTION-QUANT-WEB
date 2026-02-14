import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Hammer,
  FlaskConical,
  Scale,
  RotateCcw,
  Archive,
  Flame,
  Brain,
  Eye,
  Sword,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Trophy,
  Ghost,
  Layers,
  GitBranch,
  BarChart3,
  Shield,
  Zap,
  Search,
  Package,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

/* ───────────── Ticker ───────────── */
const Ticker = () => (
  <div className="w-full bg-accentOrange/10 border-y border-accentOrange/20 overflow-hidden py-2 backdrop-blur-md">
    <motion.div
      animate={{ x: [0, -1200] }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      className="whitespace-nowrap flex gap-8 text-xs font-mono text-accentOrange/80 font-bold tracking-widest"
    >
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={i}>
          <span>/// STRATEGY DISCOVERY ENGINE</span>
          <span>:: ALPHA PROSPECTING: ACTIVE</span>
          <span>:: CRUCIBLE VALIDATION: MULTI-LAYER</span>
          <span>:: DECAY DETECTION: CONTINUOUS</span>
          <span>:: CHAMPION/CHALLENGER: ARMED</span>
          <span>:: FORGE PROGRAM: R&D TRACK</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

/* ───────────── Forge Sparks BG ───────────── */
const ForgeSparks = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[150vw] h-[150vw] md:w-[900px] md:h-[900px] pointer-events-none opacity-15 z-0">
    {/* Outer rotating hexagon */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      className="w-full h-full relative"
    >
      <div className="absolute inset-0 rounded-full border border-accentOrange/30 border-dashed" />
      <div className="absolute inset-8 rounded-full border border-accentOrange/15" />
      <div className="absolute inset-24 rounded-full border border-dashed border-white/10" />
    </motion.div>
    {/* Inner glow - the forge fire */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accentOrange/20 rounded-full blur-3xl"
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0a0e1a_65%)]" />
  </div>
);

/* ───────────── Pipeline Step ───────────── */
const PipelineStep: React.FC<{
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  isLast?: boolean;
}> = ({ num, title, desc, icon: Icon, color, isLast }) => (
  <div className="flex items-start gap-4 relative">
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center shrink-0`}>
        <Icon size={18} className="text-white" />
      </div>
      {!isLast && <div className="w-[2px] h-full bg-white/10 mt-1" />}
    </div>
    <div className="pb-8">
      <div className="text-[10px] font-mono text-textSecondary mb-1">STEP {num}</div>
      <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
      <p className="text-xs text-textSecondary leading-relaxed">{desc}</p>
    </div>
  </div>
);

/* ───────────── Main Page ───────────── */
const ForgePage: React.FC = () => {
  const modules = [
    {
      id: '01',
      icon: Hammer,
      title: 'PROSPECTOR',
      subtitle: 'Descubrimiento de Alpha',
      desc: 'Genera cientos de hipótesis diarias combinando factores, reglas y regímenes de mercado. Busca alpha donde el humano no llega.',
    },
    {
      id: '02',
      icon: FlaskConical,
      title: 'CRUCIBLE',
      subtitle: 'El Crisol de Validación',
      desc: 'Walk-Forward, Monte Carlo, Stress Forge y Champion/Challenger automático. Solo sobreviven las estrategias que resisten todo.',
    },
    {
      id: '03',
      icon: Scale,
      title: 'ARBITER',
      subtitle: 'Atribución de Rendimiento',
      desc: 'Descompone el PnL en factores: skill vs luck vs mercado. Identifica qué funciona realmente y por qué.',
    },
    {
      id: '04',
      icon: RotateCcw,
      title: 'LIFECYCLE',
      subtitle: 'Gestión del Ciclo de Vida',
      desc: 'Monitoriza decay continuo, recomienda retiros, gestiona la transición Champion/Challenger en producción.',
    },
    {
      id: '05',
      icon: Archive,
      title: 'ARCHIVE',
      subtitle: 'Base de Conocimiento',
      desc: 'Preserva cada experimento: hipótesis, datos, resultados, decisiones. Nada se pierde. Todo se aprende.',
    },
  ];

  return (
    <div className="bg-bgPrimary min-h-screen relative overflow-hidden font-sans">
      <ForgeSparks />

      {/* Fixed side indicator */}
      <div className="fixed top-24 right-4 z-40 hidden lg:block">
        <div className="flex flex-col gap-2 items-end">
          <div className="text-[10px] font-mono text-accentOrange animate-pulse">FORGE RESEARCH</div>
          <div className="h-32 w-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ height: ['10%', '50%', '25%', '70%', '35%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-0 w-full bg-gradient-to-t from-accentOrange to-accentGold"
            />
          </div>
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* ── Back Link ── */}
          <Link
            to="/"
            className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/5"
          >
            <ArrowLeft size={14} className="mr-2" />
            Retorno a Base
          </Link>

          {/* ── Hero ── */}
          <div className="mb-24 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="border-l-2 border-accentOrange pl-6 ml-2 md:ml-0"
            >
              <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-4 text-white">
                FORGE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentOrange via-accentGold to-white opacity-80">
                  STRATEGY FOUNDRY
                </span>
              </h1>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 mt-12 items-start">
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-textPrimary font-light leading-relaxed">
                  Investigación cuantitativa automatizada para descubrir,
                  validar y evolucionar estrategias.
                  <br />
                  <span className="text-accentOrange font-bold bg-accentOrange/10 px-1">
                    El cerebro que piensa, aprende y evoluciona.
                  </span>
                </p>
                <p className="text-textSecondary mt-6 text-sm font-mono border-t border-white/10 pt-4">
                  // FORGE INVESTIGA. QUANT EJECUTA. SENTINEL VIGILA.
                </p>
              </div>

              <div className="hidden md:block flex-1 h-32 rounded-lg border border-white/10 relative overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-mono text-xs text-accentOrange tracking-[0.4em] font-bold opacity-80 animate-pulse">
                    ARCHITECTURE MODE
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 max-w-4xl border border-accentOrange/25 bg-accentOrange/5 rounded-xl px-5 py-4">
              <p className="text-xs md:text-sm text-textSecondary font-mono">
                ESTADO: BASTION FORGE ESTÁ EN FASE DE DISEÑO ARQUITECTÓNICO.
                <span className="text-white">
                  {' '}
                  La construcción se inicia tras estabilizar QUANT en producción (post-6.0). Arquitectura completa definida.
                </span>
              </p>
            </div>
          </div>

          {/* ── Ticker ── */}
          <Ticker />

          {/* ── 3 Status Cards ── */}
          <section className="mt-12 mb-20">
            <div className="grid md:grid-cols-3 gap-4">
              <GlassCard className="!bg-black/35 !border-accentOrange/20">
                <div className="text-xs font-mono text-accentOrange mb-2">PROBLEMA</div>
                <h3 className="text-white font-bold mb-2">Sin FORGE, el alpha es artesanal</h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Inventar estrategias manualmente es lento, sesgado y no escala.
                  Nadie detecta cuando una estrategia muere ni por qué ganó.
                </p>
              </GlassCard>
              <GlassCard className="!bg-black/35 !border-accentGold/20">
                <div className="text-xs font-mono text-accentGold mb-2">SOLUCIÓN</div>
                <h3 className="text-white font-bold mb-2">Industrializar el descubrimiento</h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  FORGE genera cientos de candidatas por día, las valida rigurosamente,
                  atribuye rendimiento por factores y gestiona el ciclo de vida completo.
                </p>
              </GlassCard>
              <GlassCard className="!bg-black/35 !border-accentCyan/20">
                <div className="text-xs font-mono text-accentCyan mb-2">PRINCIPIO</div>
                <h3 className="text-white font-bold mb-2">Investigar, nunca ejecutar</h3>
                <p className="text-xs text-textSecondary leading-relaxed">
                  FORGE es un laboratorio. Genera estrategias empaquetadas
                  listas para que QUANT las despliegue. Nunca toca órdenes reales.
                </p>
              </GlassCard>
            </div>
          </section>

          {/* ── Ecosystem Triangle ── */}
          <section className="mb-24 relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-accentOrange/5 to-transparent blur-xl -z-10" />

            <div className="border border-white/10 bg-[#050505] rounded-2xl overflow-hidden relative">
              <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Layers size={16} className="text-accentOrange" />
                  <span className="font-mono text-sm font-bold text-white tracking-wider">TRIÁNGULO BASTION</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accentOrange" />
                  <div className="w-2 h-2 rounded-full bg-accentDanger" />
                  <div className="w-2 h-2 rounded-full bg-accentCyan" />
                </div>
              </div>

              <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                {/* FORGE */}
                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4 opacity-50">
                    <Brain size={20} className="text-accentOrange" />
                  </div>
                  <div className="text-xs font-mono text-accentOrange mb-2">EL CEREBRO</div>
                  <h3 className="text-2xl font-bold text-white mb-4">FORGE</h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Función</span> <span className="text-white">Investigar</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Frecuencia</span> <span className="text-white">Batch (horas)</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Horizonte</span> <span className="text-accentOrange font-bold">Semanas-Meses</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-textSecondary bg-accentOrange/5 p-2 rounded border border-accentOrange/10">
                    Pensamiento profundo. Descubre, valida, evoluciona y archiva estrategias.
                  </div>
                </div>

                {/* QUANT */}
                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4 opacity-50">
                    <Sword size={20} className="text-accentCyan" />
                  </div>
                  <div className="text-xs font-mono text-accentCyan mb-2">LA MANO</div>
                  <h3 className="text-2xl font-bold text-white mb-4">QUANT</h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Funcion</span> <span className="text-white">Ejecutar</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Frecuencia</span> <span className="text-white">Por vela</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Horizonte</span> <span className="text-accentCyan font-bold">Min-Semanas</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-textSecondary bg-accentCyan/5 p-2 rounded border border-accentCyan/10">
                    Acciones. OMS, EMS, gestión de riesgo, órdenes reales y backtesting.
                  </div>
                </div>

                {/* SENTINEL */}
                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4 opacity-50">
                    <Eye size={20} className="text-accentDanger" />
                  </div>
                  <div className="text-xs font-mono text-accentDanger mb-2">EL OJO</div>
                  <h3 className="text-2xl font-bold text-white mb-4">SENTINEL</h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Función</span> <span className="text-white">Vigilar</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Frecuencia</span> <span className="text-white">1 Hz</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Horizonte</span> <span className="text-accentDanger font-bold">Seg-Minutos</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-textSecondary bg-accentDanger/5 p-2 rounded border border-accentDanger/10">
                    Reflejos. Riesgo de mercado, contexto macro, modulación de exposición.
                  </div>
                </div>
              </div>

              <div className="bg-accentOrange/10 p-3 text-center border-t border-accentOrange/20">
                <p className="text-xs font-mono text-accentOrange font-bold animate-pulse">
                  CADA SISTEMA ES AUTÓNOMO. JUNTOS FORMAN UN CICLO CERRADO DE MEJORA CONTINUA.
                </p>
              </div>
            </div>
          </section>

          {/* ── 5 Module Cards ── */}
          <div className="mt-24 mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-mono text-white flex items-center gap-2">
                <Flame className="text-accentOrange" /> MÓDULOS DE LA FRAGUA
              </h2>
              <span className="text-xs font-mono text-accentOrange animate-pulse">5 CORE MODULES</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {modules.map((m, i) => (
                <GlassCard
                  key={i}
                  className="group !bg-black/40 !border-white/5 hover:!border-accentOrange/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 -mr-4 -mt-4 rotate-45 group-hover:bg-accentOrange/20 transition-colors" />

                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl font-display font-bold text-white/5 group-hover:text-accentOrange group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300 select-none transform group-hover:scale-110 origin-left">
                      {m.id}
                    </div>
                    <m.icon size={20} className="text-textSecondary group-hover:text-accentOrange transition-colors" />
                  </div>

                  <h3 className="text-white font-bold mb-1 font-mono uppercase text-xs group-hover:text-accentOrange transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-[10px] text-accentOrange/60 font-mono mb-3">{m.subtitle}</p>
                  <p className="text-xs text-textSecondary leading-relaxed border-t border-white/5 pt-2">{m.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* ── Discovery Pipeline ── */}
          <section className="mb-24">
            <h2 className="text-2xl font-mono text-white flex items-center gap-2 mb-8">
              <GitBranch className="text-accentOrange" /> PIPELINE DE DESCUBRIMIENTO
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Pipeline steps */}
              <div className="border border-white/10 bg-[#050505] rounded-2xl p-8">
                <PipelineStep
                  num="01"
                  title="Generación de hipótesis"
                  desc="PROSPECTOR combina factores, reglas y regímenes para generar cientos de candidatas. Gramática evolutiva + búsqueda combinatoria."
                  icon={Search}
                  color="bg-accentOrange/20"
                />
                <PipelineStep
                  num="02"
                  title="Filtrado rápido"
                  desc="Backtest ligero descarta el 95%. Solo las que superan Sharpe mínimo, drawdown máximo y correlación baja avanzan al Crisol."
                  icon={Zap}
                  color="bg-accentGold/20"
                />
                <PipelineStep
                  num="03"
                  title="Validación rigurosa"
                  desc="CRUCIBLE aplica Walk-Forward, Monte Carlo (1000 permutaciones), Stress Forge y análisis de régimen. Duración: horas."
                  icon={FlaskConical}
                  color="bg-accentCyan/20"
                />
                <PipelineStep
                  num="04"
                  title="Atribución y empaquetado"
                  desc="ARBITER descompone el PnL en factores. Si el alpha es genuino, se empaqueta como StrategyPackage listo para QUANT."
                  icon={Package}
                  color="bg-accentViolet/20"
                />
                <PipelineStep
                  num="05"
                  title="Despliegue y monitoreo"
                  desc="LIFECYCLE gestiona Champion/Challenger en producción, detecta decay continuo y recomienda retiros cuando el alpha muere."
                  icon={RotateCcw}
                  color="bg-accentDanger/20"
                  isLast
                />
              </div>

              {/* Right: Stats + Strategy Package */}
              <div className="flex flex-col gap-4">
                <GlassCard className="!bg-black/35 !border-accentOrange/20">
                  <div className="text-xs font-mono text-accentOrange mb-4">MÉTRICAS PROYECTADAS</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-display font-bold text-white">500+</div>
                      <div className="text-xs text-textSecondary">Hipótesis/día</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-white">~5%</div>
                      <div className="text-xs text-textSecondary">Tasa supervivencia</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-accentOrange">1000</div>
                      <div className="text-xs text-textSecondary">Monte Carlo runs</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-accentGold">24h</div>
                      <div className="text-xs text-textSecondary">TTL validación</div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="!bg-black/35 !border-white/10 flex-1">
                  <div className="text-xs font-mono text-accentGold mb-4">STRATEGY PACKAGE</div>
                  <p className="text-xs text-textSecondary mb-4">
                    Cada estrategia aprobada se empaqueta como un artefacto inmutable
                    con todo lo necesario para desplegar en QUANT:
                  </p>
                  <div className="space-y-2 font-mono text-xs">
                    {[
                      'Código fuente de la estrategia',
                      'Parámetros optimizados + rangos',
                      'Risk limits (max drawdown, sizing)',
                      'Regime mappings (bull/bear/sideways)',
                      'Metadata de validación completa',
                      'Factor attribution report',
                      'Decay baseline metrics',
                      'Hash SHA-256 de integridad',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-textSecondary">
                        <div className="w-1 h-1 bg-accentOrange rounded-full shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </section>

          {/* ── Champion / Challenger ── */}
          <section className="mb-24 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accentGold/5 to-transparent blur-xl -z-10" />

            <h2 className="text-2xl font-mono text-white flex items-center gap-2 mb-8">
              <Trophy className="text-accentGold" /> CHAMPION / CHALLENGER
            </h2>

            <div className="border border-white/10 bg-[#050505] rounded-2xl overflow-hidden">
              <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                <span className="font-mono text-sm font-bold text-white tracking-wider">FRAMEWORK DE PROMOCIÓN</span>
                <div className="text-xs font-mono text-accentGold animate-pulse">ZERO DOWNTIME</div>
              </div>

              <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4">
                    <Ghost size={20} className="text-textSecondary opacity-50" />
                  </div>
                  <div className="text-xs font-mono text-accentCyan mb-2">FASE 1: SHADOW</div>
                  <h3 className="text-xl font-bold text-white mb-4">Modo Fantasma</h3>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    La nueva estrategia opera en shadow junto al champion.
                    Recibe las mismas señales pero no ejecuta órdenes reales.
                    FORGE compara métricas en tiempo real.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-[10px] bg-accentCyan/10 text-accentCyan px-2 py-1 rounded font-mono">7-14 DÍAS</span>
                    <span className="text-[10px] bg-white/5 text-textSecondary px-2 py-1 rounded font-mono">SIN RIESGO</span>
                  </div>
                </div>

                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4">
                    <BarChart3 size={20} className="text-textSecondary opacity-50" />
                  </div>
                  <div className="text-xs font-mono text-accentGold mb-2">FASE 2: CANARY</div>
                  <h3 className="text-xl font-bold text-white mb-4">Capital Parcial</h3>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    Si supera shadow, recibe 10-25% del capital asignado.
                    Métricas en vivo vs champion. Rollback automático si
                    drawdown excede umbral.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-[10px] bg-accentGold/10 text-accentGold px-2 py-1 rounded font-mono">14-30 DÍAS</span>
                    <span className="text-[10px] bg-white/5 text-textSecondary px-2 py-1 rounded font-mono">RIESGO LIMITADO</span>
                  </div>
                </div>

                <div className="p-8 relative group hover:bg-white/5 transition-colors">
                  <div className="absolute top-4 right-4">
                    <Trophy size={20} className="text-textSecondary opacity-50" />
                  </div>
                  <div className="text-xs font-mono text-accentOrange mb-2">FASE 3: PROMOTION</div>
                  <h3 className="text-xl font-bold text-white mb-4">Nuevo Champion</h3>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    Si supera al champion en Sharpe, drawdown y correlación,
                    FORGE recomienda promoción. Se valida por gobernanza. El antiguo
                    champion pasa a archive.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-[10px] bg-accentOrange/10 text-accentOrange px-2 py-1 rounded font-mono">APROBACIÓN HUMANA</span>
                    <span className="text-[10px] bg-white/5 text-textSecondary px-2 py-1 rounded font-mono">FULL CAPITAL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Strategy Decay Detection ── */}
          <section className="mb-24">
            <h2 className="text-2xl font-mono text-white flex items-center gap-2 mb-8">
              <TrendingDown className="text-accentDanger" /> DETECCIÓN DE DECAY
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <GlassCard className="!bg-black/35 !border-accentDanger/20">
                <div className="text-xs font-mono text-accentDanger mb-4">SEÑALES DE DECAY</div>
                <div className="space-y-3">
                  {[
                    { signal: 'Sharpe decae >40% vs baseline', level: 'WARNING' },
                    { signal: 'Drawdown supera 2x histórico', level: 'CRITICAL' },
                    { signal: 'Win-rate cae >20% en ventana móvil', level: 'WARNING' },
                    { signal: 'Correlación con mercado sube >0.8', level: 'CRITICAL' },
                    { signal: 'Factor exposure cambia de signo', level: 'REVIEW' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                      <span className="text-textSecondary">{item.signal}</span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          item.level === 'CRITICAL'
                            ? 'bg-accentDanger/20 text-accentDanger'
                            : item.level === 'WARNING'
                            ? 'bg-accentGold/20 text-accentGold'
                            : 'bg-accentCyan/20 text-accentCyan'
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="!bg-black/35 !border-accentOrange/20">
                <div className="text-xs font-mono text-accentOrange mb-4">PROTOCOLO DE RETIRO</div>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded bg-accentGold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-accentGold">1</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Alerta temprana</p>
                      <p className="text-xs text-textSecondary">LIFECYCLE detecta anomalía, reduce sizing 50%</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded bg-accentOrange/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-accentOrange">2</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Periodo de gracia</p>
                      <p className="text-xs text-textSecondary">14 días para recuperarse o confirmar decay</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded bg-accentDanger/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-accentDanger">3</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Retiro y archivo</p>
                      <p className="text-xs text-textSecondary">Estrategia retirada, archivada en ARCHIVE con post-mortem completo</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* ── Innegociables ── */}
          <section className="mb-24">
            <h2 className="text-2xl font-mono text-white flex items-center gap-2 mb-8">
              <Shield className="text-accentOrange" /> PRINCIPIOS INNEGOCIABLES
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { title: 'Solo QUANT ejecuta', desc: 'FORGE nunca envía órdenes al exchange' },
                { title: 'Validación triple', desc: 'Walk-Forward + Monte Carlo + Stress obligatorios' },
                { title: 'Aprobación humana', desc: 'Toda promoción requiere confirmación de gobernanza' },
                { title: 'Inmutabilidad', desc: 'StrategyPackage firmado, nunca se modifica post-deploy' },
                { title: 'Archive total', desc: 'Ningún experimento se borra. Todo se preserva' },
              ].map((p, i) => (
                <GlassCard key={i} className="!bg-black/40 !border-white/5 !p-4">
                  <div className="text-accentOrange font-bold text-xs font-mono mb-2 uppercase">{p.title}</div>
                  <p className="text-[11px] text-textSecondary leading-relaxed">{p.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* ── Bottom Cards ── */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-4">
              <GlassCard className="!bg-black/30">
                <h3 className="text-white font-bold mb-2">Propuesta de valor</h3>
                <p className="text-sm text-textSecondary leading-relaxed mb-3">
                  FORGE convierte investigación cuantitativa en una capacidad industrial: más candidatos, mejor validación y
                  decisiones de despliegue con mayor evidencia.
                </p>
                <div className="space-y-2 text-xs font-mono text-textSecondary">
                  <p>1. Descubrir alpha de forma sistemática.</p>
                  <p>2. Reducir sesgo humano en validación.</p>
                  <p>3. Acelerar ciclo idea - validación - producción.</p>
                </div>
              </GlassCard>
              <GlassCard className="!bg-black/30">
                <h3 className="text-white font-bold mb-2">Principio de independencia</h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  QUANT puede operar sin FORGE con estrategias manuales (estado actual).
                  FORGE puede funcionar como lab de investigación puro sin QUANT ni SENTINEL.
                  Los tres juntos cierran el ciclo: descubrir, vigilar, ejecutar, medir, aprender.
                </p>
              </GlassCard>
            </div>
          </section>

          {/* ── Footer Text ── */}
          <div className="text-center opacity-35 font-mono text-xs mb-12">
            <p>FORGE PROGRAM: ARCHITECTURE REFERENCE v0.1</p>
            <p>STATUS: DESIGN PHASE — CONSTRUCTION POST-6.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgePage;
