*For words that start with a vowel, add "ay" to the end.*
  Example Input: animal
  Example Output: animalay


*For words that have a vowel as the second letter (and not the first), move the first and second letter to the end and add "ay."*
  Example Input: dog
  Example Output: ogday


*For words that have a vowel as the third letter (and not the first two), move the first and second letter to the end and add "ay."*  
  Example Input: treat
  Example Output: eatray

*For words that have a vowel as the fourth letter (and not the first three), move the first three letter to the end and add "ay."*
  Example Input: string
  Example Output: ingstray

*For words that have a "qu":*
    -If the first and second two letters are "qu", bring them both to the end and add "ay."
    -If the second and third two letters are "qu", bring the first through the third to the end and add"ay."
    Example Input: queen
    Example Output: eenquay
    Example Input: squeal
    Example Output: ealsquay

*For words that start with "y", treat the "y" as a consonant.*

*For numbers and symbols alert user to enter a word containing only letters.*
  Example Input: Hi!
  Example Output: Please enter a word without numbers or symbols.
  Example Input: 14897@#%
  Example Output: Please enter a word without numbers or symbols.

*If user inputs standard punctuation at the end of the input, punctuation will remain*
  Example Input: Hello!
  Example Output: ellohay!

*If user enters a multiple  words are translated and returned in order.*
  Example Input: Hello how are you?
  Example Output: ellohay oway areay ouyay?

*If user enters multiple words it returns them with the first letter capitalized.*
  Example Input: Hello how are you?
  Example Output: Ellohay oway areay ouyay?
