import { Feature, Block } from './types';

export const blocks: Block[] = [
  { id: 'A-C', title: 'CIMIENTOS', description: 'La base inquebrantable', phase: 'Fases 1.0-2.9' },
  { id: 'D', title: 'LABORATORIO', description: 'Donde se descubre el alpha', phase: 'Fases 2.10-2.12' },
  { id: 'E', title: 'ALPHA ENGINE', description: 'El cerebro que genera señales', phase: 'Fases 2.13-2.15' },
  { id: 'F', title: 'PORTFOLIO', description: 'Gestión profesional multi-activo', phase: 'Fases 2.16-2.17' },
  { id: 'G', title: 'TRIDENTE', description: 'Tres cerebros autónomos', phase: 'Fases 2.18-2.20' },
  { id: 'H', title: 'MUNDO REAL', description: 'Conexión a exchange', phase: 'Fases 3.0-3.2' },
  { id: 'I', title: 'HARDENING', description: 'Blindaje del sistema', phase: 'Fase 3.3' },
  { id: 'J', title: 'SAFETY', description: 'Auto-protección', phase: 'Fases 3.4-3.5' },
  { id: 'K-L', title: 'EMS', description: 'Ejecución táctica', phase: 'Fases 3.6-3.9' },
  { id: 'M', title: 'MANDO Y CONTROL', description: 'Desde Telegram', phase: 'Fases 4.0-4.2' },
  { id: 'N', title: 'OPERACIONES', description: 'Gestión de incidentes', phase: 'Fases 4.3-4.5' },
  { id: 'SENTINEL', title: 'SENTINEL', description: 'Inteligencia Macro & Seguridad', phase: 'FUTURO' },
];

