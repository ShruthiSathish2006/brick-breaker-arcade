class Ball{
    constructor(x, y){
    var options ={
        friction: 1,
        restitution: 1
    }
    this.h = 10;
    this.w = 10;
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
    fill("orange");
    rect(0,0,this.w,this.h);
    pop();
}}