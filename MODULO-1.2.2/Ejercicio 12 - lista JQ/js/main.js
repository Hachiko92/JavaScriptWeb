const LISTA = ["a","b","c","d"]

/* ***** funciones ***** */
$(function(){
    for (let i=0 ; i < LISTA.length; i++){
        $("#spanLista").before("<li>" + LISTA[i] + "</li>");
        console.log (LISTA[i]);
    }

    $("#btnAdd").on("click",add);

    function add () {
        let sPalabra = prompt ("Que quieres añadrir");
        $("#spanLista").append("<li>" + sPalabra + "</li>");
    }
});