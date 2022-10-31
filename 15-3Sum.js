/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
var threeSum = function (arr) {
  //   one loop iterating over nums for the first element
  //   simultaneously, a left pointer at nums[i+1] & nums[nums.length-1]
  //   if nums[i] + nums[i+1] + nums[nums.length-1] > 0, iterate the right pointer to the left.
  //   if < 0, iterate the left pointer to the right.
  //   if no match on the loop, increment the left pointer, repeat the loop

  const output = new Set();
  const nums = arr.sort((a, b) => a - b);
  console.log("nums: ", nums);

  for (let i = 0; i < nums.length - 2; i++) {
    const first = i;
    let second = i + 1;
    let third = nums.length - 1;

    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // console.log("first: ", first);
    while (second < third) {
      if (nums[second] === nums[second - 1] || nums[second] === nums[first]) {
        second++;
      } else if (third !== nums.length - 1 && nums[third] === nums[third + 1]) {
        third--;
      } else {
        const sum = nums[first] + nums[second] + nums[third];

        // console.log("nums[first]: ", nums[first]);
        // console.log("nums[second]: ", nums[second]);
        // console.log("nums[third]: ", nums[third]);
        // console.log("first: ", first);
        // console.log("second: ", second);
        // console.log("third: ", third);
        // console.log("sum: ", sum);
        if (sum > 0) {
          third--;
        } else if (sum < 0) {
          second++;
        } else {
          output.add([nums[first], nums[second], nums[third]]);
          second++;
          third--;
        }
      }
    }
  }

  return [...output];
};

*/

/*
  - The first anchor item is going to iterate through the array.
  - Then I will use a two pointer for the remainder of the array.
  - In order to use two pointers, array has to be sorted first O(nlogn)
  - See if the two pointers and the anchor sum up to 0 if it's too large, move the right pointer down, vice versa

*/
var threeSum = function (arr) {
  arr = arr.sort();
  const result = [];
  console.log('arr : ', arr);

  for (let i = 0; i < arr.length - 2; i++) {
    let anchor = i,
      left = i + 1,
      right = arr.length - 1,
      sum = 0;

    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (left < right) {
      sum = arr[anchor] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[anchor], arr[left], arr[right]]);

        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) right--;
      else left++;
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
