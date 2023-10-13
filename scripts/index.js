

// start point
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("pongCanvas");
    const context = canvas.getContext("2d");

    const paddleWidth = 2;
    const paddleHeight = 10;
    const ballSize = 2;

    let xPaddle1 = 10;
    let yPaddle1 = canvas.height / 2 - paddleHeight / 2;
    let xPaddle2 = canvas.width - 20;
    let yPaddle2 = canvas.height / 2 - paddleHeight / 2;

    let xBall = canvas.width / 2;
    let yBall = canvas.height / 2;
    let ballSpeedX = 2;
    let ballSpeedY = 3;

    let playerScore = 0;
    let computerScore = 0;

    const winningScore = 5;

    function draw() {
        // Очищаємо поле
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Малюємо платформи
        context.fillStyle = "white";
        context.fillRect(xPaddle1, yPaddle1, paddleWidth, paddleHeight);
        context.fillRect(xPaddle2, yPaddle2, paddleWidth, paddleHeight);

        // Малюємо м'яч
        context.beginPath();
        context.arc(xBall, yBall, ballSize, 0, Math.PI * 2);
        context.fill();

        // Оновлюємо позицію м'яча
        xBall += ballSpeedX;
        yBall += ballSpeedY;

        // Відбивання м'яча від платформ
        if (xBall < xPaddle1 + paddleWidth && yBall > yPaddle1 && yBall < yPaddle1 + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        if (xBall > xPaddle2 && yBall > yPaddle2 && yBall < yPaddle2 + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        // Перевірка на виход за межі ігрового поля
        if (xBall < 0) {
            computerScore++;
            if (computerScore >= winningScore) {
                alert("Комп'ютер виграв! Гра завершена.");
                document.location.reload();
            }
            resetBall();
        }

        if (xBall > canvas.width) {
            playerScore++;
            if (playerScore >= winningScore) {
                alert("Ви виграли! Гра завершена.");
                document.location.reload();
            }
            resetBall();
        }

        if (yBall < 0 || yBall > canvas.height) {
            ballSpeedY = -ballSpeedY;
        }

        // Рух платформи гравця
        if (yPaddle1 > 0 && (yPaddle1 + paddleHeight < canvas.height)) {
            console.log(yPaddle1)
            if (wPressed && !sPressed) {
                yPaddle1 -= 5;
            } else if (sPressed && !wPressed) {
                yPaddle1 += 5;
            }
        } else if (yPaddle1 > 0 && (yPaddle1 + paddleHeight >= canvas.height)) {
            if (wPressed && !sPressed) {
                yPaddle1 -= 5;
            }
        }else if (yPaddle1 <= 0 && (yPaddle1 + paddleHeight < canvas.height)) {
            if (!wPressed && sPressed) {
                yPaddle1 += 5;
            }
        }

        if (yPaddle2 > 0 && (yPaddle2 + paddleHeight < canvas.height)) {
            console.log(yPaddle2)
            if (wPressed && !sPressed) {
                yPaddle2 -= 5;
            } else if (sPressed && !wPressed) {
                yPaddle2 += 5;
            }
        } else if (yPaddle2 > 0 && (yPaddle2 + paddleHeight >= canvas.height)) {
            if (wPressed && !sPressed) {
                yPaddle2 -= 5;
            }
        }else if (yPaddle2 <= 0 && (yPaddle2 + paddleHeight < canvas.height)) {
            if (!wPressed && sPressed) {
                yPaddle2 += 5;
            }
        }

        // Рух платформи комп'ютера
        if (yBall > (yPaddle2 + paddleHeight / 2)) {
            yPaddle2 += 5;
        } else {
            yPaddle2 -= 5;
        }

        // Анімація
        requestAnimationFrame(draw);
    }

    function resetBall() {
        xBall = canvas.width / 2;
        yBall = canvas.height / 2;
        ballSpeedX = 2;
        ballSpeedY = 3;
    }

    let wPressed = false;
    let sPressed = false;

    document.addEventListener("keydown", function (e) {
        if (e.key === "w" || e.key === "W") {
            wPressed = true;
        }
        if (e.key === "s" || e.key === "S") {
            sPressed = true;
        }
    });

    document.addEventListener("keyup", function (e) {
        if (e.key === "w" || e.key === "W") {
            wPressed = false;
        }
        if (e.key === "s" || e.key === "S") {
            sPressed = false;
        }
    });

    draw(); // Запускаємо гру

})





