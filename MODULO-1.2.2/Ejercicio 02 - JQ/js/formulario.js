class Formulario {
    constructor (pNombre, pCurso) {
        this.oDOM = {
            fNombre: $("#first_name"),
            btnBorrar: $("#btnBorrar"),
            spanNombre: $("#nombre"),
            spanCurso: $("#curso")
        };//fin del objeto oDOM
        
        // pongo [0] porque todavia todo el codigo no está escrito en JQuery 
        this.oDOM.fNombre[0].value = pNombre;
        this.oDOM.spanNombre[0].innerHTML = this.oDOM.fNombre[0].value;
        this.oDOM.spanCurso[0].innerHTML = pCurso;
    controller () {

        this.oDOM.fNombre.on("keyup", this.actualizarVista.bind(this));
        this.oDOM.btnBorrar.on("click", this.actualizarVista.bind(this));

    }// fin de la funcion controller

    actualizarVista (oEvent) {
        if (oEvent.currentTarget.id == "btnBorrar"){
            this.oDOM.fNombre[0].value = '';
        }
        this.oDOM.spanNombre.innerHTML = this.oDOM.fNombre[0].value;
        console.log (this.oDOM.fNombre[0].value);
    }// fin de la funcion actualizarVista
}