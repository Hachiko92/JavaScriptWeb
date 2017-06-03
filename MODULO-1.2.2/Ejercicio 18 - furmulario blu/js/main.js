const MESES = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
]

function printDate (){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anno = fecha.getFullYear();

    $("#date").html("Hoy es el " + dia + " de " + MESES[mes] + " " + anno);

}

$(function (){
    
    printDate ();
    new Formulario().start();

});