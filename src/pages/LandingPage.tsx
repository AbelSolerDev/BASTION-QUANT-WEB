import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldOff,
  EyeOff,
  Eye,
  Calculator,
  Check,
  X,
  ShieldCheck,
  Cpu,
  Network,
  Zap,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Terminal from '../components/Terminal';
import HolographicCore from '../components/HolographicCore';
import MatrixBackground from '../components/MatrixBackground';
import { Link } from 'react-router-dom';
import { retailComparison, features } from '../data';
import * as Icons from 'lucide-react';

const LandingPage: React.FC = () => {
  const [featureTab, setFeatureTab] = useState('Todos');

  const previewFeatures = features
    .filter((f) => featureTab === 'Todos' || f.block === featureTab)
    .slice(0, 9);

  return (
    <div className="bg-bgPrimary overflow-hidden relative">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-bgPrimary z-0" />

        <div className="absolute inset-0 z-0">
          <MatrixBackground />
        </div>

        <div className="absolute inset-0 mesh-gradient opacity-15 md:opacity-30 z-0 mix-blend-screen" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-bgPrimary/80 via-transparent to-bgPrimary" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0e1a_90%)]" />

        <div className="z-10 max-w-4xl mx-auto space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-accentCyan font-mono text-sm tracking-widest uppercase mb-6"
          >
            <ShieldCheck size={16} className="animate-pulse" />
            <span className="border border-accentCyan/30 px-3 py-1 rounded bg-accentCyan/5 backdrop-blur-sm">
              Institutional-Grade Crypto Trading
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Tu propio{' '}
            <span className="md:hidden text-cyan-200 [text-shadow:0_0_16px_rgba(34,211,238,0.75)]">
              hedge fund
            </span>
            <span className="hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-accentCyan via-white to-accentViolet animate-gradient-x">
              hedge fund
            </span>
            <br />
            en un solo sistema.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            Plataforma cuantitativa con validación estadística, control operativo por capas y trazabilidad completa de
            decisiones. Fase 3.4 en ejecución con ruta definida hasta 6.0.
            <br />
            <strong className="text-white">No es un bot. Es infraestructura financiera.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link to="/catalog" className="w-full md:w-auto">
              <button className="group relative w-full md:w-auto rounded-full p-[1px] bg-gradient-to-r from-accentCyan via-white/70 to-accentViolet hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all">
                <span className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0b1222]/95 text-white font-bold tracking-[0.02em] group-hover:bg-[#0f1830]/95 transition-colors">
                  Explorar Infraestructura
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            <Link to="/sentinel" className="w-full md:w-auto">
              <button className="group w-full md:w-auto px-8 py-4 border border-accentDanger/40 text-accentDanger font-bold rounded-full hover:bg-accentDanger/10 hover:border-accentDanger transition-all flex items-center justify-center backdrop-blur-md">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accentDanger group-hover:animate-pulse" />
                  Descubrir SENTINEL
                </span>
              </button>
            </Link>
            <Link to="/forge" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 border border-accentOrange/35 text-accentOrange font-bold rounded-full hover:bg-accentOrange/10 hover:border-accentOrange transition-all flex items-center justify-center backdrop-blur-md">
                Descubrir FORGE
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 mt-12 bg-black/20 backdrop-blur-sm rounded-xl p-4"
          >
            <div>
              <div className="text-3xl font-mono font-bold text-white">27/43</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Fases Completadas</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-white">237</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Tests Validados</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-white">33</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Tablas Auditables</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-accentSuccess">78 -&gt; 90</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Score Institucional</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="py-24 px-4 bg-gradient-to-b from-bgSecondary to-[#0c1221] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accentDanger/30 bg-accentDanger/10 text-[11px] font-mono text-accentDanger uppercase tracking-wider mb-4">
              Reality Check
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Los bots retail te están <span className="text-accentDanger">mintiendo</span>.
            </h2>
            <p className="text-textSecondary max-w-3xl mx-auto">
              El problema no es la promesa comercial. El problema es operar sin disciplina matemática, validación robusta y
              control institucional de riesgo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calculator,
                id: '01',
                tag: 'RIESGO CONTABLE',
                title: 'Aritmética no determinista',
                description:
                  'Usan float para dinero. El error acumulado no se ve en una operación; se ve al final del trimestre.',
                impact: 'Impacto: PnL distorsionado y sizing mal calibrado.',
                cover: 'Cobertura BASTION: cálculo decimal en toda la cadena.',
              },
              {
                icon: EyeOff,
                id: '02',
                tag: 'RIESGO DE MODELO',
                title: 'Backtesting de escaparate',
                description:
                  'Confunden demostración con validación. El resultado parece brillante hasta que enfrenta mercado real.',
                impact: 'Impacto: expectativa inflada y sobreexposición.',
                cover: 'Cobertura BASTION: walk-forward, Monte Carlo y stress testing.',
              },
              {
                icon: ShieldOff,
                id: '03',
                tag: 'RIESGO OPERATIVO',
                title: 'Sin protocolo de contingencia',
                description:
                  'Cuando falla exchange, red o reconciliación, el sistema queda sin gobierno y reacciona tarde.',
                impact: 'Impacto: pérdidas evitables en escenarios extremos.',
                cover: 'Cobertura BASTION: kill protocol, safety gates y trazabilidad.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-black/25 p-6 overflow-hidden hover:border-accentCyan/35 transition-colors"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_45%)] pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-lg bg-accentDanger/10 border border-accentDanger/25 flex items-center justify-center text-accentDanger">
                        <Icon size={20} />
                      </div>
                      <span className="text-4xl font-display font-bold text-white/10">{item.id}</span>
                    </div>
                    <p className="text-[11px] font-mono tracking-wider text-accentDanger uppercase mb-2">{item.tag}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-textSecondary leading-relaxed">{item.description}</p>
                    <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                      <p className="text-xs text-white">{item.impact}</p>
                      <p className="text-xs text-accentCyan font-mono">{item.cover}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-textSecondary">
              Precisión financiera por defecto.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-textSecondary">
              Validación estadística antes de capital.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-textSecondary">
              Protocolo de seguridad antes de ejecución.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURE MAP & FUTURE STATE */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-accentCyan">{features.length}</span> Capacidades documentadas.{' '}
                <span className="text-accentSuccess">27/43</span> fases completadas.
              </h2>
              <p className="text-textSecondary max-w-xl">
                El programa avanza en Safety y Observabilidad (3.4-3.5), seguido de ejecución táctica (3.6-3.9), mando y
                control (4.x), operaciones (4.3-4.5) y salida a producción (5.0-6.0).
              </p>
            </div>
            <Link
              to="/catalog"
              className="text-accentCyan hover:text-accentViolet transition-colors mt-4 md:mt-0 font-mono text-sm flex items-center"
            >
              Ver catálogo completo <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="w-full bg-bgSecondary h-4 rounded-full mb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accentCyan to-accentViolet w-[63%]" />
            <div className="absolute top-0 left-0 h-full w-full hidden md:flex text-[10px] font-mono font-bold text-white/50 items-center justify-between px-4">
              <span>Base</span>
              <span>Safety</span>
              <span>Operación</span>
              <span>Producción</span>
            </div>
          </div>
          <p className="md:hidden text-[11px] font-mono text-textSecondary text-center -mt-8 mb-8">
            Estado actual: Safety 3.4 -&gt; Objetivo: Producción 6.0
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Todos', 'A-C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K-L', 'M', 'N', 'O'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFeatureTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                  featureTab === tab ? 'bg-white text-bgPrimary font-bold' : 'bg-white/5 text-textSecondary hover:bg-white/10'
                }`}
              >
                {tab === 'Todos' ? 'Todos' : `Bloque ${tab}`}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewFeatures.map((feature) => {
              // @ts-ignore
              const IconComponent = Icons[feature.icon] || Icons.HelpCircle;
              return (
                <GlassCard key={feature.id} hoverEffect className="group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white/5 rounded-lg text-accentCyan group-hover:text-white transition-colors">
                      <IconComponent size={20} />
                    </div>
                    <Badge status={feature.status} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accentCyan transition-colors">{feature.name}</h3>
                  <p className="text-sm text-textSecondary">{feature.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE NEURAL CORE */}
      <section className="py-24 px-4 bg-[#05070d] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-mono text-xs text-accentCyan mb-4"
            >
              ARQUITECTURA DE IA DISTRIBUIDA
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Motor Neuronal de QUANT
            </h2>
            <p className="text-xs md:text-sm font-mono text-textSecondary mt-3">
              Inteligencia de ejecución operativa. El cerebro estratégico vive en FORGE.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-8 hidden lg:block">
              <GlassCard hoverEffect className="border-l-4 border-l-accentCyan">
                <div className="flex items-center gap-3 mb-2">
                  <Network className="text-accentCyan" size={20} />
                  <h3 className="font-bold text-white">NEXUS</h3>
                </div>
                <p className="text-sm text-textSecondary">
                  Escaneo multi-activo del universo operable. Análisis de correlación y detección de liquidez en tiempo real.
                </p>
              </GlassCard>
              <GlassCard hoverEffect className="border-l-4 border-l-accentViolet">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="text-accentViolet" size={20} />
                  <h3 className="font-bold text-white">PHOENIX</h3>
                </div>
                <p className="text-sm text-textSecondary">
                  Auto-calibración de parámetros. Si la estrategia falla, se apaga sola y se reconstruye.
                </p>
              </GlassCard>
            </div>

            <div className="flex justify-center scale-125 lg:scale-100">
              <HolographicCore />
            </div>

            <div className="space-y-8 hidden lg:block">
              <GlassCard hoverEffect className="border-r-4 border-r-accentGold text-right">
                <div className="flex items-center gap-3 mb-2 justify-end">
                  <h3 className="font-bold text-white">SYMBIOSIS</h3>
                  <Zap className="text-accentGold" size={20} />
                </div>
                <p className="text-sm text-textSecondary">
                  Fusión de datos. Combina señales técnicas (micro) con riesgo de mercado (macro) para la decisión final.
                </p>
              </GlassCard>

              <div className="text-right p-6">
                <h4 className="font-mono text-xs text-textSecondary mb-2">VELOCIDAD DE PROCESAMIENTO</h4>
                <div className="text-4xl font-display font-bold text-white">
                  12<span className="text-accentCyan">ms</span>
                </div>
                <p className="text-xs text-white/40 mt-1">Latencia interna promedio</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 mt-8 lg:hidden">
            <GlassCard className="border-l-4 border-l-accentCyan">
              <h3 className="font-bold text-white mb-1">NEXUS</h3>
              <p className="text-sm text-textSecondary">Escaneo de universo y detección de liquidez.</p>
            </GlassCard>
            <GlassCard className="border-l-4 border-l-accentViolet">
              <h3 className="font-bold text-white mb-1">PHOENIX</h3>
              <p className="text-sm text-textSecondary">Auto-calibración y regeneración de estrategia.</p>
            </GlassCard>
            <GlassCard className="border-l-4 border-l-accentGold">
              <h3 className="font-bold text-white mb-1">SYMBIOSIS</h3>
              <p className="text-sm text-textSecondary">Fusión de inteligencia micro + macro.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 5: BASTION TRINITY */}
      <section className="py-24 px-4 bg-[#060a12] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(6,182,212,0.16),transparent_38%),radial-gradient(circle_at_80%_85%,rgba(239,68,68,0.15),transparent_35%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.035)_40%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono text-textSecondary uppercase tracking-wider mb-4">
              Arquitectura BASTION
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Tres inteligencias. Un solo bastión.</h2>
            <p className="text-textSecondary max-w-3xl mx-auto">
              FORGE piensa la estrategia, QUANT ejecuta con disciplina y SENTINEL vigila el entorno macro. Así se evita
              confundir investigación con ejecución.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <motion.article
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-5 rounded-2xl border border-accentOrange/35 bg-[#1a0f08]/70 backdrop-blur-md p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_50%)]" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-accentOrange/35 bg-accentOrange/15 text-accentOrange text-[11px] font-mono uppercase tracking-wider">
                    <Cpu size={12} />
                    FORGE
                  </div>
                  <span className="text-white/20 font-display text-2xl">Cerebro Estratégico</span>
                </div>
                <p className="text-white font-semibold mb-4">Descubre, valida y evoluciona estrategias antes de tocar capital real.</p>
                <div className="space-y-2 text-sm">
                  <p className="text-textSecondary border-b border-white/10 pb-2">Prospector de hipótesis y filtros multi-capa.</p>
                  <p className="text-textSecondary border-b border-white/10 pb-2">Champion/Challenger con detección de decay.</p>
                  <p className="text-textSecondary">Entrega paquetes listos para despliegue en QUANT.</p>
                </div>
                <Link to="/forge" className="inline-flex mt-5 items-center gap-2 text-accentOrange font-mono text-xs hover:text-white transition-colors">
                  Ver FORGE <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>

            <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
              <div className="h-full min-h-[280px] w-full flex flex-col items-center justify-center gap-3">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                <div className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono text-textSecondary uppercase tracking-wider">
                  Diseña
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                <div className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono text-textSecondary uppercase tracking-wider">
                  Ejecuta
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                <div className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono text-textSecondary uppercase tracking-wider">
                  Protege
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-5">
              <motion.article
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="rounded-2xl border border-accentCyan/35 bg-[#081524]/70 backdrop-blur-md p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.22),transparent_50%)]" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-accentCyan/35 bg-accentCyan/15 text-accentCyan text-[11px] font-mono uppercase tracking-wider mb-3">
                    <Network size={12} />
                    QUANT
                  </div>
                  <p className="text-white font-semibold mb-2">Núcleo operativo de ejecución.</p>
                  <p className="text-sm text-textSecondary">
                    Decide entradas y salidas con reglas verificables, control de riesgo y trazabilidad total.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-2xl border border-accentDanger/35 bg-[#1a0b12]/70 backdrop-blur-md p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_50%)]" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-accentDanger/35 bg-accentDanger/15 text-accentDanger text-[11px] font-mono uppercase tracking-wider mb-3">
                    <Eye size={12} />
                    SENTINEL
                  </div>
                  <p className="text-white font-semibold mb-2">Overwatch macro y modulación de riesgo.</p>
                  <p className="text-sm text-textSecondary">
                    Aporta contexto externo y overlays preventivos, sin invadir la autoridad de ejecución de QUANT.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMAND & CONTROL */}
      <section className="py-24 px-4 bg-bgPrimary">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <Terminal />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded bg-accentViolet/10 text-accentViolet text-xs font-mono mb-4">
              MANDO Y CONTROL
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Opera con un centro de mando institucional.
            </h2>
            <p className="text-textSecondary mb-6">
              Comandos críticos, confirmaciones reforzadas y trazabilidad para decisiones de alta sensibilidad.
            </p>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-center">
                <span className="text-accentCyan">/estado</span>
                <span className="text-textSecondary">Resumen ejecutivo y PnL diario.</span>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-center">
                <span className="text-accentDanger">/kill</span>
                <span className="text-textSecondary">Botón de pánico (requiere 2FA).</span>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-center">
                <span className="text-accentGold">/pausa</span>
                <span className="text-textSecondary">Detiene nuevas entradas, gestiona salidas.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMPARISON */}
      <section className="py-28 px-4 bg-[#0b1222] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.14),transparent_45%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono text-textSecondary uppercase tracking-wider mb-4">
              Operational Benchmark
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Por qué BASTION QUANT no compite en la liga retail.
            </h2>
            <p className="text-textSecondary max-w-3xl mx-auto">
              Esta comparativa no habla de precio. Habla de estándares de seguridad, control operativo y trazabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Riesgo',
                subtitle: 'Protección por capas antes de ejecutar',
                note: 'Gates de seguridad activos',
                icon: ShieldCheck,
                tone: 'danger',
              },
              {
                title: 'Ejecucion',
                subtitle: 'Disciplina operativa con reglas verificables',
                note: 'Pipeline único de escritura',
                icon: Zap,
                tone: 'gold',
              },
              {
                title: 'Auditoria',
                subtitle: 'Trazabilidad para decisiones de alto impacto',
                note: 'Registro inmutable y reproducible',
                icon: Cpu,
                tone: 'cyan',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              const toneMap = {
                danger: {
                  border: 'border-accentDanger/35',
                  chip: 'text-accentDanger bg-accentDanger/15 border-accentDanger/30',
                  glow: 'bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_55%)]',
                },
                gold: {
                  border: 'border-accentGold/35',
                  chip: 'text-accentGold bg-accentGold/15 border-accentGold/30',
                  glow: 'bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.20),transparent_55%)]',
                },
                cyan: {
                  border: 'border-accentCyan/35',
                  chip: 'text-accentCyan bg-accentCyan/15 border-accentCyan/30',
                  glow: 'bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.22),transparent_55%)]',
                },
              } as const;
              const tone = toneMap[pillar.tone as keyof typeof toneMap];
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-2xl border ${tone.border} bg-[#0a101f]/90 p-5 overflow-hidden`}
                >
                  <div className={`absolute inset-0 pointer-events-none ${tone.glow}`} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md border text-[11px] font-mono uppercase tracking-wider ${tone.chip}`}>
                        <Icon size={12} />
                        {pillar.title}
                      </div>
                      <span className="text-3xl font-display text-white/10">{pillar.title.slice(0, 1)}</span>
                    </div>
                    <p className="text-white font-semibold leading-snug mb-3">{pillar.subtitle}</p>
                    <div className="h-px w-full bg-white/10 mb-3" />
                    <p className="text-xs font-mono text-textSecondary">{pillar.note}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md overflow-hidden">
            <div className="hidden md:grid grid-cols-[1.4fr_0.8fr_0.8fr] border-b border-white/10 bg-white/5">
              <div className="px-6 py-4 text-textSecondary font-mono text-xs uppercase tracking-wider">Capacidad</div>
              <div className="px-6 py-4 text-center text-textSecondary font-mono text-xs uppercase tracking-wider">Retail</div>
              <div className="px-6 py-4 text-center text-accentCyan font-mono text-xs uppercase tracking-wider">BASTION QUANT</div>
            </div>

            <div className="divide-y divide-white/10">
              {retailComparison.map((row, idx) => (
                <div
                  key={idx}
                  className="grid md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-3 md:gap-0 px-4 md:px-6 py-4 hover:bg-white/5 transition-colors"
                >
                  <div className="text-white font-medium md:pr-6">{row.feature}</div>
                  <div className="flex items-center md:justify-center">
                    <span className="md:hidden text-[10px] font-mono text-textSecondary uppercase mr-2">Retail</span>
                    {row.retail ? (
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accentSuccess/10 text-accentSuccess border border-accentSuccess/20 text-xs font-mono">
                        <Check size={12} /> Sí
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accentDanger/10 text-accentDanger border border-accentDanger/20 text-xs font-mono">
                        <X size={12} /> No
                      </div>
                    )}
                  </div>
                  <div className="flex items-center md:justify-center">
                    <span className="md:hidden text-[10px] font-mono text-textSecondary uppercase mr-2">BASTION</span>
                    {row.bastion ? (
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accentCyan/10 text-accentCyan border border-accentCyan/20 text-xs font-mono">
                        <Check size={12} /> Sí
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accentDanger/10 text-accentDanger border border-accentDanger/20 text-xs font-mono">
                        <X size={12} /> No
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-accentCyan/20 bg-accentCyan/8 px-5 py-4 text-center">
            <p className="text-base md:text-lg text-accentCyan font-display font-bold">
              BASTION QUANT se posiciona como infraestructura privada, no como suscripción masiva.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-bgPrimary z-0" />
        <div className="absolute inset-0 z-0 opacity-100">
          <MatrixBackground />
        </div>
        <div className="absolute inset-0 z-0 mesh-gradient opacity-55 mix-blend-screen" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.32),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.34),transparent_48%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(10,14,26,0.32)_0%,rgba(10,14,26,0.58)_100%)]" />
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_5px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-black/10 backdrop-blur-sm px-6 md:px-12 py-14">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Esto no es un bot.</h2>
          <p className="text-xl md:text-2xl text-textSecondary mb-12">Es infraestructura de trading cuantitativo institucional.</p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/catalog">
              <button className="px-10 py-5 bg-white text-bgPrimary font-bold rounded-full hover:scale-105 transition-transform">
                Explorar el Catálogo Completo
              </button>
            </Link>
            <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors cursor-not-allowed">
              Acceso por Evaluación
            </button>
          </div>

          <p className="mt-12 text-sm text-textSecondary font-mono">Construido fase a fase. Sin cajas negras.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
