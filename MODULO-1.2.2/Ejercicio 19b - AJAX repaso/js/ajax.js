class Ajax {
    constructor (metodo, url, success) {
        this.url = url;
        this.metodo = metodo;
        this.success = success;
        this.oPeticion = {};

        // step 1
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
        // step 3
        this.oAjax.open(this.metodo, this.url , true);
        // step 2a
        this.oAjax.onreadystatechange = this.send.bind(this);
    }// fin start

    // step 2b
    send (){

        Formulario.print(oAjax);

    }// fin print
}