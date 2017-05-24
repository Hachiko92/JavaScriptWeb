window.onload = function () {

    /*var oParrafo = document.createElement("p");
    var oContenido = document.createTextNode("Hola Mundo!");
    oParrafo.appendChild(oContenido);
    document.querySelectorAll("section")[0].appendChild(oParrafo);*/

    /* En este caso lo pone debajo debajo del contenido de la primera "section" (dentro)
       si no pondria el += si no solo = me eliminaria lo que hay en la "section" y 
       escribería lo que he puesto */

    let aDom = document.querySelectorAll("section");

    for (i=2 ; i < 7 ; i++){
        aDom[i].innerHTML += "<p>Hola Mundo!</p>"
        //aDom[i].setAttribute("title", "Saludo numero " + i);
        aDom[i].title = "Saludo numero " + i;
        // es mas corecta la primera version (en el comento), en el primer caso no tengo
        // que escribir className porque va entre comillas
        //aDom[i].setAttribute("class", "colorRojo");
        //aDom[i].className = "colorRojo";
        
        // esto es mas interesante se ya estaban mas clases
        // aDom[i].classList.add("colorRojo");

        // lo quita a quein ya la tiene y la pone a quien no la tiene
        aDom[i].classList.toggle("colorRojo");
    }

    // En este caso lo pone debajo de la primera "section"
    //document.querySelectorAll("section")[0].outerHTML += "<p>Hola Mundo!</p>"
}