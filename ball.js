var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;
const grid = canvasHeight / 10;
var count = 0;

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = getRandomInt(0, grid);
        this.dy = getRandomInt(0, grid);
    }

    drawRec() {
        context.fillStyle = 'red';
        context.fillRec(this.x, this.y, grid, grid);
    }

    drawCircle() {
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(this.x, this.y, grid / 2, 0, Math.PI * 2);
        context.fill();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x <= 0 + grid / 2 || this.x >= canvasWidth - grid / 2) {
            this.dx = -this.dx;
        }
        if (this.y <= 0 + grid / 2 || this.y >= canvasHeight - grid / 2) {
            this.dy = -this.dy;
        }
    }
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const showCoords = (x, y) => {
    let coords = 'point(' + x + ', ' + y + ')';
    document.getElementById("point").innerHTML = coords;
};

const animation = () => {
    requestAnimationFrame(animation);
    if (++count < 4) {
        return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    showCoords(ball.x, ball.y);
    ball.move();
    ball.drawCircle();
};

var ball = new Ball(100, 100);
requestAnimationFrame(animation);