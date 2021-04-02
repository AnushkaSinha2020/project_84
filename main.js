canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
background_image= "race_track.jpg"
car1_width = 80;
car1_height = 70;
car1_image = "car_1.png";
car1_x = 30;
car1_y = 20;
car2_width = 80;
car2_height = 50;
car2_image = "car_2.png";
car2_x = 30;
car2_y = 90;

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  car1_imgTag = new Image();
  car1_imgTag.onload = uploadcar1;
  car1_imgTag.src = car1_image;

  car2_imgTag = new Image();
  car2_imgTag.onload = uploadcar2;
  car2_imgTag.src = car2_image;
}

function myFunction() {
    window.alert("(RED CAR- UP: UP ARROW KEY, DOWN: DOWN ARROW KEY, LEFT: LEFT ARROW KEY, RIGHT: RIGHT ARROW KEY)(WHITE CAR- UP: W KEY, DOWN: S KEY, LEFT: A KEY, RIGHT: D KEY)");
}
function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
  ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed=='40'){
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed=='37'){
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed=='39'){
        car1_right();
        console.log("right arrow key");
    }
    if (keyPressed=='87'){
        car2_up();
        console.log("w key")
    }
    if (keyPressed=='83'){
        car2_down();
        console.log("s key")
    }
    if (keyPressed=='65'){
        car2_left();
        console.log("a key")
    }
    if (keyPressed=='68'){
        car2_right();
        console.log("d key")
    }
}