class Formulario  {
    constructor () {
        this.oDatos = [
            {descripcion: "Nombre", valor: ""},
            {descripcion: "Apellido", valor: ""},
        ];
        this.form = "";
        this.result = "";
        this.oBtnSend = "";
    }

    start () {
        
        this.oBtnSend = document.querySelector("#btnSend");
        this.oBtnSend.addEventListener("click", this.send.bind(this));
        
    }//fin start

    send (){
        
        this.oDatos[0].valor = document.querySelector("#nombre");
        this.oDatos[1].valor = document.querySelector("#apellido");

        this.form = document.querySelector("#form");
        this.result = document.querySelector("#resultado");
        let lista = document.getElementById("#resultado").childNodes;

        for (let i=0 ; i<this.oDatos.length ; i++){
            lista[3].innerHTML += "<li>" + oDatos[i].descripcion + ": " + oDatos[i].valor + "</li>";
        }

        form.className = "hidden";
        result.className = "block";


    }// fin send


}// fin class Formulario

document.addEventListener ("DOMContentLoaded", function (){
    new Formulario().start();
}, false);