// __________- ANOTHER GAME_____________


// (function () {
// 	'use strict';

// 	var canvas = document.getElementById('canvas');
// 	var ctx = canvas.getContext('2d');

// 	// Rectangle
// 	var rect = {
// 		x: 0,
// 		y: 75,
// 		width: 30,
// 		height: 30
// 	};

// 	var animId = null;

// 	var direction = {
// 		right: true,
// 		bottom: true
// 	};
// 	var speed = {
// 		x: 5,
// 		y: 5,
// 		haste: 10,
// 		hasteX: 5,
// 		hasteY: 10
// 	};

// 	// Set dimensions
// 	function setCanvasDimensions() {
// 		var width = $(document).width() / 1.1;
// 		var height = $(document).height() / 1.5;

// 		canvas.width = width;
// 		canvas.height = height;
// 	}

// 	// Re-Draw
// 	function drawRect() {
// 		ctx.beginPath();
// 		ctx.rect(
// 			rect.x,
// 			rect.y,
// 			rect.width,
// 			rect.height);

// 		ctx.fillStyle = '#E74C3C';
// 		ctx.fill();
// 	}

// 	function handleEdge() {
// 		if (rect.x + rect.width >= canvas.width || rect.x < 0) {
// 			direction.right = !direction.right;
// 			speed.hasteX = speed.x + speed.haste;
// 		}

// 		if (rect.y + rect.height >= canvas.height || rect.y < 0) {
// 			direction.bottom = !direction.bottom;
// 			speed.hasteY = speed.y + speed.haste;
// 		}
// 	}

// 	function handleHaste() {
// 		if (speed.hasteX > speed.x) {
// 			speed.hasteX--;
// 		}
// 		if (speed.hasteY > speed.y) {
// 			speed.hasteY--;
// 		}
// 	}

// 	// Clear the Canvas
// 	function clear() {
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	}

// 	// Trigger Re-Draw
// 	function render() {
// 		var speedX = speed.hasteX > speed.x ? speed.hasteX : speed.x;
// 		var speedY = speed.hasteY > speed.y ? speed.hasteY : speed.y;

// 		handleEdge();
// 		handleHaste();

// 		if (direction.right) {
// 			rect.x = rect.x + speedX;
// 		} else {
// 			rect.x = rect.x - speedX;
// 		}

// 		if (direction.bottom) {
// 			rect.y = rect.y + speedY;
// 		} else {
// 			rect.y = rect.y - speedY;
// 		}

// 		drawRect(rect);
// 	}

// 	// Setup the animation
// 	function animate() {
// 		animId = window.requestAnimationFrame(animate);

// 		clear();
// 		render();
// 	}

// 	// Stop the animation
// 	function stop(id) {
// 		if (id) {
// 			window.cancelAnimationFrame(id);
// 		}
// 	}

// 	// Debounce helper for window resize
// 	function debounceResize(delay, callback) {
// 		var timeout;

// 		$(window).on('resize orientationChanged', function () {
// 			clearTimeout(timeout);
// 			timeout = setTimeout(callback, delay);
// 		});
// 	}

// 	/**
// 	 * Button click handlers
// 	 */

// 	debounceResize(20, function () {
// 		setCanvasDimensions();
// 	});

// 	$('#stop').on('click', function (e) {
// 		e.preventDefault();
// 		stop(animId);
// 	});

// 	$('#run').on('click', function (e) {
// 		e.preventDefault(animId);
// 		stop(animId);
// 		animate();
// 	});

// 	$('#speedX').on('change', function (e) {
// 		speed.x = parseInt(e.target.value, 10);
// 	});
// 	$('#speedY').on('change', function (e) {
// 		speed.y = parseInt(e.target.value, 10);
// 	});

// 	/**
// 	 * Init
// 	 */

// 	(function () {
// 		setCanvasDimensions();
// 		animate();
// 	}());

// }());