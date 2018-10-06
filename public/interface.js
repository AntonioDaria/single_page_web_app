$(document).ready(function() {

    $('#View').click(function(){
      $.get("https://async-workshops-api.herokuapp.com/people", function(data) {
        var txt = ''
        data.forEach(function(person) {
          txt += person.name + " "
          $('#result').text(txt)
        })

      })

    })
});
