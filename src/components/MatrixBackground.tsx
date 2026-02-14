import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Caracteres: Hexadecimales + Divisas + Operadores Matemáticos
    const characters = '0123456789ABCDEF$€£¥%#&+-=<>:';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // Estado de las gotas
    const drops: number[] = new Array(columns).fill(1);
    
    // Velocidades variables para cada columna para dar profundidad
    const speeds: number[] = new Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);

    const draw = () => {
      // Fondo negro semi-transparente para el efecto de estela (trail)
      // Usamos el color de fondo principal #0a0e1a con muy baja opacidad
      ctx.fillStyle = 'rgba(10, 14, 26, 0.08)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono'`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Colorimetría Dinámica:
        // Mayoría CIAN (#06b6d4)
        // Algunos VIOLETA (#8b5cf6) para acentos
        // Pocos BLANCOS para brillos
        const randomColor = Math.random();
        if (randomColor > 0.95) {
            ctx.fillStyle = '#ffffff'; // Brillo blanco
        } else if (randomColor > 0.85) {
            ctx.fillStyle = '#8b5cf6'; // Acento Violeta
        } else {
            ctx.fillStyle = '#06b6d4'; // Base Cian
        }

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reiniciar gota al azar cuando sale de la pantalla
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Mover gota
        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 33); // ~30FPS

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Reiniciar columnas al redimensionar
      const newColumns = Math.floor(width / fontSize);
      // Mantener arrays seguros
      while(drops.length < newColumns) {
          drops.push(1);
          speeds.push(Math.random() * 0.5 + 0.5);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" 
    />
  );
};

export default MatrixBackground;