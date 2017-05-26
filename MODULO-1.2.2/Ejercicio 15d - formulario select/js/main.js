const PROGRAMACION = ["Java", "JavaScript", "c++"];
const SISTEMAS = ["Windows", "Linux", "RedHat"];
const OFIMATICA = ["Word", "Excell", "Power Point"];

class Formulario {
    constructor () {
        this.oName = document.querySelector("#first_name"),
        this.oApell = document.querySelector("#family_name"),
        this.oCiudad = document.querySelector("#city"),
        this.oPais = document.querySelector("#pais"),
        this.oComent = document.querySelector("#opinion"),
        this.aSalida = []
    }; //fin constructor
    recogeDatos  () {
        console.log("Controllo1");
        // Llamada a las funciones get de cada conjunto de controles
        this.getTextos();
        console.log("Controllo2");
        this.getRRadiobuttons();
        console.log("Controllo3");
        this.getCheckbox();
        console.log("Controllo4");
        this.getSelectOptions();
        console.log("Controllo5");
        //llamada a la función que procesara el arry presentandolo en pantalla
        this.escribeDatos ();
        console.log("Controllo6");
    }; // Fin recogeDatos
    getTextos () {
        this.aSalida = [
            {etiqueta : "Nombre", valor : this.oName.value},
            {etiqueta : "Apellidos", valor : this.oApell.value},
            {etiqueta : "Dirección", valor : this.oAddress.value},
            {etiqueta : "Ciudad", valor : this.oCity.value},
            {etiqueta : "Comentarios", valor : this.oComent.value}
        ]
    }
    getRRadiobuttons () {				
        for(var i=0; i < this.aJoomla.length; i++) {
            if (this.aJoomla[i].checked) {
                this.aSalida[this.aSalida.length] = {etiqueta: "Preparado para dar Joomla! :", valor: this.aJoomla[i].value.toUpperCase()}
            };
        };
    }; //fin getRradiobuttons
    getCheckbox () {
        if (this.oCond.checked) {
            this.aSalida[this.aSalida.length] = {etiqueta: "Condiciones leidas: ", valor: "SI" }
        } 
        else{
            this.aSalida[this.aSalida.length] = {etiqueta: "Condiciones leidas: ", valor: "NO" }	
        };
        
        
        if (this.oCond1.checked) {
            this.aSalida[this.aSalida.length] = {etiqueta: "Condiciones 2 leidas: ", valor: "SI" }
        } 
        else{
            this.aSalida[this.aSalida.length] = {etiqueta: "Condiciones 2 leidas: ", valor: "SI" }		
        };
    }; //fin getCheckBox
    getSelectOptions () {
        var oOpcion = this.oOpciones.options[this.oOpciones.selectedIndex];
        var textoSeleccionado = oOpcion.text; // Segundo valor
        var valorSeleccionado = oOpcion.value; // 2 (en este caso lo recogo para nada, pero normalmente es util)

        this.aSalida[this.aSalida.length] = "Nivel de JavaScript : <strong>" + textoSeleccionado + "</strong><br>";
        this.aSalida[this.aSalida.length] = "<br>";
    }; //fin getSelectOptions
    escribeDatos (vboton){		
        //ocultar formulario
        document.getElementById("form_1").className = "oculto";
        //mostrar bloque div para el resultado
        document.getElementById("resultado").className = "bloque";
        //incorporamos al parrafo cada línea del array

        for (var i = 0; i < this.aSalida.length; i++) {
            this.oParrafo.innerHTML += `<strong> ${this.aSalida[i].etiqueta}: ${this.aSalida[i].valor}</strong><br>`;
        }
    }
}

function opciones (oEvent) {
    var curso = oEvent.target.options.selectedIndex;
    let asignatura = document.querySelector("#asignatura");
    switch (curso) {
        case 1:
            for (let i=0 ; i < PROGRAMACION.length ; i++){
                asignatura.innerHTML += `<option>${PROGRAMACION[i]}</option>`
            }
            break;
        case 2:
            for (let i=0 ; i < SISTEMAS.length ; i++){
                asignatura.innerHTML += `<option>${SISTEMAS[i]}</option>`
            }
            break;
        case 3:
            for (let i=0 ; i < OFIMATICA.length ; i++){
                asignatura.innerHTML += `<option>${OFIMATICA[i]}</option>`
            }
            break;
        default:
            asignatura.innerHTML = "<option></option>";
            break;
    }
}

document.addEventListener ("DOMContentLoaded", function (){
    //oFormulario = new Formulario();
    //document.getElementById("#send").onclick = oFormulario.recogeDatos.bind(oFormulario)
    var selectedCurso = document.querySelector("#curso");
    selectedCurso = document.addEventListener("change", opciones);

}, false);