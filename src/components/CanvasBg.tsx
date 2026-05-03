import React, { useRef, useEffect } from "react";

const GRID_STEP_PX = 60;

const draw = (x: number, y: number, width: number, height: number, context: CanvasRenderingContext2D): void => {
  const leftToRight = Math.random() >= 0.5;
  if (leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
}

const genCanvas = (canvasElement: React.RefObject<HTMLCanvasElement>): void => {
  if (!canvasElement.current) return;
  const canvas = canvasElement.current;
  const context = canvas.getContext("2d");
  if (!context) return;

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const dpr = window.devicePixelRatio;
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  context.scale(dpr, dpr);

  context.lineCap = "square";
  context.lineWidth = 3;
  context.globalCompositeOperation = "destination-atop";
  context.strokeStyle = "rgba(0,0,0,0.05)";

  for (let x = 0; x < canvasWidth; x += GRID_STEP_PX) {
    for (let y = 0; y < canvasHeight; y += GRID_STEP_PX) {
      draw(x, y, GRID_STEP_PX, GRID_STEP_PX, context);
    }
  }
  context.stroke();
}

const CanvasBg = () => {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    genCanvas(canvasElement);
    const handleResize = () => genCanvas(canvasElement);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <canvas className="canvas-bg" ref={canvasElement} aria-hidden="true" />;
}

export default CanvasBg;
