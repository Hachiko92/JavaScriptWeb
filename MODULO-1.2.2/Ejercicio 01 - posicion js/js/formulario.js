class Formulario {
    constructor (pNombre, pCurso) {
        this.oDOM = {
            fNombre: document.querySelector("#first_name"),
            btnBorrar: document.querySelector("#btnBorrar"),
            spanNombre: document.querySelector("#nombre"),
            spanCurso: document.querySelector("#curso")
        };//fin del objeto oDOM
        
        this.oDOM.fNombre.value = pNombre;
        this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value;
        this.oDOM.spanCurso.innerHTML = pCurso;

        // como en main.js creo un New Formulario, cuando se crea en el constructor puedo executar la funcion
        // controller, pero es mejor ponerla fuera aunque es la misma cosa.
        //this.controller();
    }
    controller () {

        // en espera de eventos: 
        // tengo que poner .bind(this) porque el navegador considera "this" come el suyo y no encuentra
        // las variables, por esto pongo la funcion .bind(this) para hacer si que entienda que es ESTO this
        this.oDOM.fNombre.addEventListener("keyup", this.actualizarVista.bind(this));
        if (this.oDOM.btnBorrar){
            this.oDOM.btnBorrar.addEventListener("click", this.actualizarVista.bind(this));
        }

    }// fin de la funcion controller

    actualizarVista (oEvent) {
        // si el evento lo ha disparado btnBorrar
        if (oEvent.currentTarget.id == "btnBorrar"){
            this.oDOM.fNombre.value = '';
        }
        this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre.value;
        console.log (this.oDOM.fNombre.value);
    }// fin de la funcion actualizarVista
}