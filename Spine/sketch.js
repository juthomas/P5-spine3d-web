let spineP1;
let spineP2;
let spineP3;
let spineP4;
let spineP5;
var spacing = 180;

function preload() {
    spineP1 = loadModel("https://raw.githubusercontent.com/juthomas/P5-spine3d-web/master/assets/3d_Models/Tripode/Spine/TripodeSpinep1.obj", true);
    spineP2 = loadModel("https://raw.githubusercontent.com/juthomas/P5-spine3d-web/master/assets/3d_Models/Tripode/Spine/TripodeSpinep2.obj", true);
    spineP3 = loadModel("https://raw.githubusercontent.com/juthomas/P5-spine3d-web/master/assets/3d_Models/Tripode/Spine/TripodeSpinep3.obj", true);
    spineP4 = loadModel("https://raw.githubusercontent.com/juthomas/P5-spine3d-web/master/assets/3d_Models/Tripode/Spine/TripodeSpinep4.obj", true);
    spineP5 = loadModel("https://raw.githubusercontent.com/juthomas/P5-spine3d-web/master/assets/3d_Models/Tripode/Spine/TripodeSpinep5.obj", true);
}

function setup() {
    createCanvas(1240, 800, WEBGL);
}

function draw() {
  background(200);
  scale(1);
  rotateY(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateZ(3.14/2);
  normalMaterial();
// stroke(100, 180, 100);
  translate(0, -spacing * 1.98, 0);
  model(spineP1);
  translate(0, spacing, 0);
  model(spineP2);
  translate(0, spacing, 0);
  model(spineP3);
  translate(0, spacing, 0);
  model(spineP4);

  translate(0, spacing, 0);
  model(spineP5);


}