import React, { useState } from 'react';
import { features, blocks } from '../data';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import * as Icons from 'lucide-react';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CatalogPage: React.FC = () => {
  const [openFeatureId, setOpenFeatureId] = useState<number | null>(null);

  const toggleFeature = (id: number) => {
    setOpenFeatureId(openFeatureId === id ? null : id);
  };

  // Group features by block for better readability
  const featuresByBlock = blocks.map(block => ({
    ...block,
    features: features.filter(f => f.block === block.id || (block.id === 'SENTINEL' && f.block === 'SENTINEL'))
  })).filter(group => group.features.length > 0);

  return (
    <div className="min-h-screen bg-bgPrimary pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accentCyan hover:underline mb-8 font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          Volver al Dashboard
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Catálogo Completo
        </h1>
        <p className="text-textSecondary text-lg mb-12">
          Explicación detallada de cada una de las capacidades de BASTION QUANT. 
          <span className="block text-sm mt-2 text-accentViolet font-mono">
            Mostrando {features.length} capacidades clave documentadas.
          </span>
        </p>

        <div className="mb-10 rounded-xl border border-accentSuccess/25 bg-accentSuccess/10 px-4 py-3">
          <p className="text-xs md:text-sm font-mono text-accentSuccess">
            ESTADO OPERATIVO: Fase 3.9 cerrada · Bloque L completado · Próximo bloque M (fase 4.0)
          </p>
        </div>

        <div className="space-y-12">
          {featuresByBlock.map((group) => (
            <div key={group.id} className="relative">
              <div className="sticky top-20 z-10 bg-bgPrimary/90 backdrop-blur py-4 border-b border-white/10 mb-6">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="text-accentCyan mr-2">[{group.id}]</span> {group.title}
                  </h2>
                  <span className="text-xs font-mono text-textSecondary bg-white/5 px-2 py-1 rounded">
                    {group.phase}
                  </span>
                </div>
                <p className="text-textSecondary mt-1 italic">"{group.description}"</p>
              </div>

              <div className="grid gap-4">
                {group.features.map((feature) => {
                   // Dynamic Icon Rendering
                   // @ts-ignore
                   const IconComponent = Icons[feature.icon] || Icons.HelpCircle;

                   return (
                     <GlassCard key={feature.id} className="!p-0 overflow-hidden">
                       <div 
                         className="p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                         onClick={() => toggleFeature(feature.id)}
                       >
                         <div className="flex items-center gap-4">
                           <div className={`p-2 rounded-lg ${openFeatureId === feature.id ? 'bg-accentCyan/20 text-accentCyan' : 'bg-gray-800 text-gray-400'}`}>
                             <IconComponent size={20} />
                           </div>
                           <div>
                             <h3 className="font-bold text-textPrimary">{feature.name}</h3>
                             <p className="text-sm text-textSecondary md:hidden">{feature.description}</p>
                           </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                               <Badge status={feature.status} />
                            </div>
                            {openFeatureId === feature.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                         </div>
                       </div>
                       
                       <AnimatePresence>
                         {openFeatureId === feature.id && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="bg-bgSecondary/50 border-t border-white/5"
                           >
                             <div className="p-6">
                               <div className="md:hidden mb-4">
                                  <Badge status={feature.status} />
                               </div>
                               <h4 className="text-accentCyan text-xs font-mono uppercase tracking-wider mb-2">Qué significa (Explicación simplificada)</h4>
                               <p className="text-textPrimary leading-relaxed">
                                 {feature.longDescription}
                               </p>
                               <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                                  <span className="text-xs text-textSecondary font-mono">ID: #{feature.id}</span>
                                  <span className="text-xs text-textSecondary font-mono">Bloque: {feature.block}</span>
                               </div>
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </GlassCard>
                   );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
