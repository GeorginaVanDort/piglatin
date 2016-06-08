$(document).ready(function() {


    $("form#pig").submit(function(event){
      event.preventDefault();
      // var result = pigLatin(userInput);

      $("#result").text(pigLatin);


var pigLatin = [];
var vowels = ("aeiou");
var userInput = $("#input").val();

// var makePigLatin = function(userInput){
  for (var i = 0; i < vowels.length ; i++ ) {
    for (var j = 0; j < userInput.length ; i++ ) {
    if ( userInput.charAt(0) === vowels.charAt(i) ) {
    pigLatin = userInput + "ay";
    console.log(pigLatin);
    break;
    } else if ( userInput.charAt(1) === vowels.charAt(i) ) {
      pigLatin = userInput.slice(1) + userInput.charAt(0) + "ay" ;
      console.log(pigLatin);
      break;
    } break;
  }
}

});
});

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
