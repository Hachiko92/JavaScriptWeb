/* ***** funciones ***** */

function main (){

    
    let oSend = document.querySelector("#send");

    // por un motivo raro cuando pongo todos los campos obligatorios no entra
    oSend.addEventListener("click", function(){
        console.log("oioi")
        let aFields = document.querySelectorAll("input").values;
        let sText = document.querySelector("textarea").value;
        console.dir(aFields);
        console.dir(sText);
        aFields.push (sText);
        let print = aFields.toString();
        console.log(aFields[1]);
        alert(print);
    });
    
}

$(main);