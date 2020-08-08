canvas = document.getElementById("gamecanvas");
canvasContext = canvas.getContext("2d");
// https://www.html5canvastutorials.com/
ballX = 50;
ballSpeedX = 10;
ballY = 50;
ballSpeedY = 5;

paddle1Y = 250;
paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

const WINNING_SCORE = 3;
showingWinScreen = false;

canvasContext.font = "40px Calibri";
player1Score = 0;
player2Score = 0;

framePerSecond = 30;

function drawNet() {
	for (let i = 0; i < canvas.height; i += 40) {
		colorRect(canvas.width / 2 - 1, i, 2, 20, "white");
	}
}

function drawEverything() {
	// ve nen
	colorRect(0, 0, canvas.width, canvas.height, "black");
	if (showingWinScreen) {
		canvasContext.fillStyle = "white";
		if (player1Score >= WINNING_SCORE) {
			canvasContext.fillText("You won!!!", 320, 200);
		} else if (player2Score >= WINNING_SCORE) {
			canvasContext.fillText("Computer won!!!", 280, 200);
		}
		// canvasContext.fillStyle = "white";
		canvasContext.fillText("Click to continue", 280, 500);
		return;
	}
	//ve luoi
	drawNet();
	//this is left player paddle
	colorRect(0, paddle1Y, PADDLE_THICKNESS, 100, "white");
	//this is right player paddle
	colorRect(
		canvas.width - PADDLE_THICKNESS,
		paddle2Y,
		PADDLE_THICKNESS,
		100,
		"white"
	);
	// draw ball
	colorCircle(ballX, ballY, 10, "white");

	canvasContext.fillText(player1Score, 100, 100);
	canvasContext.fillText(player2Score, canvas.width - 100, 100);
}
//ve khoi
function colorRect(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height); //x,y,width,height
}
//ve vong tron
function colorCircle(centerX, centerY, radius, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
	canvasContext.fill(); //fill từ 0 đến Math.PI*2, 10 là bán kính, false, true là nửa trên dưới,
}

// computer di chuyển
function computerMovement() {
	paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
	if (paddle2YCenter < ballY - 35) {
		paddle2Y += 6;
	} else if (paddle2YCenter > ballY + 35) {
		paddle2Y -= 6;
	}
}

// di chuyen
function moveEverything() {
	if (showingWinScreen) {
		return;
	}
	computerMovement();
	ballX += ballSpeedX;
	ballY += ballSpeedY;
	if (ballX > canvas.width) {
		if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;
			deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35;
		} else {
			player1Score++; //must be BEFORE ballReset
			ballReset();
		}
		// ballSpeedX = -ballSpeedX;
	}
	if (ballX < 0) {
		// ballSpeedX = -ballSpeedX;
		if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;
			deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35;
		} else {
			player2Score++; //must be BEFORE ballReset
			ballReset();
		}
	}
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if (ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
}
//bat su kien theo chuot
function calculateMousePos(evt) {
	rect = canvas.getBoundingClientRect();
	root = document.documentElement;
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x: mouseX,
		y: mouseY,
	};
}

function ballReset() {
	if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
		showingWinScreen = true;
		// player1Score = 0;
		// player2Score = 0;
	}
	ballSpeedX = -ballSpeedX;
	ballX = canvas.width / 2;
	ballY = canvas.height / 2;
}

function callBoth() {
	moveEverything();
	drawEverything();
}

canvas.addEventListener("mousemove", (evt) => {
	mousePos = calculateMousePos(evt);
	paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
});

setInterval(callBoth, 1000 / framePerSecond);
function handleMouseClick(evt) {
	if (showingWinScreen) {
		player1Score = 0;
		player2Score = 0;
		showingWinScreen = false;
	}
}

canvas.addEventListener("mousedown", handleMouseClick);
