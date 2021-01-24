var car,wall;
var speed,weigh;


function setup() {
  createCanvas(1600,400);
  car =createSprite(50,200,50,50);
  speed=random(50,100);
  weight=random(400,1500);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall=createSprite(1500,200,60,100);
  wall.shapecolor=color(80,80);


  
}

function draw() {
  background(0);  
if(wall.x - car.x <(car.width+wall.width)/2){
 car.velocityX=0;
 var deformation=0.5 * weight * speed* speed/22500;
 if(deformation>180){
   car.shapeColor="red";
 }
 if(deformation<180 && deformation>100){
   car.shapeColor="yellow";
 }
if(deformation<100){
  car.shapeColor="grren";
}
}
  drawSprites();
}