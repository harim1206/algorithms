var topKFrequent = function (nums, k) {
  const dict = {};
  const bucket = new Array(nums.length);
  const result = [];

  // create a tally of { num: freq}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    dict[num] ? dict[num]++ : (dict[num] = 1);
  }

  // create a bucket of bucket[freq] = [num1, num2]
  for (const key in dict) {
    const freq = dict[key];
    bucket[freq] ? bucket[freq].push(key) : (bucket[freq] = [key]);
  }

  // iterate through the bucket backwards to find the k largest freq nums
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (let j = 0; j < bucket[i].length; j++) {
        result.push(bucket[i][j]);
        if (result.length >= k) return result;
      }
    }
  }
};

console.log(topKFrequent(["a", "a", "a", "a", "b", "b", "b", "c"], 2));
