const BACKGROUND_COLOUR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;

var draw = false;

function prepareCanvas() {
    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOUR;
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    document.addEventListener('mousedown', function (event) {
        draw = true;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;

    });

    document.addEventListener('mouseup', function (event) {
        draw = false;
    });

    document.addEventListener('mousemove', function (event) {
        if (draw) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;
            
            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;

            drawCanvas();
        }
    });
    canvas.addEventListener('mouseleave', function (event) {
        draw = false;
    });

    canvas.addEventListener('touchstart', function (event) {
        draw = true;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;

    });

    canvas.addEventListener('touchmove', function (event) {
        if (draw) {
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;
            
            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;

            drawCanvas();
        } 
    });
    canvas.addEventListener('touchend', function (event) {
        draw = false;
    });

}

function drawCanvas() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

}