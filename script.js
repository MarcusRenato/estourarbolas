var cont = 0;

function addBola() {
    var cores = ["blue", "black", "orange", "green", "violet", "purple"];
    var vCor = Math.floor(Math.random() * 5);
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * (575 + 1) + 75);
    var p2 = Math.floor(Math.random() * (375 + 1) + 75);
    bola.setAttribute("style", "left:" + p1 + "px; top:" + p2 + "px; background-color: " + cores[vCor] + ";");

    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento) {
    cont++;
    document.body.removeChild(elemento);
    pontuacao = document.getElementById("pont");
    pontuacao.innerHTML = "Pontuação: " + cont;

}

function iniciar() {
    setInterval(addBola, 1000);
}

function finalizar() {
    window.location.href = window.location.href;
}