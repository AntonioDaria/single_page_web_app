$(document).ready(function() {

    $('#View').click(function(){
      $.ajax({
    				  method:'GET',
    				  url: 'https://async-workshops-api.herokuapp.com/people',
    				  dataType: 'json'
    	}).done(function(data){
    				  $.map(data, function(name, i){
    					       $('#result').append('<h3>'+name.name+'</h3><p>');
    				  });


    	});
    })
  });
