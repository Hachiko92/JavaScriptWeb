/* ***** funciones ***** */

function main (){

    $(".hidden").hide();
    $("#question").click(
        function () {
            console.dir(this);
            if ($(this).attr('className') != "hidden"){
                $(this).next('.hidden').slideDown();
                $(this).addClass("hidden");
            }
            else{
                console.log("controllo1");
                $(this).next('.hidden').fadeOut();
                $(this).removeClass("hidden");
            }
        }
    );
}

$(main);