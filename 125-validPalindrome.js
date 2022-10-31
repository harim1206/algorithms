/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  let l = 0, r = s.length-1, arr = s.split("")

  while(l < r) {
    while(l < r && !isAlphaNumeric(arr[l])) l++
    while(l < r && !isAlphaNumeric(arr[r])) r--

    if(arr[l].toLowerCase() !== arr[r].toLowerCase()) return false
    l++
    r--
  }

  return true

  
  function isAlphaNumeric(char) {
    // char is a string of one character
    let code = char.charCodeAt(0) 
    return ( 
      'a'.charCodeAt(0) <= code && code <= 'z'.charCodeAt(0) 
      || 'A'.charCodeAt(0) <= code && code <= 'Z'.charCodeAt(0) 
      || '0'.charCodeAt(0) <= code && code <= '9'.charCodeAt(0)) 
  }
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))


/*

if str len = 5
0 - 4
middle is 2

if str len = 6
0 - 5
middle is 2 or 3

5/2 = 2.5 => lower => 2
6/2 = 3

1. find the two pointer locations
2. if length is odd, two pointers are =>
middle = Math.floor(str.length / 2)
left = middle - 1
right = middle + 1

if length is even =>
right = str.len/2
left = right - 1

3. iterate opposite directions to check equal

*/