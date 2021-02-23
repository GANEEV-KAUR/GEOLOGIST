class Stone{
    constructor(){

     var options = {
     'density' :4,
    'friction' : 1.0,
     'restitution' : 0.5,
        }
      
    this.body = Bodies.rectangle(200,250,50,50);
      World.add(world,this.body);
      }

       display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,100,100);
       }
    
}
