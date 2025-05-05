const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

const contadores  = document.querySelectorAll(".contador");

const tempObjetivo1 = new Date ("20245-10-05t00:00:00");
const tempObjetivo2 = new Date ("2025-06-05T00:00:00");
const tempObjetivo3 = new Date ("2025-07-02T00:00:00");
const tempObjetivo4 = new Date ("2025-11-10T00:00:00")

const tempos = [tempObjetivo1, tempObjetivo2, tempObjetivo3, tempObjetivo4]

contadores[0].textContent = tempObjetivo1 - tempoAtual;

for (let i=0; i < botoes.length; i++){

    botoes[i].onclick = function (){
        for (let j =0; j < botoes.length; j++){

            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }
    
}

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempObjetivo - tempoAtual;

let segundo = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;
if(tempoFinal > 0){
return dias + " Dias " + horas + " Horas " + minutos + " Minutos " + segundo + " Segundos "
} else {
    return "Objetivo concluido"}
    
}


