class Umbrella {
      
     constructor(){
          var options = {
               isStatic: true,
               restitution: 0.5
          };
          var radius = 25;
          this.body = Matter.Bodies.circle(250,310, radius, options);
          this.width = radius;
          this.height = radius;
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          imageMode(CENTER);
          image(man_image, pos.x, pos.y+40,175,175);

     }
}