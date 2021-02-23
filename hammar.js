class Hammar{
    constructor(){

var options = {
 'density' :2,
 'friction' : 1.0,
 'restitution' : 0.5,
}

this.body = Bodies.rectangle(100,100,200,20);
World.add(world,this.body);

    }
display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,200,20);
  }
  }