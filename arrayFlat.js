function flat(arr, depth = 1) {
  /*
    - while depth is greater than 0 & the contents of the result array contain an array
    - create a result array
    - iterate through the array
      - if the element is an array, add the content of the array to result
      - if the element is not an array, add the element to the result
  */

  let queue = [...arr];

  while (depth > 0) {
    // one iteration
    let length = queue.length;
    while (length > 0) {
      const elem = queue.shift();
      if (Array.isArray(elem)) {
        queue.push(...elem);
      } else {
        queue.push(elem);
      }
      length--;
    }

    depth--;
    // check if there are any arrays in queue
    flag = queue.some((item) => Array.isArray(item));
    // check for depth
    if (depth === 0 || !flag) return queue;
  }
}

// console.log( flat([[1,2],[3]], 2) )
console.log(flat([[1, [2]], [[3]]], 2));

function flat(arr, depth = 1) {
  // your imeplementation here

  const result = [];

  for (let item of arr) {
    if (Array.isArray(item) && depth) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

// console.log( flat([[1,2],[3]], 2) )
console.log(flat([[[1]]], 1));