export const features: Feature[] = [
  // Bloque A-C
  { id: 1, block: 'A-C', name: 'Motor de backtesting bidireccional', description: 'Simula trading hacia atrás con datos reales.', longDescription: 'Simula trading hacia atrás en el tiempo con datos reales. Puede apostar a que sube (long) Y a que baja (short). Los sistemas retail solo hacen long.', status: 'CONSTRUIDO', icon: 'ArrowUpDown' },
  { id: 2, block: 'A-C', name: 'Aritmética Decimal de 28 dígitos', description: 'Cero errores de redondeo. Nunca.', longDescription: 'Nunca pierde un céntimo por errores de redondeo. Los sistemas retail usan "float" y acumulan errores microscópicos.', status: 'CONSTRUIDO', icon: 'Calculator' },
  { id: 3, block: 'A-C', name: 'Ejecución T+1 anti-trampa', description: 'Señal hoy, ejecución mañana.', longDescription: 'La señal se genera HOY, se ejecuta MAÑANA. Imposible hacer trampa mirando el futuro.', status: 'CONSTRUIDO', icon: 'Clock' },
  { id: 4, block: 'A-C', name: 'Física de Gaps', description: 'Respeta los saltos de precio reales.', longDescription: 'Si el precio salta de golpe (gap), el sistema lo respeta. Si tu stop-loss estaba en 100 pero abrió en 95, ejecuta a 95.', status: 'CONSTRUIDO', icon: 'Zap' },
  { id: 5, block: 'A-C', name: 'Política Pesimista SL/TP', description: 'Asume el peor escenario en backtest.', longDescription: 'Si en la misma vela se toca el SL y el TP, asume lo peor (SL gana).', status: 'CONSTRUIDO', icon: 'ShieldAlert' },
  
  // Bloque D
  { id: 14, block: 'D', name: 'Optimizador Grid Search', description: 'Prueba miles de combinaciones.', longDescription: 'Prueba automáticamente MILES de combinaciones (ej: SMA de 10 a 200, SL de 1% a 5%) y te dice cuál es la mejor.', status: 'CONSTRUIDO', icon: 'Grid' },
  { id: 15, block: 'D', name: 'Walk-Forward Analysis', description: 'Anti-sobreajuste profesional.', longDescription: 'Divide los datos en trozos: entrena en uno, prueba en el siguiente. Si falla en datos no vistos, la descarta.', status: 'CONSTRUIDO', icon: 'FastForward' },
  { id: 16, block: 'D', name: 'Simulación Monte Carlo', description: '1000 escenarios aleatorios.', longDescription: 'Baraja aleatoriamente el orden de los trades 1000 veces. "¿Cuánto puedo perder en el peor caso?"', status: 'CONSTRUIDO', icon: 'Dices' },
  { id: 17, block: 'D', name: 'Stress Forge', description: 'Pruebas de estrés extremo.', longDescription: 'Inyecta escenarios de pesadilla: flash crashes (-30%), volatilidad extrema, mercado muerto.', status: 'CONSTRUIDO', icon: 'Flame' },

  // Bloque E
  { id: 20, block: 'E', name: 'Feature Store', description: '84+ indicadores pre-calculados.', longDescription: 'Base de datos de indicadores técnicos que se calculan una vez y están disponibles para TODAS las estrategias.', status: 'CONSTRUIDO', icon: 'Database' },
  { id: 21, block: 'E', name: 'Clasificador de Regímenes', description: 'Detecta tendencia, rango, volatilidad.', longDescription: 'El sistema sabe si el mercado está alcista, bajista, rango... Cada régimen tiene su estrategia óptima.', status: 'CONSTRUIDO', icon: 'Layers' },
  { id: 32, block: 'G', name: 'PHOENIX: Confianza Asimétrica', description: 'La confianza baja rápido, sube lento.', longDescription: 'Un trade malo tiene más peso que uno bueno. Filosofía conservadora.', status: 'CONSTRUIDO', icon: 'Scale' },
  
  // Bloque G (Tridente)
  { id: 29, block: 'G', name: 'NEXUS: Scanner Universo', description: 'Escanea todos los pares disponibles.', longDescription: 'Evalúa cuáles son los mejores para operar AHORA según liquidez y momentum.', status: 'CONSTRUIDO', icon: 'Radar' },
  { id: 35, block: 'G', name: 'SYMBIOSIS: Score Compuesto', description: 'Combina QUANT + SENTINEL.', longDescription: 'Puntuación del trading + puntuación de seguridad en una fórmula ponderada.', status: 'CONSTRUIDO', icon: 'GitMerge' },

  // Bloque H (Mundo Real)
  { id: 37, block: 'H', name: 'Pipeline CCXT (Bybit)', description: 'Datos reales históricos.', longDescription: 'Descarga datos históricos reales de Bybit automáticamente con paginación.', status: 'CONSTRUIDO', icon: 'Download' },
  { id: 41, block: 'H', name: 'Mock Exchange', description: 'Simulador con 8 escenarios de fallo.', longDescription: 'Simula: normal, latencia alta, orden parcial, rate limit, exchange caído, flash crash.', status: 'CONSTRUIDO', icon: 'Bug' },

  // Bloque I (Hardening)
  { id: 56, block: 'I', name: 'Chain of Guards', description: 'Pipeline de validación extensible.', longDescription: 'Cada "guardia" revisa algo y si alguno dice NO, la orden se rechaza.', status: 'EN DESARROLLO', icon: 'ShieldCheck' },
  
  // Bloque J (Safety)
  { id: 62, block: 'J', name: 'Kill Switch Coordinado', description: 'Botón de emergencia maestro.', longDescription: 'Estados: ACTIVO, PAUSA, KILL (cierra todo y se apaga).', status: 'ROADMAP', icon: 'Power' },
  { id: 69, block: 'J', name: 'Audit Trail Inmutable', description: 'Registro forense de acciones.', longDescription: 'Tabla donde se registra QUIÉN hizo QUÉ y CUÁNDO. Sin posibilidad de borrar.', status: 'ROADMAP', icon: 'Scroll' },

  // Bloque M (Control)
  { id: 84, block: 'M', name: 'Telegram Command Center', description: 'Control total desde el móvil.', longDescription: '/estado, /pnl, /kill. Autenticación 2FA.', status: 'ROADMAP', icon: 'Smartphone' },
  
  // Sentinel - Detailed Breakdown
  { id: 109, block: 'SENTINEL', name: 'Motor Cardíaco 1Hz', description: 'Procesa datos CADA segundo.', longDescription: 'Procesa datos del mercado UNA VEZ POR SEGUNDO. Si BTC se desploma a las 3am, SENTINEL lo detecta en 1 segundo y le dice a QUANT "para".', status: 'FUTURO', icon: 'HeartPulse' },
  { id: 110, block: 'SENTINEL', name: 'WebSocket Multi-activo', description: '15+ pares en streaming.', longDescription: 'Conectado permanentemente por WebSocket a BTC, ETH, SOL, BNB, etc. Datos en flujo constante, no descargas puntuales.', status: 'FUTURO', icon: 'Zap' },
  { id: 111, block: 'SENTINEL', name: 'Semáforo de Riesgo (4 Niveles)', description: 'Seguro, Precaución, Peligro, Crítico.', longDescription: 'Un solo número (0-100) y un color que se actualiza cada segundo. QUANT consulta este semáforo antes de CADA decisión.', status: 'FUTURO', icon: 'TrafficCone' },
  { id: 112, block: 'SENTINEL', name: 'Detector de Caída Rápida', description: 'Flash crash protection.', longDescription: 'Si BTC cae más del X% en 3 minutos -> semáforo ROJO -> QUANT deja de operar instantáneamente.', status: 'FUTURO', icon: 'TrendingDown' },
  { id: 113, block: 'SENTINEL', name: 'Detector de Sangrado Lento', description: 'Detecta caídas silenciosas.', longDescription: 'Una caída del Y% en 1 hora no es un crash, es una fuga. SENTINEL pone semáforo AMARILLO y reduce exposición.', status: 'FUTURO', icon: 'Droplets' },
  { id: 114, block: 'SENTINEL', name: 'Índices Sintéticos (TOTAL2/3)', description: 'Contexto macro del mercado.', longDescription: 'Calcula en tiempo real si el mercado en general sube o baja, no solo BTC. Distingue pánico de rotación.', status: 'FUTURO', icon: 'BarChart2' },
  { id: 115, block: 'SENTINEL', name: 'Índice BASTION UTILITY', description: 'Detector de rotación de capital.', longDescription: 'Si las utility tokens suben mientras BTC baja, es rotación, no pánico. QUANT no cierra, rota.', status: 'FUTURO', icon: 'RefreshCw' },
  { id: 116, block: 'SENTINEL', name: 'Monitor Stablecoins', description: 'El termómetro del miedo.', longDescription: 'Si la dominancia de USDT sube, hay miedo. SENTINEL lo detecta antes de que el precio caiga.', status: 'FUTURO', icon: 'DollarSign' },
  { id: 117, block: 'SENTINEL', name: 'Radar de Liquidaciones', description: 'Proxy de ballenas en tiempo real.', longDescription: 'Si se liquidan más de $10M en 1 minuto -> VETO TOTAL. Algo gordo pasa.', status: 'FUTURO', icon: 'Target' },
  { id: 118, block: 'SENTINEL', name: 'Monitor Funding Rates', description: 'Detector de sobrecalentamiento.', longDescription: 'Si el funding rate es muy alto, el mercado va a corregir. SENTINEL cierra longs antes del dump.', status: 'FUTURO', icon: 'Thermometer' },
  { id: 119, block: 'SENTINEL', name: 'Modo Anticipatorio', description: 'El superpoder de BASTION.', longDescription: 'Detecta volatilidad inminente (FOMC, funding extremo) y pone a QUANT en modo defensivo ANTES de que pase nada.', status: 'FUTURO', icon: 'Eye' },
  { id: 120, block: 'SENTINEL', name: 'Comunicación Bidireccional', description: 'Simbiosis real QUANT <-> SENTINEL.', longDescription: 'QUANT reporta su estado, SENTINEL reporta el riesgo. Juntos calculan un score compuesto adaptativo.', status: 'FUTURO', icon: 'MessageSquare' }
];

export const retailComparison = [
  { feature: 'Backtesting con física de gaps', retail: false, bastion: true },
  { feature: 'Aritmética Decimal (no float)', retail: false, bastion: true },
  { feature: 'Walk-Forward Analysis', retail: false, bastion: true },
  { feature: 'Monte Carlo Simulation', retail: false, bastion: true },
  { feature: 'Stress Testing (Flash Crash)', retail: false, bastion: true },
  { feature: 'Clasificador de Regímenes', retail: false, bastion: true },
  { feature: 'Scanner de Universo (NEXUS)', retail: false, bastion: true },
  { feature: 'OMS con Máquina de Estados', retail: false, bastion: true },
  { feature: 'Kill Switch Coordinado', retail: false, bastion: true },
  { feature: 'Telegram Command Center (2FA)', retail: false, bastion: true },
  { feature: 'Audit Trail Inmutable', retail: false, bastion: true }
];