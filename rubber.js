class Rubber{
    constructor(){

var options = {
    'density' :1,
   'friction' : 5,
    'restitution' : 0.3,
       }

this.body = Bodies.circle(400,300,50);
World.add(world,this.body);
}

 display(){

  ellipseMode(RADIUS);
 ellipse(this.body.position.x,this.body.position.y,50,50);
 }
}