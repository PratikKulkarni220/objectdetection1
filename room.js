image1 =  "";

function preload(){
        image1 = loadImage("bed.jpeg");
}

function draw(){
    image(image1,0 , 0 , 600 , 600);
     fill("red");
     text("Bed:", 100, 360);
     stroke("black");
     noFill();
     rect(100 , 340 , 400 , 200);
     stroke("black");
     fill("red");
     noFill();
     stroke("red");
     text("Chair:",475 , 378);
     rect(475 , 378, 120 , 120);
     text("Painting:",292 , 160);
     rect(295 , 165, 80 , 120);
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(550, 300);
}