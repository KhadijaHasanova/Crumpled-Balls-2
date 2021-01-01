class Dustbin {
  constructor(x,y,width,height){
    var options={
    isStatic: true
  }

  this.width=width;
  this.height=height;
  this.image = loadImage("dustbin.png");
  this.body = Bodies.rectangle(x,y,width,height,options);

  World.add(world,this.body);
  }
  
  display(){
    var binpos = this.body.position;
    image(this.image,binpos.x,binpos.y,this.width,this.height);
  }
}