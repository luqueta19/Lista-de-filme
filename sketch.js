 //animação, ação, drama, ficção científica, aventura
 //Rango, LIVRE,          animação, ação, aventura
 //A casa monstro,      12,      ação, fantasia, ficção científica
 //procurando nemo,   LIVRE,     aventura, animação, ação
  //Lanterna Verde,  12,         ação, ficção científica, drama, aventura
 //madagascar,        LIVRE,     ação,aventura
 //fuja,             16,         drama, aventura
 //aladdin,           11,        ação, aventura, ficção cientifíca
 //tropa de elite,    16,        ação, aventura, drama
 //Jumanji,         16,          ação, aventura
 

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput(6);
  campoAção = createCheckbox("Gosta de ação?");
  campoDrama = createCheckbox("Gosta de drama?");
}

function draw() {
 background("brown");
  let idade = campoIdade.value();
  let gostaDeAção = campoAção.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAção, gostaDeDrama);

  fill(color(75, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAção, gostaDeDrama) {
  if (idade >= 12) {
    if (idade >= 14) {
      return "Rango";
    } else {
      if (idade >= 16) {
        if(gostaDeAção|| gostaDeDrama) {
          return "A casa monstro";          
        } else{
         return "Procurando Nemo";
        }
      } else {
        if (gostaDeDrama) {
          return "Madagascar";
        } else {
          return "Lanterna Verde";
        }
      }
    }
  } else {
    if (gostaDeAção) {
      return "Alladin";
    } else {
      return "Jumanji";
    }
  }
}

