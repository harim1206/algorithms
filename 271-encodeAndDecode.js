/*
  encode ['hello', 'wo3#rld', 'apple'] => "5#hello7#wo3#rld5#apple"
*/

function encode(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    const len = arr[i].length;

    result += `${len}#${arr[i]}`;
  }

  return result;
}

//"5#hello7#wo3#rld5#apple"
function decode(str) {
  const result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str.charAt(j) !== "#") {
      j++;
    }

    const len = parseInt(str.slice(i, j));
    const word = str.slice(j + 1, j + 1 + len);
    result.push(word);
    i = i + len + 2;
  }

  return result;
}

console.log(encode(["hello", "wo3#rld", "apple"]));
console.log(decode(encode(["hello", "wo3#rld", "apple"])));
