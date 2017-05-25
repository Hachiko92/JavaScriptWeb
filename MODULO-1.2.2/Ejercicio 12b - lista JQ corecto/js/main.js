/* ***** funciones ***** */
$(function(){

    aReyes = [
        "Alfonso",
        "Carlos",
        "Fernando",
        "Isabel",
        "Felipe"
    ]
    
    for (let i=0 ; i < aReyes.length; i++){
        $("#spanLista").append("<li>" + aReyes[i] + "</li>");
        console.log (aReyes[i]);
    }
    
    $("#btnAdd").on("click", function () {
        // .val() es importante ponerlo aunque texto es un id
        $("#spanLista").append("<li>" + $("#texto").val() + "</li>");
    });
});