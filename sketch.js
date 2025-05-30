//fantasia, aventura , drama

//a viagem de chiriro,livre,fantasia,aventura
//paddington,livre,fantasia,aventura

//as aventuras de pi,10, drama,fantasia,aventura
//guardiões da galaxia,12,fantasia,aventura
//ladrões de bicicleta ,12,drama
//o menino que descobriu o vento ,14,drama


function setup(){
  createCanvas (400,400);
  createInput(15);
  }

function draw() {
    background (220);
    let idade = 15;
    let gostaDeFantasia = false;
    let recomendacao = geraRecomendacao(idade,gostaDeFantasia);
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade , gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if(gostaDeFantasia){
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        return "A viagem de Chihiro";
    }
}