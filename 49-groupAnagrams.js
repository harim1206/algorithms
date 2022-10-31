/**
 * @param {string[]} strs
 * @return {string[][]}
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
var groupAnagrams = function (strs) {
  /*
    dict = {
      "aet": ["ate", "eat", "tea"]

    }

  */

  const dict = {};

  // m operations
  for (let i = 0; i < strs.length; i++) {
    // n log n operations
    const sortedStr = strs[i].split("").sort().join("");
    dict[sortedStr]
      ? dict[sortedStr].push(strs[i])
      : (dict[sortedStr] = [strs[i]]);
  }

  return Object.values(dict);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
