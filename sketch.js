var song;
var slider
var sliderRate
var sliderPan;
var button;
var jumpButton;
let myFont;
let graphics;
var angle = 45;
let bg;
let y = 0;

function preload() {
  song = loadSound("SAY YES.WAV");
  song.setVolume(0.9);
  embryo = loadImage('assets/Embryo.jpg');
  embryo2 = loadImage('assets/embryo3.jpg');
  embryo3 = loadImage('assets/Embryo-2.gif');
  mitosis = loadImage('assets/mitosis.jpg');
  warnings = loadImage('assets/warningt.jpg');
  dna = loadImage('assets/dna.gif');
  bg = loadImage('assets/warningt.jpg');
  myFont = loadFont('assets/BarlowCondensed-BlackItalic.otf');


}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  tint(0, 153, 204, 126);
  background(51, 20, 20);
   graphics = createGraphics(200,200);
   graphics.fill(255);
   graphics.textAlign(CENTER);
   graphics.textSize(14);
   graphics.background(0);
   graphics.textFont(myFont);
   graphics.text('CLICK TO START',150,150);
  amp = new p5.Amplitude();
}

function draw() {
  background(255);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 1, mouseY/2, 550);
  fill(20);
  texture(graphics);

  if (vol > .010) {
    fill(255);
    texture(embryo);
    var diam = map(vol, mouseY/2, 1, mouseY/2, 550);

  }
  if (vol > .030) {
    fill(255);
    texture(embryo2);
      var diam = map(vol, 0, 1, mouseY/2, 550);
      angle +=0;;
  }
  if (vol > .040) {
    fill(40);
    texture(embryo2);
    val =2;
  }
  if (vol > .050) {
    ambientLight(255, 50, 0);
    ambientMaterial(250);
        background(255,0,0);
    fill(250);
    texture(mitosis);
  }
  if (vol > .060) {

    fill(250);
    ambientLight(255, 250, 0);
    texture(warnings);
    background(255,255,0);
    angle +=21;
  }
  if (vol > .070) {
    texture(embryo);
    background(255);
    angle +=0201;
    val = 1;
  }
let dirY = (mouseY / height - 0.5) *4;
let dirX = (mouseX / width - 0.5) *5;
directionalLight(0, 0, 0, dirX, -dirY, 1.5);
rotateX(angle*-.15);
rotateY(angle * 01);
rotateZ(angle * 0.12);
  sphere(diam);
  angle +=0.005;


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
