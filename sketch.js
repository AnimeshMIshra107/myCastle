var tri1;
var tri2;
var tri3;
var tri4;


function setup() {
  createCanvas(800,400);
  var rect1 = createSprite(130, 314, 50, 170);
var rect2 = createSprite(216,364,120,70);
var rect3 = createSprite(302,364,50,390);
var rect4 = createSprite(388,364,120,70);
var rect5 = createSprite(474,364,50,390);
var rect6 = createSprite(560,364,120,70);
var rect7 =createSprite(646,314,50,170);

tri1 = triangle(104,225,154,225,127,170);
tri2 = triangle(620,229,673,229,643,175);
tri3 = triangle(302,154,355,154,300,100);
tri4 = triangle(320,169,378,169,350,110);
}

function draw() {
  background('black');  
  triangle(104,229,155,229,127,180);
 triangle(620,229,673,229,643,175);
triangle(276,169,328,169,300,110);
triangle(447,169,500,169,473,110);
  drawSprites();
}