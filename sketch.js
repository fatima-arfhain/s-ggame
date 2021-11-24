
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var SpaceShip;
var backImg, rock1Img, rock2Img, laserImg, bigUfo, bullet;
var ufo, metioriod;

function preload(){
  backImg = loadImage("assets/SpaceImage.png");
  rock1Img = loadImage("assets/rock1.png");
  rock2Img = loadImage("assets/rock2.png");
  laserImg = loadImage("assets/laser.png");
  bigUfo = loadImage("assets/BigUFO.png");
  bullet = loadImage("assets/bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

 // engine = Engine.create();
 // world = engine.world;
 
  SpaceShip = new Spaceship(200,500,80,80);
  
  
}


function draw() 
{
  background(backImg); 
  //Engine.update(engine);

  SpaceShip.display();
  
  if(keyIsDown(UP_ARROW)){
    SpaceShip.y -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    SpaceShip.x += 5;
  }

  if(keyIsDown(LEFT_ARROW)){
    SpaceShip.x -= 5;
  }

  if(keyIsDown(32)){
    laserBeam();
  }

  if(keyIsDown(66)) {
    shoot();
  }

  metioriods();
  drawSprites();
}

function laserBeam(){
  var laser = createSprite(200, 200, 50,100);
  laser.addImage("laser",laserImg);
  laser.scale = 0.2
  laser.x = SpaceShip.x;
  laser.y = SpaceShip.y;
  laser.velocityY -= 5;
  laser.lifeTime = 1000;
}

function shoot(){
  var shoot = createSprite(200, 300, 100, 50);
  shoot.addImage("bullet",bullet);
  shoot.scale = 0.2;
  shoot.x = SpaceShip.x;
  shoot.y = SpaceShip.y;
  shoot.velocityY -= 5;
  shoot.lifeTime = 1000;
}

function metioriods(){
  if(frameCount %60 === 0){
    var obstacle = createSprite(200, 200, 50, 50);
    obstacle.x = Math.round(random(200, 500));
    console.log(obstacle.x)
    obstacle.y = Math.round(random(200, 1000));

  var rand = Math.round(random(0,2));

  if(rand === 1){
    obstacle.addImage("I1",rock1Img);
    obstacle.scale = 0.5;
  }
  else if(rand === 0){
    obstacle.addImage("I2",rock2Img);
    obstacle.scale = 0.5;
  }
  }

}

