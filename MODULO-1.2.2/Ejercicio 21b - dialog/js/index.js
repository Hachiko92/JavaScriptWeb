$( function() {
    $( "#draggable" ).draggable();
    $( "#dialog" ).dialog({
      autoOpen: false
    });
    $( "#btnOpen" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );