class Paper {
  constructor(x,y,r){
    var options={        
      isStatic: false,
      resitution: 0.3,
      friction: 0.5,
      density: 1.2
      }
    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options);
    this.image = loadImage("paper.png");

    //add it to the world
    World.add(world,this.body)
  }
    
    
  display(){
    var paperpos = this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
    pop();
  }
}