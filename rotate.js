class Rotate {
    constructor(x,y,width,height,) {
     // Matter.Body.setAngle(this.body, angle);
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
        //push();
      var pos =this.body.position;
      //translate(pos.x,pos.y)
      rectMode(CENTER);
      //rotate(this.body.angle)
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      //pop();
      

    }
  };