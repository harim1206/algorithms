function wordBreak(s, wordDict) {
  if(s === "") return true;


  for(word of wordDict) {
    if(s.indexOf(word) >= 0) {
      let newStr = s.replace(word, '')
      if(wordBreak(newStr, wordDict) === true) return true
    }
    
  }

  return false;
}

// console.log(wordBreak('leetcode', ['leet', 'code']))
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))

