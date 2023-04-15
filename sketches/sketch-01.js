import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#ff4411";
    // context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);

    const w = 60;
    const h = 60;
    const gap = 20;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let x = 100 + (w + gap) * i;
        let y = 100 + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.fillStyle = "#ffff88";
          context.fillRect(x + 8, y + 8, w - 16, h - 16);
          // context.rect(x + 8, y + 8, w - 16, h - 16);
          // context.stroke();
        }

        // context.beginPath();
        // context.arc(x + 30, y + 30, 20, 0, 2 * Math.PI);
        // context.stroke();
      }
    }
  };
};

canvasSketch(sketch, settings);
