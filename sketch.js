var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
 
   fixedrect=createSprite(270,120,70,50);
   fixedrect.shapeColor="green";
   movingrect=createSprite(320,320,59,59);
   movingrect.shapeColor="green";
}


function draw() {
  background(0,0,0);  

  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;

  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2) {
   movingrect.shapeColor="red";
   fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  drawSprites();
}