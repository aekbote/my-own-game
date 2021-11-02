var coinImg, coin;
var dragonImg, dragon;
var forestImg, forest;
var knightImg, knight;
var invisibleGround;
var gamestate = "play";

function preload(){
// adding images to variable names
    coinImg = loadImage("coin.png");
    forestImg = loadImage("forest.png");
    knightImg = loadImage("knight.png");
    dragonImg = loadImage("dragon.png");
}

function setup() {
 createCanvas(600,400);
background("grey");

background(forestImg);

    //creating knight
    knight = createSprite(80,320);
    knight.addImage("knight",knightImg);
    knight.scale = 0.15;

    //creating invisible ground so knight won't fall
    invisibleGround = createSprite(300,390,600,20);
    invisibleGround.visible = false;

    //creating dragon
    dragon = createSprite(360,320);
    dragon.addImage("dragon", dragonImg);
    dragon.scale = 0.4;   

}

function draw() {
 
  
  
  drawSprites();
}

function SpawnDragons(){
    if(frameCount % 60 == 0){
        var dragon = createSprite(550,380);
        dragon.velocityX = -2;
    }
}