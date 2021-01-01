const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

var bin, bin2;

var ground;


function preload() {
}

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	//create the ground
	ground = new Ground(800,610,1600,20);

	//create the paper ball
	paper1= new Paper(50,550,40);

	//create the dustbin
	bin = new Dustbin(1300,275);
	bin2 = new Dustbin(1550,570,5,50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  //display the paper ball
  paper1.display();

  //display the dustbin
  bin.display();
  bin2.display();

  //display the ground
  ground.display();

  //draw the sprites
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:420,y:-460});
	}
}