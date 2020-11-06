let originalP1;
var spacing = 180;

function preload() {
    originalP1 = loadModel("https://raw.githubusercontent.com/juthomas/P5-spine3d-web/master/assets/3d_Models/Tripode/Classic/TripodeTDisplay.obj", true);

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
  translate(0, -0.1, 0);
  model(originalP1);



}