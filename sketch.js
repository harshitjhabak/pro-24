
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50, height-80, 20);

	dustbin1 = new Dustbin(width/2+573, height-40, 200, 20);
  dustbin2 = new Dustbin(width/2+473, height-100, 20, 100);
  dustbin3 = new Dustbin(width/2+673, height-100, 20, 100);

  ground1 = new Ground(width/2, 780, 1500, 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

}

function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85, y: -85});

  } 

}