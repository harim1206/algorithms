/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  const hashMapS = {}, hashMapT = {}
  let ans = true;

  s.split("").forEach(letter => {
    hashMapS[letter] 
    ? hashMapS[letter] += 1
    : hashMapS[letter] = 1
  })

  t.split("").forEach(letter => {
    hashMapT[letter] 
    ? hashMapT[letter] += 1
    : hashMapT[letter] = 1
  })

  // 1. check two object has the same number of keys
  if(Object.keys(hashMapS).length !== Object.keys(hashMapT).length) return false

  // 2. iterate through the keys and compare value
  Object.keys(hashMapS).forEach( key => {
    if(hashMapS[key] !== hashMapT[key]) ans = false
  })

  console.log('hashMapS: ', hashMapS)
  console.log('hashMapT: ', hashMapT)
  return ans


    
};

console.log(isAnagram('anagram', 'nagadram'))