class Formulario  {
    constructor () {
        this.aFicheros = [
            "fichero.txt"
        ]
        
        this.btnOpen = document.querySelector("#btnOpen");
        this.listaFicheros = document.querySelector("#ficheros");
        this.path = "/datos/";
        this.ajax = {
            metodoHttp : "GET",
            url : "",
            session : ""
        }
        // AJAX 1: instanciar objeto XMLHttpRequest
        //this.oAjax = new XMLHttpRequest();
    }

    start () {

        this.createList ();

        this.btnOpen.addEventListener("click", this.pedirAjax.bind(this));
        //cuando me llegaran los datos, que he pedido a tráves de pedirAjax(), se executerá print()
        // AJAX 2a: definir la función de respuesta
        //this.oAjax.onreadystatechange = this.print.bind(this);
    }// fin start

    createList () {
        for(let i= 0; i < this.aFicheros.length ; i++){
            this.listaFicheros.innerHTML += "<option>" + this.aFicheros[i] + "</option>"
        }
    }// fin createList

    // AJAX 3: realizar petición al servidor
    pedirAjax (oEvent) {
        
        /*this.ajax.url = /*"http://localhost:8181/JavaScriptWeb/MODULO-1.2.2/Ejercicio%2019b%20-%20AJAX%20repaso/datos/"
                        this.path + this.listaFicheros.textContent.trim(); */
        
        this.ajax.url = this.path + this.listaFicheros.textContent.trim();

        

        new Ajax (this.ajax.metodoHttp, this.ajax.url, this.ajax.session);
        
        this.ajax.url = "";
    }// fin pedirAjax

    // AJAX 2b: preparar la función de respuesta
    print (oAjax){

        let destination = document.querySelector("#texto");
        if (oAjax.readyState == 4) {
            // si HTML devuelve 200 significa que todo ha ido bien
            if(oAjax.status == 200) {
                
                destination.innerHTML = oAjax.responseText;

                //parsear los datos
                /*oResult = JSON.parse(oAjax.responseText)
                for (var key in oResult){
                    sHtml += "<li>" + key + ": " + oResult[key] + "</li>"
                }
                sHtml += "</ul>"
                destination.innerHTML = sHtml;*/

            }
        }else{
            destination.innerHTML = oAjax.status + ": " + oAjax.statusText;
        }


    }// fin print

}// fin class Formulario