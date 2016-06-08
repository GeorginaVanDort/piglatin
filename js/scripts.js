$(document).ready(function() {
    $("form#pig").submit(function(event){
      event.preventDefault();
      var userInput = $("#input").val();
      var translatedInput = pigLatin(userInput);
      // $("#result").hide();
      $("#result").text(translatedInput);
      // $("#result").show();
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
        var newPhrase = phraseToTranslate.slice(2) + phraseToTranslate.slice(0,2) + "ay" ;
        break;
    }   else if ( phraseToTranslate.charAt(3) === vowels.charAt(i) ) {
        var newPhrase = phraseToTranslate.slice(3) + phraseToTranslate.slice(0,3) + "ay" ;
        break;
    }
  }
  return newPhrase;
}
}
