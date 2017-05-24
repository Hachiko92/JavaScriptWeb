//var nombre;

function muestraMensaje (){
    alert ("han trascurrido 3 segundos desde que me programaron");
};

function pideDatos(pFuncion){
    //nombre = prompt("Dime tu nombre");
    //console.log("El nombre es: " + nombre);
    let nombre = prompt("Dime tu nombre");
    pFuncion(nombre);
}

function escribe (pNombre) {
    console.log("El nombre es: " + pNombre);
}

// 3000 -> 3 segundos, 3000 millisecondi
// será directamente setTimeout a llamar la funcion (que empezerá despues 3 segundos);
//let id = setTimeout(pideDatos, 3000);
// la linea siguente se executa antes que se acaben los 3 segundos (?) por esto lo ponemos en la funcion
//console.log("El nombre es: " + nombre);

// con una funcion anonima puedo executar las funciones que quiero
/*let id = window.setTimeout(function() {
    pideDatos;
    escribe;    
}, 3000);*/

// callback
let id = window.setTimeout(function() {
    pideDatos(escribe);  
}, 3000);


// como tiene () la funcion pideDatos se executaría antes de los 3 segundos
//let id = window.setTimeout(pideDatos(escribe), 3000);
