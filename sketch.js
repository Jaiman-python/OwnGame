var gamestate = 0;
var player, form;
var game, workCard, lesiureCard, familyCard;
var workImg, lesiureImg, familyImg;
var task1 = false;
var task1_count = 0
var mole_flag = false; 
var whack_a_mole;
function preload(){
  familyImg = loadImage("images/Family card.png");
  lesiureImg = loadImage("images/Lesiure card.png");
  
}

function setup() {
  createCanvas(1200,700);
  game = new Game();
  game.start();
  
  
}

function draw() {
  background("purple");
  

  if(gamestate == 0){
    form.display();
  }

  if(gamestate == 1){
    textSize(30);
    fill("black");
    text("Money earned: " + task1_count,900,50);
    text("Happiness: " ,900,90);
    
    player.display();
    workCard.display();
    drawSprites();
  }


  if(gamestate == 2){
  
  }
  



}


