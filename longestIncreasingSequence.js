function lis(nums) {
  let table = new Array(nums.length).fill(1);
  let ans = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] < nums[j]) {
        table[i] = Math.max(table[i], 1 + table[j]);
        if (table[i] > ans) ans = table[i];
      }
    }
  }
  console.log("table: ", table);

  return ans;
}

// console.log(lcs('ace', 'abcde'))
console.log(lis([10, 9, 2, 5, 3, 7, 101, 18]));
