const RECT_W = 200
const RECT_H = 400;
const LIGHT_RADIUS = 50;
const OFF_LIGHT_COLOR = 'gray';
const RED_LIGHT_ON = 'red';
const YELLOW_LIGHT_ON = 'yellow';
const GREEN_LIGHT_ON = 'green';
const SWITCH_LIGHT_TIMER = 30;
const RED_LIGHT_Y = 100;
const YELLOW_LIGHT_Y = 220;
const GREEN_LIGHT_Y = 340;
const TOTAL_LIGHTS = 3;

let canvas, context;
let centerX, centerY;
let swithLightTimer = SWITCH_LIGHT_TIMER;
let whichLightOn = 0;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  
  centerX = canvas.width/2;
  
  setInterval(() => {
    resetCanvas();
    drawEverything();
  }, 1000/30);
};

function resetCanvas() {
  context.fillStyle = '#fff';
  context.fillRect(0,0, canvas.width, canvas.height);
}

function drawEverything() {
  context.fillStyle = 'black';
  context.fillRect(centerX-RECT_W/2, 20, RECT_W, RECT_H);
  
  if (whichLightOn === 0) {
    toggleRedLight(true)
  } else {
    toggleRedLight(false);
  }
  
  if (whichLightOn === 1) {
    toggleGreenLight(true)
  } else {
    toggleGreenLight(false);
  }
  
  if (whichLightOn === 2) {
    toggleYellowLight(true)
  } else {
    toggleYellowLight(false);
  }
  
  startTimer();
}

function startTimer() {
  swithLightTimer--;
  if (swithLightTimer === 0) {
    swithLightTimer = SWITCH_LIGHT_TIMER;
    switchLights();
  }
}

function switchLights() {
  whichLightOn++;
  if (whichLightOn === TOTAL_LIGHTS) {
    whichLightOn = 0;
  } 
}

function drawLight(color, centerY) {
  context.beginPath();
  context.arc(centerX, centerY, LIGHT_RADIUS, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

function toggleRedLight(turnOn) {
  let color = OFF_LIGHT_COLOR;
  if (turnOn) {
    color = RED_LIGHT_ON;
  }
  
  drawLight(color, RED_LIGHT_Y);
}

function toggleYellowLight(turnOn) {
  let color = OFF_LIGHT_COLOR;
  if (turnOn) {
    color = YELLOW_LIGHT_ON;
  }
  
  drawLight(color, YELLOW_LIGHT_Y);
}

function toggleGreenLight(turnOn) {
  let color = OFF_LIGHT_COLOR;
  if (turnOn) {
    color = GREEN_LIGHT_ON;
  }
  
  drawLight(color, GREEN_LIGHT_Y);
}
