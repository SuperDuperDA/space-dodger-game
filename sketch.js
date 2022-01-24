var spaceship, laser, powerUp, explosion, bigAsteriod, mediumAsteriod, spaceBackground;
var spaceshipImg, laserImg, powerUpImg, explosionImg, bigAsteriodImg, mediumAsteriodImg, spaceBackgroundImg;
var distance = 0
var laserG, powerUpG, asteriodG;

//Game states
var START = 1
var PLAY = 2
var END = 0
gameState = 1



function preload(){
//loading images/animations
spaceshipImg = loadImage("spaceship.png");
laserImg = loadImage("laser.png");
powerUpImg = loadImage("laserPowerUp.png");
explosionImg = loadAnimation("2_explosion.png","3_explosion.png", "4_explosion.png" );
bigAsteriodImg = loadImage("big_asteriod.png");
mediumAsteriodImg = loadImage("medium_asteriod.png");
spaceBackgroundImg = loadImage("space_background.jpg");
}

function setup() {
 createCanvas(windowWidth, windowHeight);

 spaceBackground = createSprite(width/2, height/2, 10,10);
 spaceBackground.scale = 2.2
 spaceBackground.addImage(spaceBackgroundImg);
 
}

function draw() {
 
drawSprites();
}