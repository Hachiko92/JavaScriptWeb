/* ***** funciones ***** */

function main () {
    //let js = document.querySelector("#primera");
    //let jq = $("#primera");
    //console.dir(js);
    //console.log(jq);
    
    // así ensconde la prima sección
    //$("#primera").hide();

    let js = document.querySelectorAll("section");
    let jq = $("section");
    //jq.hide();
    console.dir(js);
    console.dir(jq);

    // $("section") es JQuery
    // .innerHTML es oNodo
    // $("section").innerHTML = "<p>Hola mundo!</p>";
    // el metodo JQuery que permite de hacer lo mismo de innerHTML

    //$("section").html("<p>Hola!</p>");
    //$("section").append("<p>Hola!</p>");
    //$("section").prepend("<p>Hola!</p>");

    $("section").before("<section><p>Hola!</p></section>");

}

$(main)