function preload(){
  image1=loadImage("png/grass.jpg")
  image2=loadAnimation("png/tile000.png","png/tile001.png","png/tile002.png","png/tile003.png","png/tile004.png","png/tile005.png","png/tile006.png","png/tile007.png","png/tile008.png","png/tile009.png",)
}


function setup() {
  createCanvas(1300,1000);

 
 player= createSprite(400, 200, 50, 50);
player.addAnimation("running",image2)
}






function draw() {
  background(image1);  
 
  drawSprites();
}