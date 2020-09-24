 const Engine=Matter.Engine
 const Bodies=Matter.Bodies
 const World=Matter.World
 
 var engine, world
 var box1
 var box2
 var ground
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world;
  box1=new BoxObjects(200,250,35,35)
  box2=new BoxObjects(300,350,35,35)
  var groundOption={

  isStatic:true
  }
  ground=Bodies.rectangle(400,390,600,20,groundOption)
  World.add(world,ground)
  

}

function draw() {
  background("black"); 
  Engine.update(engine) 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,100,20)
  box1.display()
  box2.display()
}
