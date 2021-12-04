
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,wall1,wall2;


function setup() {
	createCanvas(1000, 750);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

ground= new Ground(200,750,2000,20);
wall1= new Ground(700,705,20,70);
wall2= new Ground(850,705,20,70);

var ball_options={
    restitution:0.95
  }

  ball=Bodies.circle(200,500,20,ball_options);

  World.add(world,ball);

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {

  background(200);
ground.show();
wall1.show();
wall2.show();
ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);

}

function keyPressed() {

	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05});

}

}

