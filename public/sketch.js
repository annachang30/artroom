var socket = io();
var name = prompt("Your name:", "");

function setup() {
  // setting up the canvas and socket
  var canvas = createCanvas(900,600);
  canvas.position(125,125);
  background(51);

  //this appears on the other user's console
  socket.on("mouse", function(data){
    console.log("HELLLO");
    noStroke();
    fill(185, 126, 185); //color: purple
    ellipse(data.x, data.y, 10, 10);
  });
}

function mouseDragged(){
  console.log("Sending: " + mouseX + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);

  noStroke();
  fill(255);   //color: white
  ellipse(mouseX, mouseY, 10, 10);
}
