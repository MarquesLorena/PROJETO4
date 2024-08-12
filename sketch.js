function setup() {
  createCanvas(600, 500);
}

function draw() {
  background("rgb(78,95,228)");
  fill("rgb(248,152,169)");
  textSize(65);
  textAlign(CENTER,CENTER);
  let maximo = width;
  let minimo = 0;
  let palavra = "LORENA LINDA<3";
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300, 250);
}
