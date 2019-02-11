import React from "react";
import PropTypes from "prop-types";

class CanvasBg extends React.Component {
  canvasElement = React.createRef();
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.genCanvas();
  }
  genCanvas() {
    if (this.canvasElement.current) {
      var canvas = this.canvasElement.current;
      var context = canvas.getContext("2d");

      var canvaswidth = window.innerWidth;
      var canvasheight = window.innerHeight;
      var step = 60;
      var dpr = window.devicePixelRatio;
      canvas.width = canvaswidth * dpr;
      canvas.height = canvasheight * dpr;
      context.scale(dpr, dpr);

      context.lineCap = "square";
      context.lineWidth = 3;
      context.globalCompositeOperation = "destination-atop";
      context.strokeStyle = "rgba(0,0,0,0.05)";

      function draw(x, y, width, height) {
        var leftToRight = Math.random() >= 0.5;

        if (leftToRight) {
          context.moveTo(x, y);
          context.lineTo(x + width, y + height);
        } else {
          context.moveTo(x + width, y);
          context.lineTo(x, y + height);
        }
      }

      for (var x = 0; x < canvaswidth; x += step) {
        for (var y = 0; y < canvasheight; y += step) {
          draw(x, y, step, step);
        }
      }
      context.stroke();
    }
  }
  render() {
    return <canvas className="canvas-bg" ref={this.canvasElement} />;
  }
}

CanvasBg.propTypes = {};

export default CanvasBg;
