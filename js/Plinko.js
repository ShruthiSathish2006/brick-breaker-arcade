class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.h = 10;
        this.w = 30;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(0,0,this.w,this.h);
        pop();
    }

};