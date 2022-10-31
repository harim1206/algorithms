/*
  Input: s = "AABABBA", k = 2


  sliding window.
  keep a dict of letters and occurences.
  there is a letter with max occur.
  there is the rest.
  the window is valid as long as the count of rest is less than k.
  otherwise slide the left pointer.
*/
var characterReplacement = function (s, k) {
  const dict = {};
  let l = 0,
    r = 0;
  let maxVal = 0;

  while (r < s.length) {
    let char = s.charAt(r);

    //1. add the letter into the dictionary
    dict[char] ? dict[char]++ : (dict[char] = 1);

    if (dict[char] > maxVal) maxVal = dict[char];

    // if length of current string without max char count is greater than k,
    // l = 0 r = 4 length = 4 - 0 + 1
    if (r - l + 1 - maxVal > k) {
      dict[s.charAt(l)]--;
      l++;
    }

    r++;
  }

  console.log("dict: ", dict);
  console.log("l: ", l);
  console.log("r: ", r);

  // no plus one, because the right index is at the (end index + 1)
  return r - l;
};

// console.log(characterReplacement("AABABBA", 2));
// console.log(characterReplacement("ABAA", 0));
// console.log(characterReplacement("ABBAA", 1));
console.log(characterReplacement("BAAAB", 2));
// console.log(characterReplacement("ABCDEFG", 1));
// console.log(
//   characterReplacement(
//     "KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF",
//     4
//   )
// );
// console.log(characterReplacement("KRSCDCSONAJNHLBMDQGI", 4));
