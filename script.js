var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c =  canvas.getContext('2d');


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  
  //drawing circle
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fill();
  }
  
  //changing props
  this.update = function() {
  //x axis
    if( this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
  }
  //y axis
  if( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
  }
    
  this.x += this.dx;
  this.y += this.dy;
    
    this.draw();
  }
}

//drawing 100 cricles w/random variables and positions
var circleArray = [];

for(var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

//animating the 100 circles using circleArray
//then calling the function

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for(var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();




//---------notes--------//
//c for context
//x, y, width, height
//c.fillStyle = 'red';
//c.fillRect(100, 100, 100, 100);

//line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle = 'red';
//c.stroke();


//draw 3 circles at random
//for (var i = 0; i < 3; i++) {
  //var x = Math.random() * window.innerWidth;
  //var y = Math.random() * window.innerHeight;
  //c.beginPath();
  //c.arc(x, y, 30, 0, Math.PI * 2, false);
  //c.strokeStyle = 'blue';
  //c.stroke();
//};
