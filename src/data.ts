import { Feature, Block } from './types';

export const blocks: Block[] = [
  { id: 'A-C', title: 'CIMIENTOS', description: 'Base cuantitativa verificable', phase: 'Fases 1.0-2.9' },
  { id: 'D', title: 'LABORATORIO', description: 'Validacion estadistica profesional', phase: 'Fases 2.10-2.12' },
  { id: 'E', title: 'ALPHA ENGINE', description: 'Generacion de senales con contexto', phase: 'Fases 2.13-2.15' },
  { id: 'F', title: 'PORTFOLIO', description: 'Asignacion y reporting institucional', phase: 'Fases 2.16-2.17' },
  { id: 'G', title: 'TRIDENTE', description: 'NEXUS + PHOENIX + SYMBIOSIS', phase: 'Fases 2.18-2.20' },
  { id: 'H', title: 'MUNDO REAL', description: 'Conexion exchange y OMS base', phase: 'Fases 3.0-3.2' },
  { id: 'I', title: 'OMS HARDENING', description: 'Blindaje operativo del core', phase: 'Fase 3.3 (cerrada)' },
  { id: 'J', title: 'SAFETY + OBSERVABILIDAD', description: 'Control de riesgo en profundidad', phase: 'Fases 3.4-3.5' },
  { id: 'K-L', title: 'EMS TACTICO', description: 'Ejecucion avanzada y calidad de fill', phase: 'Fases 3.6-3.9' },
  { id: 'M', title: 'MANDO Y CONTROL', description: 'Alertas, comando y cockpit', phase: 'Fases 4.0-4.2' },
  { id: 'N', title: 'OPERACIONES', description: 'Incidentes, contabilidad y reconciliacion', phase: 'Fases 4.3-4.5' },
  { id: 'O', title: 'PRODUCCION', description: 'Paper, canary y salida controlada', phase: 'Fases 5.0-6.0' },
  { id: 'SENTINEL', title: 'SENTINEL', description: 'Programa separado de inteligencia macro', phase: 'Post-6.0' },
  { id: 'FORGE', title: 'FORGE', description: 'Programa separado de investigacion de estrategias', phase: 'Post-6.0' },
];

