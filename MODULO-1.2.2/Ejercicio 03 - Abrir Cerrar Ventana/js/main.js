/* ***** Variables ***** */
var oAbrir = document.querySelector("#btnAbrir");
var oCerrar = document.querySelector("#btnCerrar");
var oVentana;

var oImage = HTMLImageElement;
oImage = 'img/snow.gif';


// la funcion main será llamada cuando la pagina será cargata porque si no
// los botones no exixterian (el javascript está conectado en el head)
document.addEventListener("DOMContentLoaded", main);

function main() {

    console.log("controllo 1");

    document.getElementById("#btnAbrir").onclick = abrir;

    console.log("controllo 2");

    function abrir () {
        if (!oVentana){
            oVentana = window.open("","", "top=200, left=300, width, height=400, status=yes");
        }
        console.log("abrir 2");
    }

    function cerrar () {
        oVentana.close();
        oVentana=null;
    }
};