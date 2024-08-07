let palavra;

function setup() {
  createCanvas(600, 500);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Aghata Braz"];
  
  return random(palavras);
}

function inicializaCores() {
  background("black");
  fill("rgb(204,147,204)");
  textSize(59);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let parcial = palavraParcial(0, width);
    
  text(parcial, 200, 200);
  
}