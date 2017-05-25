/* ***** funciones ***** */

function main (){

    let oHide = $(".hidden");
    let oFather = $(".question");

    for (let i=0 ; i<oFather.length; i++){
        oFather[i].addEventListener("click",change, false)
    }
    
    function change (oEvent) {
        let domDiv = oEvent.currentTarget;
        domDiv = $(domDiv).next();
        domDiv[0].classList.toggle("hidden");
    }
}

$(main);