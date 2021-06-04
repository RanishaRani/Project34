//Create variables here
var database, canvas;
var dog;
var dogimg,happyDogimg,foodS,foodStock;
function preload()
{
	//load images here
  dogimg = loadImage("Dog.png");
  happyDogimg = loadImage("happydog.png");

}

function setup() {
 canvas = createCanvas(500, 500);
database = firebase.database();
  dog = createSprite(251,320);
  dog.addImage(dogimg);
  dog.scale = 0.3;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogimg);
}
  drawSprites();
  fill(255,255,254);
  stroke("black")
  textSize(25);
  text("Food available: " + foodS,120,160);
  textSize(20);
  text("NOTE: Press UP Arrow Key to feed Harry!")

}

function readStock(data){
  foodS = data.val();
}
function writeStock (x){
  if(x<=0){
    x = 0;

  }
  else{x = x- 1}
  database.ref('/').update({
    Food:x
  })
}
