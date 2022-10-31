/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = [];

  for (const num of set) {
    let seq = [];
    if (!set.has(num - 1)) {
      let temp = num;
      while (set.has(temp)) {
        seq.push(temp);
        temp++;
      }
      if (seq.length > ans.length) ans = seq;
    }
  }

  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
