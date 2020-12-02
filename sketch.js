
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 
var ground;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(300,50,150,20)
	bobObject1 = new Ball(200,350)
	bobObject2 = new Ball(250,350)
	bobObject3 = new Ball(300,350)
	bobObject4 = new Ball(350,350)
	bobObject5 = new Ball(400,350)
	rope1 = new Chain(bobObject1.body,ground.body,-bobDiameter*2,0)
	rope2 = new Chain(bobObject2.body,ground.body,-bobDiameter*2,0)
	rope3 = new Chain(bobObject3.body,ground.body,-bobDiameter*2,0)
	rope4 = new Chain(bobObject4.body,ground.body,-bobDiameter*2,0)
	rope5 = new Chain(bobObject5.body,ground.body,-bobDiameter*2,0)

	keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()



  drawSprites();
 
}


function keyPressed(){
	if(keyCode === LEFT_ARROW){
	
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-82,y:-82})
	
	
	}
	
	if(keyCode === RIGHT_ARROW){
	
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:82,y:-82})
		
		
		}
	
	
	
	
	
	
	}
