/* ***** funciones ***** */

class Formulario {
    constructor(){
        this.oDatos = {
            nombre : "",
            apellido : "",
            ciudad : "",
            pais : "",
            comento : ""
        }
        this.oParrafo = document.getElementById("listaDatos");

        document.getElementById("#send").addEventListener("click", this.recogeDatos.bind(this));
    }

    recogeDatos (oEvent){
        console.log("1");
        this.oDatos.Nombre = document.getElementById("#first_name").value;
        this.oDatos.apellido = document.getElementById("#family_name").value;
        this.oDatos.ciudad = document.getElementById("#city").value;
        this.oDatos.pais = document.getElementById("#state").value;
        this.oDatos.comento = document.getElementById("#opinion").value;
        this.escribeDatos();
        oEvent.preventDefault();
        //anula el comportamiento por defecto de submit
        console.log("2");
    }

     escribeDatos () {
        //ocultar formulario
        document.getElementById("form_1").classList.toggle("oculto")
        //mostrar bloque div para el resultado
        document.getElementById("resultado").classList.toggle("oculto");
        //incorporamos a la lista cada elemento del objeto		
        for (var i in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    } //Fin del método escribedatos


}// fin de la clase formulario

class App {

    // algo estatic es algo que no aparece en los objectos si no en la clase
    static main() {
        
        document.addEventListener("DomContentLoaded", function() {
            new Forumalio ();
        }, false);
    }
} // fin de la class app

App.main();