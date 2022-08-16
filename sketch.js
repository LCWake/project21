
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

var ground
var wall1
var wall2


function preload()
{
	var ball_options = {
		isStatic: false,
	   restitution: 0.3,
		friction: 0,
		density: 1.2
	 }
}

function setup() {
	createCanvas(1250, 700);

	
	engine = Engine.create();
	world = engine.world;
		
	  
	//Create the Bodies Here.
	ball = Bodies.circle(100,675,20);
	World.add(world,ball);
    ground = new Ground(625, 700, 1250, 10);
    wall1 = new Ground(950, 650, 10, 100);
	wall2 = new Ground(1150, 650, 10, 100);
    
	Engine.run(engine);
    rectMode(CENTER);

}


function draw() {
  background(0);
  fill ("yellow");
  ground.show();
  wall1.show();
  wall2.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x: 20, y:30}, {x:0.05, y: -0.005})
	}
}

