var gui;

// gui parameters
var theta = 10;
var thetaMin = 10;
var thetaMax = 180;
var thetaStep = 40;

function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    gui = createGui('dimensions');
    gui.addGlobals('theta');
}

function draw() {
    background(220);
    translate(width/2, height);
    stroke(2);
    branch(60);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);

    len *= 0.66;

    if (len > 2) {
        push();
        rotate(theta);
        branch(len);
        pop();

        push();
        rotate(-theta);
        branch(len);
        pop();
    }

    // if (len > 2) {
    //     let n = int(random(1, 4));
    //     for (let i = 0; i < n; i++) {
    //         // theta = random(-PI/2, PI/2);
    //         push();
    //         rotate(theta);
    //         branch(n);
    //         pop();
    //     }
    // }
}
