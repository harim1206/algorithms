/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //     two pointers start at the ends
  //     calculate the product of the square of the minimum of the two pointers
  //     keep global max
  //     iterate over every combination

  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let max = 0;

  while (leftIdx <= rightIdx) {
    let w = rightIdx - leftIdx;
    let h = Math.min(height[leftIdx], height[rightIdx]);
    let area = w * h;
    max = Math.max(max, area);

    height[leftIdx] > height[rightIdx] ? rightIdx-- : leftIdx++;
  }

  return max;
};
