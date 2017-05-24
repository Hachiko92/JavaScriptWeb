document.addEventListener("DOMContentLoaded", function() {
    let oPulsante = document.querySelector("#btnVer");
    let oTexto = document.querySelectorAll(".texto");

    oPulsante.addEventListener("click", accion);

    function accion () {
        for (i=0; i<oTexto.length ; i++)
        {
            oTexto[i].classList.toggle("oculto");
        }

        oPulsante.innerHTML = oPulsante.innerHTML == "ver más" ? "ver menos" : "ver más";

    }

}, false);

