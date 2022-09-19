let numeros = []
let password = [0, 0, 0, 0]
let index;


function iniciarJogo() {

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("n4").value = "";

    index = 1;
    const jogadas = document.getElementById("jogadas");
    jogadas.innerHTML = "<p>tentativas | input | resultado</p>";

    const jogo = document.getElementById("jogo-senha");
    jogo.style.visibility = "visible";

    const btnIniciar = document.getElementById("btn-iniciar");
    btnIniciar.innerText = "Reiniciar";

    const maxNumbers = 10;
    let list = [];
    for (let i = 0; i < maxNumbers; i++) {
        list[i] = i;
    }
    let randomNumber;
    let tmp;
    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        list[randomNumber] = list[i];
        list[i] = tmp;
    }

    password[0] = list[0];
    password[1] = list[1];
    password[2] = list[2];
    password[3] = list[3];

    alert("NOVA SENHA GERADA, BOA SORTE!");

}

function realizarJogada() {


    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const n3 = document.getElementById("n3").value;
    const n4 = document.getElementById("n4").value;

    numeros = [n1, n2, n3, n4];
    if (!numeros[0] || !numeros[1] || !numeros[2] || !numeros[3]) {
        alert("NÃO PODE CONTER CAMPOS VAZIOS!");
        return;
    }

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] == numeros[j]) {
                alert("NÃO PODE REPETIR NÚMEROS!");
                return;
            }
        }
    }

    let bullCow = "";
    let b = 0;
    let c = 0;
    let p = password[0] + "" + password[1] + "" + password[2] + "" + password[3];
    let n = numeros[0] + "" + numeros[1] + "" + numeros[2] + "" + numeros[3];

    if (p.includes(n)) {
        alert("PARABÉNS, VOCÊ GANHOU! SENHA: " + p);
        return iniciarJogo();
    }



    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == password[i]) {
            b = b + 1;
        } else if (p.includes(numeros[i])) {
            c = c + 1;
        }
    }


    bullCow = b + "B" + c + "C";

    const txtzin = index + " | " + numeros[0] + numeros[1] + numeros[2] + numeros[3] + " | " + bullCow;
    const txt = document.createTextNode(txtzin);
    const jogadas = document.getElementById("jogadas");

    jogadas.appendChild(txt);
    jogadas.appendChild(document.createElement("br"));

    if (index > 10) {
        alert("GAME OVER! GERANDO NOVO NÚMERO ALEATÓRIO!");
        iniciarJogo();
        return;
    }
    index++;
}


function proximoInput(inputId) {
    if (document.getElementById(inputId).value == null) {
        document.getElementById(inputId).focus();
        return;
    }

    switch (inputId) {
        case "n1":
            document.getElementById("n2").focus();
            break;
        case "n2":
            document.getElementById("n3").focus();
            break;
        case "n3":
            document.getElementById("n4").focus();
            break;
        case "n4":
            document.getElementById("btn-enviar").focus();
            break;
    }

    return false;
}




