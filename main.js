
var song = ""
var song_is_playing = false;

function preload(){
song = loadSound("SONG.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song_is_playing = true;
}
function pause_music(){
    if (song_is_playing == true){
        song.pause();
        song_is_playing = false;
    }
  }











