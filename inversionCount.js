
const array = [38, 27, 24, 56, 12, 32, 16, 11, 15, 25, 29];
// const array = [1,3,5,2,4,6];

// mergesort
function mergeSort (obj) {
  /*
    obj: { arr: [], count: 0}
  */
  
  // base case
  if(obj.arr.length <= 1) {
    return obj;
  }

  const middle = Math.floor(obj.arr.length/2);
  const leftObj = {arr: obj.arr.slice(0, middle), count: obj.count}
  const rightObj = {arr: obj.arr.slice(middle), count: obj.count}

  return merge(mergeSort(leftObj), mergeSort(rightObj));
}

function merge(leftObj, rightObj) {
  const merged = [];
  let i = 0;
  let j = 0;
  let count = leftObj.count + rightObj.count;
  const left = leftObj.arr;
  const right = rightObj.arr;

  while(i < left.length && j < right.length) {
    // left [        ]        right [         ]
    // merged [             ]
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      /*
        if left [0.....7]
        length is 8
        if i = 2
        (length-1)-i

      */
      
      count += left.length - i
      merged.push(right[j]);
      j++;
    }
  }
  
  return  {
    arr: [...merged, ...left.slice(i), ...right.slice(j)], 
    count: count
  };
}

function init() {
  console.log(mergeSort({ arr: array, count: 0}))
}

module.exports = { init }