$(function(){
    
    /**
     *   var textoSpan = $("span.texto");
     *   var quote = textoSpan.clone().removeClass('texto').addClass('boxFocus')
     *   así me clona solo el primo elemento del DOM contenido el objecto JQuery textoSpan
     */

    $("span.texto").each(function(index) {
        var quote = $(this).clone().removeClass('texto').addClass('boxFocus');
        $(this).before(quote);
    });
});