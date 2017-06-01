$( function() {
    
    $( "#btnMove" ).on( "click", function() {
      
        console.log("controlo")
        $("image").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });

    });
});