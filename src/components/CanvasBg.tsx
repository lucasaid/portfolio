import React from "react";

class CanvasBg extends React.Component {
  canvasElement: any;
  context: any;
  constructor(props) {
    super(props);
    this.canvasElement = React.createRef();
  }
  componentDidMount() {
    this.genCanvas();
  }
  genCanvas() {
    if (this.canvasElement.current) {
      const canvas = this.canvasElement.current;
      this.context = canvas.getContext("2d");

      const canvaswidth = window.innerWidth;
      const canvasheight = window.innerHeight;
      const step = 60;
      const dpr = window.devicePixelRatio;
      canvas.width = canvaswidth * dpr;
      canvas.height = canvasheight * dpr;
      this.context.scale(dpr, dpr);

      this.context.lineCap = "square";
      this.context.lineWidth = 3;
      this.context.globalCompositeOperation = "destination-atop";
      this.context.strokeStyle = "rgba(0,0,0,0.05)";

      for (let x = 0; x < canvaswidth; x += step) {
        for (let y = 0; y < canvasheight; y += step) {
          this.draw(x, y, step, step);
        }
      }
      this.context.stroke();
    }
  }
  draw(x, y, width, height) {
    const leftToRight = Math.random() >= 0.5;

    if (leftToRight) {
      this.context.moveTo(x, y);
      this.context.lineTo(x + width, y + height);
    } else {
      this.context.moveTo(x + width, y);
      this.context.lineTo(x, y + height);
    }
  }
  render() {
    return <canvas className="canvas-bg" ref={this.canvasElement} />;
  }
}

export default CanvasBg;
