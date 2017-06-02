class Ajax {
    constructor (metodo, url, success) {
        this.url = url;
        this.metodo = metodo;
        this.success = success;

        // AJAX 1: instanciar objeto XMLHttpRequest
        this.oAjax = new XMLHttpRequest();
    this.start();
    }

    inicializa() {
        if(window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else {
            if(window.ActiveXObject) {

            }
        }
    }

    start () {

        this.pedir();
        // step 2a
        this.oAjax.onreadystatechange = this.print.bind(this);
    }// fin start

    pedir() {
        // step 3
        this.oAjax.open(this.metodo, this.url , true);
        this.oAjax.send(null);
    }
    // step 2b
    print (){

        let sHtml = "<p>", oResult;
        let resultado = document.getElementById("informaciones");
        if (this.oAjax.readyState == 4) {
            if(this.oAjax.status == 200) {
                
                // this.pSaludo.innerHTML = this.oAjax.responseText;
                console.log("entrato nel ciclo");
                
                console.log("responseText: " + this.oAjax.responseText);
                oResult = JSON.parse(this.oAjax.responseText)
                // il file JSON tiene un objecto "geonames" que contiene todas las informaciones
                // para visualizar el contenido del objecto pongo: oResult.geonames[0];
                // (porque gracias a la consola he visto que las informaciones estan en la
                // posicion 0 ->  {"geonames":[{ ... }]}  )
                for (var key in oResult.geonames[0]){
                    sHtml += "<strong>" + key + ":</strong> " + oResult.geonames[0][key] + "<br>";
                }

                sHtml += "</p>";
                resultado.innerHTML = sHtml;
            }
        }else{
            resultado.innerHTML = this.oAjax.status + ": " + this.oAjax.statusText;
        }

    }// fin print

}