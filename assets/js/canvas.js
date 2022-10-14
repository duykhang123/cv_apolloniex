var w, h, loopId, id, canvas, ctx, particles, widthWindow;
var options = {
    particleColor: "rgb(116,178,218,0.5)",
    lineColor: "rgb(116,178,218,0.03)",
    particleAmount: 0,
    defaultRadius: .5,
    variantRadius: 8,
    defaultSpeed: .8,
    variantSpeed: 1,
    linkRadius: 140
};

$(function() {
    // console.log(document.getElementById("js-height-canvas").innerHeight());
})

// var rgb = options.lineColor.match(/\d+/g);

document.addEventListener("DOMContentLoaded", init);
window.onresize = function(event) {

    clearCanvas();
    resizeReset();
    initialiseElements();
    startAnimation();
};

function init() {
    canvas = document.getElementById("particles-canvas");
    ctx = canvas.getContext("2d");
    widthWindow = window.innerWidth;
    if (widthWindow > 1200) {
        options.particleAmount = 65;
    } else if (widthWindow > 992) {
        options.particleAmount = 42;
    } else if (widthWindow > 768) {
        options.particleAmount = 32;
    } else if (widthWindow > 576) {
        options.particleAmount = 22;
    } else {
        options.particleAmount = 12;
    }
    resizeReset();
    initialiseElements();
    startAnimation();

}

function clearCanvas() {
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.strokeStyle = 'transparent';
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.stroke();
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function initialiseElements() {
    particles = [];
    for (var i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
    }
}

function startAnimation() {
    loopId = requestAnimationFrame(animationLoop);
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();

    id = requestAnimationFrame(animationLoop);
}

function drawScene() {
    drawLine();
    drawParticle();
}

function drawParticle() {
    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
}

function drawLine() {
    for (var i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
    }
}

function linkPoints(point, hubs) {
    for (var i = 0; i < hubs.length; i++) {
        var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
        var opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
            ctx.lineWidth = 0.5;
            // ctx.strokeStyle = 'rgba(' + rgb[1] + ',' + rgb[2] + ',' + rgb[3] + ',' + opacity + ')';
            ctx.strokeStyle = options.lineColor;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(hubs[i].x, hubs[i].y);
            ctx.closePath();
            ctx.stroke();
        }
    }
}

function checkDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

Particle = function() {
    var _this = this;

    _this.x = Math.random() * w;
    _this.y = Math.random() * h;
    _this.color = options.particleColor;
    _this.radius = options.defaultRadius + Math.random() * options.variantRadius;
    _this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
    _this.directionAngle = Math.floor(Math.random() * 100);
    _this.vector = {
        x: Math.cos(_this.directionAngle) * _this.speed,
        y: Math.sin(_this.directionAngle) * _this.speed
    }

    _this.update = function() {
        _this.border();
        _this.x += _this.vector.x;
        _this.y += _this.vector.y;
    }

    _this.border = function() {
        if (_this.x >= w || _this.x <= 0) {
            _this.vector.x *= -1;
        }
        if (_this.y >= h || _this.y <= 0) {
            _this.vector.y *= -1;
        }
        if (_this.x > w) _this.x = w;
        if (_this.y > h) _this.y = h;
        if (_this.x < 0) _this.x = 0;
        if (_this.y < 0) _this.y = 0;
    }

    _this.draw = function() {
        ctx.beginPath();
        ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 10);
        ctx.closePath();
        ctx.fillStyle = _this.color;
        ctx.fill();
    }
}