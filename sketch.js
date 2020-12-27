const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var ball;
var rope;
function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(1000,200,80,80)
    box2= new Box(1000,100,80,80)
    box3= new Box(1000,300,80,80)
    ground = new Ground(600,600,1200,20)
ball= new Ball(200,200)
rope= new Slingshot(ball.body,{x:800,y:100})
    

}

function draw(){
    background(100);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    ball.display();
    rope.display();
}