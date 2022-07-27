var groundObj;
var ball
var basket
var basketImg
var radius=40;
var world;
var score =0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	basketImg = loadImage("basketball_hoop.png")
}

function setup() {
	createCanvas(1600, 700);

  basket = createSprite(1200,250,100,20);
  basket.addImage("basketImg",basketImg);
  basket.scale=0.4

  

  //bx = createSprite(1000,250,300,320);
  //box.visible=false ;

 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(260,110,20,ball_options);
World.add(world,ball);

//box = new ground(1200,250,100,100);

groundObj=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(ball!=null){
  ellipse(ball.position.x,ball.position.y,radius,radius);
  }
  groundObj.display();

  
   
  textSize(20)
  text("Try getting the ball in the hoop",600,350);
  
  text.scale = 0.7;
 // box.display();

collide(ball, basket);
	


  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-50})
	}
}

function collide(ball, basket)
{
	if(ball!= null)
	{
		var d = dist(ball.position.x, ball.position.y, basket.position.x, basket.position.y);

		if(d<= 100)
		{
			
			World.remove(engine.world, ball);
			
			textSize(50)
			text("Well played", 700,400);
		}
	}
}

