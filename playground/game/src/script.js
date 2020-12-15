const screen = document.getElementById('screen');
const ctx = screen.getContext('2d');
/*var screenwidth = 800;
var screenheight = 500;*/

const keys = [];

const player = {
    x: 0,
    y: 0,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "./darthvader.png";
const background = new Image();
background.src = "./background.png";

function animate() {
    ctx.drawImage(background, 110,200, 800, 500);
    requestAnimationFrame(animate);
}
animate();