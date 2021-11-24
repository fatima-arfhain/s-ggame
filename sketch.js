
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var spaceShip;
var backImg, spacei, rock1Img, rock2Img, laserImg, bigUfo, bullet;
var ufo, metioriod;

function preload(){
  backImg = loadImage("assets/SpaceImage.png");
  spacei = loadImage("assets/SpaceShip.png");
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
 

  spaceShip = createSprite(200, 550, 50,100);
  spaceShip.addImage(spacei);
  spaceShip.scale = 0.15
  
  
}


function draw() 
{
  background(backImg); 
  //Engine.update(engine);

  if(keyDown(UP_ARROW)){
    spaceShip.y -= 5;
  }

  if(keyDown("RIGHT_ARROW")){
    spaceShip.x += 5;
  }

  if(keyDown("LEFT_ARROW")){
    spaceShip.x -= 5;
  }

  if(keyDown("space")){
    laserBeam();
  }

  if(keyDown("B")) {
    shoot();
  }

  metioriods();
  drawSprites();
}

function laserBeam(){
  var laser = createSprite(200, 200, 50,100);
  laser.addImage(laserImg);
  laser.scale = 0.2
  laser.x = spaceShip.x;
  laser.y = spaceShip.y;
  laser.velocityY -= 5;
  laser.lifeTime = 1000;
}

function shoot(){
  var shoot = createSprite(200, 300, 100, 50);
  shoot.addImage(bullet);
  shoot.scale = 0.2;
  shoot.x = spaceShip.x;
  shoot.y = spaceShip.y;
  shoot.velocityY -= 5;
  shoot.lifeTime = 1000;
}

function metioriods(){
  if(frameCount %100 === 0){
    var obstacle = createSprite(200, 200, 50, 50);
    obstacle.x = Math.round(random(50, 1500));
    obstacle.y = Math.round(random(200, 500));

  var rand = Math.round(random(0,1));
  console.log(rand)
  if(rand === 0){
    obstacle.addImage("I1",rock1Img);
    obstacle.scale = 0.2;
  }
  else if(rand === 1){
    obstacle.addImage("I2",rock2Img);
    obstacle.scale = 0.2;
  }
  }

}

