const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rock, ground;
var block1, block2, block3, block4, block5;
var chain;

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  block1 = new Box(600,360,50,50);
  block2 = new Box(600,310,50,50);
  block3 = new Box(600,260,50,50);
  block4 = new Box(600,210,50,50);
  block5 = new Box(600,160,50,50);
  ground = new Ground(600,400,100,20);
  rock = new Rock(200,300,30);
  chain = new slingshot(rock.body, {x:200, y:300});
  World.add(world, block1);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  rock.display();
  chain.display();
  ground.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32){
      chain.attach(rock.body);
}
}