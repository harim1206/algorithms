const sort = {
  quickSort,
  mergeSort,
  bubbleSort,
  // insertionSort,
};

const unsortedArr = [
  1, 9, 5, 4, 6, 5, 100, 200, 150, 500, 1000, 212, 4, 2, 40, 132, 212,
];

// console.log(sort.quickSort(unsortedArr));
// console.log(sort.mergeSort(unsortedArr));
console.log(sort.bubbleSort(unsortedArr));

function quickSort(arr) {
  function doQuickSort(arr, start, end) {
    if (start >= end) return arr;
    const pivotIndex = partition(arr, start, end);
    if (pivotIndex > start) doQuickSort(arr, start, pivotIndex - 1);
    if (pivotIndex < end) doQuickSort(arr, pivotIndex + 1, end);
  }

  function partition(arr, start, end) {
    /*
      pivot index & i start at 0
      iterate through i
      if arr[i] is less than the pivot value, swap arr[pivotIndex] with arr[i] & increment pivotindex
      otherwise, do nothing and continue iteration

      after the loop is finished, swap arr[end] with arr[pivotIndex]
      retur pivotindex
    */
    const pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }

    [arr[end], arr[pivotIndex]] = [arr[pivotIndex], arr[end]];
    return pivotIndex;
  }

  doQuickSort(arr, 0, arr.length - 1);

  return arr;
}

function mergeSort(arr) {
  /*
    partition function that takes in two arrays, and combines in ascending order
    recursive function that breaks down and combines the sorted arrays
  */

  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2),
    leftArr = arr.slice(0, middle),
    rightArr = arr.slice(middle, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));

  function merge(left, right) {
    const arr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) arr.push(left.shift());
      else arr.push(right.shift());
    }

    while (left.length) arr.push(left.shift());
    while (right.length) arr.push(right.shift());

    return arr;
  }
}

function bubbleSort(arr) {
  /*
    Each iteration (i), swap the largest number to the end of the array by using a second iteration (j)
    Swapping is done by comparing element at j to element at j+1
  */

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

/*
function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  const pivotIndex = partition(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, start, end) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

const arr = [
  1, 9, 5, 4, 6, 5, 100, 200, 150, 500, 1000, 212, 4, 2, 40, 132, 212,
];
// quickSort(arr, 0, arr.length - 1);

*/
