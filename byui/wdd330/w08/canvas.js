var canvas1 = document.getElementById('demo1');
var context1 = canvas1.getContext('2d');
context1.strokeStyle = 'red';
context1.fillStyle = 'rgba(0, 0, 255, 0.5)';
context1.fillRect(10, 10, 100, 100);
context1.strokeRect(10, 10, 100, 100);


function drawPattern() {
  var canvas = document.getElementById('demo2');
  var context = canvas.getContext('2d');
  context.strokeStyle = 'red';

  var img = new Image();
  img.src = 'bike.png';
  img.onload = () => {
    var pattern = context.createPattern(img, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
  };
}

drawPattern();


function drawGradient() {
  var canvas = document.getElementById('demo3');
  var context = canvas.getContext('2d');
  context.strokeStyle = 'red';

  var gradient = context.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'dodgerblue');
  gradient.addColorStop(1, 'violet');
  
  context.fillStyle = gradient;
  context.fillRect(10, 10, 100, 100);
  context.strokeRect(10, 10, 100, 100);
}

drawGradient();


function drawCircle() {
  var canvas = document.getElementById('demo4');
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(50, 50, 30, 0, Math.PI * 2, true);
  context.closePath();

  context.strokeStyle = 'red';
  context.fillStyle = 'blue';
  context.lineWidth = 3;
  context.fill();
  context.stroke();
}

drawCircle();


function saveDrawing() {
  var canvas = document.getElementById('demo5');

  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(50, 50, 30, 0, Math.PI * 2, true);
  context.closePath();

  context.strokeStyle = 'mediumseagreen';
  context.fillStyle = 'orange';
  context.lineWidth = 3;
  context.fill();
  context.stroke();

  window.open(canvas.toDataURL('image/png'));
}

var button = document.getElementById('saveButton');
button.addEventListener('click', saveDrawing, false);