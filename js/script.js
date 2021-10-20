
function fazerGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

const json = (fazerGet("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"));

function main() {

    var palpite = document.getElementById("palpite").value;
    
    data = JSON.parse(json);
    document.getElementById("displayNum").innerHTML = palpite;
    
    var resposta = data.value;

    console.log(resposta);
        
        if(palpite > resposta) {
            document.getElementById("resultado").innerHTML = "Maior";
        }
        else if (palpite < resposta) {
            document.getElementById("resultado").innerHTML = "Menor";
        }
        else {
            document.getElementById("resultado").innerHTML = "Acertou";
        }
}

function numeroUm() {
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
