const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammar;
var stone;
var rubber;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammar = new Hammar(200,100,70,70);
  stone = new Stone(100,200,200,70);
	rubber = new Rubber();
  ground = new Ground(450,680,800,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  hammar.display();
  stone.display();
  rubber.display();
  ground.display();

 drawSprites();
}



