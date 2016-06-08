$(document).ready(function() {

    $("form#pig").submit(function(event){
      event.preventDefault();
      var userInput = $("#input").val();
      // var result = pigLatin(userInput);

      $("#result").text(pigLatin);
  });
});

var piglatin = [];
var vowels = ("aeiou");

var makePigLatin = function(userInput){
  for ( i = 0; i < userInput.length ; i++ ) {
    for ( j = 0; j < vowels.length ; j++ ) {
      if ((userInput.chatAt(i) === vowels[j]) && (i===0 )) {
      pigLatin = userInput.concat("ay");
      } else {
        return false;
      }
    }
  }
}

// var translatedPhrase = pigLatin(userInput);



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
