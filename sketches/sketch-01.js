import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#ff4411";
    // context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    let ix = width * 0.17;
    let iy = height * 0.17;
    let x, y;
    let off = width * 0.03;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          // context.fillStyle = "#ffff88";
          // context.fillRect(x + off / 2, y + off / 2, w - off / 2, h - off / 2);
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }

        // context.beginPath();
        // context.arc(x + 30, y + 30, 20, 0, 2 * Math.PI);
        // context.stroke();
      }
    }
  };
};

canvasSketch(sketch, settings);
