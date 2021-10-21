/* Função de envio da requisição*/
function fazerGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

const json = (fazerGet("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"));

/*Função que compara o palpite com o valore aleatório recebido na requisição*/
function jogar() {

    var palpite = document.getElementById("palpite").value;
    
    data = JSON.parse(json);
    var resposta = data.value;
    console.log(resposta); /*para debugar*/

        if(palpite > resposta) {
            document.getElementById("resultado").innerHTML = "É maior";
        }
        else if (palpite < resposta) {
            document.getElementById("resultado").innerHTML = "É menor";
        }
        else {
            document.getElementById("resultado").innerHTML = "Você acertou!!!!";
        }
}

/*Função para adicionar classe mudando o algarismo no mostrador de led*/
function mudarDigito() {
    var element1 = document.querySelector("#segmentos-1");
    var palpite = document.getElementById("palpite").value;

    switch(palpite.charAt(0)) {

        /* primeiro digito */

        case "0":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","zero");
            break;
        case "1":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","um");
            break;
        case "2":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","dois");
            break;
        case "3":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","tres");
            break;
        case "4":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","quatro");
            break;
        case "5":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","cinco");
            break;
        case "6":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","seis");
            break;
        case "7":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","sete");
            break;
        case "8":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","oito");
            break;
        case "9":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","nove");
            break;
    }
    
    /* segundo digito */

    var element2 = document.querySelector("#segmentos-2");
    var palpite = document.getElementById("palpite").value;

    switch(palpite.charAt(1)) {
        case "0":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","zero");
            break;
        case "1":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","um");
            break;
        case "2":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","dois");
            break;
        case "3":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","tres");
            break;
        case "4":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","quatro");
            break;
        case "5":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","cinco");
            break;
        case "6":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","seis");
            break;
        case "7":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","sete");
            break;
        case "8":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","oito");
            break;
        case "9":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","nove");
            break;
    }

    /* terceiro digito */

    var element3 = document.querySelector("#segmentos-3");
    var palpite = document.getElementById("palpite").value;

    switch(palpite.charAt(2)) {
        case "0":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","zero");
            break;
        case "1":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","um");
            break;
        case "2":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","dois");
            break;
        case "3":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","tres");
            break;
        case "4":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","quatro");
            break;
        case "5":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","cinco");
            break;
        case "6":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","seis");
            break;
        case "7":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","sete");
            break;
        case "8":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","oito");
            break;
        case "9":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","nove");
            break;
    }
}

function limparInput(){
    document.getElementById("palpite").value = "";
}

function teste(){
    var palpite = document.getElementById("palpite").value;
    var digito2 = document.getElementById("segmentos-2");
    var digito3 = document.getElementById("segmentos-3");
    var tamanho = palpite.length;

    if (tamanho == 2){
        digito2.style.display = "inline-block";
        digito3.style.display = "none";
    }
    else if (tamanho == 3) {
        digito2.style.display = "inline-block";
        digito3.style.display = "inline-block";
    }

    else if (tamanho == 1) {
        digito2.style.display = "none";
        digito3.style.display = "none";
    }
}

