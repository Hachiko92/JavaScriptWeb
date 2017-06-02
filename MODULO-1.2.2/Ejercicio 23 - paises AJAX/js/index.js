class Formulario  {
    constructor () {
        this.btnSearch = document.getElementById("btnSearch");
        this.idioma = document.getElementById("idioma");
        this.pais = document.getElementById("pais");

        this.aIdiomasValue = [
            "es",
            "it",
            "fr",
            "eng",
            "de"
        ]

        this.aIdiomas = [
            "Español",
            "Italiano",
            "Francés",
            "Inglés",
            "Aleman"
        ]

        this.aPaisesValue = [
            "ES",
            "IT",
            "FR",
            "UK",
            "DE"
        ]

        this.aPaises = [
            "España",
            "Italia",
            "Francia",
            "Reino Unido",
            "Alemania"
        ]

        this.oAjax = {
            metodo: "GET",
            url: "",
            success: "",
            path: ""
        }

    }

    start () {
        this.crearOpciones();
        this.pedirAjax.bind(this)();
        this.idioma.addEventListener("change", this.pedirAjax.bind(this));
        this.pais.addEventListener("change", this.pedirAjax.bind(this));
        //cuando me llegaran los datos, que he pedido a tráves de pedirAjax(), se executerá print()
    }// fin start

    crearOpciones() {
        if ( this.aIdiomas.length != this.aIdiomasValue.length || this.aPaises.length != this.aPaisesValue.length){
           console.log("array.lenght!=array2.lenght");
        } else{
            for(let i=0; i<this.aIdiomas.length ; i++){
                this.idioma.innerHTML += '<option value="' + this.aIdiomasValue[i] + '">' + this.aIdiomas[i] + "</option>";
            } 
            for(let i=0; i<this.aPaises.length ; i++){
                this.pais.innerHTML += '<option value="' + this.aPaisesValue[i] + '">' + this.aPaises[i] + "</option>";
            } 
        }
    }
    // AJAX 3: realizar petición al servidor
    pedirAjax () {

        console.log(idioma.value);
        console.log(pais.value);
        
        this.oAjax.url = "http://api.geonames.org/countryInfoJSON?lang=" + idioma.value + "&country=" + pais.value + "&username=demo";
        new Ajax (this.oAjax.metodo, this.oAjax.url, this.oAjax.success);

    }// fin pedirAjax

}// fin class Formulario




document.addEventListener ("DOMContentLoaded", function (){
    new Formulario().start();
}, false);