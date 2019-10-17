var serial;
var latestData = "waiting for data";
var data = 0;
var position = "0";
var position1, position2;
var pos1 = 0;
var pos2 = 0;
var p1 = 0;
var p2 = 0;
var ball = 0;
var ballV= 0;
speed = [-7, 7];
var p1Score = 0;
var p2Score = 0;

function setup() {
 
 createCanvas(windowWidth, windowHeight);

 ball = createVector(width/2, height/2);
 ballV = createVector(random(speed), random(speed));

 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/tty.usbserial-1410');

 serial.on('connected', serverConnected);
 serial.on('list', gotList);
 serial.on('data', gotData);
 serial.on('error', gotError);
 serial.on('open', gotOpen);
 serial.on('close', gotClose);

}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (var i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 var currentString = serial.readLine();
 trim(currentString);
 if (!currentString) return;
 latestData = currentString;
 data = int(latestData);
 var position = split(currentString, ',');
 position1 = map(position[0], 0, 1023, 0, height-height/8);
 position2 = map(position[1], 0, 1023, 0, height-height/8);
 pos1 = int(position1);
 pos2 = int(position2);
 //console.log(pos1+" , "+pos2);

}

function draw() {
 
background(0);

stroke(255);
line(width/2, 0, width/2, height);

rect(0, pos1, width/50, height/8);
rect(width-width/50, pos2, width/50, height/8);

noStroke();
ellipse(ball.x, ball.y, height/50);

textSize(20);
textAlign(CENTER);
fill(255);
text("Player One", width/4, height/20);

textSize(50);
textAlign(CENTER);
fill(255);
text(p1Score, width/4, height/20+50);

textSize(20);
textAlign(CENTER);
fill(255);
text("Player Two", width/4*3, height/20);

textSize(50);
textAlign(CENTER);
fill(255);
text(p2Score, width/4*3, height/20+50);

handleBall();

if (p1Score == 10){
	noLoop();
	background(0);
	textSize(75);
	textAlign(CENTER);
	text("Player One Won!!", width/2, height/2);
	}

if (p2Score == 10){
	noLoop();
	background(0);
	textSize(75);
	textAlign(CENTER);
	text("Player Two Won!!", width/2, height/2);
	}
}

function handleBall(){
	
	ball.x += ballV.x;
	ball.y += ballV.y;

	//top and bottom collisions
	if (ball.y > height-height/100 || ball.y < 0+height/100){
		ballV.y *= -1;
	}

	//collision left paddle
	if (ball.x <= width/50+height/100){
		if (ball.y > pos1 && ball.y < pos1+height/8){
			ballV.x *= -1;
		}

	else if (ball.x <= height/100){
			p2Score++;
			reset();
			return;
		}
	}
	// 	else {
	// 		p2Score++;
	// 		reset();
	// 		return;
	// 	}
	// }
	//collision right paddle
	if (ball.x >= width - (width/50) - height/100){
		if (ball.y > pos2 && ball.y < pos2+height/8){
			ballV.x *= -1;
		}
	else if (ball.x >= width-height/100){
			p1Score++;
			reset();
			return;
	}
		// else {
		// 	p1Score++;
		// 	reset();
		// 	return;
		// }
	}

}

function reset(){
	ball = createVector(width/2, height/2);
 	ballV = createVector(random(speed), random(speed));
}