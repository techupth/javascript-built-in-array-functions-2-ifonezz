function isPalindrome(string) {
  let arrayString = string.split("");
  let reverseArray = arrayString.reverse();
  let reverseString = reverseArray.join("");
  return string === reverseString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false