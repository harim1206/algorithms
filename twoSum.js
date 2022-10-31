/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
  https://www.geeksforgeeks.org/map-vs-object-in-javascript/
 for each number i in nums, see if hash[target-i] exists.
 
 Maps vs Objects -
 1. Maps allow you to use any data type as a key (even objects as keys themselves ), whereas Objects only allow strings as keys.
 2. "Besides the advantage of Maps preserving key types as well as being able to support things like objects as keys they are isolated from the side effects that objects much have. A Map is a pure hash, there's no confusion about trying to be an object at the same time." 
 3. In the map, the original order of elements is preserved - not true for objects.

*/

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
}

console.log(twoSum(nums, target));

function init() {
  console.log(twoSum(nums, target));
}

module.exports = { init };
