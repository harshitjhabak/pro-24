class Paper {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius/2, options);
      
      World.add(world, this.body);
    }
    display(){

      fill("purple");
      var posit = this.body.position;
      push();
      translate(posit.x, posit.y);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius);
      pop();

    }
}