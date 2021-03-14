
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob,bob1,bob2,bob3,bob4;
var straing,string1,string2,string3,string4;
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof = new Roof(400,200,250,20);

	bob = new Bob (300,400,40);
	bob1 = new Bob(350,400,40);
	bob2 = new Bob (400,400,40);
    bob3 = new Bob(450,400,40);
	bob4 = new Bob(500,400,40);

    straing = new String(bob.body,roof.body,-80,0);
	string1 = new String(bob1.body,roof.body,-60,0);
	string2 = new String(bob2.body,roof.body,-40,0);
	string3 = new String(bob3.body,roof.body,60,0);
	string4 = new String(bob4.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  straing.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();

  drawSprites();
 
}



