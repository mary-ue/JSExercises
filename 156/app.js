let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let pi = Math.PI;
let k = (2 * pi) / 100;
let x = 0;
let max = 100;
let timeout;

draw();

function draw() {
  let color = getColor(x);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw
  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, x * k, false);
  ctx.strokeStyle = color;
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.font = 'bold 70px Arial';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.fillText(x + '%', 125, 145);
  ctx.closePath();

  x++;

  // animation
  if (x <= max) {
    timeout = setTimeout(draw, 100);
  } else {
    clearTimeout(timeout);
  }
}

function getColor(x) {
  x = (x * 255) / 100;
  y = 255 - x;
  let color = `rgb(${x}, ${y}, 0, 0.8)`;
  return color;
}
