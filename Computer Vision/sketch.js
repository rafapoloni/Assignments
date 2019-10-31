let video;
let poseNet;
let eye1X = 0;
let eye1Y = 0;
let eye2X = 0;
let eye2Y = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  console.log(poses);
  if (poses.length > 0) {
  eye1X = poses[0].pose.keypoints[1].position.x;
  eye1Y = poses[0].pose.keypoints[1].position.y;
  eye2X = poses[0].pose.keypoints[2].position.x;
  eye2Y = poses[0].pose.keypoints[2].position.y;
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  image(video, 0, 0);
  filter(GRAY);
  
  let d = dist(eye1X, eye1Y, eye2X, eye2Y)/4;
  
  stroke(255,0,0);
  strokeWeight(d/5);
  line(eye1X-d, eye1Y-d, eye1X+d, eye1Y+d);
  line(eye1X-d, eye1Y+d, eye1X+d, eye1Y-d);
  line(eye2X-d, eye2Y-d, eye2X+d, eye2Y+d);
  line(eye2X-d, eye2Y+d, eye2X+d, eye2Y-d);
}//