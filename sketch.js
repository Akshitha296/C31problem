const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);

  ground = new Ground(240, 470, 800, 10)
}

function draw() {
  background(0);  
}