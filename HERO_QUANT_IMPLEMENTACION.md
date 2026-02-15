# Plan Maestro Hero BASTION QUANT

## 1. Objetivo del rediseño

Transformar el hero de la homepage en una pieza comercial de alto impacto que:

1. Explique en menos de 5 segundos qué es BASTION QUANT.
2. Priorice QUANT como producto principal del ecosistema.
3. Guíe al usuario a una acción clara (CTA principal).
4. Mantenga credibilidad institucional sin saturar con jerga técnica.

## 2. Problemas detectados en la versión previa

1. Mensaje principal correcto pero poco memorable.
2. Exceso de información técnica en el primer impacto.
3. Tres CTAs con peso visual parecido, sin camino de conversión dominante.
4. Fondo y composición visual atractivos pero sin un artefacto de marca que haga a QUANT reconocible.
5. KPI strip con demasiado protagonismo respecto al CTA principal.
6. Jerga de fases útil para equipo interno pero débil para público general.

## 3. Principios de diseño que se van a aplicar

1. Claridad comercial primero, profundidad técnica después.
2. Jerarquía visual estricta: marca > promesa > CTA principal > prueba > navegación secundaria.
3. Un CTA principal dominante y CTAs secundarios ligeros.
4. Identidad visual propia de QUANT mediante artefacto de producto.
5. Legibilidad y contraste primero en móvil.
6. Movimiento funcional y sobrio, no decorativo.

## 4. Arquitectura final del hero

### 4.1 Bloque de contenido principal (izquierda en desktop, superior en móvil)

1. Eyebrow de posicionamiento institucional.
2. Titular con foco total en QUANT.
3. Subcopy breve orientada a beneficio.
4. Línea de promesa final corta y contundente.
5. Proof chips compactos de confianza.
6. CTA primario de alta prioridad.
7. Accesos secundarios a SENTINEL y FORGE en formato discreto.

### 4.2 Bloque visual de producto (derecha en desktop, inferior en móvil)

1. Tarjeta/artefacto “QUANT Core”.
2. Señales de control, riesgo y disciplina representadas visualmente.
3. Métricas sintéticas de operación para transmitir sistema vivo.
4. Capas de glow y movimiento sutil para sensación premium.

### 4.3 Bloque de credibilidad inferior

1. KPI strip más limpio y menos agresivo.
2. Lenguaje entendido por público no técnico.
3. Mantener cifras fuertes (pruebas, trazabilidad, madurez).

## 5. Estrategia de copy

### 5.1 Mensajes obligatorios

1. QUANT no es un bot básico, es un sistema operativo de trading.
2. Beneficio central: control, método y disciplina.
3. Confianza: reglas de riesgo y trazabilidad por operación.

### 5.2 Mensajes a evitar en hero

1. Fase X en ejecución.
2. Bloques internos del roadmap.
3. Jerga técnica que no aporte valor inmediato.

### 5.3 Lugar para detalle técnico

1. Bloque de capacidades.
2. Catálogo.
3. Secciones posteriores de arquitectura.

## 6. Sistema de CTA

1. CTA principal: `Ver capacidades QUANT`.
2. CTA secundarios: `Ver SENTINEL` y `Ver FORGE` con menor peso visual.
3. Regla de contraste: el primario debe captar la mirada antes de 1 segundo.
4. Regla de posición: primario inmediatamente debajo del mensaje principal.

## 7. Dirección visual

1. Mantener paleta cian/azul institucional de QUANT.
2. Rebajar ruido del fondo detrás del titular.
3. Introducir un artefacto visual propio de producto.
4. Asegurar contraste AA en titulares, párrafos y botones.

## 8. Motion y microinteracción

1. Entrada secuencial:
   1. Eyebrow
   2. Titular
   3. Subcopy
   4. CTA
   5. Prueba visual y KPIs
2. Hover del CTA principal con respuesta clara.
3. Movimiento del artefacto con baja amplitud y alta estabilidad.
4. Sin animaciones que compitan con la lectura.

## 9. Responsive strategy

### 9.1 Móvil

1. Orden narrativo: promesa > CTA principal > prueba > secundarios.
2. Longitud de líneas corta para lectura cómoda.
3. Botones con área táctil amplia.
4. Evitar párrafos largos antes del CTA.

### 9.2 Desktop

1. Composición en dos columnas con equilibrio visual.
2. Contenido comercial a la izquierda.
3. Artefacto de producto a la derecha.
4. KPI strip como cierre de credibilidad.

## 10. Plan de ejecución por iteraciones

### Iteración 1: Mensaje y jerarquía

1. Reescribir eyebrow, titular y subcopy.
2. Consolidar promesa comercial.
3. Sustituir lenguaje de fases en hero.

### Iteración 2: Conversión

1. Diseñar CTA principal dominante.
2. Reducir peso de CTAs secundarios.
3. Ajustar espaciado para facilitar lectura y acción.

### Iteración 3: Identidad visual de QUANT

1. Crear artefacto visual “QUANT Core”.
2. Integrar señales/indicadores dentro del hero.
3. Afinar capas de fondo y contraste.

### Iteración 4: Credibilidad y cierre

1. Reequilibrar KPI strip.
2. Verificar coherencia de tono comercial.
3. Mantener consistencia con catálogo y navegación.

### Iteración 5: QA técnico y visual

1. Validación TypeScript.
2. Validación responsive en móvil/desktop.
3. Revisión de contraste, legibilidad y densidad de contenido.

## 11. Criterios de aceptación (Done)

1. Una persona no técnica entiende QUANT en menos de 5 segundos.
2. El CTA principal es inequívoco y prioritario.
3. La experiencia móvil no pierde jerarquía ni legibilidad.
4. El hero se percibe premium y propio de marca.
5. No hay regresiones de compilación ni de layout.

## 12. Entregables de esta ejecución

1. Archivo de plan completo: `HERO_QUANT_IMPLEMENTACION.md`.
2. Implementación iterativa del hero en `src/pages/LandingPage.tsx`.
3. Validación técnica final (`npx tsc --noEmit`).
4. Comandos listos para commit y deploy.
