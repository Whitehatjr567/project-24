
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;
var ground1;
var paper1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  dust1 = new dustbin(600,630,160,20);
  dust2 = new dustbin(520,580,20,100);
  dust3 = new dustbin(680,580,20,100);
  paper1 = new Paper(50,630,30);
  ground1 = new Ground(400,650,800,20);
	
	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  keyPressed();

  drawSprites();
  dust1.display();
  dust2.display();
  dust3.display();
  paper1.display();
  ground1.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){

 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
 
}


}


