var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(100,100,50,50);
  object1.shapeColor="green";

  object2=createSprite(200,100,50,50);
  object2.shapeColor="green";

  object3=createSprite(300,100,50,50);
  object3.shapeColor="purple";

  object4=createSprite(300,800,50,50);
  object4.shapeColor="purple";

object3.velocityY=5;
object4.velocityY=-5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object2)){

    movingRect.shapeColor = "red";
    object2.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    object2.shapeColor = "green";
  }
  bounceOff(object3,object4);
  
  drawSprites();
}



