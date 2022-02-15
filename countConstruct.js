// countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
// return true if target can be constructed from the wordbank

/*
  memo = {
    'suffix1': '',
    'suffix2': ''
  }
*/

function countConstruct(target, wordBank) {
  if(target === '') return true


  for(const word of wordBank) {
    
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)

      if(countConstruct(suffix, wordBank) === true) {
        return true
      }
    }
  }

  return false;


}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef']))
console.log(countConstruct('ab', ['ab', 'a', 'b']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeee', 'eeeeee']))
console.log(countConstruct('abcdef', ['abc', 'def']))






/*
function countConstruct(word, wordBank, memo = {}) {
  console.log('word: ', word)
  if(word.length === 0) return 1;
  if(memo[word]) return memo[word];
  let count = 0

  for(let i = 0; i < wordBank.length; i++) {
    if(word.indexOf(wordBank[i]) === 0 && word.length > 0) {
      let newWord = word.slice(wordBank[i].length)
      let numWaysForNewWord = countConstruct(newWord, wordBank, memo)
      
      count += numWaysForNewWord
      
    }
  }
  

  memo[word] = count
  return memo[word];

}

function init() {
  // console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef']))
  // console.log(countConstruct('ab', ['ab', 'a', 'b']))
  console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'eee', 'eeee', 'eeeeee']))
  // console.log(countConstruct('abcdef', ['abc', 'def']))
}

module.exports = { init }

*/