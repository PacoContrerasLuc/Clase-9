var pelota;
function setup() {
  createCanvas(400,400);

  pelota=createSprite(200,200,30,30);
  pelota.shapeColor= "red";
}

function draw() 
{
  background(30);

  if (keyDown("right")){
    pelota.position.x=pelota.position.x+5;
  }
  if (keyDown("left")){
    pelota.position.x=pelota.position.x-5;
  }
  if (keyDown("up")){
    pelota.position.y=pelota.position.y-5;
  }
  if (keyDown("down")){
    pelota.position.y=pelota.position.y+5;
  }
  drawSprites();
}




