var r1;
var r2;
var r3;
var r4;

function setup() {
  createCanvas(800,800);
  r1 = createSprite(400, 200, 50, 50);
  r2 = createSprite(400, 300, 50, 50);
  r3 = createSprite(700, 100, 50, 50);
  r4 = createSprite(200, 100, 50, 50);
//giving velocity to rectangles
r3.velocityX = -10;
r4.velocityX = 10;

}

function draw() {
  background(255,255,255);  
 // moving r1
 r1.y = World.mouseY;
 r1.x = World.mouseX;


// algorithum 1-detection colision by chsnging colors
if(r1.x - r2.x < r1.width/2 + r2.width/2 && 
   r2.x - r1.x < r1.width/2 + r2.width/2 &&
   r1.y - r2.y < r1.height/2 + r2.height/2 &&
   r2.y - r1.y < r1.height/2 + r2.height){

r1.shapeColor = "red"
r2.shapeColor = "orange"
}
else{
  r1.shapeColor = "grey"
  r2.shapeColor = "grey"
}
// algorithum 2-bouncing from each other after colision

if(r3.x - r4.x < r3.width/2 + r4.width/2 && 
  r4.x - r3.x < r3.width/2 + r4.width/2 ){
r3.velocityX = r3.velocityX * (-1);
r4.velocityX = r4.velocityX * (-1);
  }


  drawSprites();
}