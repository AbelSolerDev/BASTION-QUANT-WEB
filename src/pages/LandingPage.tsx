import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldOff, EyeOff, Calculator, Check, X, ShieldCheck, Cpu, Network, Zap } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Terminal from '../components/Terminal';
import HolographicCore from '../components/HolographicCore'; // Nuevo componente
import MatrixBackground from '../components/MatrixBackground';
import { Link } from 'react-router-dom';
import { retailComparison, features } from '../data';
import * as Icons from 'lucide-react';

const LandingPage: React.FC = () => {
  const [featureTab, setFeatureTab] = useState('Todos');

  // Filter features for the preview grid
  const previewFeatures = features.filter(f => featureTab === 'Todos' || f.block === featureTab).slice(0, 9);

  return (
    <div className="bg-bgPrimary overflow-hidden relative">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
        {/* FONDO BASE */}
        <div className="absolute inset-0 bg-bgPrimary z-0" />
        
        {/* EFECTO MATRIX / ALGORITMO */}
        <div className="absolute inset-0 z-0">
           <MatrixBackground />
        </div>

        {/* MESH GRADIENT */}
        <div className="absolute inset-0 mesh-gradient opacity-30 z-0 mix-blend-screen" />

        {/* VINETTE OVERLAY */}
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
            <span className="border border-accentCyan/30 px-3 py-1 rounded bg-accentCyan/5 backdrop-blur-sm">Institutional-Grade Crypto Trading</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Tu propio <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan via-white to-accentViolet animate-gradient-x">hedge fund</span><br />
            en un solo sistema.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            Motor de backtesting bidireccional, 4 estrategias cuantitativas, OMS institucional, 
            auto-calibración PHOENIX, y 222 tests en verde. <br/>
            <strong className="text-white">No es un bot. Es infraestructura financiera.</strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link to="/catalog">
              <button className="group px-8 py-4 bg-gradient-to-r from-accentCyan to-accentViolet text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center border border-white/10">
                Explorar Infraestructura 
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/sentinel">
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-accentCyan/50 transition-all flex items-center backdrop-blur-md">
                Descubrir SENTINEL
              </button>
            </Link>
          </motion.div>

          {/* Stat Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 mt-12 bg-black/20 backdrop-blur-sm rounded-xl p-4"
          >
            <div>
              <div className="text-3xl font-mono font-bold text-white">55</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Capacidades</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-white">222</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Tests Auto</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-white">33</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Tablas BD</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-accentSuccess">78/100</div>
              <div className="text-xs text-textSecondary uppercase tracking-widest">Score Inst.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="py-24 px-4 bg-bgSecondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Los bots retail te están <span className="text-accentDanger">mintiendo</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="border-accentDanger/30">
              <div className="w-12 h-12 bg-accentDanger/10 rounded-lg flex items-center justify-center mb-4 text-accentDanger">
                <Calculator size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Aritmética Rota</h3>
              <p className="text-textSecondary">
                Usan float para dinero. En miles de operaciones, los errores de redondeo se comen tu beneficio silenciosamente.
              </p>
            </GlassCard>
            <GlassCard className="border-accentDanger/30">
              <div className="w-12 h-12 bg-accentDanger/10 rounded-lg flex items-center justify-center mb-4 text-accentDanger">
                <EyeOff size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Backtesting Trampa</h3>
              <p className="text-textSecondary">
                Ejecutan señales en la misma vela donde las generan. Es como apostar sabiendo el resultado. Tu backtest miente.
              </p>
            </GlassCard>
            <GlassCard className="border-accentDanger/30">
              <div className="w-12 h-12 bg-accentDanger/10 rounded-lg flex items-center justify-center mb-4 text-accentDanger">
                <ShieldOff size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Cero Protección Real</h3>
              <p className="text-textSecondary">
                Sin kill switch, sin circuit breaker, sin reconciliación. Si el exchange falla a las 3am, tu dinero está solo.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURE MAP & FUTURE STATE */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-accentCyan">128</span> Capacidades. <span className="text-accentSuccess">55</span> Construidas.
              </h2>
              <p className="text-textSecondary max-w-xl">
                Actualmente en Fase 2. Cuando se complete la Fase 4, BASTION QUANT será un sistema totalmente autónomo con 
                Inteligencia Macro (SENTINEL) y gestión de incidentes automática.
              </p>
            </div>
            <Link to="/catalog" className="text-accentCyan hover:text-accentViolet transition-colors mt-4 md:mt-0 font-mono text-sm flex items-center">
              Ver catálogo completo <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          {/* Progress Bar Visual */}
          <div className="w-full bg-bgSecondary h-4 rounded-full mb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accentCyan to-accentViolet w-[42%]"></div>
            <div className="absolute top-0 left-0 h-full w-full flex text-[10px] font-mono font-bold text-white/50 items-center justify-between px-4">
               <span>Cimientos</span>
               <span>Laboratorio</span>
               <span>Tridente</span>
               <span>Sentinel (Próximamente)</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
             {['Todos', 'A-C', 'D', 'E', 'G', 'H'].map((tab) => (
               <button
                 key={tab}
                 onClick={() => setFeatureTab(tab)}
                 className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                   featureTab === tab 
                   ? 'bg-white text-bgPrimary font-bold' 
                   : 'bg-white/5 text-textSecondary hover:bg-white/10'
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
               )
             })}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE NEURAL CORE (REDESIGNED) */}
      <section className="py-24 px-4 bg-[#05070d] relative overflow-hidden border-y border-white/5">
         {/* Cyber Grid Background */}
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
               El Núcleo Neuronal
             </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
             {/* Left Column - Logic Nodes */}
             <div className="space-y-8 hidden lg:block">
                <GlassCard hoverEffect className="border-l-4 border-l-accentCyan">
                   <div className="flex items-center gap-3 mb-2">
                      <Network className="text-accentCyan" size={20} />
                      <h3 className="font-bold text-white">NEXUS</h3>
                   </div>
                   <p className="text-sm text-textSecondary">
                      Escaneo de universo 128 pares. Análisis de correlación y detección de liquidez en tiempo real.
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

             {/* Center - Holographic Core */}
             <div className="flex justify-center scale-125 lg:scale-100">
                <HolographicCore />
             </div>

             {/* Right Column - Logic Nodes */}
             <div className="space-y-8 hidden lg:block">
                <GlassCard hoverEffect className="border-r-4 border-r-accentGold text-right">
                   <div className="flex items-center gap-3 mb-2 justify-end">
                      <h3 className="font-bold text-white">SYMBIOSIS</h3>
                      <Zap className="text-accentGold" size={20} />
                   </div>
                   <p className="text-sm text-textSecondary">
                      Fusión de datos. Combina señales técnicas (Micro) con riesgo de mercado (Macro) para la decisión final.
                   </p>
                </GlassCard>
                
                <div className="text-right p-6">
                   <h4 className="font-mono text-xs text-textSecondary mb-2">VELOCIDAD DE PROCESAMIENTO</h4>
                   <div className="text-4xl font-display font-bold text-white">12<span className="text-accentCyan">ms</span></div>
                   <p className="text-xs text-white/40 mt-1">Latencia interna promedio</p>
                </div>
             </div>
          </div>
          
          {/* Mobile Only Cards (stacked below core) */}
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
                 <p className="text-sm text-textSecondary">Fusión de inteligencia Micro + Macro.</p>
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
              Controla tu infraestructura desde Telegram.
            </h2>
            <p className="text-textSecondary mb-6">
              No necesitas abrir el laptop. Gestiona tu hedge fund desde la cama.
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

      {/* SECTION 6: COMPARISON */}
      <section className="py-24 px-4 bg-bgSecondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            ¿Por qué no un bot retail de $29/mes?
          </h2>
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
                       {row.retail ? <Check className="inline text-green-500" size={18}/> : <X className="inline text-red-500" size={18}/>}
                    </td>
                    <td className="py-4 px-4 text-center">
                       {row.bastion ? <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accentCyan/20 text-accentCyan"><Check size={14}/></div> : <X size={18}/>}
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
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
             Esto no es un bot.
           </h2>
           <p className="text-xl md:text-2xl text-textSecondary mb-12">
             Es infraestructura de trading cuantitativo institucional.
           </p>
           
           <div className="flex flex-col md:flex-row justify-center gap-6">
             <Link to="/catalog">
               <button className="px-10 py-5 bg-white text-bgPrimary font-bold rounded-full hover:scale-105 transition-transform">
                 Explorar el Catálogo Completo
               </button>
             </Link>
             <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors cursor-not-allowed">
               Acceso Privado
             </button>
           </div>
           
           <p className="mt-12 text-sm text-textSecondary font-mono">
             Construido fase a fase. Sin cajas negras.
           </p>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;