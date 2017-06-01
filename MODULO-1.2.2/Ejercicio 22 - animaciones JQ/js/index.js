$( function() {
    
    $( "#btnMove" ).on( "click", function() {
      
      console.log("controlo")
      let image = $("#image");
      setInterval(function () {
        image.animate({top: '20px'}, 0.5, );
      },600);
      image.animate({bottom: '25px'}, 0.5 );
      console.log("controlllo")

      // no funciona... 
      image.animate({top: '20px'}, 0.5 );
      image.animate({bottom: '25px'}, 0.5 );
      image.animate({top: '20px'}, 0.5 );
      image.animate({bottom: '25px'}, 0.5 );
      image.animate({top: '20px'}, 0.5 );
      image.animate({bottom: '25px'}, 0.5 );
      image.animate({top: '20px'}, 0.5 );
      image.animate({bottom: '25px'}, 0.5 );
      image.animate({top: '20px'}, 0.5 );
      image.animate({bottom: '25px'}, 0.5 );
      image.animate({top: '20px'}, 0.5 );
      image.animate({bottom: '25px'}, 0.5 );

    });
});