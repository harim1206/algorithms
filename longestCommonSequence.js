/*
//memoization
function lcs(str1, str2) {

  function recurse(i, j, memo = {}) {
    const key = i + ',' + j
    console.log('memo[key]: ', memo[key])
    if (memo[key]) return memo[key]
    if(!str1[i] || !str2[j]) return 0
    
    if(str1[i] === str2[j]) {
      memo[key] = 1 + recurse(i+1, j+1)
      return memo[key]
    }

    memo[key] = Math.max(recurse(i, j+1), recurse(i+1, j))
    return memo[key]
  }

  return recurse(0, 0)
  
}
*/


//tabulation
function lcs(str1, str2) {
  let table = new Array(str1.length + 1).fill()
              .map(() => new Array(str2.length + 1).fill(0))

  for(let i = 1; i < table.length; i++){
    for(let j = 1; j < table[i].length; j++) {
      if(str1[i-1] === str2[j-1]) {
        
        table[i][j] = 1 + table[i-1][j-1]
      } else {
        table[i][j] = Math.max(table[i][j-1], table[i-1][j])
      }
      console.log(`table[${i}][${j}]: `, table[i][j])
    }
  }

  return table[str1.length][str2.length]

}



// console.log(lcs('ace', 'abcde'))
console.log(lcs("pqhgxgdofcvmr", "hofubmnylkra"))
