class Polygon {

    constructor(x, y,width,height){
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':0.02
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
        

}