/** 
 *  $("DOMContentLoaded", function (){
 *       main ();
 *  }, false); 
 */

// window.onload("main");
// $().ready("main");

// esta es una funcion anonima que sustituye la que normalmente se llama "main"
$(function(){
    // textoSpan es un objecto JQuery, por tanto será un objecto DOM (<span bla bla>)

    /**
     *  var textoSpan = $("span.texto");
     * 
     *  var textoSpan2 = textoSpan.clone();
     *  textoSpan2 = textoSpan2.removeClass('texto');
     *  textoSpan2 = textoSpan2.addClass('boxFocus');
     */    

    var textoSpan = $("span.texto").removeClass('texto').addClass('boxFocus');

    $('span.texto').before(textoSpan);
});