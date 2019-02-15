// enable global variables of canvas and ctx
var canvas, ctx;

window.onload = function init() {
  //this lets you work on the canvas after its been loaded
  canvas = document.getElementById('myCanvas');
  //important we will draw with the ctx
  ctx = canvas.getContext('2d');

  //readt to start drawing!
  //filled rectangle
  ctx.fillStyle = 'red';
  ctx.fillRect(100,100,190,30);

  //wire frame rectangle
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 3;
  ctx.strokeRect(10,10,20,20);

  // fill circle, will use current ctx.fillStyle
  ctx.beginPath();
  ctx.arc(60,60,10,0,2*Math.PI);
  ctx.fill();

  // wireframe circle, will use current ctx.strokeStyle
  ctx.beginPath();
  ctx.arc(60,60,20,0,2*Math.PI);
  ctx.stroke();


}
