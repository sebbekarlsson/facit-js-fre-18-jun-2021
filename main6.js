const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const fontSize = 48;

ctx.font = `${fontSize}px serif`;

const text = "Sebastian";
const measure = ctx.measureText(text);
const textWidth = measure.width;
const textHeight = fontSize;


const speed = 5;

let deltaY = speed;
let dir = 1;
let y = ((height / 2) + (textHeight / 2)) + deltaY;

function loop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "white";
  ctx.fillText(
    text,
    (width / 2) - (textWidth / 2),    // x
    y  // y
  );

  y += deltaY;

  if (y >= height) {
    deltaY = -speed;
  }

  if ((y - (textHeight/2)) <= 0) {
    deltaY = speed;
  }

  requestAnimationFrame(loop);
}

loop();
