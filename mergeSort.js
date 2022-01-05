
const array = [38, 27, 24, 56, 12, 32, 16, 11, 15, 25, 29];

/*
call stack
merge( mergeSort([38, 27, 24, 56, 12]), mergeSort([32, 16, 11, 15, 25, 29]) )
merge( mergeSort([38, 27]), mergeSort([24, 56, 12]) )
merge( mergeSort([38]), mergeSort([27]) ) 
merge( [38], [27] ) => return [27, 38]

merge( mergeSort([24]), mergeSort([56, 12]) )
merge( mergeSort([56]), mergeSort([12]) )
merge( [56], [12] ) => return [12, 56]
merge( [24], [12, 56] ) => return [12, 24, 56]

merge( [27, 38], [12, 24, 56] ) => return [12, 24, 27, 38, 56]

*/

// mergesort
function mergeSort (array) {
  
  // base case
  if(array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length/2);
  let leftArr = array.slice(0, middle)
  let rightArr = array.slice(middle)

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  console.log('merged: ', merged)

  return [...merged, ...left.slice(i), ...right.slice(j)];
}

function init() {
  console.log(mergeSort(array))
}

module.exports = { init }