class Formulario  {
    constructor () {
        this.oForm = "";
        this.oDatos = [
            {descripcion: "Cuenta de correo", valor: ""},
            {descripcion: "Nombre", valor: ""},
            {descripcion: "Apellido", valor: ""},
            {descripcion: "Fecha de nachimiento", valor: ""},
            {descripcion: "Aficiones", valor: ""}
        ];
        this.form = "";
        this.result = "";
        this.oBtnSend = "";

        this.listaCursos = "";
        this.opcionCursos = '0';
        this.web = [
            "JavaScript",
            "css",
            "php"
        ],
        this.sistemas = [
            "Windowa",
            "Linux",
            "Machintosh"
        ],
        this.objectos = [
            "piripi",
            "css",
            "php"
        ]
    }

    start () {
        this.listaCursos = document.querySelector("#cursoElejido");
        this.opciones();
        this.oForm = document.querySelector("#form");

        this.oBtnSend = document.querySelector("#btnSend");
        //this.oBtnSend.preventDefault();
        this.oBtnSend.addEventListener("click", this.read.bind(this));
        this.oForm.addEventListener("submit", this.read.bind(this));
        
    }//fin start

    opciones() {
        
        let aCheck = document.forms[0];
        
        let y=0;
        for(let i=0 ; i<aCheck.length ; i++){
            if(aCheck[i].checked){
                this.opcionCursos = aCheck[i].value;
                break;
            }
        }

        this.listaCursos.innerHTML = "";

        switch (this.opcionCursos) {
            case 'web':
                for(let i=0; i<this.web.length ; i++){
                    this.listaCursos.innerHTML += '<option value="' + this.web[i] + '">' + this.web[i] + "</option>";
                }
                break;
            case 'sistemas':
                for(let i=0; i<this.sistemas.length ; i++){
                    this.listaCursos.innerHTML += '<option value="' + this.sistemas[i] + '">' + this.sistemas[i] + "</option>";
                }
                break;
            case 'objectos':
                for(let i=0; i<this.objectos.length ; i++){
                    this.listaCursos.innerHTML += '<option value="' + this.objectos[i] + '">' + this.objectos[i] + "</option>";
                }
                break;
            default:
                console.log("ERRORE CON LAS LISTAS!");
                break;
        }
        
    } // fin crearOpciones()

    read (event){

        event.preventDefault();
        console.log("controllo 1")
        this.oDatos[0].valor = document.getElementById("correo").value;
        this.oDatos[1].valor = document.getElementById("nombre").value;
        this.oDatos[2].valor = document.getElementById("apellido").value;
        if (document.getElementById("apellido2").value != ""){
            this.oDatos[2].valor += " " + document.getElementById("apellido2").value;
        }

        let control = this.dateControl();
        console.log(control);
        console.log(typeof(control));

        let aCheck = document.forms[0];
        let aChecked = []
        let controlCheked = 0;
        
        let y=0;
        for(let i=0 ; i<aCheck.length ; i++){
            if(aCheck[i].checked){
                if (controlCheked != 0){
                    aChecked[y] = aCheck[i].name;
                    y++;
                } else {
                    controlCheked = 10;
                }
            }
        }

        this.oDatos[4].valor = aChecked.toString();



        let pw = document.getElementById("pw").value;
        let pw2 = document.getElementById("pw2").value;

        console.log (control);
        // controlo de las contrasenas
        if (pw == pw2 && control == 0){
            this.print();
        }
        else{
            document.getElementById("compare").innerHTML = "Las dos contrasenas no son iguales"
        }

    }// fin read()

    dateControl (){

        let day = document.getElementById("day").valueAsNumber;
        let month = (document.getElementById("month").valueAsNumber)-1;
        let year = document.getElementById("year").valueAsNumber;

        let control = 0;
        if (isNaN(day) || isNaN(month) || isNaN(year)){
            // la fecha no es obligatoria, si el usuario no la pone
            // no hace el controlo
            if (isNaN(day) && isNaN(month) && isNaN(year)){
                return 0;
            }
            else {
                document.getElementById("invalidDate").innerHTML = "Faltan algunos datos"
                control = -10;
            }
        }else {
            let date = new Date(year, month, day);

            if (date.getMonth() != month){
                document.getElementById("invalidDate").innerHTML = "La fecha està incorecta";
                control = -10;
            }
            else{
                this.oDatos[3].valor = day + " " + MESES[month] + " del " + year;

                // si es por lo menos la segunda vez que se executa y
                // antes habia un problema con la fecha, vasio el div
                document.getElementById("invalidDate").innerHTML = "";
            }
        }

        return (control);

    }//fin dateControl()

    print (){
        this.form = document.querySelector("#form");
        this.result = document.querySelector("#resultado");
        let lista = document.getElementById("resultado").children;

        for (let i=0 ; i<this.oDatos.length ; i++){
            if(this.oDatos[i].valor != ""){
                lista[1].innerHTML += "<li>" + this.oDatos[i].descripcion + ": " + this.oDatos[i].valor + "</li>";
            }
        }



        this.form.className = "hidden";
        this.result.className = "";
    }


}// fin class Formulario

function printDate (){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anno = fecha.getFullYear();

    $("#date").html("Hoy es el " + dia + " de " + MESES[mes] + " " + anno);

}