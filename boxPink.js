class Box {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }
        this.visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("block.png");
        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        if(this.body.speed < 2.5){
             image(this.image, pos.x, pos.y, this.width, this.height);
        }
        else{
            World.remove(world, this.body)
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            image(this.image, pos.x, pos.y, this.width, this.height);
            pop();            
        }
        strokeWeight(2);
        fill("pink");

    }
}
