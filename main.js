//console.log("Hello World");

const canvas = document.querySelector("canvas");
// 2D context
const context = canvas.getContext("2d");

// takes 4 params - x,y,width,height
context.fillStyle = "red";
context.fillRect(10, 10, 200, 200);

context.beginPath();
context.rect(50, 50, 100, 100);
context.stroke();

context.beginPath();
context.arc(200, 200, 50, 0, 2 * Math.PI);
context.stroke();
