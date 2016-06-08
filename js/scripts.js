



$(document).ready(function() {

  $("form#pig").submit(function(event){
    event.preventDefault();

    var year = ($("#input").val();
    var result = leapYear(year);

    $("#result").text(result);

  });
});
