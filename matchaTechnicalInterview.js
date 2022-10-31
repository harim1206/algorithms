/*

'aaa bbb ccc ddd' => 'baa cbb dcc add' => 'bad cba dcb adc'
Shift first letter to position i - 1
Shift last letter to position i + 1


*/

function transformSentence(str) {
  const arr = str.split(' ');
  const first = new Array(arr.length);
  const second = new Array(arr.length);

  //Shift first letter to position i - 1
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      first[i] =
        arr[i + 1].charAt(0) +
        arr[i].slice(1, arr[i].length - 1) +
        arr[arr.length - 1].charAt(arr[arr.length - 1].length - 1);
    } else if (i === arr.length - 1) {
      first[i] =
        arr[0].charAt(0) +
        arr[i].slice(1, arr[i].length - 1) +
        arr[i - 1].charAt(arr[i - 1].length - 1);
    } else {
      first[i] =
        arr[i + 1].charAt(0) +
        arr[i].slice(1, arr[i].length - 1) +
        arr[i - 1].charAt(arr[i - 1].length - 1);
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (i === 0) {
  //     second[i] =
  //       first[i].slice(0, first[i].length - 1) +
  //       first[first.length - 1].charAt(first[first.length - 1].length - 1);
  //   } else {
  //     second[i] =
  //       first[i].slice(0, first[i].length - 1) +
  //       first[i - 1].charAt(first[i - 1].length - 1);
  //   }
  // }

  // console.log('second: ', second);

  console.log('first: ', first);
}

console.log(transformSentence('aaa bbb ccc ddd'));
