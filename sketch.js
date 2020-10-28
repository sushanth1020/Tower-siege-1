var ground1;


function setup() {
  createCanvas(800,400);
  createSprite(400, 400, 50, 50);


  ground1 = new Ground(200,120,50,90);

}





function draw() {
  background(255,255,255);  
  drawSprites();
ground1.display();


}


