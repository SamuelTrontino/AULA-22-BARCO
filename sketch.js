const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var ball
var bolas = []
var canvas, angle, tower, ground, cannon;
var barco = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  angleMode(DEGREES)
  angle = 15
  cannon = new Cannon(180,110,130,100,angle)

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);


  rect(ground.position.x, ground.position.y, width * 2, 1);
  cannon.show()
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
  
  for(var i=0;i<bolas.length;i++){
      showball(bolas[i])
  }
  barcoshow()
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    bolas[bolas.length-1].atirar()
  }
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    ball = new Ball(cannon.x,cannon.y)
    ball.caminho = []
    Matter.Body.setAngle(ball.body,cannon.angle)
    bolas.push(ball)
  }
}
function showball(ball){
  if(ball){
    ball.show()
}
}
function barcoshow(){
  if (barco.length>0) {
   if(barco[barco.length-1]===undefined||
    barco[barco.length-1].body.position.x<width-300
    ){
      var posicao = [-40,-20,-60,-80]
      var randomposition = random(posicao)
      var barco1 = new Barco(width,height-70,170,170,randomposition)
      barco.push(barco1)
      for(var i=0;i<barco.length;i++){
        if(barco[i]){
          Matter.Body.setVelocity(barco[i].body,{
            x:-0.6,y:0
          })
          barco[i].show()
        }
      }
   } 
  } else {
    var barco1 = new Barco(width,height-70,170,170,-70)
    barco.push(barco1)
    
  }
}