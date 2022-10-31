/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  /*
    two pointers, see if they add up to the number
    if the number is too large, we need a smaller number, which means iterate right down
    if the number is too small, we need a larger number, which means iterate left up
  */

  let leftIdx = 0;
  let rightIdx = numbers.length - 1;

  while (leftIdx < rightIdx) {
    let sum = numbers[leftIdx] + numbers[rightIdx];

    if (sum === target) {
      return [leftIdx + 1, rightIdx + 1];
    } else if (sum > target) {
      rightIdx--;
    } else if (sum < target) {
      leftIdx++;
    }
  }

  return [];

  //     let dict = {}

  //     for(let i = 0; i < numbers.length; i++) {
  //         let num = numbers[i]
  //         let comp = target-num

  //         // if comp exists in dict, the comp is in the arr
  //         if(dict[comp] >= 0) {
  //             return [Math.min(i+1, dict[comp]+1), Math.max(i+1, dict[comp]+1)]
  //         }

  //         if(!dict[num]) dict[num] = i
  //     }

  //     console.log('dict: ', dict)

  //     return []
};
