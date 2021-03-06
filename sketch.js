var Fr,Mr,bounce


function setup() {
  createCanvas(800,400);
  Fr = createSprite(400, 200, 50, 50);
  Fr.shapeColor = "yellow"
  Fr.debug = true
  Mr = createSprite(300, 100, 50, 50);
  Mr.shapeColor = "pink"
  Mr.debug = true
  bounce = createSprite(200, 10, 50, 50);
  bounce.velocityY = 1
  bounce.shapeColor = "pink"
}

function draw() {
  background("blue");  
  
  Mr.x = mouseX
  Mr.y = mouseY
  
  if (Mr.x - Fr.x < Fr.width/2 + Mr.width/2 && 
    Fr.x - Mr.x < Mr.width/2 + Fr.width/2 &&
    Mr.y - Fr.y < Fr.height/2 + Mr.height/2 &&
    Fr.y - Mr.y < Mr.height/2 + Fr.height/2){

    Fr.shapeColor = "red"
    Mr.shapeColor = "red"
  }
  else {

    Fr.shapeColor = "green"
    Mr.shapeColor = "green"
  }
  

  if (bounce.y - Mr.y < bounce.height/2 + Mr.height/2 &&
      Mr.y - bounce.y < Mr.height/2 + bounce.height/2){

        bounce.velocityY = bounce.velocityY *(-1)
      }





  drawSprites();


}