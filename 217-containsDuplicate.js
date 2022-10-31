// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
const arr = [1, 2, 3, 1]

function containsDuplicate(arr) {
  const map = new Map();

  for(let i=0; i<arr.length; i++) {
    if(map.has(arr[i])) return true;
    map.set(arr[i], 1);
  }

  return false;
}

function init() {
  console.log(containsDuplicate(arr));
} 

module.exports = { init }

/*

var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return (set.size < nums.length);
};

*/