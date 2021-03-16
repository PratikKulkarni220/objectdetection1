image1 =  "";

function preload(){
        image1 = loadImage("bike.jpeg");
}

function draw(){
    image(image1,0 , 0 , 600 , 600);
     fill("red");
     text("Bike:", 100, 110);
     stroke("black");
     noFill();
     rect(100 , 100 , 200 , 200);
     stroke("black");
     fill("red");
     noFill();
     stroke("red");
     text("Bike:", 300, 80);
     rect(290 , 56, 250 , 250);
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(550, 300);
}