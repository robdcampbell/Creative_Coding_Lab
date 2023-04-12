// CANVAS I: Create a 2D Canvas, and introduce shapes/

//console.log("Hello World");

const canvas = document.querySelector("canvas");
// 2D context
const context = canvas.getContext("2d");

// takes 4 params - x,y,width,height
// context.fillStyle = "red";
// context.fillRect(10, 10, 200, 200);

// context.beginPath();
// context.rect(100, 100, 200, 200);
// context.stroke();

// context.beginPath();
// context.arc(200, 200, 50, 0, 2 * Math.PI);
// context.stroke();

let years = [2040, 2041, 2042];
let menu = ["starter", "main", "desert", "drinks"];

const width = 60;
const height = 60;
const gap = 20;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let x = 100 + (width + gap) * i;
    let y = 100 + (height + gap) * j;

    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();

    if (Math.random() > 0.5) {
      context.beginPath();
      context.fillStyle = "#ffff88";
      context.fillRect(x + 8, y + 8, width - 16, height - 16);
      // context.rect(x + 8, y + 8, width - 16, height - 16);
      // context.stroke();
    }

    // context.beginPath();
    // context.arc(x + 30, y + 30, 20, 0, 2 * Math.PI);
    // context.stroke();
  }
}
