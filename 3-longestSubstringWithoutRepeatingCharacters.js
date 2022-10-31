var lengthOfLongestSubstring = function (s) {
  let arr = s.split("");
  let l = 0,
    r = 0,
    max = 0;
  const set = new Set();

  while (r < arr.length) {
    // check if arr[r] is already in set
    while (set.has(arr[r])) {
      // remove the arr[l] from set
      set.delete(arr[l]);
      // increment l
      l++;
    }

    // add arr[r] into set
    set.add(arr[r]);
    // check for max
    max = Math.max(max, set.size);

    console.log("arr[r]: ", arr[r]);
    console.log("set: ", set);

    r++;
  }

  return max;
};

// console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring("qrsvbspk"));

/*
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    max = 0;
  let set = new Set();

  while (r < s.length) {
    if (!set.has(s.charAt(r))) {
      set.add(s.charAt(r));
      r++;
    } else {
      console.log("set: ", set);
      set = new Set();
      l = r;
    }
    max = Math.max(max, set.size);
    console.log("r: ", r);
  }

  return max;
};

// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));

*/
