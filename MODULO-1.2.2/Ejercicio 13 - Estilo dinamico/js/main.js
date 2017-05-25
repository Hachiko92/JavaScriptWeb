/* ***** funciones ***** */

function main (){

    let oDinamic = document.querySelector(".dinamic");

    console.dir(oDinamic);

    oDinamic.addEventListener("mouseover",change, false)
    oDinamic.addEventListener("mouseout",change, false)
    
    function change (oEvent) {
        let domDiv = oEvent.currentTarget;
        
        domDiv.classList.toggle("wrap");
        domDiv.classList.toggle("coral");
    }
}

document.addEventListener("DOMContentLoaded",main , false);