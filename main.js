

var canvas = new fabric.Canvas("myCanvas");

var block_width = 50;
var block_height = 50;
var player_x = 10;
var player_y = 10;
var playerObject = "";
var blockObject = "";
var keyPressed;



function player_update() {
    fabric.image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth("150");
        playerObject.scaleToHeight("140");
        playerObject.set( {
            top:player_y,
            left:player_x

        });
        canvas.add(playerObject);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockObject = Img;
        blockObject.scaleToWidth(block_width);
        blockObject.scaleToHeight(block_height);
        blockObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);

    });
}

window.addEventListener('keydown', keydownFn);


function keydownFn(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (e.shiftKey == true && keyPressed == '80') {
        block_width += 10;
        block_height += 10;
        document.getElementById("currentWidth").innerHTML = block_width;
        document.getElementById("currentHeight").innerHTML = block_height;

    } 
    if(e.shiftKey == true && keyPressed == '77') {
        block_width -= 10;
        block_height -= 10;
        document.getElementById("currentWidth").innerHTML = block_width;
        document.getElementById("currentHeight").innerHTML = block_height;

    }
    if (keyPressed == '70') {
        new_image('ironman_left_hand.png');
        console.log('f');

    }

}