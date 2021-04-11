const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
var engine, world;
var maxDrops = 100
var drops=[];
var umbrella;
var thunder1, thunder2;
function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
}

function setup(){
   createCanvas(1200,400);
    
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(200,300);
   for(var i = 0;i <maxDrops; i++){
    drops.push(new Drop(random(0,400),random(0,400)))
}
}
function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0;i <maxDrops; i++){
  drops[i].display();
  drops[i].updateY();  
 
    }
rand = Math.round(random(1,4));
if(frameCount%80===0){
  thunderCreatedFrame=frameCount;
  thunder = createSprite(random(10,370), random(10,30),10,10);
  switch(rand){
    case 1 : thunder.addImage(thunder1);
    break;
    case 2 : thunder.addImage(thunder2);
    break;
    default: break;
  }
  thunder.scale = random(0.3,0.6)
}
    umbrella.display();
    }


