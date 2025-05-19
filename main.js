const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

const contadores  = document.querySelectorAll(".contador");

const tempObjetivo1 = new Date ("20245-10-05t00:00:00");
const tempObjetivo2 = new Date ("2025-06-05T00:00:00");
const tempObjetivo3 = new Date ("2025-07-02T00:00:00");
const tempObjetivo4 = new Date ("2025-11-10T00:00:00")

const tempos = [tempObjetivo0, tempObjetivo1, tempObjetivo2, tempObjetivo3]

contadores[0].textContent = tempObjetivo0 - tempoAtual;

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

function atualizaCronometro(){
        
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro()