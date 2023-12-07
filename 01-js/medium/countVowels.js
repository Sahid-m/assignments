/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let strr = str.toLowerCase().split(" ").join("");
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  let nofvowels = 0;

  for (let i = 0; i < strr.length; i++) {
    if (vowels.has(strr[i])) {
      nofvowels += 1;
    }
  }
  // Your code here
  return nofvowels;
}

module.exports = countVowels;
