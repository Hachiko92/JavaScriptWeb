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
        console.log(nombre)
        let n;
        let controllo =  0;

        for (let i=0 ; i < FRASI.length; i++){
            n = nombre.localeCompare(this.oLista.oTextoLow[i])
            console.log("ciao2");
            if (n == 0){
                console.log("trovato");
                controllo = 1;
                continue;
            }
            console.log("ciaone")
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

