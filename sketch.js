//creating the variables
var car, wall;
var speed, weight;

//creating the function setup
function setup() {
  //creating the canvas
  createCanvas(1600,400);
  //setting speed and weight to random values
  speed=random(55, 90);
  weight=random(400, 1500);
    //creating the car
    car=createSprite(50, 200, 50, 50);
    //adding a velocity to the car
    car.velocityX=speed;
    //adding a color to the car
    car.shapeColor=(250, 250, 250)
    //creating the wall
    wall=createSprite(1500, 200, 60, height/2);
    //adding a color to the wall
    wall.shapeColor=(80, 80, 80);
}

//creating the function draw
function draw() {
  //giving a background colour
  background(0, 0, 0);  
  //detecting the collision between the car and the wall
  if(wall.x-car.x < wall.width/2 + car.width/2){
//stopping the car
car.velocityX=0;
//creating a variable deformation
var deformation = (0.5 * width * speed * speed)/22500
//when collision happens, based on deformaation determining the color as green
if(deformation<100){
  car.shapeColor=color(0, 255, 0);
}
//when collision happens, based on deformaation determining the color as yellow
if(deformation>100 && deformation<180){
  car.shapeColor=color(230, 230, 0);
}
//when collision happens, based on deformaation determining the color as red
if(deformation>180){
  car.shapeColor=color(255, 0, 0);
}
  }
  //making the sprites visible
  drawSprites();
}
