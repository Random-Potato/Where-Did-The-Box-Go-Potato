class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1.0,
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body); 
    }
    display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle); 
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visible = this.visible-5;
        tint(255, this.visible);
        pop();
      }
    }
}