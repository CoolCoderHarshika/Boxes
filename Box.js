class BoxObjects
{
  constructor(x,y,width,height)      
{
  var bodyOption={
      restitution:0.8
  }  
  this.body=Bodies.rectangle(x,y,width,height,bodyOption)  
  World.add(world,this.body)
}
display()
{
   rectMode(CENTER)
   rect(this.body.position.x,this.body.position.y,this.width,this.height)
   
}
}