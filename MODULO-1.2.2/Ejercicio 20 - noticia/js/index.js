/** 
 *  $("DOMContentLoaded", function (){
 *       main ();
 *  }, false); 
 */

// window.onload("main");
// $().ready("main");

// esta es una funcion anonima que sustituye la que normalmente se llama "main"
$(function(){
    let textoSpan = $("#texto").text();
    let boxFocus = $("#focus");

    boxFocus.html("<p>" + textoSpan + "</p>");
});