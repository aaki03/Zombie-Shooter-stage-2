var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;



function preload(){
  
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  
  

//creating the player sprite



   //creating sprites to depict lives remaining
   

    

    
   

    //creating group for zombies    
    
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches


//release bullets and change the image of shooter to shooting position when space is pressed


//player goes back to original standing image once we stop pressing the space bar



//destroy zombie when player touches it


//calling the function to spawn zombies


drawSprites();
}




