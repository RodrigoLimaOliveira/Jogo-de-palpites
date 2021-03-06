function main() {
    jogar();
    limparInput();
}

/* Função de envio da requisição */
function fazerGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.send()
    return request
}
const json = (fazerGet("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"));
/*console.log(json); para debugar*/

function jogar() {
    var resposta = JSON.parse(json.responseText).value;
    var statusCode = json.status;
    var palpite = document.getElementById("palpite").value;
    var btnJogar = document.getElementById("btnJogar");
    
    if (statusCode == "200") { /* executa o bloco caso a requisiçõa retorne "ok" */
        if(resposta > palpite) {
            mudarDigito();
            apagarDigito();
            document.getElementById("resultado").innerHTML = "É maior";
        }
        else if (resposta < palpite) {
            mudarDigito();
            apagarDigito();
            document.getElementById("resultado").innerHTML = "É menor";
        }
        else if (resposta == palpite) {
            mudarDigitoVerde();
            apagarDigito();
            document.getElementById("resultado").innerHTML = "Você acertou!!!!";
            document.getElementById("resultado").style.color = "#32BF00";
            document.getElementById("novaPartida").style.visibility = "visible"
            document.getElementById("palpite").disabled = true;
            btnJogar.disabled = true;
            btnJogar.style.background = "#DDDDDD";
            /*acionar botão "nova partida" com enter */
            document.addEventListener("keypress", function(e) {
                if(e.key === 'Enter') {
                    var btn = document.querySelector("#novaPartida");
                    btn.click();
                }
              });
        }
    }
    else {
        mudarDigitoVermelho(); /* em caso de status code diferente de "ok" captura o erro e mostra no led */
        apagarDigitoErro();
        document.getElementById("resultado").innerHTML = "ERRO";
        document.getElementById("resultado").style.color = "#CC3300";
        document.getElementById("novaPartida").style.visibility = "visible"
        document.getElementById("palpite").disabled = true;
        btnJogar.disabled = true;
        btnJogar.style.background = "#DDDDDD";

        document.addEventListener("keypress", function(e) {
            if(e.key === 'Enter') {
                var btn = document.querySelector("#novaPartida");
                btn.click();
            }
          });
    }
}

/*Função para adicionar uma classe mudando o css do algarismo no mostrador de led*/
function mudarDigito() {
    
    /* primeiro digito */
    var element1 = document.querySelector("#segmentos-1");
    var palpite = document.getElementById("palpite").value;

    switch(palpite.charAt(0)) {
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

/*Função para adicionar uma classe mudando o css do algarismo no mostrador de led*/
function mudarDigitoVerde() {
    
    /* primeiro digito */
    var element1 = document.querySelector("#segmentos-1");
    var palpite = document.getElementById("palpite").value;

    switch(palpite.charAt(0)) {
        case "0":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","zeroGreen");
            break;
        case "1":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","umGreen");
            break;
        case "2":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","doisGreen");
            break;
        case "3":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","tresGreen");
            break;
        case "4":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","quatroGreen");
            break;
        case "5":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","cincoGreen");
            break;
        case "6":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","seisGreen");
            break;
        case "7":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","seteGreen");
            break;
        case "8":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","oitoGreen");
            break;
        case "9":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","noveGreen");
            break;
    }
    
    /* segundo digito */

    var element2 = document.querySelector("#segmentos-2");
    
    switch(palpite.charAt(1)) {
        case "0":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","zeroGreen");
            break;
        case "1":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","umGreen");
            break;
        case "2":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","doisGreen");
            break;
        case "3":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","tresGreen");
            break;
        case "4":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","quatroGreen");
            break;
        case "5":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","cincoGreen");
            break;
        case "6":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","seisGreen");
            break;
        case "7":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","seteGreen");
            break;
        case "8":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","oitoGreen");
            break;
        case "9":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","noveGreen");
            break;
    }

    /* terceiro digito */

    var element3 = document.querySelector("#segmentos-3");
    
    switch(palpite.charAt(2)) {
        case "0":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","zeroGreen");
            break;
        case "1":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","umGreen");
            break;
        case "2":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","doisGreen");
            break;
        case "3":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","tresGreen");
            break;
        case "4":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","quatroGreen");
            break;
        case "5":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","cincoGreen");
            break;
        case "6":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","seisGreen");
            break;
        case "7":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","seteGreen");
            break;
        case "8":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","oitoGreen");
            break;
        case "9":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","noveGreen");
            break;
    }
}

/*Função para adicionar uma classe mudando o css do algarismo no mostrador de led*/
function mudarDigitoVermelho() {
    
    /* primeiro digito */
    var element1 = document.querySelector("#segmentos-1");
    var statusCode = json.status;
    
    switch(String(statusCode).charAt(0)) {
        case "0":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","zeroRed");
            break;
        case "1":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","umRed");
            break;
        case "2":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","doisRed");
            break;
        case "3":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","tresRed");
            break;
        case "4":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","quatroRed");
            break;
        case "5":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","cincoRed");
            break;
        case "6":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","seisRed");
            break;
        case "7":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","seteRed");
            break;
        case "8":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","oitoRed");
            break;
        case "9":
            element1.classList.remove(...element1.classList);
            element1.classList.add("segmentos","noveRed");
            break;
    }
    
    /* segundo digito */

    var element2 = document.querySelector("#segmentos-2");
    
    switch(String(statusCode).charAt(1)) {
        case "0":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","zeroRed");
            break;
        case "1":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","umRed");
            break;
        case "2":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","doisRed");
            break;
        case "3":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","tresRed");
            break;
        case "4":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","quatroRed");
            break;
        case "5":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","cincoRed");
            break;
        case "6":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","seisRed");
            break;
        case "7":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","seteRed");
            break;
        case "8":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","oitoRed");
            break;
        case "9":
            element2.classList.remove(...element2.classList);
            element2.classList.add("segmentos","noveRed");
            break;
    }

    /* terceiro digito */

    var element3 = document.querySelector("#segmentos-3");
    
    switch(String(statusCode).charAt(2)) {
        case "0":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","zeroRed");
            break;
        case "1":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","umRed");
            break;
        case "2":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","doisRed");
            break;
        case "3":
            element3.classList.remove(...element.classList);
            element3.classList.add("segmentos","tresRed");
            break;
        case "4":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","quatroRed");
            break;
        case "5":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","cincoRed");
            break;
        case "6":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","seisRed");
            break;
        case "7":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","seteRed");
            break;
        case "8":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","oitoRed");
            break;
        case "9":
            element3.classList.remove(...element3.classList);
            element3.classList.add("segmentos","noveRed");
            break;
    }
}
/* muda o valor do input para vazio sempre que o botão "enviar" é acionado */
function limparInput(){
    document.getElementById("palpite").value = "";
}

/* Verifica quantos caracteres tem na string e mostra a quantidade de digitos correspondentes no led  */

function apagarDigito(){
    /* verifica tamanho da string e remove os digitos não usados*/
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

function apagarDigitoErro(){
    /* verifica tamanho da string e remove os digitos não usados*/
    var statusCode = json.status;
    var erro = String(statusCode); 
    var digito2 = document.getElementById("segmentos-2");
    var digito3 = document.getElementById("segmentos-3");
    var tamanho = erro.length;

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

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector("#btnJogar");
        btn.click();
    }
  });