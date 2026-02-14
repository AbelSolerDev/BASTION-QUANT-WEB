import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-[#0a0e1a]/80 backdrop-blur-xl border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* --- BRAND IDENTITY --- */}
          <Link to="/" className="group flex items-center gap-3 select-none">
            {/* Custom Logo: The Bastion Hexagon */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full text-white overflow-visible">
                {/* Outer Hexagon */}
                <path 
                  d="M12 2L2 7V17L12 22L22 17V7L12 2Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  className="opacity-50 group-hover:opacity-100 group-hover:stroke-accentCyan transition-all duration-500"
                />
                {/* Inner Data Node */}
                <circle cx="12" cy="12" r="3" className="fill-accentCyan animate-pulse" />
                {/* Connecting Lines (Decorations) */}
                <path d="M12 2V5" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                <path d="M12 22V19" stroke="currentColor" strokeWidth="1" className="opacity-30" />
              </svg>
              {/* Glow Effect behind logo */}
              <div className="absolute inset-0 bg-accentCyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Typography */}
            <div className="leading-none">
              <span className="font-display font-bold text-lg tracking-widest text-white group-hover:text-shadow-glow transition-all">
                BASTION
              </span>
            </div>
          </Link>
          
          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-xs font-mono tracking-wide text-textSecondary">
              <Link to="/catalog" className={`hover:text-white transition-colors uppercase ${location.pathname === '/catalog' ? 'text-white font-bold' : ''}`}>
                // Capacidades
              </Link>
              <Link to="/sentinel" className={`hover:text-accentDanger transition-colors uppercase flex items-center gap-1 ${location.pathname === '/sentinel' ? 'text-accentDanger font-bold' : ''}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${location.pathname === '/sentinel' ? 'bg-accentDanger animate-pulse' : 'bg-gray-600'}`} />
                Sentinel
              </Link>
              <Link to="/forge" className={`hover:text-accentOrange transition-colors uppercase flex items-center gap-1 ${location.pathname === '/forge' ? 'text-accentOrange font-bold' : ''}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${location.pathname === '/forge' ? 'bg-accentOrange animate-pulse' : 'bg-gray-600'}`} />
                Forge
              </Link>
            </div>

            <div className="h-6 w-[1px] bg-white/10" />

            <Link to="/catalog">
              <button className="group relative px-5 py-2 overflow-hidden rounded bg-white/5 border border-white/10 hover:border-accentCyan/50 transition-all">
                <div className="absolute inset-0 w-full h-full bg-accentCyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
                  Acceso Docs <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            className="md:hidden text-white hover:text-accentCyan transition-colors z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-[#0a0e1a]/95 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8 h-full">
              <div className="flex flex-col gap-6">
                <Link to="/" className="text-2xl font-display font-bold text-white border-b border-white/10 pb-4">
                  01 // DASHBOARD
                </Link>
                <Link to="/catalog" className="text-2xl font-display font-bold text-white border-b border-white/10 pb-4">
                  02 // CAPACIDADES
                </Link>
                <Link to="/sentinel" className="text-2xl font-display font-bold text-accentDanger border-b border-accentDanger/20 pb-4 flex items-center justify-between">
                  <span>03 // SENTINEL</span>
                  <span className="text-xs bg-accentDanger/20 px-2 py-1 rounded text-accentDanger font-mono">LIVE</span>
                </Link>
                <Link to="/forge" className="text-2xl font-display font-bold text-accentOrange border-b border-accentOrange/20 pb-4 flex items-center justify-between">
                  <span>04 // FORGE</span>
                  <span className="text-xs bg-accentOrange/20 px-2 py-1 rounded text-accentOrange font-mono">R&D</span>
                </Link>
              </div>

              <div className="mt-auto mb-12">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                   <p className="text-xs text-textSecondary font-mono mb-2">STATUS DEL SISTEMA</p>
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accentSuccess rounded-full animate-pulse" />
                      <span className="text-white font-bold text-sm">OPERATIVO</span>
                   </div>
                   <div className="mt-4 text-[10px] text-white/30 font-mono">
                      ID: NODE-MOBILE-ALPHA
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
