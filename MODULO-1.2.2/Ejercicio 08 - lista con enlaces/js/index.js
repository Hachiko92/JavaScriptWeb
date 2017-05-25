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
        this.oItem = document.querySelectorAll(".item");
    };

    start () {
        this.oItem.addEventListener("click", this.cambiar.bind(this));
    }

    cambiar(){
        let n = Math.random()*6;
        alert("click!");
    }
    

}
document.addEventListener("DOMContentLoaded", function() {
    
    new Lista().start();

}, false);

