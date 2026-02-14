import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldOff,
  EyeOff,
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
            Plataforma cuantitativa con validacion estadistica, control operativo por capas y trazabilidad completa de
            decisiones. Fase 3.4 en ejecucion con ruta definida hasta 6.0.
            <br />
            <strong className="text-white">No es un bot. Es infraestructura financiera.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link to="/catalog" className="w-full md:w-auto">
              <button className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-accentCyan to-accentViolet text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center border border-white/10">
                Explorar Infraestructura
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/sentinel" className="w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-accentCyan/50 transition-all flex items-center justify-center backdrop-blur-md">
                Descubrir SENTINEL
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
              Los bots retail te estan <span className="text-accentDanger">mintiendo</span>.
            </h2>
            <p className="text-textSecondary max-w-3xl mx-auto">
              El problema no es la promesa comercial. El problema es operar sin disciplina matematica, validacion robusta y
              control institucional de riesgo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calculator,
                id: '01',
                tag: 'RIESGO CONTABLE',
                title: 'Aritmetica no determinista',
                description:
                  'Usan float para dinero. El error acumulado no se ve en una operacion; se ve al final del trimestre.',
                impact: 'Impacto: PnL distorsionado y sizing mal calibrado.',
                cover: 'Cobertura BASTION: calculo decimal en toda la cadena.',
              },
              {
                icon: EyeOff,
                id: '02',
                tag: 'RIESGO DE MODELO',
                title: 'Backtesting de escaparate',
                description:
                  'Confunden demostracion con validacion. El resultado parece brillante hasta que enfrenta mercado real.',
                impact: 'Impacto: expectativa inflada y sobreexposicion.',
                cover: 'Cobertura BASTION: walk-forward, Monte Carlo y stress testing.',
              },
              {
                icon: ShieldOff,
                id: '03',
                tag: 'RIESGO OPERATIVO',
                title: 'Sin protocolo de contingencia',
                description:
                  'Cuando falla exchange, red o reconciliacion, el sistema queda sin gobierno y reacciona tarde.',
                impact: 'Impacto: perdidas evitables en escenarios extremos.',
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
              Precision financiera por defecto.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-textSecondary">
              Validacion estadistica antes de capital.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-textSecondary">
              Protocolo de seguridad antes de ejecucion.
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
                El programa avanza en Safety y Observabilidad (3.4-3.5), seguido de ejecucion tactica (3.6-3.9), mando y
                control (4.x), operaciones (4.3-4.5) y salida a produccion (5.0-6.0).
              </p>
            </div>
            <Link
              to="/catalog"
              className="text-accentCyan hover:text-accentViolet transition-colors mt-4 md:mt-0 font-mono text-sm flex items-center"
            >
              Ver catalogo completo <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="w-full bg-bgSecondary h-4 rounded-full mb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accentCyan to-accentViolet w-[63%]" />
            <div className="absolute top-0 left-0 h-full w-full hidden md:flex text-[10px] font-mono font-bold text-white/50 items-center justify-between px-4">
              <span>Base</span>
              <span>Safety</span>
              <span>Operacion</span>
              <span>Produccion</span>
            </div>
          </div>
          <p className="md:hidden text-[11px] font-mono text-textSecondary text-center -mt-8 mb-8">
            Estado actual: Safety 3.4 -&gt; Objetivo: Produccion 6.0
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
              El Nucleo Neuronal
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-8 hidden lg:block">
              <GlassCard hoverEffect className="border-l-4 border-l-accentCyan">
                <div className="flex items-center gap-3 mb-2">
                  <Network className="text-accentCyan" size={20} />
                  <h3 className="font-bold text-white">NEXUS</h3>
                </div>
                <p className="text-sm text-textSecondary">
                  Escaneo multi-activo del universo operable. Analisis de correlacion y deteccion de liquidez en tiempo real.
                </p>
              </GlassCard>
              <GlassCard hoverEffect className="border-l-4 border-l-accentViolet">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="text-accentViolet" size={20} />
                  <h3 className="font-bold text-white">PHOENIX</h3>
                </div>
                <p className="text-sm text-textSecondary">
                  Auto-calibracion de parametros. Si la estrategia falla, se apaga sola y se reconstruye.
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
                  Fusion de datos. Combina senales tecnicas (micro) con riesgo de mercado (macro) para la decision final.
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
              <p className="text-sm text-textSecondary">Escaneo de universo y deteccion de liquidez.</p>
            </GlassCard>
            <GlassCard className="border-l-4 border-l-accentViolet">
              <h3 className="font-bold text-white mb-1">PHOENIX</h3>
              <p className="text-sm text-textSecondary">Auto-calibracion y regeneracion de estrategia.</p>
            </GlassCard>
            <GlassCard className="border-l-4 border-l-accentGold">
              <h3 className="font-bold text-white mb-1">SYMBIOSIS</h3>
              <p className="text-sm text-textSecondary">Fusion de inteligencia micro + macro.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMAND & CONTROL */}
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
              Comandos criticos, confirmaciones reforzadas y trazabilidad para decisiones de alta sensibilidad.
            </p>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-center">
                <span className="text-accentCyan">/estado</span>
                <span className="text-textSecondary">Resumen ejecutivo y PnL diario.</span>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-center">
                <span className="text-accentDanger">/kill</span>
                <span className="text-textSecondary">Boton de panico (requiere 2FA).</span>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/5 flex gap-3 items-center">
                <span className="text-accentGold">/pausa</span>
                <span className="text-textSecondary">Detiene nuevas entradas, gestiona salidas.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPARISON */}
      <section className="py-24 px-4 bg-bgSecondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Por que no un bot retail de $29/mes?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-textSecondary font-normal">Capacidad</th>
                  <th className="py-4 px-4 text-center text-textSecondary font-normal">Bots Retail</th>
                  <th className="py-4 px-4 text-center text-accentCyan font-bold">BASTION QUANT</th>
                </tr>
              </thead>
              <tbody>
                {retailComparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.retail ? <Check className="inline text-green-500" size={18} /> : <X className="inline text-red-500" size={18} />}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.bastion ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accentCyan/20 text-accentCyan">
                          <Check size={14} />
                        </div>
                      ) : (
                        <X size={18} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center bg-accentCyan/5 p-6 rounded-xl border border-accentCyan/10">
            <p className="text-lg text-accentCyan font-display font-bold">
              Los bots retail hacen 3 de estas cosas. BASTION QUANT las hace TODAS.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bgPrimary to-accentViolet/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Esto no es un bot.</h2>
          <p className="text-xl md:text-2xl text-textSecondary mb-12">Es infraestructura de trading cuantitativo institucional.</p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/catalog">
              <button className="px-10 py-5 bg-white text-bgPrimary font-bold rounded-full hover:scale-105 transition-transform">
                Explorar el Catalogo Completo
              </button>
            </Link>
            <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors cursor-not-allowed">
              Acceso Privado
            </button>
          </div>

          <p className="mt-12 text-sm text-textSecondary font-mono">Construido fase a fase. Sin cajas negras.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
