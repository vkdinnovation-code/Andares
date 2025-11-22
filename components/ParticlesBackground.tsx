import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  pulseOffset: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    let stars: Star[] = [];
    let nebulas: Nebula[] = [];

    const initParticles = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;

      const screenCx = canvas.width / 2;
      const screenCy = canvas.height / 2;

      // Initialize Nebulas (Space Clouds) - Updated for Green/Emerald Theme
      nebulas = [
        { x: screenCx - 300, y: screenCy - 200, radius: 500, color: 'rgba(16, 185, 129, 0.08)', vx: 0.1, vy: 0.05 }, // Emerald
        { x: screenCx + 300, y: screenCy + 200, radius: 600, color: 'rgba(20, 184, 166, 0.06)', vx: -0.08, vy: -0.05 }, // Teal
        { x: screenCx, y: screenCy, radius: 400, color: 'rgba(5, 150, 105, 0.03)', vx: 0.05, vy: -0.05 }, // Green
      ];

      // Create interactive network stars
      stars = [];
      // Adjust density for network effect
      const count = Math.floor((canvas.width * canvas.height) / 10000); 
      
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          vx: (Math.random() - 0.5) * 0.5, 
          vy: (Math.random() - 0.5) * 0.5, 
          pulseOffset: Math.random() * 100,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // 0. Draw Nebulas
      nebulas.forEach(neb => {
        neb.x += neb.vx;
        neb.y += neb.vy;
        
        if (neb.x < -neb.radius) neb.x = canvas.width + neb.radius;
        if (neb.x > canvas.width + neb.radius) neb.x = -neb.radius;
        if (neb.y < -neb.radius) neb.y = canvas.height + neb.radius;
        if (neb.y > canvas.height + neb.radius) neb.y = -neb.radius;
        
        const g = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.radius);
        g.addColorStop(0, neb.color);
        g.addColorStop(1, 'transparent');
        
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // 1. Update and Draw Stars & Connections
      ctx.lineWidth = 0.5;
      const connectionDistance = 130;
      
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move
        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = canvas.width;
        else if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        else if (star.y > canvas.height) star.y = 0;

        // Draw Star
        const opacity = 0.3 + Math.sin(time * 2 + star.pulseOffset) * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Connect to nearby stars
        for (let j = i + 1; j < stars.length; j++) {
            const other = stars[j];
            const dx = star.x - other.x;
            const dy = star.y - other.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(other.x, other.y);
                const lineOpacity = (1 - dist / connectionDistance) * 0.2; // Subtle lines
                ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
                ctx.stroke();
            }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
    />
  );
};