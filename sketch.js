

var helicopterIMG, helicopterSprite,packageSprite,packageIMG;
var packageBody,ground;
var line1,line2,line3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);	
	
	engine = Engine.create();
	world = engine.world

	packageSprite=createSprite(width/2, 80, 10,10 );
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1Sprite=createSprite(290,610,20,100);
	line1Sprite.shapeColor = "red";
	
	line2Sprite=createSprite(width/2,650,200,20);
	line2Sprite.shapeColor = "red";
	
    line3Sprite=createSprite(500,610,20,100)
	line3Sprite.shapeColor = "red";

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.9, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	 World.add(world, ground); 

	 line1 = Bodies.rectangle(290,610,20,100,{isStatic:true});
	 World.add(world, line1);

	 line2 = Bodies.rectangle(width/2,635,200,20,{isStatic:true});
	 World.add(world, line2);
	 
	 line3 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	 World.add(world, line3);

    Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);
    
  }
}



