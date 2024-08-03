import React, { useRef, useEffect } from "react";
const draw = (x, y, width, height, context) => {
  if(context) {
    const leftToRight = Math.random() >= 0.5;

    if (leftToRight) {
      context.moveTo(x, y);
      context.lineTo(x + width, y + height);
    } else {
      context.moveTo(x + width, y);
      context.lineTo(x, y + height);
    }
  }
}
const genCanvas = (canvasElement) => {
  if (canvasElement.current) {
    const canvas = canvasElement.current as HTMLCanvasElement;
    const context = canvas?.getContext("2d");
    if(context) {
      const canvaswidth = window.innerWidth;
      const canvasheight = window.innerHeight;
      const step = 60;
      const dpr = window.devicePixelRatio;
      canvas.width = canvaswidth * dpr;
      canvas.height = canvasheight * dpr;
      context.scale(dpr, dpr);

      context.lineCap = "square";
      context.lineWidth = 3;
      context.globalCompositeOperation = "destination-atop";
      context.strokeStyle = "rgba(0,0,0,0.05)";

      for (let x = 0; x < canvaswidth; x += step) {
        for (let y = 0; y < canvasheight; y += step) {
          draw(x, y, step, step, context);
        }
      }
      context.stroke();
    }
  }
}
const CanvasBg = () => {
  const canvasElement = useRef(null);
  useEffect(() => {
    genCanvas(canvasElement)
  },[])
  return <canvas className="canvas-bg" ref={canvasElement} />;
}

export default CanvasBg;
