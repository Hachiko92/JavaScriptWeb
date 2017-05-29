class Formulario  {
    constructor () {
        this.oDatos = {
            btnSaludar : document.querySelector("#btnSaludar"),
            pSaludo : document.querySelector("#saludo")
        };

        // AJAX 1: instanciar objeto XMLHttpRequest
        this.oAjax = new XMLHttpRequest();
    }

    start () {
        this.oDatos.btnSaludar.addEventListener("click", this.pedirAjax.bind(this));
        //cuando me llegaran los datos, que he pedido a tráves de pedirAjax(), se executerá print()
        // AJAX 2a: definir la función de respuesta
        this.oAjax.onreadystatechange = this.print.bind(this);
    }// fin start

    // AJAX 3: realizar petición al servidor
    pedirAjax () {
        // this.oAjax.open("GET", "http://localhost:8181/Saludos.txt", true);
        this.oAjax.open("GET", "http://localhost:8181/Saludos.json", true);
        // .send pide un data?: document, si no lo hay se puede dejar vasio pero es mejor poner "null"
        this.oAjax.send(null);
    }// fin pedirAjax

    // AJAX 2b: preparar la función de respuesta
    print (){

        let sHtml = "<ul>", oResult;
        if (this.oAjax.readyState == 4) {
            // si HTML devuelve 200 significa que todo ha ido bien
            if(this.oAjax.status == 200) {
                // this.oDatos.pSaludo.innerHTML = this.oAjax.responseText;

                //parsear los datos
                oResult = JSON.parse(this.oAjax.responseText)
                for (var key in oResult){
                    sHtml += "<li>" + key + ": " + oResult[key] + "</li>"
                }
                sHtml += "</ul>"
                this.oDatos.pSaludo.innerHTML = sHtml;
            }
        }else{
            this.oDatos.pSaludo.innerHTML = this.oAjax.status + ": " + this.oAjax.statusText;
        }

    }// fin print

}// fin class Formulario

document.addEventListener ("DOMContentLoaded", function (){
    new Formulario().start();
}, false);