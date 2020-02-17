const rectWidth = 150;
const rectHeight = 150;
let rectX = 100;
let rectY = 100;
let mySquares = [];
function setup () {
  createCanvas(1000, 1000);
  background(0);
  // rect(x, y, width, height);
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 4; i++) {
      rect(rectX, rectY, rectWidth, rectHeight);
      mySquares.push({ x: rectX, y: rectY });
      rectX += 200;
    }
    rectY += 200;
    rectX = 100;
  }
  console.log(mySquares);
}

function mousePressed() {
  for (let j = 0; j < mySquares.length; j++) {
    const distance = dist (mouseX, mouseY, mySquares[j].x, mySquares[j].y );
    if (distance < rectWidth) {
      console.log('Square has been clicked');
    }
  }
}
