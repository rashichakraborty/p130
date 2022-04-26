song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload() {
    song1 = loadSound("music.mp3");
    song2 - loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        scoreleftwrist = results[0].pose.keypoints[9].score;
        scorerightwrist = results[0].pose.keypoints[10].score;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("righttWristX = " + rightWristX + "righttWristY = " + rightWristY);
    }
    
}

function draw() {
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
}

if (scoreleftwrist > 0.2){
    circle(leftWristX,leftWristY,20);
    song1.play();
}

if (scorerightwrist > 0.2){
    circle(leftWristX,leftWristY,20);
    song1.stop();
    song2.play();
}



function play(){
    song1.play();
    song.setVolume(0.5);
    song.rate(1);
}
