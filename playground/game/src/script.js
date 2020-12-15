const screen = document.getElementById('screen');
const ctx = screen.getContext('2d');
screen.width = 800;
screen.height = 500;

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
playerSprite.src = ""