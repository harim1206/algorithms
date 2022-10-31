const preferences = [
  ['A', 'B', 'C', 'D'],
  ['C', 'A', 'D', 'B'],
  ['D', 'B', 'A', 'C'],
];
function preferredRestaurant(arr) {
  /*
    1: [3, 1, 4, 2]
    arr.indexOf(3) = 0
    score = {
      '1': 0 + 1 + 2 = 3,
      '2': 1 + 3 + 1 = 6,
      '3': 2 + 0 + 3 = 5,
      '4': 3 + 2 + 0 = 5,
    }
  */
  let ans;
  const dict = {};

  arr.forEach((pref) => {
    for (let i = 0; i < pref.length; i++) {
      dict[pref[i]] ? (dict[pref[i]] += i) : (dict[pref[i]] = i);
    }
  });

  const minVal = Math.min(...Object.values(dict));
  const minKeys = Object.keys(dict).filter((key) => dict[key] === minVal);

  minKeys.length > 1 ? (ans = -1) : (ans = minKeys[0]);

  return ans;

  // console.log('Object.keys(dict): ', Object.keys(dict));
  // console.log('Object.values(dict): ', Object.values(dict));
  // console.log('Object.entries(dict): ', Object.entries(dict));
  // for (let key in dict) {
  //   console.log('key: ', key);
  // }
}

console.log('preferenes:', preferences);
console.log(
  'preferredRestaurant(preferences):',
  preferredRestaurant(preferences)
);
