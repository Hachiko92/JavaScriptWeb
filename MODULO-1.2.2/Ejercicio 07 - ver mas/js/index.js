const TEXTO = "Nove fiate già appresso lo mio nascimento era tornato lo cielo de la luce quasi a uno medesimo punto, quanto a la sua propria girazione, quando a li miei occhi apparve prima la gloriosa donna de la mia mente, la quale fu chiamata da molti Beatrice, li quali non sapeano che si chiamare. Ella era in questa vita già stata tanto, che ne lo suo tempo lo cielo stellato era mosso verso la parte d'oriente de le dodici parti l'una d'un grado, sì che quasi dal principio del suo anno nono apparve a me, ed io la vidi quasi da la fine del mio nono. Apparve vestita di nobilissimo colore, umile ed onesto, sanguigno, cinta e ornata a la guisa che a la sua giovanissima etade si convenia. In quello punto dico veracemente che lo spirito de la vita, lo quale dimora ne la secretissima camera de lo cuore, cominciò a tremare sì fortemente che apparia ne li mènimi polsi orribilmente; e tremando, disse queste parole: «Ecce deus fortior me, qui veniens dominabitur mihi». In quello punto lo spirito animale, lo quale dimora ne l'alta camera ne la quale tutti li spiriti sensitivi portano le loro percezioni, si cominciò a maravigliare molto, e parlando spezialmente a li spiriti del viso, sì disse queste parole: «Apparuit iam beatitudo vestra». In quello punto lo spirito naturale, lo quale dimora in quella parte ove si ministra lo nutrimento nostro, cominciò a piangere, e piangendo, disse queste parole: «Heu miser, quia frequenter impeditus ero deinceps!». D'allora innanzi dico che Amore segnoreggiò la mia anima, la quale fu sì tosto a lui disponsata, e cominciò a prendere sopra me tanta sicurtade e tanta signoria per la vertù che li dava la mia imaginazione, che me convenia fare tutti li suoi piaceri compiutamente. Elli mi comandava molte volte che io cercasse per vedere questa angiola giovanissima; onde io ne la mia puerizia molte volte l'andai cercando, e vedèala di sì nobili e laudabili portamenti, che certo di lei si potea dire quella parola del poeta Omero: Ella non parea figliuola d'uomo mortale, ma di Deo. E avegna che la sua imagine, la quale continuamente meco stava, fosse baldanza d'Amore a segnoreggiare me, tuttavia era di sì nobilissima vertù, che nulla volta sofferse che Amore mi reggesse sanza lo fedele consiglio de la ragione in quelle cose là ove cotale consiglio fosse utile a udire. E però che soprastare a le passioni e atti di tanta gioventudine pare alcuno parlare fabuloso, mi partirò da esse; e trapassando molte cose, le quali si potrebbero trarre de l'esemplo onde nascono queste, verrò a quelle parole le quali sono scritte ne la mia memoria sotto maggiori paragrafi."

document.addEventListener("DOMContentLoaded", function() {
    var oPulsante = document.querySelector("#btnVer");
    var oTexto = document.querySelector("#texto");

    oPulsante.addEventListener("click", accion);

    console.log(oPulsante);

    function accion () {
        if (oPulsante.value=="ver más"){
            oPulsante.value = "ver menos";
            oTexto.innerHTML = TEXTO;
        }
        else {
            oPulsante.value = "ver más";
            oTexto.innerHTML = "";
        }
    }

}, false);

