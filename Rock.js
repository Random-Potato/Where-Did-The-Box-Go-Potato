class Rock{
  constructor(x, y, r, angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          isStatic: false
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.radius);
      pop();
    }
}
