
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
var canvas=	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	
shooter=new Shooter(100,400,20)
chain = new Chain(shooter.body,{x:180,y:400})
ground= new Ground(490,500,300,20)
box1=new Box(400,450,30,50)
box2=new Box(430,450,30,50)
box3=new Box(460,450,30,50)
box4=new Box(490,450,30,50)
box5=new Box(520,450,30,50)
box6=new Box(550,450,30,50)
box7=new Box(580,450,30,50)
box8=new Box(430,400,30,50)
box9=new Box(460,400,30,50)
box10=new Box(490,400,30,50)
box11=new Box(520,400,30,50)
box12=new Box(550,400,30,50)
box13=new Box(460,300,30,50)
box14=new Box(490,300,30,50)
box15=new Box(520,300,30,50)
box16=new Box(490,280,30,50)


Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  textSize(20)
  stroke("black")
  text ("drag the stone with your mouse and release it to destroy the tower refrest the page to play again ",55,100)
  text("# harder than you think!!!!!",400,150)
  
shooter.display()
chain.display()
  ground.display()
  fill ("yellow")
  box1.display()
  fill ("blue")
  box2.display()
  fill("pink")
  box3.display()
  fill("orange")
  box4.display()
  fill("red")
  box5.display()
  fill("green")
  box6.display()
  fill("purple")
  box7.display()
  fill("brown")
  box8.display()
  fill("white")
  box9.display()  
  fill("orange")
 box10.display()
 fill("green")
 box11.display()
 fill("red")
 box12.display()
 fill("yellow")
 box13.display()
 fill("red")
 box14.display()
 fill("purple")
 box15.display()
 fill("white")
 box16.display()


}
function mouseDragged(){
   Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly();
}


