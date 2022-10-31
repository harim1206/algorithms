/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    m;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    middle = nums[m];
    left = nums[l];
    right = nums[r];

    if (middle === target) {
      return m;
    }

    // check if the left side is sorted
    if (left <= middle) {
      if (left <= target && target <= middle) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target <= right && middle <= target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};

// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;

// const nums = [4, 5, 6, 7, 8, 1, 2, 3],
//   target = 8;

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));

function binarySearch(nums, target) {
  // write a binary search algorithm
  let left = 0,
    right = nums.length - 1,
    middle = 0;

  while (left < right) {
    middle = left + Math.floor((right - left) / 2);

    /*
      target is greater than middle 1 vs 5
      target is less than right => it's in right half
      
      target is greater than right => it's in left half
      search left half

      target is less than middle 


      target is less than middle
      [4, 5, 6, 0, 1, 2, 3]

      left is greater than middle => right is sorted
      left is smaller than middle => left is sorted

      right is greater than middle => right is sorted
      right is smaller than middle => left is sorted
      

    */

    // left side sorted
    if (nums[middle] > left) {
      if (nums[middle] > target) {
        right = middle - 1;
      } else {
        //middle is less than target
        left = middle + 1;
      }
    } else {
      [4, 5, 0, 1, 2, 3];
      // right side sorted
      if (nums[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4], 5));
