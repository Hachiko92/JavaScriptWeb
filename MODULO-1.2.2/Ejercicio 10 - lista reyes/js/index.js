const FRASI = [
    "La vispa Teresa",
    "avea tra l’erbetta",
    "A volo sorpresa",
    "gentil farfalletta",
    "E tutta giuliva",
    "stringendola viva",
]

class Lista {
    constructor () {
        this.oLista = {
            oTexto : document.querySelector("#spanLista"),
            oTextoLow : "",
            oPulsante : document.querySelector("#btnBusca")

        }

        for (let i=0 ; i < FRASI.length; i++){
            this.oLista.oTexto.innerHTML += "<li>" + FRASI[i] + "</li>";
            this.oLista.oTexto[i] = FRASI.toLowerCase;
        }
    }

    start(){
        this.oLista.oPulsante.addEventListener("click", this.search.bind(this));
    }

    search (){
        let nombre = prompt("Dime el nombre y el apellido");
        nombre = nombre.toLowerCase;
        let controllo =  0;

        for (let i=0 ; i < this.oLista.oTextoLow.length; i++){
            if (nombre == this.oLista.oTextoLow[i]){
                controllo = 1;
                continue;
            }
        }

        if (controllo == 1){
            alert("trovato!");
        }
        else {
            alert ("non trovato!");
        }

    }
}


document.addEventListener("DOMContentLoaded", function() {
    
    new Lista().start();

}, false);

