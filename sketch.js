var aDot;

function setup() {
  createCanvas(500,500);
}

function draw() {
  var aDot = new Dot()
  aDot.renderDot(mouseX, mouseY)
  
  if (mouseIsPressed) {
    
  }
}

 


function Dot() {
  var dotSize = 50;
  
  this.renderDot = function(newPosnX, newPosnY) {
    fill(random(0,255),random(0,255),random(0,255))
    ellipse(newPosnX, newPosnY, dotSize, dotSize);
  }
  
}