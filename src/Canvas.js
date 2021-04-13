import React, { useRef, useEffect } from "react";
import SmokeMachine from "@bijection/smoke";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.position = "absolute";
    canvas.style.top = "-5%"
    canvas.style.left = "-50%"
    canvas.style.zIndex = "999"

    var party = SmokeMachine(ctx, [54, 16.8, 18.2]);

    party.start(); // start animating

    party.addSmoke(500, 500, 10); // wow we made smoke

    setTimeout(function () {
      party.stop(); // stop animating

      party.addSmoke(600, 500, 100);
      party.addSmoke(500, 600, 20);

      for (var i = 0; i < 10; i++) {
        party.step(10); // pretend 10 ms pass and rerender
      }

      setTimeout(function () {
        party.start();
      }, 0);
    }, 0);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
