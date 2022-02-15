// allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
// return true if target can be constructed from the wordbank

/*
  memo = {
    'suffix1': '',
    'suffix2': ''
  }
*/

// Tabulation
function allConstruct(target, wordBank) {
  const table = Array(target.length + 1)
  .fill()
  .map(()=> [])

  table[0] = [[]]
  console.log('table: ', table)

  for(let i=0; i <= target.length; i++) {
    for(let word of wordBank) {

      if(target.slice(i, i + word.length) === word ) {
        const newCombinations = table[i].map( subArray => [...subArray, word])
        table[i+word.length].push(...newCombinations)
      }
    }
  }

  return table[target.length]
}

// Memo
// function allConstruct(target, wordBank, memo = {}) {
//   if(target in memo) return memo[target]
//   if(target === '') return [[]]

//   const result = []

//   for(const word of wordBank) {
    
//     if(target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length)

//       let suffixWays = allConstruct(suffix, wordBank, memo) // [[a,b], [ab,c]]
//       suffixWays = suffixWays.map( way => [word, ...way])

//       result.push(...suffixWays)
//       console.log('result: ', result)

//     }
//   }

//   memo[target] = result
//   return memo[target];


// }

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef']))
// console.log(allConstruct('ab', ['a', 'b', 'ab']))
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeee', ['e', 'eee', 'eeee', 'eeeeee']))
// console.log(allConstruct('abcdef', ['abc', 'def']))
