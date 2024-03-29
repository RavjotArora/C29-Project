class Polygon {
    constructor(x, y, width, height) {
        var options = {
        'restitution': 1,
        'density': 1,
        'friction':0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      
       this.image=loadImage("polygon.png")
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width , this.height );
        pop();
      }

};