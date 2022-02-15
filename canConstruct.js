// canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
// return true if target can be constructed from the wordbank

/*
  memo = {
    'suffix1': '',
    'suffix2': ''
  }
*/

function canConstruct(target, wordBank) {
  let table = Array(wordBank.length + 1).fill(false)
  table[0] = true

  for(let i=0; i <= target.length; i++) {
    if(table[i]) {
      for(let word of wordBank) {
        if(target.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }

  return table[target.length]
  

}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))


// function canConstruct(target, wordBank, memo = {}) {
//   if(target in memo) return memo[target]
//   if(target === '') return true

//   for(const word of wordBank) {

//     if(target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length)

//       if( canConstruct(suffix, wordBank) === true ) {
//         memo[target] = true
//         return true
//       }
//     }

//   }

//   memo[target] = false
//   return false;


// }

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeee', 'eeeeee']))
// console.log(canConstruct('abcdef', ['abc', 'defg']))