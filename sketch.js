  
var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies; 

var plinkos = [];
var score = 0;
var ball;
var paddle;



function setup() {
createCanvas(800, 800);
engine = Engine.create();
world = engine.world;


for (var j = 10; j <=width; j=j+40) {
   plinkos.push(new Plinko(j,75));
}

for (var j = 20; j <=width-10; j=j+40) {
    plinkos.push(new Plinko(j,95)); 
}

for (var j = 30; j <=width; j=j+40) {
    plinkos.push(new Plinko(j,115));
}

for (var j = 40; j <=width-10; j=j+40) {
    plinkos.push(new Plinko(j,135));
}
for (var j = 50; j <=width-10; j=j+40) {
    plinkos.push(new Plinko(j,155));
}
for (var j = 60; j <=width-10; j=j+40) {
    plinkos.push(new Plinko(j,175));
}
ball = new Ball(200,0)



}

function draw() {
background("black");
fill("magenta");
textSize(20)
text("Score : "+score,20,40);

Engine.update(engine);


/*if ( gameState =="end") {
fill("cyan");
textSize(100);
text("GAME OVER", 150, 250);
//return
}
*/

if (keyIsDown === UP_ARROW){
    Matter.Body.setVelocity(ball.body,{x: 10, y: -10});
}


for (var i = 0; i < plinkos.length; i++) {
 plinkos[i].display();  
}
ball.display();
}


