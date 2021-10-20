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

    console.log(resposta);
        
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
    const element = document.querySelector("#digitos");
    var palpite = document.getElementById("palpite").value;

    switch(palpite) {
        case "0":
            element.classList.add("zero")
            break;
        case "1":
            element.classList.add("um")
            break;
        case "2":
        element.classList.add("dois")
            break;
        case "3":
            element.classList.add("tres")
            break;
        case "4":
            element.classList.add("quatro")
            break;
        case "5":
            element.classList.add("cinco")
            break;
        case "6":
            element.classList.add("seis")
            break;
        case "7":
            element.classList.add("sete")
            break;
        case "8":
            element.classList.add("oito")
            break;
        case "9":
            element.classList.add("nove")
            break;
    }
}
