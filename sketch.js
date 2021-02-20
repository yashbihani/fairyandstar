const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var fairyAnimation,fairy;

function preload(){
fairyAnimation = loadAnimation("images/fairy1.png","images/fairy2.png");
starImg = loadImage("images/star.png");
bgImg = loadImage("images/starnight.png");
}

function setup(){
  createCanvas(800,750);
  engine = Engine.create();
  world = engine.world;
  fairy = createSprite(130,520);
  fairy.addAnimation("flying",fairyAnimation);
  fairy.scale = 0.25;
  star = createSprite(700,40);
  star.addImage(starImg);
  star.scale = 0.25;
  starBody = Bodies.circle(700,40,20,{isStatic : true});
  World.add(world,starBody);
}

function draw(){
background(bgImg);
Engine.update(engine);
star.x = starBody.position.x;
star.y = starBody.position.y;

if(keyDown("left"))
{
  fairy.x = fairy.x-2;
}
if(keyDown("right"))
{
  fairy.x = fairy.x+2;
}
if(keyDown("down"))
{
  Matter.Body.setStatic(starBody,false);
}
if(star.y > 470)
{
  Matter.Body.setStatic(starBody,true);
}

drawSprites();

}
