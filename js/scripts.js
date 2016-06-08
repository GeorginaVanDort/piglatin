$(document).ready(function() {
    $("form#pig").submit(function(event){
      event.preventDefault();
      var userInput = $("#input").val();
      var translatedInput = pigLatin(userInput);
      $("#result").text(translatedInput);
    });
});

var pigLatin = function(phraseToTranslate){
  var vowels = ("aeiou");
  for (var i = 0; i < vowels.length ; i++ ) {
    for (var j = 0; j < phraseToTranslate.length ; i++ ) {
      if ( phraseToTranslate.charAt(0) === vowels.charAt(i) ) {
        var newPhrase = phraseToTranslate + "ay";
        console.log(newPhrase);
        break;
      } else if ( phraseToTranslate.charAt(1) === vowels.charAt(i) ) {
        var newPhrase = phraseToTranslate.slice(1) + phraseToTranslate.charAt(0) + "ay" ;
        console.log(newPhrase);
        break;
      }
      break;
    }
  }
  return newPhrase;
}
// var pigLatin = [ ];

// var makePigLatin = function(userInput){


// var translatedPhrase = pigLatin(userInput);

// }


      // return i;
      // debugger;
      // } else {
      // return false;
      // }

// var pigLatin = function(input){
//   for (var i = 0; i < words.length; i++) {
//     if (words[0] === "a" || "e" || "i" || "o" || "u" ) {
//     result = words.concat("ay");
//     console.log(result);
//     break;
//     }
//     else {
//       alert("false");
//     }
//   }
