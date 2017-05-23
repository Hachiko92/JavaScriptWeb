// funcion anonima, sin esta no podria poner la llamada de JS en el <head> o donde quiero en el <body> (y no al "final")
/*window.onload = function() {
    new Formulario ("Pepe","Desarollo Web Full-Stack").controller();
};*/

// esto metodo es mas moderno aunque hace lo mismo
/*document.addEventListener("DOMContentLoaded", function() {
    new Formulario("Pepe","Desarollo Web Full-Stack").controller();
});*/

document.addEventListener("DOMContentLoaded", main);

function main() {
    let sName = "Luis";
    let sCurso = "Desarollo Web Full-Stack";
    new Formulario (sName, sCurso).controller();
};
