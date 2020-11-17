var song;
var slider
var sliderRate
var sliderPan;
var button;
var jumpButton;

function preload() {
  embryo = loadImage('assets/Embryo.jpg');
  embryo2 = loadImage('assets/embryo3.jpg');
  embryo3 = loadImage('assets/Embryo-2.gif');
  mitosis = loadImage('assets/mitosis.jpg');
  dna = loadImage('assets/dna.gif');
  song = loadSound("audio/sadeFlip.wav");
  song.setVolume(0.9);

}
function setup() {
  createCanvas(1200, 1200, WEBGL);
  tint(0, 153, 204, 126);
  background(51, 20, 20);
  amp = new p5.Amplitude();

}

function draw() {
  background(1);
  var val = mouseY;
  camera(val, val/2, mouseX + sin(frameCount * 0.01) * 1000, 2, -mouseX, mouseY, val, -9, -0);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 80, 500);
  val+10;
  fill(20);
  if (vol > .010) {
    fill(255);
    texture(embryo3);
  }
  if (vol > .030) {
    fill(255);
    texture(embryo3);
    val =2;
  }
  if (vol > .040) {
    fill(40);
    texture(embryo2);
    val =2;
  }
  if (vol > .050) {
    ambientLight(255, 50, 0);
    ambientMaterial(250);
    fill(250);
    texture(mitosis);
  }
  if (vol > .060) {
    fill(250);
    ambientLight(255, 250, 0);
    texture(embryo3);
    background(255);
    val = mouseY;
  }
  if (vol > .070) {
    fill(250);
    texture(embryo);
    background(255);
    val = 1;
  }
  sphere(diam);
  var x = 1;
}

function mouseClicked() {
  togglePlaying();
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);

  } else {
    song.pause();

  }
}
