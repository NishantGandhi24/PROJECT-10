var sea,sea_image;
var ship,ship_image;
function preload(){
  sea_image=loadImage("sea.png");
  ship_image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1300,650);
  sea=createSprite(200,200,30,40);
  sea.addImage("sea",sea_image);
  ship=createSprite(400,300,30,30);
  ship.addAnimation("ship",ship_image);
  ship.scale=0.7;
  
}

function draw() {
  background("white");
  
  sea.velocityX=-2;
  if(sea.x<0){
    sea.x=width/2;
  }


 drawSprites();
}