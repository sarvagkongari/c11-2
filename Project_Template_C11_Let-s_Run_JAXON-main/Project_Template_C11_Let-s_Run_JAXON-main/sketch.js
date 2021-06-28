var path,pathImg;
var runner,runnerImg;
var invisibleCorner1;
var invisibleCorner2;
function preload(){
  //pre-load images
pathImg=loadImage("path.png");
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY=4; 

  runner=createSprite(190,345);
  runner.addAnimation("runner",runnerImg);
  runner.scale=0.05;

  invisibleCorner1=createSprite(338,200,5,400);
  invisibleCorner2=createSprite(68,200,5,400);
  invisibleCorner1.visible=false;
  invisibleCorner2.visible=false;
}


function draw() {
  background("black");
if(path.y>400){
  path.y=height/3
}
runner.x=World.mouseX;
drawSprites()
 runner.collide(invisibleCorner1)
 runner.collide(invisibleCorner2)
}