export const features: Feature[] = [
  { id: 1, block: 'A-C', name: 'Backtesting bidireccional', description: 'Simulacion long/short con reglas realistas.', longDescription: 'Motor de simulacion preparado para escenarios de mercado reales, con foco en disciplina y consistencia.', status: 'CONSTRUIDO', icon: 'ArrowUpDown' },
  { id: 2, block: 'A-C', name: 'Aritmetica decimal institucional', description: 'Precision financiera estable.', longDescription: 'El sistema elimina errores acumulativos de redondeo en calculos monetarios.', status: 'CONSTRUIDO', icon: 'Calculator' },
  { id: 3, block: 'A-C', name: 'Ejecucion T+1 anti-sesgo', description: 'La decision y la ejecucion no se mezclan.', longDescription: 'Separacion temporal para reducir autoengaños estadisticos en la validacion de estrategias.', status: 'CONSTRUIDO', icon: 'Clock' },
  { id: 4, block: 'A-C', name: 'Fisica de gaps', description: 'Respeta saltos reales de precio.', longDescription: 'La simulacion contempla discontinuidades de mercado y protege la lectura de riesgo.', status: 'CONSTRUIDO', icon: 'Zap' },
  { id: 5, block: 'A-C', name: 'Politica pesimista de salida', description: 'Criterio conservador por defecto.', longDescription: 'En situaciones ambiguas, el sistema prioriza proteccion de capital sobre optimismo de resultado.', status: 'CONSTRUIDO', icon: 'ShieldAlert' },

  { id: 14, block: 'D', name: 'Optimizacion sistematica', description: 'Busqueda controlada de parametros.', longDescription: 'Explora combinaciones de parametros con trazabilidad y criterios reproducibles.', status: 'CONSTRUIDO', icon: 'Grid' },
  { id: 15, block: 'D', name: 'Walk-forward analysis', description: 'Validacion fuera de muestra.', longDescription: 'Evalua robustez en ventanas sucesivas para reducir riesgo de sobreajuste.', status: 'CONSTRUIDO', icon: 'FastForward' },
  { id: 16, block: 'D', name: 'Monte Carlo de cartera', description: 'Stress probabilistico de resultados.', longDescription: 'Simula multiples trayectorias para dimensionar escenarios adversos.', status: 'CONSTRUIDO', icon: 'Dices' },
  { id: 17, block: 'D', name: 'Stress forge', description: 'Pruebas de mercado extremo.', longDescription: 'Inyeccion de choques y condiciones severas para medir resiliencia del sistema.', status: 'CONSTRUIDO', icon: 'Flame' },

  { id: 20, block: 'E', name: 'Feature store central', description: 'Datos consistentes para decision.', longDescription: 'Estandariza insumos y reduce variaciones operativas entre estrategias.', status: 'CONSTRUIDO', icon: 'Database' },
  { id: 21, block: 'E', name: 'Clasificador de regimen', description: 'Contexto de mercado en cada decision.', longDescription: 'Adapta el comportamiento segun tendencia, rango o volatilidad predominante.', status: 'CONSTRUIDO', icon: 'Layers' },
  { id: 22, block: 'E', name: 'Motor multi-estrategia', description: 'Orquestacion de senales con reglas claras.', longDescription: 'Combina estrategias bajo un marco de control de exposicion y calidad de entrada.', status: 'CONSTRUIDO', icon: 'Workflow' },

  { id: 25, block: 'F', name: 'Portfolio allocator', description: 'Asignacion de capital disciplinada.', longDescription: 'Distribucion de riesgo entre estrategias y activos bajo restricciones definidas.', status: 'CONSTRUIDO', icon: 'PieChart' },
  { id: 26, block: 'F', name: 'Reporting ejecutivo', description: 'Lectura operativa para toma de decisiones.', longDescription: 'Paneles y reportes para evaluar rendimiento, riesgo y estabilidad del sistema.', status: 'CONSTRUIDO', icon: 'FileText' },

  { id: 29, block: 'G', name: 'NEXUS scanner', description: 'Priorizacion del universo operable.', longDescription: 'Selecciona instrumentos con criterios de liquidez, estructura y oportunidad.', status: 'CONSTRUIDO', icon: 'Radar' },
  { id: 32, block: 'G', name: 'PHOENIX confianza asimetrica', description: 'Disciplina en la recuperacion de confianza.', longDescription: 'Penaliza errores de forma estricta para proteger continuidad operativa.', status: 'CONSTRUIDO', icon: 'Scale' },
  { id: 35, block: 'G', name: 'SYMBIOSIS score compuesto', description: 'Decision integrada de rendimiento y riesgo.', longDescription: 'Unifica senal de trading y señal de seguridad en una sola lectura operativa.', status: 'CONSTRUIDO', icon: 'GitMerge' },

  { id: 37, block: 'H', name: 'Pipeline de datos exchange', description: 'Base de datos historica y operacional.', longDescription: 'Ingesta de mercado con controles de calidad y continuidad.', status: 'CONSTRUIDO', icon: 'Download' },
  { id: 41, block: 'H', name: 'Mock exchange de contingencia', description: 'Ensayo de escenarios de fallo.', longDescription: 'Entorno de simulacion para validar reacciones ante incidentes frecuentes.', status: 'CONSTRUIDO', icon: 'Bug' },
  { id: 43, block: 'H', name: 'OMS base en entorno real', description: 'Gobierno inicial de ordenes y estados.', longDescription: 'Primer marco operativo para conectar decision, ejecucion y control de posicion.', status: 'CONSTRUIDO', icon: 'Layers2' },

  { id: 56, block: 'I', name: 'Chain of guards', description: 'Validacion por capas en el flujo OMS.', longDescription: 'Marco de validaciones para filtrar decisiones antes de tocar mercado.', status: 'CONSTRUIDO', icon: 'ShieldCheck' },
  { id: 57, block: 'I', name: 'Risk manager configurable', description: 'Limites adaptables por entorno.', longDescription: 'Politicas de riesgo parametrizables para transicion ordenada entre etapas.', status: 'CONSTRUIDO', icon: 'SlidersHorizontal' },

  { id: 62, block: 'J', name: 'Kill switch FSM de 6 estados', description: 'Protocolo de emergencia verificable.', longDescription: 'Pasa de pausa a cierre con estados trazables y confirmacion operativa.', status: 'EN DESARROLLO', icon: 'Power' },
  { id: 63, block: 'J', name: 'WriteBarrier global', description: 'Control central de escritura a mercado.', longDescription: 'Bloquea aperturas cuando el sistema no es seguro y preserva el carril de cierre.', status: 'EN DESARROLLO', icon: 'Shield' },
  { id: 64, block: 'J', name: 'Safe-to-trade continuo', description: 'Semaforo operativo en tiempo real.', longDescription: 'Evalua salud integral antes de habilitar nueva exposicion.', status: 'EN DESARROLLO', icon: 'Activity' },
  { id: 65, block: 'J', name: 'Anti-bypass de ejecucion', description: 'Una sola puerta de entrada a mercado.', longDescription: 'Refuerza gobernanza para evitar rutas paralelas no autorizadas.', status: 'ROADMAP', icon: 'Lock' },
  { id: 66, block: 'J', name: 'Idempotencia contractual', description: 'Evita duplicados en condiciones reales.', longDescription: 'Consolida control de reintentos y elimina duplicacion accidental de ordenes.', status: 'ROADMAP', icon: 'Fingerprint' },
  { id: 67, block: 'J', name: 'Reconciliacion con escalado', description: 'Respuesta automatica por severidad.', longDescription: 'Del monitoreo pasivo a accion operativa escalada segun impacto.', status: 'ROADMAP', icon: 'RefreshCw' },
  { id: 69, block: 'J', name: 'Audit trail inmutable', description: 'Trazabilidad forense del sistema.', longDescription: 'Registro encadenado para evidenciar integridad de eventos criticos.', status: 'ROADMAP', icon: 'Scroll' },
  { id: 70, block: 'J', name: 'Decision envelope', description: 'Explicabilidad operativa por decision.', longDescription: 'Conserva contexto de entrada y salida para reproducibilidad de cada accion.', status: 'ROADMAP', icon: 'FileSearch' },

  { id: 80, block: 'K-L', name: 'EMS tactico base', description: 'Nucleo de ejecucion por tacticas.', longDescription: 'Marco inicial para convertir intencion de orden en ejecucion disciplinada.', status: 'ROADMAP', icon: 'Route' },
  { id: 81, block: 'K-L', name: 'Scheduler con fencing token', description: 'Control de instancia activa unica.', longDescription: 'Evita doble control operativo en escenarios de failover o reinicio.', status: 'ROADMAP', icon: 'KeyRound' },
  { id: 82, block: 'K-L', name: 'Capability gating por exchange', description: 'Activa solo funciones soportadas.', longDescription: 'Reduce riesgo operativo al respetar capacidades reales del proveedor.', status: 'ROADMAP', icon: 'Filter' },
  { id: 83, block: 'K-L', name: 'TWAP + TCA basico', description: 'Calidad de ejecucion medible.', longDescription: 'Divide ejecuciones y compara contra benchmark para mejorar fill quality.', status: 'ROADMAP', icon: 'BarChart3' },
  { id: 85, block: 'K-L', name: 'Post-only y reduce-only robusto', description: 'Control fino de impacto y cierre.', longDescription: 'Evita ejecucion no deseada y preserva coherencia de salida.', status: 'ROADMAP', icon: 'CornerDownLeft' },

  { id: 90, block: 'M', name: 'Motor de alertas con dedupe', description: 'Señal util sin tormenta de ruido.', longDescription: 'Agrupa y prioriza eventos para respuesta humana efectiva.', status: 'ROADMAP', icon: 'Bell' },
  { id: 91, block: 'M', name: 'Centro de mando Telegram', description: 'Comandos criticos con control reforzado.', longDescription: 'Canal operativo movil con validaciones y trazabilidad.', status: 'ROADMAP', icon: 'Smartphone' },
  { id: 92, block: 'M', name: 'Autenticacion empresarial', description: '2FA, RBAC y sesion robusta.', longDescription: 'Eleva gobernanza de acceso para operaciones criticas.', status: 'ROADMAP', icon: 'ShieldHalf' },
  { id: 93, block: 'M', name: 'Cockpit operativo', description: 'Semaforos y control centralizado.', longDescription: 'Vista unificada de estado, alertas y decisiones de alto impacto.', status: 'ROADMAP', icon: 'LayoutDashboard' },

  { id: 100, block: 'N', name: 'Gestion de incidentes', description: 'Ciclo completo de deteccion a cierre.', longDescription: 'Integra dedupe, histeresis y runbooks para estabilidad operativa.', status: 'ROADMAP', icon: 'Siren' },
  { id: 101, block: 'N', name: 'Contabilidad y cierre diario', description: 'Lectura financiera auditable.', longDescription: 'Motor contable con consistencia diaria y control de completitud.', status: 'ROADMAP', icon: 'ReceiptText' },
  { id: 102, block: 'N', name: 'Reconciliacion avanzada 7 dias', description: 'Limpieza y ajuste con gobernanza.', longDescription: 'Consolida consistencia entre sistema interno y exchange en horizontes extendidos.', status: 'ROADMAP', icon: 'GitCompare' },

  { id: 110, block: 'O', name: 'Paper trading realista', description: 'Ensayo operativo antes de riesgo real.', longDescription: 'Simula microestructura de ejecucion y valida readiness integral.', status: 'ROADMAP', icon: 'ClipboardCheck' },
  { id: 111, block: 'O', name: 'Canary live con limites duros', description: 'Transicion controlada a capital real.', longDescription: 'Operacion inicial con restricciones estrictas y pausas automaticas.', status: 'ROADMAP', icon: 'ShieldEllipsis' },
  { id: 112, block: 'O', name: 'Salida a produccion 6.0', description: 'Gobierno final de seguridad y operacion.', longDescription: 'Incluye controles de bloqueo distribuido, validaciones y pruebas de resiliencia.', status: 'ROADMAP', icon: 'Rocket' },

  { id: 120, block: 'SENTINEL', name: 'Programa Overwatch Macro', description: 'Linea de I+D separada del core operativo.', longDescription: 'Iniciativa posterior al core OMS/EMS para ampliar capa de riesgo macro.', status: 'FUTURO', icon: 'Eye' },
  { id: 121, block: 'SENTINEL', name: 'Radar de riesgo sistémico', description: 'Lectura de mercado en tiempo real.', longDescription: 'Integra multiples señales para anticipar cambios bruscos de entorno.', status: 'FUTURO', icon: 'Radar' },
  { id: 122, block: 'SENTINEL', name: 'Simbiosis QUANT + SENTINEL', description: 'Decision combinada micro y macro.', longDescription: 'Coordina control tactico del core con una lectura macro de riesgo.', status: 'FUTURO', icon: 'MessageSquare' },

  { id: 130, block: 'FORGE', name: 'Prospector de hipotesis', description: 'Descubrimiento sistematico de alpha.', longDescription: 'Genera y prioriza candidatas de estrategia para acelerar investigacion cuantitativa.', status: 'FUTURO', icon: 'Search' },
  { id: 131, block: 'FORGE', name: 'Crucible de validacion', description: 'Filtro riguroso multi-capa.', longDescription: 'Evalua robustez con validacion avanzada antes de recomendar cualquier despliegue.', status: 'FUTURO', icon: 'FlaskConical' },
  { id: 132, block: 'FORGE', name: 'Champion / Challenger lifecycle', description: 'Evolucion continua de estrategias.', longDescription: 'Gestiona promocion, degradacion y retiro de estrategias con criterios objetivos.', status: 'FUTURO', icon: 'GitBranch' }
];

export const retailComparison = [
  { feature: 'Backtesting con fisica de gaps', retail: false, bastion: true },
  { feature: 'Aritmetica decimal para dinero', retail: false, bastion: true },
  { feature: 'Walk-forward y Monte Carlo', retail: false, bastion: true },
  { feature: 'Stress tests de mercado extremo', retail: false, bastion: true },
  { feature: 'Control de regimen y seleccion de universo', retail: false, bastion: true },
  { feature: 'OMS con validaciones por capas', retail: false, bastion: true },
  { feature: 'Protocolo de emergencia con estados', retail: false, bastion: true },
  { feature: 'Safe-to-trade y bloqueo fail-closed', retail: false, bastion: true },
  { feature: 'Trazabilidad inmutable de eventos', retail: false, bastion: true },
  { feature: 'Centro de mando con autenticacion reforzada', retail: false, bastion: true },
  { feature: 'Ruta paper -> canary -> produccion', retail: false, bastion: true }
];
