import p5 from "p5";
import "p5/lib/addons/p5.sound";

var song;
var slider

var sliderRate
var sliderPan;

var button;
var jumpButton;



function setup() {
createCanvas(1200,1200, WEBGL);
tint(0, 153, 204, 126);
// cam = createCapture(VIDEO);

embryo = loadImage('Embryo.jpg');
embryo2 = loadImage('embryo3.jpg');
embryo3 = loadImage('Embryo-2.gif');
mitosis = loadImage('mitosis.jpg');
dna = loadImage('dna.gif');


song = loadSound("Audio/sadeFlip.wav", loaded); // 2nd arguement is the callback
song.setVolume(0.9);
amp = new p5.Amplitude();
background(51,20,20);

}

function draw() {
  background(1);
  camera(mouseX, mouseY, mouseX + sin(frameCount * 0.01) * 1000, 2, -3, -8, -2, -5, -9 );
  var vol = amp.getLevel();
  var diam = map(vol,0,0.3,80,500);
  fill(20);
  console.log(vol);
  if (vol > .010){

    fill(255);
    texture(embryo3);

  }
  if (vol > .030){
    fill(255);
    texture(embryo3);
  }
  if(vol > .040){
    fill(40);
    texture(embryo2);

  }
  if(vol > .050){
    ambientLight(255,50,0);
    ambientMaterial(250);


    fill(250);
    texture(mitosis);

  }
  if(vol > .060){
    fill(250);
    ambientLight(255,250,0);
    texture(embryo3);
    background(255);
  }
  if(vol > .070){
    fill(250);
    texture(embryo);
    background(255);
  }


  sphere(diam);
  var x = 1;
}

function loaded(){
  song.play();
  button = createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

}
function togglePlaying() {

  if(!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
  song.pause();
  button.html("play");
}
}
function jumpSong(){
var len = song.duration(); // puts song length in var len
var t = random(len);
var ct = song.currentTime();
song.jump(t);
}
