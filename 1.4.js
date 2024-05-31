function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var height = parseInt(document.getElementById('height').value);
    var width = parseInt(document.getElementById('width').value);
    var x = parseInt(document.getElementById('xCor').value);
    var y = parseInt(document.getElementById('yCor').value);
    var color = document.getElementById('color').value;
    
    ctx.fillStyle = color;
    ctx.clearRect(x, y, width, height);
    ctx.fillRect(x, y, width, height);
}

function clearCanvas() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function borderColor() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var height = parseInt(document.getElementById('height').value);
    var width = parseInt(document.getElementById('width').value);
    var x = parseInt(document.getElementById('xCor').value);
    var y = parseInt(document.getElementById('yCor').value);
    var color2 = document.getElementById('color2').value;

    ctx.lineWidth = 2;
    ctx.strokeStyle = color2;
    ctx.strokeRect(x, y, width, height);
}

function clearBorder() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var height = parseInt(document.getElementById('height').value);
    var width = parseInt(document.getElementById('width').value);
    var x = parseInt(document.getElementById('xCor').value);
    var y = parseInt(document.getElementById('yCor').value);
    
    var borderWidth = 2;
    ctx.clearRect(x - borderWidth, y - borderWidth, width + borderWidth * 2, height + borderWidth * 2);

    var color = document.getElementById('color').value;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
