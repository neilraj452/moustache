noseX=0;
noseY=0;
function preload() {
    moustache = loadImage('https://i.postimg.cc/LshxxsvM/moustache-PNG38.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    //canvas.center();
    canvas.parent("Neilraj_Singh");
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //stroke(255,0,0)
    //circle(noseX, noseY, 20);
    image(moustache, noseX -15, noseY +15, 30, 30);
}


function take_snapshot(){
save('mymoustacheImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.x);
    }
}