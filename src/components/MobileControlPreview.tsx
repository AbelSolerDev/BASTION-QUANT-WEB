import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ShieldAlert, PauseCircle, PlayCircle, Activity } from 'lucide-react';

const MobileControlPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative"
    >
      <div className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25),transparent_60%)] blur-2xl pointer-events-none" />

      <div className="relative w-[290px] sm:w-[320px] rounded-[34px] border border-white/20 bg-[#040812] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
        <div className="rounded-[28px] border border-white/10 bg-[#0a111e] overflow-hidden">
          <div className="h-6 flex items-center justify-center border-b border-white/10 bg-black/35">
            <div className="w-20 h-1 rounded-full bg-white/25" />
          </div>

          <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-accentCyan/15 via-transparent to-accentViolet/15">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-mono text-textSecondary uppercase">Bastion App</p>
              <span className="text-[10px] px-2 py-0.5 rounded border border-accentSuccess/30 bg-accentSuccess/15 text-accentSuccess font-mono">
                LIVE
              </span>
            </div>
            <h3 className="text-white font-bold mt-1">QUANT Remote Control</h3>
          </div>

          <div className="p-4 space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[10px] font-mono text-textSecondary uppercase mb-1">Estado del sistema</p>
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold">Operativo</p>
                <div className="inline-flex items-center gap-1 text-accentSuccess text-xs font-mono">
                  <Activity size={12} />
                  HEALTHY
                </div>
              </div>
              <p className="text-xs text-textSecondary mt-2">Equity: $142,503.21 · PnL diario: +4.2%</p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <button className="rounded-lg border border-accentGold/30 bg-accentGold/10 text-accentGold py-2 inline-flex items-center justify-center gap-1">
                <PauseCircle size={12} />
                Pause
              </button>
              <button className="rounded-lg border border-accentDanger/35 bg-accentDanger/15 text-accentDanger py-2 inline-flex items-center justify-center gap-1">
                <ShieldAlert size={12} />
                Kill
              </button>
              <button className="rounded-lg border border-accentSuccess/30 bg-accentSuccess/10 text-accentSuccess py-2 inline-flex items-center justify-center gap-1">
                <PlayCircle size={12} />
                Reanudar
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/35 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-mono text-textSecondary uppercase">Alertas críticas</p>
                <Bell size={13} className="text-accentDanger" />
              </div>
              <p className="text-xs text-white">Latencia elevada detectada en Exchange A.</p>
              <p className="text-[11px] text-textSecondary mt-1">Push enviado al dispositivo autorizado.</p>
            </div>
          </div>

          <div className="border-t border-white/10 px-4 py-3 bg-black/30">
            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center text-textSecondary uppercase">
              <span className="text-accentCyan">Dashboard</span>
              <span>Órdenes</span>
              <span>Comandos</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileControlPreview;
