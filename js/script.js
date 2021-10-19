
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
