class Password  {
    constructor () {
        this.pw1 = "";
        this.pw2 = "";
        this.flag = false;
    }

    start () {
        
        this.pw1 = document.querySelector("#pw");
        this.pw2 = document.querySelector("#pw2");
        this.pw1.addEventListener("input", this.verify.bind(this), false);
        this.pw2.addEventListener("input", this.verify.bind(this), false);
        console.log("controllo 2");
    }//fin start

    verify (oEvent){
        console.log("controllo 3");
        let box = oEvent.currentTarget.id;
        let pw = document.querySelector("#" + box).value;
        
        // ora devo verificare se la password rispetta le regole e se è pw2 contrallare se sono uguali
        // creare un flag nella classe che come si modifica la prima volta pw2 qualsiasi sia
        // la pw verifica se corrispondono 

        if ( pw.filter(function () {
            return this.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
        })){
            // per far si che scriva in controllo? next()?
        }

        if (box == "pw2"){
            convalidar();
        }
    }// fin verity

    convalidar(){

    }// fin convalidar
}// fin class Password

document.addEventListener ("DOMContentLoaded", function (){
    new Password().start();
}, false);