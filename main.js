//code started
//two variable to hold two music files
//var1
var music1 = "";
//var2
var music2 = "";
//function preload
function preload(){
//preloading music files
    music1 = loadSound("music1.mp3");
    music2 = loadSound("music2.mp3");
}

//function setup
function setup(){
    //adding cavas
    canvas = createCanvas(400, 400);
    canvas.position(440, 160);
    video = createCapture(VIDEO);
    video.hide();
}

//fuction draw
function draw(){
    image(video, 0, 0, 400, 400)
}