
/*window.onload = function() {
    new Formulario ("Pepe","Desarollo Web Full-Stack").controller();
};*/

// en ready pongo la funcíon
// $(document).ready();

$(function() {
    let sName = "Luis";
    let sCurso = "Desarollo Web Full-Stack";
    new Formulario (sName, sCurso).controller();
});
