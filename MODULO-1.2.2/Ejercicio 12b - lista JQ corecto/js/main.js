/* ***** funciones ***** */
$(function(){

    aReyes = [
        "Alfonso",
        "Carlos",
        "Fernando",
        "Isabel",
        "Felipe"
    ]
    
    var oLista = $("#spanLista");
    // para ordenarla
    aReyes.sort();
    for (let i=0 ; i < aReyes.length; i++){
        oLista.append("<li>" + aReyes[i] + "</li>");
        console.log (aReyes[i]);
    }
    
    $("#btnAdd").on("click", function () {
        // .val() es importante ponerlo aunque texto es un id
        aReyes.push($("#texto").val());
        aReyes.sort();
        oLista.html("");
        for (let i=0 ; i < aReyes.length; i++){
            oLista.append("<li>" + aReyes[i] + "</li>");
            console.log (aReyes[i]);
        }
    });
});