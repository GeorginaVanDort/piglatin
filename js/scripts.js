$(document).ready(function() {
  $("form#pig").submit(function(event){
    event.preventDefault();

  var words = $("#input").val().split([""[String.length]]);

  for (var i = 0; i < words.length; i++) {
    if (words[0] === "a" || "e" || "i" || "o" || "u" ) {
    result = words.concat("ay");
    console.log(result);
    break;
    }
    else {
      alert("false");
    }
  }



      // var result = pigLatin(words);

      $("#result").text(result);

  });
});
