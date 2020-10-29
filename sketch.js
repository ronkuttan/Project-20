var car,wall;
var speed,weight;
var deformation;

function setup() {
  //creating a canvas
  createCanvas(1600,400);
  //creating speed and weight
  speed = random(55,90);
  weight = random(400,1500);
  //creating sprites and adding specific properties to it
  car = createSprite(80,200,50,50);
  car.shapeColor = color(225);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  //cfreating a black background
  background(0);  
  //creating an is touching algorithm between the car and wall
 if( wall.x - car.x < (car.width + wall.width)/2){
   car.velocityX = 0;
   //creating deformation
   deformation = 0.5*weight*speed*speed/22500;
  //changing the colour of the car according to the speed
   if(deformation < 100){
     car.shapeColor = color(0,255,0)
   }
   if(deformation < 180  && deformation > 100){
    car.shapeColor = color(230,230,0)
   }
   if(deformation > 180 ){
    car.shapeColor = color(255,0,0)
  }

   
 }
  //drawing the sprites
  drawSprites();
}