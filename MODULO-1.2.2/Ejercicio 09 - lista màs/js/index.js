const FRASI = [
    "La vispa Teresa",
    "avea tra l’erbetta",
    "A volo sorpresa",
    "gentil farfalletta",
    "E tutta giuliva",
    "stringendola viva",
]


document.addEventListener("DOMContentLoaded", function() {
    
    let oPulsante = document.querySelector("#btnMas");
    let oTexto = document.querySelector("#spanLista");

    oPulsante.addEventListener ("click", add);

    function add() {
        let n = Math.random()*6;
        n= parseInt(n);
        oTexto.innerHTML += "<li>" + FRASI[n] + "</li>";
    }

}, false);

