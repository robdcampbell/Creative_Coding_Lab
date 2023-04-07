//console.log("Hello World");

const canvas = document.querySelector("canvas");
// 2D context
const context = canvas.getContext("2d");

// takes 4 params - x,y,width,height
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);

context.beginPath();
context.rect(50, 50, 100, 50);
context.stroke();
