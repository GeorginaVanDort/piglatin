$(document).ready(function() {
    $("form#pig").submit(function(event){
      event.preventDefault();
      var userInput = $("#input").val();
      var translatedInput = pigLatin(userInput);
      $("#result").append("<h3>" + translatedInput + "</h3>");
    });
});

var pigLatin = function(phraseToTranslate){
  var vowels = ("aeiou");
  for (var i = 0; i < vowels.length ; i++ ) {
    for (var j = 0; j < phraseToTranslate.length ; i++ ) {
      if ( phraseToTranslate.charAt(0) === vowels.charAt(i) ) {
        var newPhrase = phraseToTranslate + "ay";
        break;
      } else if ( phraseToTranslate.charAt(1) === vowels.charAt(i) ) {
        var newPhrase = phraseToTranslate.slice(1) + phraseToTranslate.charAt(0) + "ay" ;
        break;
      } else if ( phraseToTranslate.charAt(2) === vowels.charAt(i) ) {
        var newPhrase = phraseToTranslate.slice(2) + phraseToTranslate.charAt(0) + phraseToTranslate.charAt(1) +"ay" ;
        break;
    }
  }
  return newPhrase;
}
}
