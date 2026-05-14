"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
};

export function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvasElement = canvasRef.current;

    const canvasContext = canvasElement.getContext("2d", { alpha: true });
    if (!canvasContext) return;
    const ctx = canvasContext;

    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: Particle[] = [];
    let rafId = 0;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasElement.width = Math.floor(window.innerWidth * dpr);
      canvasElement.height = Math.floor(window.innerHeight * dpr);
      canvasElement.style.width = `${window.innerWidth}px`;
      canvasElement.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(170, Math.floor((window.innerWidth * window.innerHeight) / 7400));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.45 + 0.35,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        a: Math.random() * 0.32 + 0.12,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -4) particle.x = window.innerWidth + 4;
        if (particle.x > window.innerWidth + 4) particle.x = -4;
        if (particle.y < -4) particle.y = window.innerHeight + 4;
        if (particle.y > window.innerHeight + 4) particle.y = -4;

        ctx.beginPath();
        ctx.fillStyle = `rgba(238, 243, 237, ${particle.a})`;
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) rafId = requestAnimationFrame(draw);
    }

    function updatePointer(event: PointerEvent) {
      root.style.setProperty("--x", `${event.clientX}px`);
      root.style.setProperty("--y", `${event.clientY}px`);
    }

    function handleResize() {
      cancelAnimationFrame(rafId);
      resizeCanvas();
      draw();
    }

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("resize", handleResize);

    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className="grain-canvas" aria-hidden="true" ref={canvasRef} />;
}
