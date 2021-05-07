var tom,tomRunning,tomImg1,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4;
var garden,gardenImg;

function preload() {
  tomImg1=loadAnimation("images/tomOne.png");
  tomImg2=loadAnimation("images/tomTwo.png", "images/tomThree.png");
  tomImg3=loadAnimation("images/tomFour.png");


  jerryImg1=loadAnimation("images/jerryOne.png", "images/jerryTwo.png" , "images/jerryThree.png");
  jerryImg2=loadAnimation("images/jerryFour.png");
  

  gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1200,800);
  //  garden=createSprite(1200,800);
  //  garden.addImage("garden" , gardenImg);
    //garden.scale=5;
 tom=createSprite(900,700,40,40);
 tom.scale=0.1;
 tom.addAnimation("tomSitting",tomImg1);
 tom.addAnimation("tomMoving" , tomImg2);
 tom.addAnimation("tomStanding" , tomImg3);
 

 jerry=createSprite(50,700,30,30);
 jerry.addAnimation("jerryMocking",jerryImg1);
 jerry.scale=0.1;
 
}

function draw() {

    background(gardenImg);
      function isTouching(tom , jerry){
     tom.changeAnimation("tomImg3");
      tom.setVelocity = 0;
      jerry.changeAnimation("jerryImg2");

    }
    drawSprites();
}
     function isTouching(o1 , o2) {
       
      if (o1.x - o2.x < o2.width/2 + o1.width/2
        && o2.x - o1.x < o2.width/2 + o1.width/2
        && o1.y - o2.y < o2.height/2 + o1.height/2
        && o2.y - o1.y < o2.height/2 + o1.height/2) {
       return true;
    }
    else {
      return false;
    }
     }

function keyPressed(){
  if (keyCode === LEFT_ARROW){
      tom.velocityX=-4;
      tom.changeAnimation("tomMoving" , tomImg2);
  }
}
