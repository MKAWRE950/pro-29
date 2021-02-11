const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);
  BlockBlue1 = new Blockblue(200, 182, 20, 20);
  BlockBlue2 = new Blockblue(220, 182, 20, 20);
  BlockBlue3 = new Blockblue(240, 182, 20, 20);
  BlockBlue4 = new Blockblue(260, 182, 20, 20);
  BlockBlue5 = new Blockblue(280, 182, 20, 20);
  BlockBlue6 = new Blockblue(300, 182, 20, 20);
  BlockBlue7 = new Blockblue(320, 182, 20, 20);

  BlockPink1 = new Blockpink(201, 2, 20, 20);
  BlockPink2 = new Blockpink(220, 2, 20, 20);
  BlockPink3 = new Blockpink(240, 2, 20, 20);
  BlockPink4 = new Blockpink(260, 2, 20, 20);
  BlockPink5 = new Blockpink(280, 2, 20, 20);
  BlockPink6 = new Blockpink(300, 2, 20, 20);
  BlockPink7 = new Blockpink(320, 2, 20, 20);

  BlockBlue8  = new Blockblue(202, 182, 20, 20);
  BlockBlue9  = new Blockblue(220, 182, 20, 20);
  BlockBlue10 = new Blockblue(240, 182, 20, 20);
  BlockBlue11 = new Blockblue(260, 182, 20, 20);
  BlockBlue12 = new Blockblue(280, 182, 20, 20);
  BlockBlue13 = new Blockblue(300, 182, 20, 20);
  BlockBlue14 = new Blockblue(320, 182, 20, 20);
  polygon_1 = new Polygon(110, 100, 20, 20);
  sling = new Slingshot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);
}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();
  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  BlockPink6.display ();
  BlockPink7.display ();
  BlockBlue8.display ();
  BlockBlue9.display ();
  BlockBlue10.display();
  BlockBlue11.display();
  BlockBlue12.display();
  BlockBlue13.display();
  BlockBlue14.display();
  polygon_1.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}