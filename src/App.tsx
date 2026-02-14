import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BastionChatbot from './components/BastionChatbot';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import SentinelPage from './pages/SentinelPage';
import ForgePage from './pages/ForgePage';
import ScanlineOverlay from './components/ui/ScanlineOverlay';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const Footer: React.FC = () => (
  <footer className="bg-bgPrimary border-t border-white/5 py-12 px-4 text-center relative z-50">
    <p className="text-white font-bold font-display mb-2">
      BASTION
      <sup className="ml-0.5 text-[10px] align-super text-white/70">®</sup>
    </p>
    <p className="text-textSecondary text-sm mb-6">Infraestructura de trading cuantitativo institucional.</p>
    <p className="text-white/20 text-xs font-mono">2025-2026 | Privado & Confidencial</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-bgPrimary min-h-screen text-textPrimary font-sans selection:bg-accentCyan selection:text-white relative">
        <ScanlineOverlay />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/sentinel" element={<SentinelPage />} />
          <Route path="/forge" element={<ForgePage />} />
        </Routes>
        <Footer />
        <BastionChatbot />
      </div>
    </Router>
  );
};

export default App;
