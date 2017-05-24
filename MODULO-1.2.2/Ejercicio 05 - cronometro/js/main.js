class Crono {
    constructor(posicion){
        this.idTimer = 0.0;
        this.posicion = posicion;
    }

    mostrar () {
        var oCrono = document.getElementById(this.posicion), timeCrono = +oCrono.innerHTML + 0.1;
        // convierte el numero a string con 1 decimal
        oCrono.innerHTML = timeCrono.toFixed(1);
    };

    start () {
        this.idTimer = setInterval(this.mostrar.bind(this), 100);
    };

    stop () {
        clearInterval(this.idTimer);
        this.idTimer = undefined;
    }

    inicializar () {
        document.getElementById(this.posicion).innerHTML="0.0";
    }

    otroCrono () {
        if (!this.idTimer){
            this.start();
        }
        else {
            this.stop();
        }
    }
} // fin class Crono

class App {

    constructor() {
        this.oCrono1 = new Crono ("crono1");
        this.oCrono2 = new Crono ("crono2");
    }    

    var oInterval = document.querySelector("#btnInterval");
    var oInicio = document.querySelector("#btnInicializar");
    var oCrono1 = document.querySelector("#crono1");

}; // fin class App

document.addEventListener("DOMContentLoaded", function() {
    new App;
    document.getElementById("#btnInterval");
}, false);