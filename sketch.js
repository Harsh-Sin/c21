var a, b;
var c;

function setup() {
    createCanvas(800, 400);
    a = createSprite(400, 400, 50, 50);
    b = createSprite(200, 250, 50, 300);
    a.shapeColor = "red";
    b.shapeColor = "blue";
    a.velocityX = -2;
}

function draw() {
    background(255);




    if (isTouching(a, b)) {
        a.shapeColor = "green";
        b.shapeColor = "gold";
    }
    bounceOff(a, b);


    drawSprites();
}

function isTouching(obj1, obj2) {
    if (obj1.x - obj2.x < obj2.width / 2 + obj1.width / 2 &&
        obj2.x - obj1.x < obj2.width / 2 + obj1.width / 2 &&
        obj1.y - obj2.y < obj1.height / 2 + obj2.height / 2 &&
        obj2.y - obj1.y < obj1.height / 2 + obj2.height / 2) {
        return true;
    } else {
        return false;
    }
}

function bounceOff(obj3, obj4) {
    if (obj3.x - obj4.x < obj4.width / 2 + obj3.width / 2 &&
        obj4.x - obj3.x < obj4.width / 2 + obj3.width / 2 &&
        obj3.y - obj4.y < obj3.height / 2 + obj4.height / 2 &&
        obj4.y - obj3.y < obj3.height / 2 + obj4.height / 2) {
        a.velocityX = (-1) * a.velocityX
    } else {
        return false;
    }
}