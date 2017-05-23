(app = function (){

    var oDOM = {
        fNombre: document.querySelector("#first_name"),
        btnBorrar: document.querySelector("#btnBorrar"),
        spanNombre: document.querySelector("#nombre"),
        spanCurso: document.querySelector("#curso")
    };//fin del objeto oDOM

    function controller () {
        oDOM.fNombre.value = 'Pepe';
        oDOM.spanNombre.innerHTML = oDOM.fNombre.value;
        oDOM.spanCurso.innerHTML = "Desarollo Web Front-End";

        // Definicion de los manejadores de eventos
        // keyup es cuando modifica el input a tráves del teclado (como levantas el dedo desde el teclado)
        oDOM.fNombre.addEventListener("keyup", actualizarVista);

        //oDOM.btnBorrar.onclick = actualizarvista;
        // Si pongo las parentesis en la funcion, esta funcionaria cuando está leida y non espera el evento
        //oDOM.btnBorrar.addEventListener("click",actualizarVista());
        oDOM.btnBorrar.addEventListener("click",actualizarVista);

    }// fin de la funcion controller

    // las funciones que contengon la palabra "Vista" se riefieren a functiones que 
    // "llegan" al usuario (ej: imprimir en plantalla)
    function actualizarVista (oEvent) {
        // si el evento lo ha disparado btnBorrar
        if (oEvent.currentTarget.id == "btnBorrar"){
            oDOM.fNombre.value = '';
        }
        oDOM.spanNombre.innerHTML = oDOM.fNombre.value;
        console.log (oDOM.fNombre.value);
    }// fin de la funcion actualizarVista

    return controller;
}())();