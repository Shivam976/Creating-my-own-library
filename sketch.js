var fixedRect, movingRect,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
  
  rect3 = createSprite(800, 100, 50, 80);
  rect3.shapeColor = "yellow";
  rect3.debug = true;
  rect4 = createSprite(800, 800,80,30);
  rect4.shapeColor = "white";
  rect4.debug = true;

  rect3.velocityY = +5;
  rect4.velocityY = -5;
}

function draw() {

  background(0,0,0);  
  movingRect.x=mouseX
  movingRect.y=mouseY
bounceOff(rect3,rect4)
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="purple"
    fixedRect.shapeColor="Purple"
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  drawSprites();
}
