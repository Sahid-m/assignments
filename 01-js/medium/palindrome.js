/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strr = str
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/[^\w\s]/g, "");

  for (let i = 0; i < strr.length; i++) {
    if (strr[i] == " ") {
      strr[i] == "";
    }
  }

  let rstr = "";

  for (let i = strr.length - 1; i >= 0; i--) {
    rstr += strr[i];
  }

  if (rstr === strr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
