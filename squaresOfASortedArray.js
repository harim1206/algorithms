function squaresOfASortedArray(arr) {
// two pointers, one at the beginnging and one at the end, iterating towards the middle
// compare the absolute value, and insert the smaller one first to the answer array

  const result = new Array(arr.length).fill(null);
  let left = 0
  let right = result.length - 1


  for(let i = result.length - 1; i >= 0; i--) {

    // compare abs(arr[left]) and abs(arr[right])

    if(Math.abs(arr[left]) >= Math.abs(arr[right])) {
      result[i] = arr[left] * arr[left]
      left++
    } else {
      result[i] = arr[right] * arr[right]
      right--
    }

  }

  

  return result;

  


}

console.log(squaresOfASortedArray([-3, -2, -1, 4, 5, 6]))
